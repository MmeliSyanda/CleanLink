import { useState, type FormEvent } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

type UserType = 'client' | 'cleaner';

const fieldClass =
  'mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-secondary outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10';
const labelClass = 'block text-sm font-semibold text-secondary';

export default function RegistrationForm() {
  const [userType, setUserType] = useState<UserType>('client');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'local'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (import.meta.env.VITE_NETLIFY_FORMS !== 'enabled') {
      setStatus('local');
      return;
    }
    setIsSubmitting(true);
    setStatus('idle');

    const values = Array.from(new FormData(event.currentTarget).entries()).map(
      ([key, value]) => [key, String(value)] as [string, string],
    );

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(values).toString(),
      });
      if (!response.ok) throw new Error('Form submission failed');
      setStatus('success');
      event.currentTarget.reset();
      setUserType('client');
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="get-started" className="relative scroll-mt-24 overflow-hidden bg-slate-50 py-24 sm:py-28">
      <div className="pointer-events-none absolute -left-28 top-12 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-secondary/5 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="pt-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-secondary">
            <ShieldCheck size={16} className="text-primary" />
            A trusted start for both sides
          </span>
          <h2 className="mt-6 max-w-xl text-4xl font-bold tracking-tight text-secondary sm:text-5xl">
            Find your place in <span className="text-primary">CleanLink.</span>
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-8 text-muted-foreground">
            Tell us a little about yourself. Whether you need a reliable cleaner or want to offer your services, our team will follow up with the next steps.
          </p>
          <div className="mt-8 flex items-start gap-3 text-sm leading-6 text-muted-foreground">
            <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-primary" />
            <p>We only ask for basic contact and service information here. Don’t include identity documents or banking details in this form.</p>
          </div>
        </div>

        <div className="rounded-3xl border border-white bg-white p-6 shadow-[0_24px_80px_rgba(27,54,112,0.10)] sm:p-9">
          {status === 'success' ? (
            <div className="py-12 text-center" role="status" data-testid="status-registration-success">
              <CheckCircle2 className="mx-auto h-14 w-14 text-primary" />
              <h3 className="mt-5 text-2xl font-bold text-secondary">Thanks for reaching out.</h3>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                Your details have been sent to CleanLink. We’ll be in touch about the next steps.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-7 font-semibold text-secondary underline decoration-primary underline-offset-4"
                data-testid="button-submit-another-registration"
              >
                Send another response
              </button>
            </div>
          ) : (
            <>
              <div className="mb-7">
                <h3 className="text-2xl font-bold text-secondary">Get started</h3>
                <p className="mt-2 text-sm text-muted-foreground">Share your details and we’ll help you take the next step.</p>
              </div>

              <div className="mb-7 grid grid-cols-2 gap-3 rounded-2xl bg-slate-50 p-1.5" role="group" aria-label="Choose your account type">
                {(['client', 'cleaner'] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setUserType(type)}
                    aria-pressed={userType === type}
                    className={`rounded-xl px-4 py-3 text-sm font-semibold capitalize transition ${
                      userType === type
                        ? 'bg-white text-secondary shadow-sm ring-1 ring-slate-100'
                        : 'text-slate-500 hover:text-secondary'
                    }`}
                    data-testid={`button-role-${type}`}
                  >
                    I’m a {type}
                  </button>
                ))}
              </div>

              <form
                name="cleanlink-registration"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-5"
                data-testid="form-cleanlink-registration"
              >
                <input type="hidden" name="form-name" value="cleanlink-registration" />
                <input type="hidden" name="user-type" value={userType} />
                <p className="hidden">
                  <label>Leave this empty: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
                </p>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className={labelClass}>
                    Full name *
                    <input className={fieldClass} name="full-name" autoComplete="name" required maxLength={100} placeholder="Your full name" data-testid="input-full-name" />
                  </label>
                  <label className={labelClass}>
                    Email address *
                    <input className={fieldClass} type="email" name="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" data-testid="input-registration-email" />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className={labelClass}>
                    Phone / WhatsApp *
                    <input className={fieldClass} type="tel" name="phone" autoComplete="tel" required maxLength={30} placeholder="+27 82 000 0000" data-testid="input-registration-phone" />
                  </label>
                  <label className={labelClass}>
                    City or suburb *
                    <input className={fieldClass} name="city" autoComplete="address-level2" required maxLength={100} placeholder="e.g. Durban North" data-testid="input-registration-city" />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className={labelClass}>
                    Province
                    <select className={fieldClass} name="province" defaultValue="KwaZulu-Natal" data-testid="select-registration-province">
                      <option>KwaZulu-Natal</option>
                      <option>Gauteng</option>
                      <option>Western Cape</option>
                      <option>Other</option>
                    </select>
                  </label>

                  {userType === 'client' ? (
                    <label className={labelClass}>
                      Cleaning service *
                      <select className={fieldClass} name="service" required defaultValue="" data-testid="select-client-service">
                        <option value="" disabled>Select a service</option>
                        <option>Domestic cleaning</option>
                        <option>Office cleaning</option>
                      </select>
                    </label>
                  ) : (
                    <label className={labelClass}>
                      Service you offer *
                      <select className={fieldClass} name="service" required defaultValue="" data-testid="select-cleaner-service">
                        <option value="" disabled>Select a service</option>
                        <option>Domestic cleaning</option>
                        <option>Office cleaning</option>
                        <option>Both</option>
                      </select>
                    </label>
                  )}
                </div>

                {userType === 'client' ? (
                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className={labelClass}>
                        Property type
                        <select className={fieldClass} name="property-type" defaultValue="" data-testid="select-property-type">
                          <option value="">Select if known</option>
                          <option>House</option>
                          <option>Apartment</option>
                          <option>Office / business</option>
                          <option>Other</option>
                        </select>
                      </label>
                      <label className={labelClass}>
                        Preferred timing
                        <select className={fieldClass} name="preferred-time" defaultValue="" data-testid="select-preferred-time">
                          <option value="">Select if known</option>
                          <option>As soon as possible</option>
                          <option>Weekdays</option>
                          <option>Weekends</option>
                          <option>Flexible</option>
                        </select>
                      </label>
                    </div>
                ) : (
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className={labelClass}>
                      Cleaning experience
                      <select className={fieldClass} name="experience" defaultValue="" data-testid="select-cleaner-experience">
                        <option value="">Select experience</option>
                        <option>New to cleaning work</option>
                        <option>Under 1 year</option>
                        <option>1–3 years</option>
                        <option>4+ years</option>
                      </select>
                    </label>
                    <label className={labelClass}>
                      Expected hourly rate (R)
                      <input className={fieldClass} type="number" name="hourly-rate" min="0" step="10" placeholder="e.g. 120" data-testid="input-cleaner-rate" />
                    </label>
                    <label className={`${labelClass} sm:col-span-2`}>
                      Availability
                      <select className={fieldClass} name="availability" defaultValue="" data-testid="select-cleaner-availability">
                        <option value="">Select availability</option>
                        <option>Weekdays</option>
                        <option>Weekends</option>
                        <option>Flexible</option>
                      </select>
                    </label>
                  </div>
                )}

                <label className={labelClass}>
                  Anything else you’d like us to know?
                  <textarea className={`${fieldClass} min-h-28 resize-y`} name="message" rows={4} maxLength={1000} placeholder={userType === 'client' ? 'Share your preferred days or any service details.' : 'Tell us about your availability or cleaning experience.'} data-testid="textarea-registration-message" />
                </label>

                <label className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                  <input className="mt-1 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" name="contact-consent" value="yes" required data-testid="checkbox-contact-consent" />
                  <span>I agree that CleanLink may use these details to contact me about this request. *</span>
                </label>

                {status === 'error' && (
                  <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert" data-testid="status-registration-error">
                    We couldn’t send your details. Please check your connection and try again. If you’re testing locally, submissions become available after the site is deployed to Netlify and form detection is enabled.
                  </p>
                )}
                {status === 'local' && (
                  <p className="rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-800" role="status" data-testid="status-netlify-only">
                    Submissions are enabled on the deployed Netlify site. This local preview won’t send your details.
                  </p>
                )}

                <button
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-bold text-white shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
                  type="submit"
                  disabled={isSubmitting}
                  data-testid="button-submit-registration"
                >
                  {isSubmitting ? 'Sending…' : 'Send my details'}
                  {!isSubmitting && <ArrowRight size={18} />}
                </button>
                <p className="text-center text-xs text-muted-foreground">We’ll use your details only to follow up on your CleanLink enquiry.</p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
