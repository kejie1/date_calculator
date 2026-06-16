---
title: "How to Calculate Days Between Dates"
description: "Learn how to calculate the exact number of days between two dates manually and with online tools."
date: "Jun 12, 2026"
slug: "how-to-calculate-days-between-dates"
relatedToolLink: "/date-calculator/"
relatedToolName: "Date Calculator"
---

# How to Calculate Days Between Dates

Counting the days between two dates is a fundamental calculation used every day in project planning, financial calculations, legal contracts, and personal scheduling. While it sounds simple, manual calculations can quickly get complex due to varying month lengths and leap years.

## Short Answer
To calculate the days between two dates, you subtract the starting date from the ending date. In manual arithmetic, you accumulate the full days of each intervening month, accounting for whether February has 28 or 29 days, and add the remaining days from the boundary months. For instant accuracy, using a browser-based tool like our **Date Calculator** is the easiest method.

---

## Step-by-Step Manual Method

If you want to calculate the number of days between two dates on paper, follow this step-by-step formula:

1. **Identify the dates:** Let’s call them Date A (Start) and Date B (End).
2. **Count the days in the starting month:** Subtract the starting day number from the total days in that month.
3. **Add days for full intervening months:** Add up the standard calendar days for each whole month between the start and end dates:
   - January, March, May, July, August, October, December: **31 days**
   - April, June, September, November: **30 days**
   - February: **28 days** (or **29 days** in a leap year)
4. **Add the days of the ending month:** Simply add the day number of the ending date.
5. **Sum them up:** Add the results of steps 2, 3, and 4 together to get your final duration.

---

## Practical Example

Let's calculate the days between **March 15, 2026**, and **June 10, 2026**:

- **March (Starting month):** March has 31 days. So, $31 - 15 = 16$ days remaining in March.
- **Intervening months:**
  - April: **30 days**
  - May: **31 days**
- **June (Ending month):** We take the day number directly, which is **10 days**.
- **Sum:** 
  $$16 \text{ (March)} + 30 \text{ (April)} + 31 \text{ (May)} + 10 \text{ (June)} = 87 \text{ calendar days}$$

So, there are exactly **87 days** between March 15 and June 10, 2026 (excluding March 15 itself).

---

## Related Date Utility
The easiest way to calculate calendar durations is with our dedicated browser tool:
👉 **[Open Date Calculator](/date-calculator/)**

---

## FAQ

### Does "days between" include the start and end date?
Typically, standard calculations are "exclusive", meaning they count the nights or days that passed (excluding the starting date). If you need an "inclusive" calculation (counting both dates fully), you simply add 1 to your final result.

### How do I know if a year is a leap year?
A year is a leap year if it is divisible by 4, except for end-of-century years (ending in 00), which must also be divisible by 400. For example, 2024 and 2028 are leap years, but 2100 is not.

### Can timezone differences cause calculation errors?
Yes. When using general online API tools, dates are often parsed in UTC, which can shift your boundary dates by 1 day. Our calculators run locally on your browser to completely bypass timezone shift issues.