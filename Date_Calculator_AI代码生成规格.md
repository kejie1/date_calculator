# Date Calculator AI 代码生成规格

这份文档用于交给 AI 编程工具生成网站代码。人工执行事项见 `Date_Calculator_执行清单.md`。

## 1. 生成目标

生成一个英文静态工具站：

```text
Date Calculator Tools
```

定位：

```text
A fast, clear, browser-based date calculator for counting days between dates, adding or subtracting days, and calculating weekdays or business days.
```

技术栈建议：

```text
Astro
TypeScript
Tailwind CSS
Markdown / MDX content
Client-side JavaScript for date tools
Static deployment
```

要求：

- 不需要后端。
- 不需要数据库。
- 不需要用户登录。
- 所有日期计算默认在浏览器本地完成。
- 页面必须适配移动端和桌面端。
- 每个工具页必须有 SEO TDK、说明、示例、FAQ、相关工具链接。
- 首版不要承诺支持全球法定节假日。
- 工作日默认定义为 Monday-Friday。

## 2. 页面路由

必须生成：

```text
/
/date-calculator/
/business-days-calculator/
/date-duration-calculator/
/add-days-to-date/
/subtract-days-from-date/
/weekdays-calculator/
/blog/
/blog/how-to-calculate-days-between-dates/
/blog/how-to-calculate-business-days/
/blog/business-days-vs-calendar-days/
/blog/how-to-add-days-to-a-date/
/blog/how-to-subtract-days-from-a-date/
/blog/how-many-working-days-in-a-month/
/about/
/contact/
/privacy-policy/
/terms/
/sitemap.xml
/robots.txt
/ads.txt
```

## 3. 全站布局

Header 包含：

- Logo 文本：Date Calculator Tools
- Calculators
- Blog
- About
- Contact

Footer 包含：

- Copyright
- Privacy Policy
- Terms
- Contact
- 简短说明：Date calculations run in your browser.

样式方向：

- 工具站风格，清晰、可信、实用。
- 不要做营销型大横幅。
- 不要用夸张渐变和装饰。
- 首屏重点是工具入口，不是品牌宣传。
- 工具输入区、结果区、操作按钮要清楚。
- 移动端不能出现横向溢出。

## 4. 首页规格

SEO：

```text
Title: Date Calculator Tools - Free Online Date Calculators
Description: Calculate days between dates, business days, weekdays, and add or subtract days online with free browser-based date tools.
H1: Date Calculator Tools
```

首页模块：

1. 首屏：H1、简短说明、Open Date Calculator、Calculate Business Days。
2. 工具列表：6 个核心工具入口。
3. 使用场景：Project deadlines、Business days、Payment terms、Event countdowns。
4. 教程列表：首批文章入口。
5. FAQ。

## 5. 日期工具逻辑

### Date Calculator

- URL：`/date-calculator/`
- 输入 start date 和 end date。
- 输出 Days excluding end date、Days including end date、Full weeks and remaining days、Start weekday and end weekday。
- 注意使用本地日期，避免 UTC 时区导致相差天数错误。

### Business Days Calculator

- URL：`/business-days-calculator/`
- 输入 start date 和 end date。
- 可选择 include start date 和 include end date。
- 默认工作日为 Monday-Friday。
- 输出 Business days、Weekend days、Calendar days。
- 明确提示：Public holidays are not included in the first version.

### Date Duration Calculator

- URL：`/date-duration-calculator/`
- 输出 Total days、Weeks + days、Approximate months、Approximate years、Human-readable sentence。

### Add Days to Date

- URL：`/add-days-to-date/`
- 输入 start date 和 number of days。
- 选择 calendar days 或 weekdays。
- 输出 resulting date 和 resulting weekday。

### Subtract Days From Date

- URL：`/subtract-days-from-date/`
- 输入 start date 和 number of days。
- 选择 calendar days 或 weekdays。
- 输出 resulting date 和 resulting weekday。

### Weekdays Calculator

- URL：`/weekdays-calculator/`
- 输入 start date 和 end date。
- 输出 Monday-Friday 总数、每个星期几的数量、weekend days。

所有工具都需要：

- Calculate
- Copy
- Clear
- Load Example

## 6. 基础页面

About：

- 说明 Date Calculator Tools 是什么。
- 面向谁。
- 工具在浏览器本地运行。
- 首版工作日计算不包含法定节假日。

Contact：

- 联系邮箱占位。
- 反馈说明。

Privacy Policy：

- Date calculations run in the browser.
- The site may use analytics.
- The site may use Google AdSense after approval.
- Cookies and advertising disclosure.

Terms：

- Tools are provided as-is.
- Date calculations should be checked for critical legal, financial, medical, or contractual use.
- No warranty for business decisions.

## 7. 内容文件

生成首批 Markdown：

```text
how-to-calculate-days-between-dates.md
how-to-calculate-business-days.md
business-days-vs-calendar-days.md
how-to-add-days-to-a-date.md
how-to-subtract-days-from-a-date.md
how-many-working-days-in-a-month.md
```

每篇文章必须包含：

- title
- description
- date
- slug
- H1
- short answer
- step-by-step section
- example
- related tool link
- FAQ

## 8. SEO 和技术要求

必须生成：

- 每页唯一 title。
- 每页唯一 meta description。
- 每页一个 H1。
- canonical URL 支持。
- sitemap.xml。
- robots.txt。
- ads.txt 占位。
- Open Graph 基础标签。
- 移动端可用。
- 无空链接。
- 404 页面。

## 9. 验收标准

代码生成完成后必须满足：

- 本地能启动。
- 首页可访问。
- 6 个核心工具页可访问。
- Date Calculator 能正确计算两个日期之间的天数。
- Business Days Calculator 能正确排除周六周日。
- Add/Subtract Days 能正确处理自然日和工作日。
- Copy / Clear / Load Example 可用。
- sitemap.xml、robots.txt 可访问。
- 基础页面完整。
- 移动端宽度下工具区不溢出。

## 10. 明确不要生成

第一版不要生成：

- 登录注册。
- 付费系统。
- 数据库。
- 后端 API。
- 全球法定节假日数据库。
- 法律/财务/医疗结论承诺。
- 广告密集布局。
- 大量无意义 SEO 页面。
