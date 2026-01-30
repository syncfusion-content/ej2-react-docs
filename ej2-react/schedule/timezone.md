---
layout: post
title: Timezone in React Schedule component | Syncfusion
description: Learn here all about Timezone in Syncfusion React Schedule component of Syncfusion Essential JS 2 and more.
control: Scheduler 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Timezone support in React Schedule component

The Scheduler component uses the current system timezone by default. To schedule events according to a different timezone, use the [`timezone`](https://ej2.syncfusion.com/react/documentation/api/schedule#timezone) property. In addition to applying a specific timezone at the Scheduler level, individual appointments can have their own timezones using the [`startTimezone`](https://helpej2.syncfusion.com/react/documentation/api/schedule/field#starttimezone) and [`endTimezone`](https://helpej2.syncfusion.com/react/documentation/api/schedule/field#endtimezone) properties within the event fields collection.

> Note: The **timezone** property applies only to appointment processing and the current time indicator.

## Understanding date manipulation in JavaScript

The `new Date()` constructor in JavaScript returns the exact current date with the complete time and timezone information. For example, it may return a value such as `Wed Dec 12 2018 05:23:27 GMT+0530 (India Standard Time)`, indicating the current date as December 12, 2018, and the current time as 5:23 AM in the IST timezone.

## Scheduler without a specific timezone

When the Scheduler's `timezone` property is not set, appointments are displayed based on the client system's timezone. As a result, the same appointment may appear with different start and end times to users in different timezones.

The following code example displays an appointment from 9:00 AM to 10:00 AM when you open the Scheduler from any of the timezone. This is because, we are providing the start and end time enclosing with `new Date()` which works based on the client browser's timezone.

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

When a timezone is set through the [`timezone`](https://ej2.syncfusion.com/react/documentation/api/schedule#timezone) property, appointments are displayed according to the Scheduler's timezone, regardless of the user's system timezone. In the following example, appointments are shown in Eastern Time (UTC -05:00).

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

## Display events on same time everywhere with no time difference

Setting [`timezone`](https://ej2.syncfusion.com/react/documentation/api/schedule#timezone) to UTC for Scheduler will display the appointments on same time as in the database for all the users in different time zone.

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

It is possible to set different timezone for Scheduler events by setting [`startTimezone`](https://helpej2.syncfusion.com/react/documentation/api/schedule/field#starttimezone) and [`endTimezone`](https://helpej2.syncfusion.com/react/documentation/api/schedule/field#endtimezone) properties within the [`eventSettings`](https://helpej2.syncfusion.com/react/documentation/api/schedule/eventSettings) option. It allows each appointment to maintain different timezone and displays on Scheduler with appropriate time differences.

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

## Add or remove timezone names to/from the timezone collection

Instead of displaying all the timezone names within the timezone collection (more than 200 are displayed on the editor window timezone fields by default), you can customize the timezone collection at application end as shown in the following example.

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
| Date | Date | UTC time as date object.|
| Timezone | String | Timezone.|

Returns `number`

```ts
    // Assume your local timezone as IST/UTC+05:30
    let timezone: Timezone = new Timezone();
    let date: Date = new Date(2018,11,5,15,25,11);
    let timeZoneOffset: number = timezone.offset(date,"Europe/Paris");
    console.log(timeZoneOffset); //-60
```

### convert

This method is used to convert the passed date from one timezone to another timezone.

| Parameters | Type | Description |
|------------|------|-------------|
| Date | Date | UTC time as date object.|
| fromOffset | number/string | Timezone from which date need to be converted.|
| toOffset | number/string | Timezone to which date need to be converted.|

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
| Date | Date | UTC time as a date object.|
| Timezone | String | Timezone.|

Returns `Date`

```ts
    // Assume your local timezone as IST/UTC+05:30
    let timezone: Timezone = new Timezone();
    let date: Date = new Date(2018,11,5,15,25,11);
    let convertedDate: Date = timezone.add(date, "Europe/Paris");
    console.log(convertedDate); //2018-12-05T05:25:11.000Z
```

### remove

This method is used to remove the time difference between passed UTC date and timezone.

| Parameters | Type | Description |
|------------|------|-------------|
| Date | Date | UTC as date object.|
| Timezone | String | Timezone.|

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
| Date | Date | UTC as date object.|

Returns `Date`

```ts
    // Assume your local timezone as IST/UTC+05:30
    let timezone: Timezone = new Timezone();
    let date: Date = new Date(2018,11,5,15,25,11);
    let convertedDate: Date = timezone.removeLocalOffset(date);
    console.log(convertedDate); //2018-12-05T15:25:11.000Z
```

> You can refer to our [React Scheduler](https://www.syncfusion.com/react-components/react-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [React Scheduler example](https://ej2.syncfusion.com/react/demos/#/bootstrap5/schedule/overview) to knows how to present and manipulate data.
