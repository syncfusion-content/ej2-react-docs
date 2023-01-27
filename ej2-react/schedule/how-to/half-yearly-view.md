---
layout: post
title: Half yearly view in React Schedule component | Syncfusion
description: Learn here all about Half yearly view in Syncfusion React Schedule component of Syncfusion Essential JS 2 and more.
control: Half yearly view 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Half yearly view in React Schedule component

The year view of our scheduler displays all the 365 days and their related appointments of a particular year. You can customize the year view by using the following properties.

* [`firstMonthOfYear`](https://ej2.syncfusion.com/react/documentation/api/schedule#firstmonthofyear)
* [`monthsCount`](https://ej2.syncfusion.com/react/documentation/api/schedule#monthscount)
* [`monthHeaderTemplate`](https://ej2.syncfusion.com/react/documentation/api/schedule#monthheadertemplate)

In the following code example, you can see how to render only the last six months of a year in the scheduler. To start with the month of  June, `firstMonthYear` is set to 6 and `monthsCount` is set to 6 to render only 6 months.

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