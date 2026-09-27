---
layout: post
title: Localization in React Scheduler | Syncfusion
description: Learn how to localize the Syncfusion React Scheduler to adapt to different languages, cultures, time formats, and RTL mode.
control: Scheduler
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Globalization and Localization in React Scheduler

The Scheduler supports multiple date-time formats and cultures, enabling global usage and meeting diverse regional requirements. This section covers how to configure the Scheduler for different languages, locales, and regional settings.

You can adapt the Scheduler to different languages by:
1. Parsing and formatting dates or numbers using **Internationalization** ([`Internationalization`](https://ej2.syncfusion.com/documentation/common/internationalization))
2. Adding culture-specific customization and translations for text using **Localization** ([`Localization`](https://ej2.syncfusion.com/documentation/common/localization))

> **Tip:** Internationalization (i18n) handles date/time/number formatting, while Localization (L10n) handles text translations. Both are needed for true multilingual support.

## Globalization

The Internationalization library provides support for formatting and parsing numbers, dates, and times using official [`Unicode CLDR`](http://cldr.unicode.org/) JSON data. It also provides the `loadCldr` method to load culture-specific CLDR JSON data.

By default, the Scheduler follows the English culture (`en-US`). To use a different culture, follow these steps:

> **Important:** The Internationalization library uses CLDR (Common Locale Data Repository) data, which is an international standard for locale-specific formatting. This ensures consistent behavior across all locales.

**Step 1: Install the CLDR Data Package**

Install the `ej2-cldr-data` package using the Syncfusion<sup style="font-size:70%">&reg;</sup> npm package:

```bash
npm install @syncfusion/ej2-cldr-data --save
```

Once installed, the culture-specific JSON data can be found under `\node_modules\@syncfusion\ej2-cldr-data`.

> **Note:** This package contains CLDR data for all supported locales. The package size is significant, so installation may take a few moments.

**Step 2: Import Required CLDR JSON Data**

Import the required culture-specific JSON data into your `app.ts` file. You need to import these files for each locale:

| File | Purpose |
|------|---------|
| `numberingSystems.json` | Numbering system data |
| `ca-gregorian.json` | Gregorian calendar data |
| `numbers.json` | Number formatting data |
| `timeZoneNames.json` | Timezone name data |

```ts
// Import loadCldr from ej2-base
import { loadCldr } from '@syncfusion/ej2-base';
import frNumberData from '@syncfusion/ej2-cldr-data/main/fr-CH/numbers.json';
import frTimeZoneData from '@syncfusion/ej2-cldr-data/main/fr-CH/timeZoneNames.json';
import frGregorian from '@syncfusion/ej2-cldr-data/main/fr-CH/ca-gregorian.json';
import frNumberingSystem from '@syncfusion/ej2-cldr-data/supplemental/numberingSystems.json';

loadCldr(frNumberData, frTimeZoneData, frGregorian, frNumberingSystem);
```

**Step 3: Set the Culture**

Set the culture in the Scheduler using the `locale` property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/localization-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/localization-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/localization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/localization-cs1" %}

For more information about globalization, refer to the [Internationalization](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization) section.

> **Tip:** When loading CLDR data, ensure all required JSON files are imported in the correct order. Missing any CLDR file may result in incomplete formatting for dates, numbers, or timezones.

## Localizing static Scheduler text

The [Localization](https://ej2.syncfusion.com/documentation/common/localization) library enables displaying all static text, date content, and time modes of the Scheduler in the localized language. To achieve this:

1. Set the `locale` property of the Scheduler
2. Define translations for static words using the `load` method
3. Provide translations for both Scheduler and Recurrence Editor text

> **Important:** Localization is independent of Internationalization. You must configure both for complete multilingual support with proper date/time formatting and translated UI text.

For example, the following code defines French translations for all static words used in the Scheduler:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/localization-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/localization-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/localization-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/localization-cs2" %}

The localized words for static text used in the Scheduler and Recurrence Editor can be found in the following code. Static text for all cultures is available in the GitHub repository: [`ej2-locale`](https://github.com/syncfusion/ej2-locale).

> **Tip:** You can use the pre-built locale files from the ej2-locale repository instead of manually defining all translations. Simply import the required locale file for your language.

```ts
L10n.load({
    "en": {
        "schedule": {
            "day": "Day",
            "week": "Week",
            "workWeek": "Work Week",
            "month": "Month",
            "year": "Year",
            "agenda": "Agenda",
            "weekAgenda": "Week Agenda",
            "workWeekAgenda": "Work Week Agenda",
            "monthAgenda": "Month Agenda",
            "today": "Today",
            "noEvents": "No events",
            "emptyContainer": "There are no events scheduled on this day.",
            "allDay": "All day",
            "start": "Start",
            "end": "End",
            "more": "more",
            "close": "Close",
            "cancel": "Cancel",
            "noTitle": "(No Title)",
            "delete": "Delete",
            "deleteEvent": "Delete Event",
            "deleteMultipleEvent": "Delete Multiple Events",
            "selectedItems": "Items selected",
            "deleteSeries": "Delete Series",
            "edit": "Edit",
            "editSeries": "Edit Series",
            "editEvent": "Edit Event",
            "createEvent": "Create",
            "subject": "Subject",
            "addTitle": "Add title",
            "moreDetails": "More Details",
            "moreEvents": "More Events",
            "save": "Save",
            "editContent": "Do you want to edit only this event or entire series?",
            "deleteRecurrenceContent": "Do you want to delete only this event or entire series?",
            "deleteContent": "Are you sure you want to delete this event?",
            "deleteMultipleContent": "Are you sure you want to delete the selected events?",
            "newEvent": "New Event",
            "title": "Title",
            "location": "Location",
            "description": "Description",
            "timezone": "Timezone",
            "startTimezone": "Start Timezone",
            "endTimezone": "End Timezone",
            "repeat": "Repeat",
            "saveButton": "Save",
            "cancelButton": "Cancel",
            "deleteButton": "Delete",
            "recurrence": "Recurrence",
            "wrongPattern": "The recurrence pattern is not valid.",
            "seriesChangeAlert": "The changes made to specific instances of this series will be cancelled and those events will match the series again.",
            "createError": "The duration of the event must be shorter than how frequently it occurs. Shorten the duration, or change the recurrence pattern in the recurrence event editor.",
            "recurrenceDateValidation": "Some months have fewer than the selected date. For these months, the occurrence will fall on the last date of the month.",
            "sameDayAlert": "Two occurrences of the same event cannot occur on the same day.",
            "occurenceAlert": "Cannot reschedule an occurrence of the recurring appointment if it skips over a later occurrence of the same appointment.",
            "editRecurrence": "Edit Recurrence",
            "repeats": "Repeats",
            "alert": "Alert",
            "startEndError": "The selected end date occurs before the start date.",
            "invalidDateError": "The entered date value is invalid.",
            "blockAlert": "Events cannot be scheduled within the blocked time range.",
            "ok": "Ok",
            "yes": "Yes",
            "no": "No",
            "occurrence": "Occurrence",
            "series": "Series",
            "previous": "Previous",
            "next": "Next",
            "timelineDay": "Timeline Day",
            "timelineWeek": "Timeline Week",
            "timelineWorkWeek": "Timeline Work Week",
            "timelineMonth": "Timeline Month",
            "expandAllDaySection": "Expand",
            "collapseAllDaySection": "Collapse",
            "timelineYear": "Timeline Year",
            "editFollowingEvent": "Following Events",
            "deleteTitle": "Delete Event",
            "editTitle": "Edit Event",
            "beginFrom": "Begin From",
            "endAt": "End At",
            "searchTimezone": "Search Timezone",
            "noRecords": "No records found",
            "of": "of"
        },
        "recurrenceeditor": {
            "none": "None",
            "daily": "Daily",
            "weekly": "Weekly",
            "monthly": "Monthly",
            "month": "Month",
            "yearly": "Yearly",
            "never": "Never",
            "until": "Until",
            "count": "Count",
            "first": "First",
            "second": "Second",
            "third": "Third",
            "fourth": "Fourth",
            "last": "Last",
            "repeat": "Repeat",
            "repeatEvery": "Repeat Every",
            "on": "Repeat On",
            "end": "End",
            "onDay": "Day",
            "days": "Day(s)",
            "weeks": "Week(s)",
            "months": "Month(s)",
            "years": "Year(s)",
            "every": "every",
            "summaryTimes": "time(s)",
            "summaryOn": "on",
            "summaryUntil": "until",
            "summaryRepeat": "Repeats",
            "summaryDay": "day(s)",
            "summaryWeek": "week(s)",
            "summaryMonth": "month(s)",
            "summaryYear": "year(s)"
        }
    }
});
```

## Setting date format

The Scheduler supports all valid date formats. By default, it follows the universal format `MM/dd/yyyy`. If the [`dateFormat`](https://ej2.syncfusion.com/react/documentation/api/schedule#dateformat) property is not specified, the Scheduler uses the format based on the assigned locale. Since the default locale is `en-US`, the Scheduler follows the `MM/dd/yyyy` pattern.

**Common date formats:**

| Format | Example | Description |
|--------|---------|-------------|
| `MM/dd/yyyy` | 08/15/2024 | Month/Day/Year (US format) |
| `dd/MM/yyyy` | 15/08/2024 | Day/Month/Year (EU format) |
| `yyyy-MM-dd` | 2024-08-15 | ISO format |
| `dd-MMM-yyyy` | 15-Aug-2024 | Day-Month(abbreviated)-Year |

> **Tip:** Using locale-aware date formats ensures consistent display across different regions. The `dateFormat` property overrides the locale's default format.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/local-data-cs19/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/local-data-cs19/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/local-data-cs19/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/local-data-cs19" %}

## Setting the time format

Time format is a way of representing the time value in different string formats in the Scheduler. By default, the time mode of the Scheduler can be either 12 or 24 hours format, which is completely based on the `locale` set to the Scheduler. Since the default `locale` value of the Scheduler is `en-US`, the time mode will be set to 12-hour format automatically. You can also customize the format by using the [`timeFormat`](https://ej2.syncfusion.com/react/documentation/api/schedule#timeformat) property.

**Time format examples:**

| Format | Example | Description |
|--------|---------|-------------|
| `hh:mm a` | 02:30 PM | 12-hour format with AM/PM |
| `HH:mm` | 14:30 | 24-hour format |
| `hh:mm:ss a` | 02:30:45 PM | 12-hour with seconds |
| `HH:mm:ss` | 14:30:45 | 24-hour with seconds |

To know more about the time format standards, refer to the [Date and Time Format](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization#custom-formats) section.

The following example demonstrates the Scheduler in 24-hour format:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/local-data-cs20/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/local-data-cs20/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/local-data-cs20/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/local-data-cs20" %}

> **Important:** The [`timeFormat`](https://ej2.syncfusion.com/react/documentation/api/schedule#timeformat) property only accepts valid time formats. Invalid format strings will be ignored and the locale's default format will be used instead.

## First day of the week

The first day of the week can be set in the Scheduler using the `firstDayOfWeek` property. This ensures the Scheduler starts with the specified day, allowing proper alignment with regional conventions.

**Day numbering:**

| Day | Number | Day | Number |
|-----|--------|-----|--------|
| Sunday | 0 | Thursday | 4 |
| Monday | 1 | Friday | 5 |
| Tuesday | 2 | Saturday | 6 |
| Wednesday | 3 | | |

> **Tip:** Different locales have different conventions for the first day of the week. For example, in the US and many other countries, Sunday is the first day, while in Europe and other regions, Monday is typically the first day.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/local-data-cs21/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/local-data-cs21/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/local-data-cs21/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/local-data-cs21" %}

## Displaying Scheduler in RTL mode

The Scheduler layout and behavior can be changed to follow RTL (Right-to-Left) conventions by setting [`enableRtl`](https://ej2.syncfusion.com/react/documentation/api/schedule#enablertl) to `true`. This displays the Scheduler layout from right to left, including all UI elements, text direction, and navigation controls. The default value is `false`.

**RTL support includes:**
- Right-to-left text direction for RTL languages
- Mirrored layout and control positioning
- Proper alignment of navigation buttons and menus
- RTL-aware date and time displays

> **Note:** RTL mode is automatically applied when using RTL locales like Arabic (ar) or Hebrew (he). You can also manually enable RTL for any locale if needed.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/local-data-cs22/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/local-data-cs22/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/local-data-cs22/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/local-data-cs22" %}

## See also

* [Syncfusion React Scheduler](https://www.syncfusion.com/react-components/react-scheduler) - Component homepage
* [Scheduler API Reference](https://ej2.syncfusion.com/react/documentation/api/schedule) - Complete API documentation
* [Localization Library Documentation](https://ej2.syncfusion.com/documentation/common/localization) - Text translation configuration
* [Working Days Configuration](./working-days.md#setting-start-day-of-the-week) - Set first day of the week
* [Timezone Documentation](./timezone.md) - Handle timezone conversions
* [React Scheduler Live Examples](https://ej2.syncfusion.com/react/demos/#/tailwind3/schedule/overview) - Interactive demos with different locales
