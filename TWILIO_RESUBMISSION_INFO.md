# Twilio Toll-Free Verification Resubmission

**Date:** January 16, 2025
**Phone Number:** +1 (844) 976-0641
**Company:** Ace-Silicon LLC
**Service:** Peapod Hotels

---

## Rejection Reasons (RESOLVED)

### ❌ Original Issues:
- **30489:** Website Must Be Established and Active
- **30509:** Opt-In URL Not Accessible

### ✅ Resolution:
- Created official website at www.peapodhotels.com
- All pages now live and accessible
- SMS opt-in documentation complete

---

## URLs to Provide to Twilio

### Business Website:
```
https://www.peapodhotels.com
```

### SMS Opt-In Information (CRITICAL):
```
https://www.peapodhotels.com/sms-terms.html
```

### Terms of Service:
```
https://www.peapodhotels.com/terms.html
```

### Privacy Policy:
```
https://www.peapodhotels.com/privacy.html
```

---

## How to Resubmit

1. **Log in to Twilio Console:**
   https://console.twilio.com/

2. **Navigate to:**
   Phone Numbers → Regulatory Compliance → Toll-Free Verification

3. **Find Request for:** +1 (844) 976-0641

4. **Click "Edit" or "Resubmit"**

5. **Update These Fields:**
   - **Business Website:** `https://www.peapodhotels.com`
   - **Opt-In Type:** Website
   - **Opt-In URL:** `https://www.peapodhotels.com/sms-terms.html`
   - **Message Sample:** (Use example below)

6. **Save and Resubmit**

---

## Message Sample for Twilio

**Example SMS Message to Show:**

```
Hi! You have a new booking confirmation from Peapod Hotels.

Booking #12345
Check-in: Jan 20, 2025
Check-out: Jan 22, 2025
Property: Sunset Beach House

Total: $250.00 (paid)

Questions? Reply or call us.

Reply STOP to unsubscribe
Reply HELP for support
```

**Message Categories:**
- Booking confirmations
- Check-in reminders
- Host-guest communications
- Account security alerts
- Payment receipts

**Opt-Out:**
Reply STOP to any message or visit app settings

**Opt-In Method:**
Users provide phone number during registration and can enable SMS in profile settings. Opt-in is confirmed via initial SMS.

---

## Business Information

**Company Legal Name:** Ace-Silicon LLC

**Business Type:** Travel & Hospitality Marketplace

**Service Description:**
Peapod Hotels is a student-friendly travel marketplace connecting guests with verified accommodation hosts. We facilitate bookings, payments, and communication between travelers and property owners.

**Use Case:** Two-way conversational SMS
- Transactional: Booking confirmations, check-in reminders, payment receipts
- Informational: Host-guest messages, account updates
- Customer Care: Support responses, issue resolution

**Message Volume:**
- Estimated: 1,000-5,000 messages per month
- Peak: During academic breaks and holidays

**Target Audience:**
- Primary: College students (18-25 years)
- Secondary: Young professionals, budget travelers

---

## Verification Checklist

Before resubmitting, verify:
- [ ] Website is live at www.peapodhotels.com
- [ ] HTTPS is enabled (green lock icon)
- [ ] Homepage loads with company information
- [ ] SMS Terms page loads at /sms-terms.html
- [ ] Terms of Service accessible
- [ ] Privacy Policy accessible
- [ ] All pages mention:
  - Company name: Ace-Silicon LLC
  - Phone: +1 (844) 976-0641
  - Email: support@peapodhotels.com
- [ ] SMS Terms page includes:
  - How to opt-in
  - What messages they'll receive
  - Message frequency
  - How to opt-out (STOP, HELP)
  - Standard rates disclaimer

---

## DNS Verification (For Reference)

**A Records (apex domain):**
```
Type: A
Host: @
Values:
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
```

**CNAME Record (www subdomain):**
```
Type: CNAME
Host: www
Value: czwang2023.github.io.
```

---

## Timeline

1. **DNS Propagation:** 5-60 minutes (IN PROGRESS)
2. **HTTPS Certificate:** 1-24 hours after DNS verified
3. **Twilio Resubmission:** Submit once HTTPS is enabled
4. **Twilio Review:** 3-5 business days (prioritized queue - 7 day window)

---

## Contact Information

**For Website Issues:**
- GitHub: https://github.com/czwang2023/peapodhotels-website
- Support: support@peapodhotels.com

**For Twilio Support:**
- Help Center: https://support.twilio.com/
- Phone: Check Twilio console for support number

---

## Notes

- Resubmit within 7 days to stay in prioritized queue
- After 7 days, submission "expires" but can still be resubmitted
- Prioritized queue has faster turnaround (3-5 days vs 7-14 days)
- Website must remain active and accessible during Twilio review
- Do not change DNS or website content while under review

---

**Created:** 2025-01-16
**Status:** Ready to resubmit once HTTPS is enabled
**Next Step:** Wait for DNS propagation and HTTPS certificate
