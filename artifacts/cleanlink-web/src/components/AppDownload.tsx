import { Download, Smartphone } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

const androidInstallUrl =
  'https://expo.dev/accounts/qwabethobekisiw/projects/cleanlink/builds/36b5f00e-e1dd-4ca8-8435-2f10ce82d93f';

export default function AppDownload() {
  return (
    <section id="download-app" className="bg-slate-50 px-6 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 rounded-3xl border border-slate-100 bg-white p-7 shadow-[0_20px_70px_rgba(27,54,112,0.08)] sm:p-12 lg:grid-cols-[1fr_auto]">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-secondary">
            <Smartphone size={16} className="text-primary" />
            CleanLink for Android
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Get the CleanLink app
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Scan the code with your phone camera to open the Android install page, then tap
            {' '}<span className="font-semibold text-secondary">Install</span>.
          </p>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Android only. This preview build is shared through Expo and may prompt you to allow
            installation from your browser.
          </p>
          <a
            href={androidInstallUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary/90"
            data-testid="link-android-install"
          >
            <Download size={18} />
            Open Android install page
          </a>
        </div>

        <div className="mx-auto rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <QRCodeSVG
            value={androidInstallUrl}
            size={208}
            level="H"
            includeMargin
            title="Scan to open the CleanLink Android install page"
            className="h-auto max-w-full"
            data-testid="qr-android-install"
          />
          <p className="mt-2 text-center text-xs font-medium text-muted-foreground">
            Scan to install
          </p>
        </div>
      </div>
    </section>
  );
}
