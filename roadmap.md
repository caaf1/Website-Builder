# Roadmap

## What this is
A website for small service businesses, such as a hair salon, that takes customer bookings and turns them into invoices. The owner sets up services and hours, customers book through a public link without an account, and the owner invoices each booking and tracks whether it is paid.

## What Done means
A stranger who owns a small service business signs up, adds one service and their weekly hours, and shares their public booking link. A second stranger, with no account, opens that link and books a free time. The owner sees the booking, turns it into an invoice, and sends the customer the invoice link. The customer opens the link and sees what they owe. After being paid outside the site, the owner marks the invoice Paid. No online payments.

## Slices
1. Sign up and log in | done-criteria: (a) On the live site, sign up at /signup with a new email and password, then click the link in the confirmation email: you land on /dashboard, which shows that email. (b) Click Log out, then type /dashboard into the address bar: you are sent to /login. (c) On /login, enter the right email with the wrong password: an error message appears and you stay on /login. (d) In a different browser, log in with the right password: /dashboard shows the same email. | status: ACTIVE
2. Services and bookings | done-criteria: (a) Logged in as the owner, add the service "Haircut, 30 minutes, $25" and the hours Mon-Fri 9:00-17:00, then open the public booking link in a private window: Haircut is listed, and the only times offered fall between 9:00 and 17:00 on weekdays. (b) In the private window, pick a time, enter a fake name and email, and submit: a confirmation page shows the service, date and time, and the owner's dashboard lists the booking with that name, service and time. (c) Open the booking link again in the private window: the time just booked is no longer offered. (d) Sign up as a second owner: their dashboard shows zero bookings, and none of the first owner's. | status: pending
3. Invoices | done-criteria: (a) On a booking in the dashboard, click Create invoice: the invoice shows the customer's name, "Haircut", a $25.00 total, and a number like INV-0001. (b) Copy the invoice link and open it in a private window: it shows the business name, the line item and the total, with the status Unpaid. (c) In the dashboard, click Mark as paid: reloading the private window shows the status Paid. (d) Change one character in the invoice link: the page says "Invoice not found" and does not show anyone else's invoice. | status: pending

## Backlog
- Online card payments
- Email notifications and reminders, plus a custom email sender
- Password reset, and Google login
- Customers cancelling or rescheduling a booking
- Multiple staff members or calendars
- Quotes, invoice PDFs, tax, invoices with several line items
- Supporting more than one time zone
- Business logo and branding on the public pages
- Custom domain name
- Privacy policy, terms of service, and readiness for real personal data
- Moving to paid hosting plans for real commercial use
- Orders, inventory, reports
