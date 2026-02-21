---
layout: post
title: Timezone Behavior in React Datetimepicker | Syncfusion
description: Learn here all about Timezone Behavior in Syncfusion React Datetimepicker component of Syncfusion Essential JS 2 and more.
control: Timezone Behavior 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Timezone Behavior in DateTimePicker Control

The DateTimePicker component displays and maintains date and time values based on the client system's local time zone. When a user selects a date and time, it is stored using the system's time zone at the time of selection, ensuring consistent and predictable behavior.

**Important**: If the system time zone changes after a date-time is selected, the DateTimePicker **does not automatically update** the displayed value. The component preserves the original selection, maintaining a stable user experience.

## serverTimezoneOffset

The `serverTimezoneOffset` property specifies the server's time zone offset from UTC in **hours** or **fractional hours**, enabling correct interpretation of server-provided date-time values on the client.

| Scenario | UTC Offset | Example |
| --- | --- | --- |
| Eastern Standard Time | `-5` | `serverTimezoneOffset={-5}` |
| Fractional offset | `-4.5` | `serverTimezoneOffset={-4.5}` (UTC-4:30) |
| India Standard Time | `5.5` | `serverTimezoneOffset={5.5}` (UTC+5:30) |

**Scope**: The `serverTimezoneOffset` property applies **only to pre-bound values** during initialization or data binding. It **does not affect** date-times selected by the user during runtime or entered directly in the input field.

### Edge Cases & Considerations

- **Daylight Saving Time (DST)**: The component uses the system's DST information; no manual DST adjustment is required. However, when migrating across DST boundaries, ensure server times are correctly UTC-adjusted.
- **UTC±0 (GMT/UTC)**: Specify `serverTimezoneOffset={0}` when the server operates in UTC.
- **Dynamic timezone changes**: System time zone changes after date-time selection do not affect already-selected values; users must re-select dates to reflect the new time zone.

The following examples demonstrate DateTimePicker timezone handling:

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/datetimepicker/timezone-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/datetimepicker/timezone-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datetimepicker/timezone-cs2" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/datetimepicker/timezone-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/datetimepicker/timezone-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datetimepicker/timezone-cs1" %}