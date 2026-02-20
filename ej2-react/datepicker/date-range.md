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

The DatePicker component restricts date selection to a specified range using the [`min`](https://ej2.syncfusion.com/react/documentation/api/datepicker/#min) and [`max`](https://ej2.syncfusion.com/react/documentation/api/datepicker/#max) properties. The `min` value must be less than the `max` value.

When a selected date is out-of-range or invalid, the model value is set to the out-of-range value or `null` respectively, and the input is highlighted with an `error` class to indicate the date validation failure.

The value property behavior depends on both the min/max range and the [`strictMode`](./strict-mode) property. With `strictMode` enabled, out-of-range values are automatically adjusted; when disabled, invalid or out-of-range values are flagged but allowed. The following example demonstrates selecting a date within a range from the 7th to the 27th of a month.

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