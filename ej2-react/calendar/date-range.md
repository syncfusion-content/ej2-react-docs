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

The Calendar provides an option to select a date within a specified range using the [`min`](https://ej2.syncfusion.com/react/documentation/api/calendar#min) and [`max`](https://ej2.syncfusion.com/react/documentation/api/calendar#max) properties. The min date must be less than the max date.

The example below allows selection of a date within the range from the 7th to the 27th of a month.

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

> If you change the `min` or `max` properties programmatically, update the `value` property to ensure it falls within the new range. If the current `value` is less than `min`, it will be updated to `min`; if it is greater than `max`, it will be updated to `max`.