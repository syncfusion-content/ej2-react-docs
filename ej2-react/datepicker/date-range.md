---
layout: post
title: Date range in React Datepicker component | Syncfusion
description: Learn here all about Date range in Syncfusion React Datepicker component of Syncfusion Essential JS 2 and more.
control: Date range 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Date range in React Datepicker component

DatePicker provides an option to select a date value within a specified range by using the [`min`](https://ej2.syncfusion.com/react/documentation/api/datepicker#min) and [`max`](https://ej2.syncfusion.com/react/documentation/api/datepicker#max) properties. Always the min value has to be lesser than the max value.

When the min and max properties are configured and the selected date value is out-of-range or invalid, then the model value will be set to `out of range` date value or `null` respectively with highlighted `error` class to indicates the date is out of range or invalid.

The value property depends on the min/max with respect to [`strictMode`](./strict-mode/) property. The below example allows to select a date within a range from 7th to 27th days in a month.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datepicker/default-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datepicker/default-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datepicker/default-cs5" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datepicker/default-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datepicker/default-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datepicker/default-cs6" %}

> If the value of `min` or `max` properties changed through code behind. Then you have to update the `value` property to set within the range.