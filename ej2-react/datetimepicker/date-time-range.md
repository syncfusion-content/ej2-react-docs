---
layout: post
title: Date time range in React Datetimepicker component | Syncfusion
description: Learn here all about Date time range in Syncfusion React Datetimepicker component of Syncfusion Essential JS 2 and more.
control: Date time range 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Date time range in React Datetimepicker component

## DateTime Restriction

The DateTimePicker component restricts date and time selection to a specified range using the [`min`](https://ej2.syncfusion.com/react/documentation/api/datetimepicker/#min) and [`max`](https://ej2.syncfusion.com/react/documentation/api/datetimepicker/#max) properties. The `min` value must be less than the `max` value.

When a selected date-time is out-of-range or invalid, the model value is set to the out-of-range value or `null` respectively, and the input is highlighted with an `error` class to indicate the date-time validation failure.

The value property behavior depends on both the min/max range and the [`strictMode`](./strict-mode) property. With `strictMode` enabled, out-of-range values are automatically adjusted; when disabled, invalid or out-of-range values are flagged but allowed.

The following example demonstrates selecting a date and time within the range from the 7th to the 27th of a month:

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datetimepicker/default-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datetimepicker/default-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datetimepicker/default-cs5" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datetimepicker/default-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datetimepicker/default-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datetimepicker/default-cs6" %}

> If the value of `min` or `max` properties changed through code behind, then you have to update the `value` property to set within the range.

## Time Restriction

Time selection can be restricted to a specified range using the [`minTime`](https://ej2.syncfusion.com/react/documentation/api/datetimepicker/#minTime) and [`maxTime`](https://ej2.syncfusion.com/react/documentation/api/datetimepicker/#maxTime) properties. The `minTime` value must be less than the `maxTime` value.

When minTime and maxTime are set, the component will prioritize min if minTime is less than the current min time, and max if maxTime is greater than the current max time. Conversely, it will prioritize minTime if it is greater than the current min time, and maxTime if it is less than the current max time. These behaviors apply only when min and max Dates are selected or pre-bounded, with minTime and maxTime values set for all other dates apart from min and max dates.

The value property depends on the minTime/maxTime with respect to [`strictMode`](./strict-mode) property.

The below example allows selecting a time within the range from 10:00 AM to 8:30 PM of each day.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datetimepicker/default-cs17/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datetimepicker/default-cs17/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datetimepicker/default-cs17" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datetimepicker/default-cs18/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datetimepicker/default-cs18/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datetimepicker/default-cs18" %}
