---
layout: post
title: Recurrence Editor in React Scheduler | Syncfusion
description: Learn how to use the Recurrence Editor in the Syncfusion React Scheduler to configure daily, weekly, monthly, and yearly recurrence rules.
control: Scheduler
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Recurrence Editor in React Scheduler

The Recurrence editor is integrated into Scheduler's editor window by default to process recurrence rule generation for events. It can also be used as a standalone component when you need to work with recurrence-related workflows outside the Scheduler editor.

> **Tip:** The recurrence editor follows the iCalendar recurrence rule specification, so any valid RRULE string defined by the standard can be used.

> **Important:** When using the recurrence editor independently, make sure the required Scheduler and recurrence editor modules are imported correctly.

## Customizing the repeat type option in editor

By default, the recurrence editor provides five repeat options:

* Never
* Daily
* Weekly
* Monthly
* Yearly

You can customize the recurrence editor to display only specific repeat options, such as `Daily` and `Weekly`, by setting the [`frequencies`](https://ej2.syncfusion.com/react/documentation/api/recurrence-editor#frequencies) option.

> **Note:** Limiting the available repeat types is useful when your application only supports a subset of recurrence patterns.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/events-cs46/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/events-cs46/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/events-cs46/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/events-cs46" %}

The other properties available in recurrence editor are tabulated below:

| Property | Type | Description |
|----------|------|-------------|
| `firstDayOfWeek` | number | Sets the first day of the week. |
| `startDate` | Date | Sets the start date. |
| `dateformat` | string | Sets the specific date format on the recurrence editor. |
| `locale` | string | Sets the locale to be applied on the recurrence editor. |
| `cssClass` | string | Allows styling with custom class names. |
| `enableRtl` | boolean | Allows the recurrence editor to render in RTL mode. |
| `minDate` | Date | Sets the minimum date on the recurrence editor. |
| `maxDate` | Date | Sets the maximum date on the recurrence editor. |
| `value` | string | Sets the recurrence rule output value. |
| `selectedType` | number | Sets the current repeat type in the recurrence editor. |

> **Tip:** Use `firstDayOfWeek`, `minDate`, and `maxDate` together when you need to constrain the editor to a specific calendar range.

## Customizing the end type option in editor

By default, the recurrence editor provides three end options:

* Never
* Until
* Count

You can customize the recurrence editor to display only specific end options, such as `Until` and `Count`, by setting the [`endTypes`](https://ej2.syncfusion.com/react/documentation/api/recurrence-editor#endtypes) property.

> **Note:** Restricting the end types can simplify the UI when users only need a limited set of recurrence termination options.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/events-cs49/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/events-cs49/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/events-cs49/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/events-cs46" %}

## Accessing the recurrence rule string

The recurrence rule is usually generated based on the options selected from the recurrence editor and follows the [`iCalendar`](https://tools.ietf.org/html/rfc5545#section-3.3.10) specification. The generated recurrence rule string is valid for use with the Scheduler event's recurrence rule field.

A `change` event is available in the recurrence editor and triggers whenever the editor fields change. Within the event argument, you can access the generated recurrence value through the `value` property, as shown in the following code example.

> **Tip:** Use the `change` event when you need to preview or persist the recurrence rule as users update the editor settings.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/recur-editor-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/recur-editor-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/recur-editor-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/recur-editor-cs1" %}

## Set specific value on recurrence editor

It is possible to display the recurrence editor with specific options loaded initially based on the rule string that you provide. The fields of the recurrence editor will update accordingly when you pass a recurrence rule through the `setRecurrenceRule` method.

> **Important:** The value passed to `setRecurrenceRule` must be a valid recurrence rule string that conforms to the iCalendar RRULE format.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/recur-editor-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/recur-editor-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/recur-editor-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/recur-editor-cs2" %}

## Recurrence date generation

You can parse the `recurrenceRule` of an event to generate the date instances on which that particular event is going to occur using the `getRecurrenceDates` method. It generates dates based on the `recurrenceRule` that you provide. The parameters to be provided for the `getRecurrenceDates` method are as follows.

| Field name | Type | Description |
|------------|------|-------------|
| `startDate` | Date | Appointment start date. |
| `rule` | string | Recurrence rule present in an event object. |
| `excludeDate` | string | Date collection (in ISO format) to be excluded. It is optional. |
| `maximumCount` | number | Number of dates to generate. It is optional. |
| `viewDate` | Date | Current view range's first date. It is optional. |

> **Note:** Use `maximumCount` carefully when working with rules that do not have an end date to avoid generating unnecessary dates.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/recur-editor-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/recur-editor-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/recur-editor-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/recur-editor-cs3" %}

> The above example generates two dates January 7, 2018 & January 9 2018 by excluding the in between dates January 8 2018 & January 10 2018, since those dates were given in the exclusion list. Generated dates can then be utilized to create appointments.

## Recurrence date generation in server-side

It is also possible to generate recurrence date instances on the server side by manually referring to the `RecurrenceHelper` class, which is designed to handle this date generation process in application code.

> **Tip:** Use server-side recurrence parsing when you need to validate or expand recurrence rules before saving them to a database or sending them to another service.

> Refer [here](https://www.syncfusion.com/kb/10009/how-to-parse-the-recurrencerule-at-server-side) for the step-by-step procedure to achieve date generation on the server side.

## Restrict date generation with specific count

If the rule is in the "NEVER ENDS" category, you can specify a maximum count to stop date generation after a defined number of occurrences starting from the provided start date. To do so, provide the appropriate `maximumCount` value within the `getRecurrenceDates` method as shown in the following code example.

> **Important:** Limiting recurrence generation is useful for performance and for preventing unbounded result sets in long-running schedules.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/recur-editor-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/recur-editor-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/recur-editor-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/recur-editor-cs4" %}

## See also

* [Syncfusion React Scheduler](https://www.syncfusion.com/react-components/react-scheduler) - Component homepage
* [Recurring Events](https://ej2.syncfusion.com/react/documentation/schedule/appointments) - Recurrence and appointment rules
* [Scheduler API Reference](https://ej2.syncfusion.com/react/documentation/api/schedule) - Complete API documentation
* [Recurrence Editor API Reference](https://ej2.syncfusion.com/react/documentation/api/recurrence-editor) - Recurrence editor properties and methods
* [Live Examples](https://ej2.syncfusion.com/react/demos/#/tailwind3/schedule/overview) - Interactive Scheduler demos
* [iCalendar RRULE Specification](https://tools.ietf.org/html/rfc5545#section-3.3.10) - Standard recurrence rule format
