---
layout: post
title: Calendar Mode in React Scheduler | Syncfusion
description: Learn how to render the Syncfusion React Scheduler in Gregorian and Islamic calendar modes to support different regional date formats.
control: Scheduler
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Calendar Mode in React Scheduler

The Syncfusion React Scheduler supports two calendar types:

* **Gregorian Calendar** (default) — Solar calendar used worldwide
* **Islamic Calendar** — Lunar calendar used in Islamic contexts

## Gregorian Calendar

By default, the Scheduler uses the Gregorian calendar, a solar calendar with 12 months and 28 to 31 days each. Leap years (divisible by four) have 366 days; standard years have 365 days. This is the most widely adopted calendar globally.

## Islamic Calendar

The Islamic Calendar, also called the Hijri calendar, is a lunar calendar with 12 months and 354 or 355 days per year. Each month marks the start of a new lunar cycle, so months have either 29 or 30 days depending on astronomical observations. The standard pattern is: odd-numbered months have 30 days and even-numbered months have 29 days.

| Property | Gregorian | Islamic |
|----------|-----------|---------|
| Type | Solar | Lunar |
| Months per year | 12 | 12 |
| Days per year | 365/366 | 354/355 |
| Year length vs Gregorian | — | ~11 days shorter |

> **Note:** Islamic calendar dates shift approximately 11 days earlier each Gregorian year. Applications serving Middle Eastern or Islamic communities commonly use this calendar mode.

## Implementation

The Scheduler provides the [`calendarMode`](https://ej2.syncfusion.com/react/documentation/api/schedule#calendarmode) property to switch between calendar types. Set it to `Islamic` to display Islamic calendar dates; the default is `Gregorian`.

### Requirements for Islamic calendar mode

To use the Islamic calendar, you must:

1. **Import calendar modules** from the `@syncfusion/ej2-calendars` package:
   ```typescript
   import { Calendar, Islamic } from '@syncfusion/ej2-calendars';
   import { Inject } from '@syncfusion/ej2-react-schedule';
   ```

2. **Inject the Islamic module** into the Scheduler:
   ```typescript
   <Scheduler>
     <Inject services={[Islamic]} />
   </Scheduler>
   ```

3. **Load CLDR data files** using the `loadCldr` function before rendering the component. CLDR (Common Locale Data Repository) provides locale-specific calendar data:
   ```typescript
   import { loadCldr } from '@syncfusion/ej2-base';
   // Load required CLDR data files
   loadCldr(require('../cldr-data/supplemental/numberingSystems.json'));
   loadCldr(require('../cldr-data/main/en/ca-gregorian.json'));
   loadCldr(require('../cldr-data/supplemental/ca-islamic.json'));
   ```

**CLDR data files needed:**
* numberingSystems.json — Number system definitions
* ca-gregorian.json — Gregorian calendar locale data
* numbers.json — Number formatting rules
* timeZoneNames.json — Timezone data
* ca-islamic.json — Islamic calendar locale data

For complete CLDR installation and setup instructions, refer to the [Internationalization guide](https://ej2.syncfusion.com/documentation/common/internationalization#installing-cldr-data).

## Example: switching to islamic calendar

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/calendar-mode-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/calendar-mode-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/calendar-mode-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/calendar-mode-cs1" %}

## Troubleshooting

| Issue | Cause | Solution |
|-------|-------|----------|
| Islamic dates not displaying | CLDR data not loaded | Verify `loadCldr()` calls complete before Scheduler renders. Check browser console for CLDR loading errors. |
| Calendar mode property not working | Islamic module not injected | Ensure `<Inject services={[Islamic]} />` is included in the Scheduler component. |
| Date formatting appears incorrect | Incorrect locale configuration | Verify locale is set to a supported Islamic-aware locale (e.g., 'ar-SA' for Saudi Arabic). |
| Events not appearing on Islamic dates | Timezone or recurrence conflicts | Islamic calendar dates shift annually; recurring events may need adjustment. Test with simple all-day events first. |

## See also

* [Syncfusion React Scheduler](https://www.syncfusion.com/react-components/react-scheduler)
* [Internationalization and Localization](https://ej2.syncfusion.com/documentation/common/internationalization)
* [CLDR Data Installation](https://ej2.syncfusion.com/documentation/common/internationalization#installing-cldr-data)
* [Scheduler API - calendarMode](https://ej2.syncfusion.com/react/documentation/api/schedule#calendarmode)
* [Scheduler Examples](https://ej2.syncfusion.com/react/demos/#/tailwind3/schedule/overview)
