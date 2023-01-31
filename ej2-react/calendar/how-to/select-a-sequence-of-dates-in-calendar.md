---
layout: post
title: Select a sequence of dates in calendar in React Calendar component | Syncfusion
description: Learn here all about Select a sequence of dates in calendar in Syncfusion React Calendar component of Syncfusion Essential JS 2 and more.
control: Select a sequence of dates in calendar 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Select a sequence of dates in calendar in React Calendar component

The following example demonstrates how to select the week dates of chosen date in the Calendar using [`values`](https://ej2.syncfusion.com/react/documentation/api/calendar#values) property, when [`isMultiSelection`](https://ej2.syncfusion.com/react/documentation/api/calendar#ismultiselection) property is enabled. Methods of Moment.js is used in this sample for calculating the start and end of week from the selected date.

>To parse, format and manipulating the date values, here we used momentum. You can install it by using below command

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