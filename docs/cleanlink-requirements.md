# CleanLink — System Requirements Document

**Version:** 1.0  
**Date:** July 28, 2026  
**Status:** Draft  
**Scope:** KwaZulu-Natal (KZN) — Phase 1 Launch

---

## 1. Product Overview

**CleanLink** is a South African mobile platform that connects verified, background-checked cleaners with households and businesses seeking cleaning services. The platform formalizes and digitalizes the domestic and commercial cleaning industry by providing verified worker profiles, secure payments, transparent pricing, and digital booking management.

### 1.1 Mission
To formalize and digitalize the domestic and commercial cleaning industry through a trusted platform powered by secure payments, verified worker profiles, and transparent pricing.

### 1.2 Phase 1 Geographic Scope
- **Active Region:** KwaZulu-Natal (KZN) only
- **Future Expansion:** Johannesburg, Cape Town (Phase 2+)

---

## 2. User Roles

### 2.1 Cleaner
A cleaning professional seeking work opportunities through the platform.

### 2.2 Client (Employer)
A household, business, or individual seeking cleaning services.

### 2.3 Platform Administrator
Internal CleanLink staff responsible for verifying cleaners, managing disputes, overseeing payments, and monitoring platform activity.

---

## 3. Functional Requirements

### 3.1 Onboarding & Registration

#### 3.1.1 Cleaner Registration
| # | Requirement |
|---|-------------|
| CR-01 | Cleaner must provide full legal name |
| CR-02 | Cleaner must provide South African mobile number (verified via OTP) |
| CR-03 | Cleaner must provide email address |
| CR-04 | Cleaner must provide physical address (within KZN) |
| CR-05 | Cleaner must provide South African ID number |
| CR-06 | Cleaner must upload a clear profile photo |
| CR-07 | Cleaner must upload criminal background check document (PDF or image) |
| CR-08 | Cleaner must specify service types offered (Domestic / Office / Both) |
| CR-09 | Cleaner must specify availability (days of week, time slots) |
| CR-10 | Cleaner must set their hourly or daily rate |
| CR-11 | Cleaner must pay the annual subscription fee of R100 before their profile goes live |
| CR-12 | Cleaner account remains in "Pending Verification" state until admin approves criminal check |
| CR-13 | Cleaner must accept platform Terms & Conditions and Privacy Policy |

#### 3.1.2 Client Registration
| # | Requirement |
|---|-------------|
| CL-01 | Client must provide full name |
| CL-02 | Client must provide South African mobile number (verified via OTP) |
| CL-03 | Client must provide email address |
| CL-04 | Client must provide service address (within KZN) — used for distance-based matching |
| CL-05 | Client must specify property type (Residential / Office / Airbnb / Other) |
| CL-06 | Client must accept platform Terms & Conditions and Privacy Policy |
| CL-07 | Client account is active immediately upon email/OTP verification |

#### 3.1.3 Authentication
| # | Requirement |
|---|-------------|
| AU-01 | OTP-based mobile number verification for all users |
| AU-02 | Email verification link sent on registration |
| AU-03 | Password-based login with forgot-password reset flow |
| AU-04 | Session management with secure tokens |
| AU-05 | Separate login flows for Cleaner, Client, and Admin |

---

### 3.2 Cleaner Profile & Verification

| # | Requirement |
|---|-------------|
| VP-01 | Cleaner profile displays: name, photo, verified badge, rating, number of completed jobs, services offered, availability, and rate |
| VP-02 | Criminal background check status is shown as: Pending / Verified / Rejected |
| VP-03 | Admin can approve or reject a criminal check document with a reason |
| VP-04 | Rejected cleaners are notified and given the option to re-upload |
| VP-05 | Verified cleaners display a green "Background Checked" badge on their profile |
| VP-06 | Cleaner can update availability calendar at any time |
| VP-07 | Cleaner can update their service rate |
| VP-08 | Cleaner can update their profile photo and bio |
| VP-09 | Cleaner annual subscription expires after 12 months; renewal reminder is sent 30 days before expiry |
| VP-10 | Unrenewed cleaner profiles are automatically hidden from search until subscription is renewed |

---

### 3.3 Discovery & Search (Client-Facing)

| # | Requirement |
|---|-------------|
| DS-01 | Clients can search for cleaners by service type (Domestic / Office) |
| DS-02 | Results are filtered to cleaners within KZN only |
| DS-03 | Distance-based sorting: cleaners closer to the client's service address are ranked higher |
| DS-04 | Clients can filter by: availability date/time, minimum rating, price range |
| DS-05 | Each cleaner card in search results shows: name, photo, verified badge, rating, rate, distance |
| DS-06 | Client can tap a cleaner to view their full profile |
| DS-07 | Only cleaners with "Verified" status are shown in search results |

---

### 3.4 Booking System

| # | Requirement |
|---|-------------|
| BK-01 | Client can request a booking with a specific cleaner for a chosen date and time |
| BK-02 | Booking request includes: service type, date, start time, estimated duration, service address, and special instructions |
| BK-03 | Cleaner receives a push/in-app notification of the booking request |
| BK-04 | Cleaner can Accept or Decline a booking request |
| BK-05 | If declined, client is notified and can search for another cleaner |
| BK-06 | Accepted booking moves to "Awaiting Payment" status |
| BK-07 | Booking is only confirmed once payment is received/verified |
| BK-08 | Confirmed booking appears on both cleaner's and client's calendars |
| BK-09 | Client can cancel a booking (cancellation policy TBD by CleanLink) |
| BK-10 | Cleaner can mark a booking as "In Progress" when they arrive |
| BK-11 | Cleaner can mark a booking as "Completed" when done |
| BK-12 | Client receives notification when cleaner marks job complete |
| BK-13 | Client can dispute a completion if unsatisfied |
| BK-14 | Booking history is accessible to both cleaner and client |
| BK-15 | Automated booking reminders sent 24 hours and 1 hour before scheduled time |

#### 3.4.1 Booking Status Flow
```
Requested → Accepted → Awaiting Payment → Confirmed → In Progress → Completed
                ↓                                                        ↓
            Declined                                                  Disputed
```

---

### 3.5 Payment System

#### 3.5.1 Payment Methods
| # | Requirement |
|---|-------------|
| PM-01 | **Manual EFT / Bank Deposit:** Client makes a bank transfer and uploads proof of payment (image or PDF) within the platform |
| PM-02 | **Third-Party Payment Gateway:** Integration with a South African payment gateway (e.g. PayFast or Yoco) for card payments |
| PM-03 | Both payment methods must be available to clients at checkout |

#### 3.5.2 Manual EFT Flow
| # | Requirement |
|---|-------------|
| ME-01 | Client selects "Manual EFT" at checkout |
| ME-02 | Platform displays CleanLink's bank account details |
| ME-03 | Client uploads a proof-of-payment image or PDF within the platform |
| ME-04 | Admin receives notification of uploaded proof of payment |
| ME-05 | Admin approves or rejects the proof of payment |
| ME-06 | On approval, booking status updates to "Confirmed" and both parties are notified |
| ME-07 | Proof-of-payment image is stored securely and accessible to admin only |

#### 3.5.3 Third-Party Gateway Flow
| # | Requirement |
|---|-------------|
| TG-01 | Client selects card/online payment at checkout |
| TG-02 | Client is redirected to or shown the payment gateway interface |
| TG-03 | On successful payment, booking is automatically confirmed |
| TG-04 | On failed payment, client is notified and can retry |
| TG-05 | Payment receipts are generated and accessible in booking history |

#### 3.5.4 Cleaner Payouts
| # | Requirement |
|---|-------------|
| PO-01 | Cleaner provides bank account details during registration |
| PO-02 | Platform deducts commission before paying out to cleaner |
| PO-03 | Payout is triggered after booking is marked "Completed" and dispute window has passed |
| PO-04 | Payout history is visible to the cleaner in their dashboard |
| PO-05 | Cleaner receives notification when a payout is processed |

#### 3.5.5 Platform Revenue
| # | Requirement |
|---|-------------|
| RV-01 | Annual cleaner subscription: **R100 per cleaner per year** |
| RV-02 | Commission per confirmed booking (percentage TBD by CleanLink — configurable by admin) |
| RV-03 | Commission is automatically deducted from the booking total before payout |

---

### 3.6 Ratings & Reviews

| # | Requirement |
|---|-------------|
| RR-01 | After a booking is marked "Completed", client is prompted to rate the cleaner (1–5 stars) |
| RR-02 | Client can leave a written review (optional) |
| RR-03 | Cleaner can respond to a review |
| RR-04 | Reviews are publicly visible on the cleaner's profile |
| RR-05 | Cleaner's average rating is calculated from all verified reviews |
| RR-06 | Reviews can only be left by verified clients who completed a booking with that cleaner |
| RR-07 | Admin can remove reviews that violate community guidelines |

---

### 3.7 Notifications

| # | Requirement |
|---|-------------|
| NT-01 | Push notifications for mobile app |
| NT-02 | In-app notifications (notification bell/feed) |
| NT-03 | SMS notifications for critical events (booking confirmed, payment received) |
| NT-04 | Email notifications for registration, receipts, account changes |

**Notification Triggers:**
- New booking request (Cleaner)
- Booking accepted / declined (Client)
- Payment proof uploaded (Admin)
- Payment approved / rejected (Client)
- Booking confirmed (Both)
- Booking reminder 24h & 1h before (Both)
- Job started / completed (Both)
- New review received (Cleaner)
- Subscription expiring in 30 days (Cleaner)
- Subscription expired (Cleaner)
- Payout processed (Cleaner)

---

### 3.8 Messaging / In-App Communication

| # | Requirement |
|---|-------------|
| MS-01 | Clients and cleaners can message each other within the platform after a booking is accepted |
| MS-02 | Messages are stored and accessible for the duration of the booking |
| MS-03 | Admin can view messages in case of a dispute |
| MS-04 | No direct phone number sharing is enforced before booking confirmation |

---

### 3.9 Admin Panel

| # | Requirement |
|---|-------------|
| AD-01 | Secure web-based admin dashboard (separate from client/cleaner app) |
| AD-02 | Dashboard overview: total users, active bookings, revenue, pending verifications |
| AD-03 | View and manage all cleaner registrations and verification statuses |
| AD-04 | Approve / Reject criminal background check documents |
| AD-05 | View and approve / reject manual EFT proof-of-payment uploads |
| AD-06 | View all bookings with status filters |
| AD-07 | View all transactions and commission records |
| AD-08 | Manage cleaner subscriptions (activate, deactivate, renew) |
| AD-09 | Handle disputes between clients and cleaners |
| AD-10 | Remove reviews or users that violate platform policies |
| AD-11 | Configure platform commission rate |
| AD-12 | Broadcast announcements to all users or a user segment |
| AD-13 | Export reports (bookings, revenue, user registrations) as CSV |

---

## 4. Non-Functional Requirements

### 4.1 Performance
| # | Requirement |
|---|-------------|
| NF-01 | Search results must load within 3 seconds under normal network conditions |
| NF-02 | Booking confirmation must be processed within 5 seconds of payment approval |
| NF-03 | Application must support at least 500 concurrent users at Phase 1 launch |

### 4.2 Security
| # | Requirement |
|---|-------------|
| NF-04 | All data in transit must use HTTPS/TLS encryption |
| NF-05 | Sensitive data at rest (ID numbers, bank details) must be encrypted |
| NF-06 | Proof-of-payment images are accessible only to the admin and the uploading client |
| NF-07 | Criminal check documents are accessible only to admin |
| NF-08 | Passwords are hashed using a secure algorithm (bcrypt or Argon2) |
| NF-09 | Rate limiting on authentication endpoints to prevent brute-force attacks |
| NF-10 | POPIA (Protection of Personal Information Act) compliance for all user data |

### 4.3 Reliability
| # | Requirement |
|---|-------------|
| NF-11 | Platform target uptime: 99.5% |
| NF-12 | Database backups must run daily |
| NF-13 | Payment webhook failures must be retried automatically up to 3 times |

### 4.4 Usability
| # | Requirement |
|---|-------------|
| NF-14 | Mobile app must support Android 8.0+ and iOS 14+ |
| NF-15 | UI must be accessible on low-bandwidth connections (optimised assets) |
| NF-16 | App must support English (Phase 1); Zulu language support to be considered in Phase 2 |

---

## 5. Data Models (High-Level)

### 5.1 User
- `id`, `role` (cleaner / client / admin), `full_name`, `email`, `phone`, `password_hash`, `profile_photo_url`, `address`, `city`, `province`, `status` (active / suspended), `created_at`

### 5.2 Cleaner Profile
- `user_id`, `id_number`, `service_types` (domestic / office / both), `hourly_rate`, `daily_rate`, `bio`, `availability` (JSON — days & time slots), `verification_status` (pending / verified / rejected), `criminal_check_url`, `criminal_check_reviewed_at`, `subscription_expires_at`, `average_rating`, `total_jobs`, `bank_name`, `bank_account_number`, `bank_account_type`

### 5.3 Client Profile
- `user_id`, `property_type` (residential / office / airbnb / other), `service_address`, `latitude`, `longitude`

### 5.4 Booking
- `id`, `client_id`, `cleaner_id`, `service_type`, `scheduled_date`, `start_time`, `duration_hours`, `service_address`, `special_instructions`, `total_amount`, `commission_amount`, `cleaner_payout`, `status` (requested / accepted / declined / awaiting_payment / confirmed / in_progress / completed / disputed / cancelled), `created_at`, `updated_at`

### 5.5 Payment
- `id`, `booking_id`, `amount`, `method` (eft / gateway), `status` (pending / proof_uploaded / approved / rejected / refunded), `proof_url`, `gateway_reference`, `paid_at`, `approved_at`, `approved_by`

### 5.6 Review
- `id`, `booking_id`, `client_id`, `cleaner_id`, `rating` (1–5), `comment`, `cleaner_response`, `created_at`, `is_visible`

### 5.7 Notification
- `id`, `user_id`, `title`, `body`, `type`, `is_read`, `created_at`, `related_entity_id`, `related_entity_type`

### 5.8 Message
- `id`, `booking_id`, `sender_id`, `body`, `created_at`, `is_read`

### 5.9 Subscription
- `id`, `cleaner_id`, `amount` (R100), `payment_method`, `status` (active / expired / cancelled), `started_at`, `expires_at`

---

## 6. System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        CleanLink Platform                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│   ┌──────────────┐   ┌──────────────┐   ┌──────────────────┐    │
│   │  Mobile App  │   │  Mobile App  │   │   Admin Web App  │    │
│   │  (Cleaner)   │   │   (Client)   │   │   (Browser)      │    │
│   │  Expo/RN     │   │  Expo/RN     │   │   React          │    │
│   └──────┬───────┘   └──────┬───────┘   └────────┬─────────┘    │
│          │                  │                     │              │
│          └──────────────────┴─────────────────────┘             │
│                             │                                    │
│                      ┌──────▼──────┐                            │
│                      │  REST API   │                            │
│                      │  (Express)  │                            │
│                      └──────┬──────┘                            │
│                             │                                    │
│        ┌────────────────────┼──────────────────┐                │
│        │                    │                  │                 │
│  ┌─────▼──────┐   ┌─────────▼──────┐   ┌──────▼──────┐         │
│  │ PostgreSQL │   │  File Storage  │   │  Payment    │         │
│  │ (Drizzle)  │   │  (Proof docs,  │   │  Gateway    │         │
│  │            │   │   photos)      │   │  (PayFast/  │         │
│  └────────────┘   └────────────────┘   │   Yoco)     │         │
│                                         └─────────────┘         │
└─────────────────────────────────────────────────────────────────┘
```

---

## 7. API Endpoint Groups (High-Level)

| Group | Endpoints |
|-------|-----------|
| **Auth** | Register (cleaner/client), Login, OTP verify, Logout, Reset password |
| **Cleaners** | Get profile, Update profile, Upload criminal check, Get availability, Update availability |
| **Clients** | Get profile, Update profile |
| **Search** | Search cleaners (filters: service type, date, distance, rating, price) |
| **Bookings** | Create, Get, Accept/Decline, Cancel, Mark in-progress, Mark complete, List |
| **Payments** | Initiate payment, Upload EFT proof, Approve/Reject proof, Gateway webhook |
| **Reviews** | Create review, Get cleaner reviews, Respond to review |
| **Messages** | Send message, Get conversation |
| **Notifications** | Get notifications, Mark as read |
| **Subscriptions** | Initiate subscription payment, Get subscription status |
| **Admin** | Dashboard stats, Manage users, Verify documents, Approve payments, Manage disputes, Reports |

---

## 8. Third-Party Integrations

| Integration | Purpose |
|-------------|---------|
| **Payment Gateway** (PayFast / Yoco) | Online card payments for bookings and subscriptions |
| **SMS Gateway** (Twilio / BulkSMS SA) | OTP delivery and critical booking SMS alerts |
| **Push Notifications** (Expo Push / Firebase FCM) | In-app push notifications for mobile |
| **File/Object Storage** (AWS S3 / Replit Object Storage) | Store criminal check documents, proof-of-payment images, profile photos |
| **Maps / Geolocation** (Google Maps SDK) | Distance-based cleaner matching and address validation in KZN |
| **Email** (SendGrid / Nodemailer) | Transactional emails (registration, receipts, reminders) |

---

## 9. Compliance & Legal

| # | Requirement |
|---|-------------|
| CO-01 | Platform must comply with **POPIA** (Protection of Personal Information Act) |
| CO-02 | Privacy Policy and Terms & Conditions must be accepted at registration |
| CO-03 | Criminal check documents must be stored securely and not shared beyond admin review |
| CO-04 | Users must have the right to request deletion of their data (POPIA right to erasure) |
| CO-05 | Platform must display VAT-inclusive pricing where applicable |
| CO-06 | Subscription and booking receipts must be issued as proof of transaction |

---

## 10. Phase Roadmap

### Phase 1 — KZN Launch (Current Scope)
- Cleaner & Client registration with verification
- Background check upload & admin verification
- Booking system (request → confirm → complete)
- Manual EFT payment with proof upload
- Third-party payment gateway
- Ratings & reviews
- Admin panel (verifications, payments, bookings)
- Push + email notifications

### Phase 2 — Expansion
- Johannesburg rollout
- Zulu language support
- Recurring/scheduled bookings (weekly, monthly)
- In-app messaging improvements
- Cleaner background check integration with a third-party provider (automated)
- Referral programme

### Phase 3 — Scale
- Cape Town rollout
- National coverage
- Airbnb / property management API integrations
- Advanced analytics for cleaners (earnings dashboard)
- Subscription tiers for clients

---

## 11. Open Questions for CleanLink Team

| # | Question |
|---|----------|
| OQ-01 | What is the platform commission percentage per booking? |
| OQ-02 | What is the cancellation policy — is there a fee for late cancellations? |
| OQ-03 | What South African bank account will clients use for manual EFT? |
| OQ-04 | Which payment gateway is preferred — PayFast or Yoco? |
| OQ-05 | How long is the post-completion dispute window before payout is released to cleaner? |
| OQ-06 | Will criminal background checks be verified manually by CleanLink staff, or via a third-party bureau? |
| OQ-07 | Are cleaners employees or independent contractors? (affects tax/legal requirements) |
| OQ-08 | Will the platform display cleaner rates or does CleanLink set a standard rate? |
