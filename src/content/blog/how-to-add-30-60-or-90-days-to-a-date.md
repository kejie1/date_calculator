---
title: "How to Add 30, 60, or 90 Days to a Date"
description: "Learn how to easily project future dates by adding Net 30, 60, or 90 calendar or working business days."
date: "Jun 16, 2026"
relatedToolLink: "/add-days-to-date/"
relatedToolName: "Add Days to Date"
---

# How to Add 30, 60, or 90 Days to a Date

Adding standard spans of 30, 60, or 90 days to a date is an essential task for managing billing schedules, setting project contract milestones, tracking invoice due dates (such as Net 30/60/90 terms), and scheduling regular software subscription renewals. 

## Short Answer
To add 30, 60, or 90 days to a starting date, increment the starting day of the month by the required count. If the sum exceeds the length of the current month, subtract that month's total days (e.g. 30 or 31), increment the calendar month, and repeat until the remainder fits within the destination month. You can also do this instantly with our [Add Days to Date](/add-days-to-date/) calculator.

---

## The Month Boundary Rules

Because different calendar months contain different numbers of days (February has 28 or 29, April/June/Sept/Nov have 30, and others have 31), adding "30 days" is not the same as simply shifting by exactly "one month". 

For general manual rules, review our step-by-step tutorial on [How to Add Days to a Date](/blog/how-to-add-days-to-a-date/). If you need to trace deadlines backwards instead of forwards, you can also consult our guide on [How to Subtract Days from a Date](/blog/how-to-subtract-days-from-a-date/).

---

## Examples of Adding 30, 60, and 90 Days

Let's assume our starting point is **June 15, 2026**:

### Example 1: Add 30 Days to June 15
- June has 30 days.
- Remaining days in June: $30 - 15 = 15$ days.
- Subtract 15 days from our 30-day pool: $30 - 15 = 15$ days remaining.
- Advance to July. We add the remaining 15 days to July 1st.
- **Target Date:** **July 15, 2026**.

### Example 2: Add 60 Days to June 15
- We subtract 15 days to finish June, leaving 45 days.
- July has 31 days. We subtract 31 days to finish July, leaving 14 days.
- Advance to August. We add the remaining 14 days to August 1st.
- **Target Date:** **August 14, 2026**.

### Example 3: Add 90 Days to June 15
- Subtract 15 days for June, leaving 75 days.
- Subtract 31 days for July, leaving 44 days.
- Subtract 31 days for August, leaving 13 days.
- Advance to September. We add the remaining 13 days to September 1st.
- **Target Date:** **September 13, 2026**.

---

## Calendar Days vs. Business Weekdays

Keep in mind that financial contract terms (Net 30/60/90) typically utilize **calendar days**, which means weekends are fully counted. However, some professional deliverables require "30 business days," which skips Saturdays and Sundays. For a detailed breakdown of these differences, check out [Business Days vs. Calendar Days](/blog/business-days-vs-calendar-days/).

---

## Related Date Utility
Quickly determine exact target deadlines using our clean, client-side calculator:
👉 **[Open Add Days to Date Calculator](/add-days-to-date/)**

---

## FAQ

### Does "Net 30" mean exactly 30 calendar days?
Yes. In standard accounting, Net 30 indicates that payment is expected exactly 30 calendar days from the invoice date. If the invoice date is June 15, the payment is due on July 15.

### What if the calculated target falls on a weekend?
If your 30/60/90-day target falls on a Saturday or Sunday, many corporate policies allow the actual deadline or transaction to roll forward to the next business Monday. 

### Can this calculator handle leap years?
Yes. Our script checks for leap year rules dynamically inside your browser, ensuring February calculations (e.g. adding 30 days to January 30) are perfectly handled.