---
layout: post
title: Half-yearly view in React Schedule component | Syncfusion
description: Learn here all about Half yearly view in Syncfusion React Schedule component of Syncfusion Essential JS 2 and more.
control: Scheduler
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Half-yearly view in React Schedule component

The year view of the Schedule component displays all 365 days and their appointments for a given year. You can customize this view by using the following properties:

* [`firstMonthOfYear`](https://ej2.syncfusion.com/react/documentation/api/schedule#firstmonthofyear)
* [`monthsCount`](https://ej2.syncfusion.com/react/documentation/api/schedule#monthscount)
* [`monthHeaderTemplate`](https://ej2.syncfusion.com/react/documentation/api/schedule#monthheadertemplate)

In the following code example, you can see how to render only the last six months of a year in the Schedule component. To start with June, set `firstMonthOfYear` to 6 and `monthsCount` to 6 to render six consecutive months.

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