---
layout: post
title: Show Half-Yearly View in React Scheduler | Syncfusion
description: Learn how to show a half-yearly view in the Syncfusion React Scheduler by customizing the year view to render a specific range of consecutive months.
control: Scheduler
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Half-Yearly View in React Scheduler

The Year view of the [React Scheduler](https://www.syncfusion.com/react-components/react-scheduler) displays all 365 days and their appointments for a given year. You can customize this view by using the following properties:

* [`firstMonthOfYear`](https://ej2.syncfusion.com/react/documentation/api/schedule#firstmonthofyear)
* [`monthsCount`](https://ej2.syncfusion.com/react/documentation/api/schedule#monthscount)
* [`monthHeaderTemplate`](https://ej2.syncfusion.com/react/documentation/api/schedule#monthheadertemplate)

The following code example shows how to render only the last six months of a year in the Scheduler. To start with June, set `firstMonthOfYear` to 6 and `monthsCount` to 6.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/year-customizations-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/year-customizations-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/year-customizations-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/year-customizations-cs1" %}