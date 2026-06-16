---
title: "How to Calculate Business Days Between Two Dates"
description: "Learn how to calculate business working days between two dates by excluding weekends manually and automatically."
date: "Jun 10, 2026"
slug: "how-to-calculate-business-days"
relatedToolLink: "/business-days-calculator/"
relatedToolName: "Business Days Calculator"
---

# How to Calculate Business Days Between Two Dates

Calculating business days (working days) is a common requirement in professional environments. Business operations, delivery schedules, payment terms, and project sprints usually depend on days where staff and banks are operating, which excludes weekend days.

## Short Answer
To find the business days between two dates, you determine the total calendar days, calculate how many full weeks have passed to subtract 2 weekend days (Saturday and Sunday) for each week, and inspect any remaining partial week days to exclude any weekend boundaries. You can use our interactive **Business Days Calculator** to automate this instantly.

---

## The Step-by-Step Counting Formula

To manually calculate business days between two dates, follow this structured process:

1. **Calculate total calendar days:** Count the complete day span between Date A and Date B.
2. **Find the number of full weeks:** Divide the calendar days by 7. 
   - Each full week contains exactly **5 business days** and **2 weekend days**.
3. **Subtract weekend days for full weeks:** Multiply the number of full weeks by 2 and subtract that number from the total calendar days.
4. **Evaluate the remaining days:** Check the remaining days (between 1 and 6) and map them against the starting and ending weekdays to identify if any fall on a Saturday or Sunday. Subtract those individual weekend occurrences.
5. **Consider local holidays:** Subtract any public or national bank holidays that occur on weekdays during that timeframe.

---

## Practical Example

Let's calculate the business working days between **Thursday, June 4, 2026**, and **Wednesday, June 17, 2026**:

- **Total Calendar Days:** 13 calendar days are between these dates.
- **Full Weeks:** 
  $$\frac{13}{7} = 1 \text{ full week} \text{ (with 6 remaining days)}$$
- **Weekend subtraction for full week:** We subtract **2 weekend days** for the full week, leaving 11 days.
- **Evaluate remaining days:** The 6 remaining days represent the span from Friday, June 12 to Wednesday, June 17.
  - Friday (Workday)
  - Saturday (Weekend - **Subtract 1**)
  - Sunday (Weekend - **Subtract 1**)
  - Monday (Workday)
  - Tuesday (Workday)
  - Wednesday (Workday)
- **Sum:** 13 calendar days - 2 (full week weekend) - 2 (partial week weekend) = **9 business working days**.

---

## Related Date Utility
Save time and avoid manual errors by using our browser-based business days calculator:
👉 **[Open Business Days Calculator](/business-days-calculator/)**

---

## FAQ

### Does a standard business day include public holidays?
Historically, formal business calculations exclude public or bank holidays. However, because bank holiday calendars are highly localized by region and country, standard tools do not include them automatically in their first version.

### What is the default working week?
In most Western countries, the standard working week is Monday through Friday. Some regions, particularly in the Middle East, use a Sunday through Thursday workweek.

### Does our online tool save your inputs?
No. All calculation scripts run in your local browser sandbox, ensuring your private corporate spreadsheets and timeline deadlines are never uploaded.