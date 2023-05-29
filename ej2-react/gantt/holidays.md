---
layout: post
title: Holidays in React Gantt component | Syncfusion
description: Learn here all about Holidays in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Holidays 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Holidays in React Gantt component

Non-working days in a project can be displayed in the Gantt component using the [`holidays`](https://ej2.syncfusion.com/react/documentation/api/gantt/#holidays) property. Each holiday can be defined with the following properties:

* [`from`](https://ej2.syncfusion.com/react/documentation/api/gantt/holiday/#from): Defines start date of the holiday(s).
* [`to`](https://ej2.syncfusion.com/react/documentation/api/gantt/holiday/#to): Defines end date of the holiday(s).
* [`label`](https://ej2.syncfusion.com/react/documentation/api/gantt/holiday/#label): Defines the description or label for the holiday.
* [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/gantt/holiday/#cssclass): Formats the holidays label in the Gantt chart.

To highlight the holidays, inject the [`DayMarkers`](https://ej2.syncfusion.com/react/documentation/api/gantt/#daymarkersmodule) module into the Gantt component.

The following code example shows how to display the non-working days in the Gantt component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/holiday-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/holiday-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/holiday-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/holiday-cs1" %}