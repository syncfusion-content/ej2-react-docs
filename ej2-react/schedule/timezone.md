---
layout: post
title: Timezone in React Scheduler | Syncfusion
description: Learn how to render appointments in different time zones in the Syncfusion React Scheduler for global users and cross-region scheduling.
control: Scheduler
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Timezone in React Scheduler

The Scheduler uses the current system timezone by default. To schedule events in a different timezone, use the [`timezone`](https://ej2.syncfusion.com/react/documentation/api/schedule#timezone) property. You can also assign timezones to individual appointments with the [`startTimezone`](https://ej2.syncfusion.com/react/documentation/api/schedule/field#starttimezone) and [`endTimezone`](https://ej2.syncfusion.com/react/documentation/api/schedule/field#endtimezone) properties in the event fields collection.

> **Note:** The `timezone` property applies only to appointment processing and the current time indicator.

> **Tip:** Use a shared Scheduler timezone when all users should see the same schedule time.

## Understanding date manipulation in JavaScript

The `new Date()` constructor in JavaScript returns the exact current date with the complete time and timezone information. For example, it may return a value such as `Wed Dec 12 2018 05:23:27 GMT+0530 (India Standard Time)`, indicating the current date as December 12, 2018, and the current time as 5:23 AM in the IST timezone.

## Scheduler without a specific timezone

When the Scheduler's `timezone` property is not set, appointments are displayed based on the client system's timezone. As a result, the same appointment may appear with different start and end times for users in different timezones.

The following example displays an appointment from 9:00 AM to 10:00 AM when the Scheduler is opened from any timezone. This is because the start and end values are provided using `new Date()`, which follows the client browser's timezone.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/local-data-cs28/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/local-data-cs28/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/local-data-cs28/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/local-data-cs28" %}

## Set a specific timezone for the Scheduler

When you set the [`timezone`](https://ej2.syncfusion.com/react/documentation/api/schedule#timezone) property, appointments are displayed according to the Scheduler's timezone regardless of the user's system timezone. In the following example, appointments are shown in Eastern Time (UTC -05:00).

> **Note:** Use this approach when all users should view the schedule in the same timezone.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/local-data-cs29/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/local-data-cs29/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/local-data-cs29/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/local-data-cs29" %}

## Display events at the same time everywhere with no time difference

Setting [`timezone`](https://ej2.syncfusion.com/react/documentation/api/schedule#timezone) to UTC displays appointments at the same time as stored in the database for all users, regardless of their local timezone.

> **Tip:** UTC is useful when you want every user to see identical appointment times.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/local-data-cs30/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/local-data-cs30/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/local-data-cs30/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/local-data-cs30" %}

## Assign specific timezones to events

You can set different timezones for Scheduler events by using the [`startTimezone`](https://ej2.syncfusion.com/react/documentation/api/schedule/field#starttimezone) and [`endTimezone`](https://ej2.syncfusion.com/react/documentation/api/schedule/field#endtimezone) properties within the [`eventSettings`](https://ej2.syncfusion.com/react/documentation/api/schedule/eventSettings) option. This allows each appointment to maintain its own timezone and display with the correct time difference.

> **Note:** Event-level timezones are useful when appointments are created in different regions.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/local-data-cs31/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/local-data-cs31/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/local-data-cs31/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/local-data-cs31" %}

## Add or remove timezone names to or from the timezone collection

Instead of displaying all timezone names in the timezone collection, you can customize the collection at the application level. By default, more than 200 names are shown in the editor window timezone fields.

> **Tip:** Limiting the list can make the editor easier to use for your users.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/local-data-cs32/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/local-data-cs32/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/local-data-cs32/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/local-data-cs32" %}

## Timezone methods

### offset

Calculates the difference, in minutes, between the specified UTC date and a target timezone.

| Parameters | Type | Description |
|------------|------|-------------|
| Date | Date | UTC time as date object. |
| Timezone | String | Target timezone. |

Returns `number`

```ts
    // Assume your local timezone as IST/UTC+05:30
    let timezone: Timezone = new Timezone();
    let date: Date = new Date(2018,11,5,15,25,11);
    let timeZoneOffset: number = timezone.offset(date,"Europe/Paris");
    console.log(timeZoneOffset); //-60
```

### convert

This method converts the passed date from one timezone to another.

| Parameters | Type | Description |
|------------|------|-------------|
| Date | Date | UTC time as date object. |
| fromOffset | number/string | Timezone from which the date needs to be converted. |
| toOffset | number/string | Timezone to which the date needs to be converted. |

Returns `Date`

```ts
    // Assume your local timezone as IST/UTC+05:30
    let timezone: Timezone = new Timezone();
    let date: Date = new Date(2018,11,5,15,25,11);
    let convertedDate: Date = timezone.convert(date, "Europe/Paris", "Asia/Tokya");
    let convertedDate1: Date = timezone.convert(date, 60, -360);
    console.log(convertedDate); //2018-12-05T08:55:11.000Z
    console.log(convertedDate1); //2018-12-05T16:55:11.000Z
```

### add

Adds the time difference between the specified UTC date and a target timezone to the date.

| Parameters | Type | Description |
|------------|------|-------------|
| Date | Date | UTC time as a date object. |
| Timezone | String | Target timezone. |

Returns `Date`

```ts
    // Assume your local timezone as IST/UTC+05:30
    let timezone: Timezone = new Timezone();
    let date: Date = new Date(2018,11,5,15,25,11);
    let convertedDate: Date = timezone.add(date, "Europe/Paris");
    console.log(convertedDate); //2018-12-05T05:25:11.000Z
```

### remove

This method removes the time difference between the passed UTC date and a timezone.

| Parameters | Type | Description |
|------------|------|-------------|
| Date | Date | UTC as date object. |
| Timezone | String | Target timezone. |

Returns `Date`

```ts
    // Assume your local timezone as IST/UTC+05:30
    let timezone: Timezone = new Timezone();
    let date: Date = new Date(2018,11,5,15,25,11);
    let convertedDate: Date = timezone.remove(date, "Europe/Paris");
    console.log(convertedDate); //2018-12-05T14:25:11.000Z
```

### removeLocalOffset

Removes the local timezone offset from the given date.

| Parameters | Type | Description |
|------------|------|-------------|
| Date | Date | UTC as date object. |

Returns `Date`

```ts
    // Assume your local timezone as IST/UTC+05:30
    let timezone: Timezone = new Timezone();
    let date: Date = new Date(2018,11,5,15,25,11);
    let convertedDate: Date = timezone.removeLocalOffset(date);
    console.log(convertedDate); //2018-12-05T15:25:11.000Z
```

## See also

* [Syncfusion React Scheduler](https://www.syncfusion.com/react-components/react-scheduler) - Component homepage
* [Time Scale Configuration](https://ej2.syncfusion.com/react/documentation/schedule/timescale) - Time grid settings
* [Scheduler API Reference](https://ej2.syncfusion.com/react/documentation/api/schedule) - Complete API documentation
* [Live Examples](https://ej2.syncfusion.com/react/demos/#/tailwind3/schedule/overview) - Interactive Scheduler demos
