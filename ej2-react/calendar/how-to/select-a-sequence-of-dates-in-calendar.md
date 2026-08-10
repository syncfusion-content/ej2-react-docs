---
layout: post
title: How to select sequence of dates in React Calendar | Syncfusion
description: Select a full week of dates in the React Calendar by combining isMultiSelection with Moment.js to compute the week range.
control: Select a sequence of dates in calendar 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to select sequence of dates in React Calendar

The following example demonstrates how to select the week dates for a chosen date in the Calendar using the [`values`](https://ej2.syncfusion.com/react/documentation/api/calendar#values) property when [`isMultiSelection`](https://ej2.syncfusion.com/react/documentation/api/calendar#ismultiselection) is enabled. Moment.js is used in this sample to calculate the start and end of the week for the selected date.

> To parse, format, and manipulate date values, this sample uses Moment.js. Install it with the following command:

`npm i moment`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/calendar/howto-multi-selection-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/calendar/howto-multi-selection-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/calendar/howto-multi-selection-cs1" %}