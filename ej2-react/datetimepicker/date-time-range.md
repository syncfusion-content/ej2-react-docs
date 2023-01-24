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

DateTimePicker provides an option to select a date and time value within a specified range by using the [`min`](https://ej2.syncfusion.com/react/documentation/api/datetimepicker#min) and [`max`](https://ej2.syncfusion.com/react/documentation/api/datetimepicker#max) properties. Always the min value has to be lesser than the max value.

When the min and max properties are configured and the selected datetime value is out-of-range or invalid, then the model value will be set to `out of range` datetime value or `null` respectively with highlighted `error` class to indicates the datetime is out of range or invalid.

The value property depends on the min/max with respect to [`strictMode`](./strict-mode/) property.

The below example allows selecting a date within the range from 7th to 27th day in a month.

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