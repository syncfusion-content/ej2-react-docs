---
layout: post
title: Date range in React Calendar component | Syncfusion
description: Learn here all about Date range in Syncfusion React Calendar component of Syncfusion Essential JS 2 and more.
control: Date range 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Date range in React Calendar component

Calendar provides an option to select a date value within a specified range by using the [`min`](https://ej2.syncfusion.com/react/documentation/api/calendar#min) and [`max`](https://ej2.syncfusion.com/react/documentation/api/calendar#max) properties. Always the min date has to be lesser than the max date.

The below example allows to select a date within a range from 7th to 27th dates in a month.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/calendar/default-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/calendar/default-cs11/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/calendar/default-cs11" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/calendar/default-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/calendar/default-cs12/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/calendar/default-cs12" %}

> If the value of `min` or `max` properties changed through code behind. Then you have to update the `value` property to set within the range. Or else, if the value is out of specified date range and less than `min` date, value property will be updated with min date or the value is higher than max date, value property will be updated with `max` date.