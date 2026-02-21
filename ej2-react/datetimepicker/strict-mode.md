---
layout: post
title: Strict mode in React Datetimepicker component | Syncfusion
description: Learn here all about Strict mode in Syncfusion React Datetimepicker component of Syncfusion Essential JS 2 and more.
control: Strict mode 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Strict mode in React Datetimepicker component

When [`strictMode`](https://ej2.syncfusion.com/react/documentation/api/datetimepicker#strictmode) is enabled, the DateTimePicker validates user input against specified min/max constraints. The following behaviors apply:

- **Valid date-times within range**: Accepted and applied
- **Out-of-range date-times**: Automatically adjusted to the nearest boundary (min or max)
- **Invalid date-times**: Rejected; the component retains the previous value

The following example demonstrates the DateTimePicker in `strictMode` with a range from `5/5/2019 2:00 AM` to `5/25/2019 2:00 AM`. When attempting to enter `5/28/2019` (exceeding the maximum), the component sets the value to the maximum date-time (`5/25/2019 2:00 AM`). If an invalid date-time is entered, the component preserves the previous selection.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datetimepicker/default-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datetimepicker/default-cs13/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datetimepicker/default-cs13" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datetimepicker/default-cs14/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datetimepicker/default-cs14/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datetimepicker/default-cs14" %}

By default, `strictMode` is disabled (`false`), allowing users to enter invalid or out-of-range date-times in the input field. When an invalid or out-of-range date-time is entered:

- The model value is set to the out-of-range value or `null` respectively
- The input is highlighted with an `error` class to indicate the validation failure

The following example demonstrates `strictMode` as `false`, where out-of-range or invalid date-times are flagged with the error class but allowed:

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datetimepicker/default-cs15/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datetimepicker/default-cs15/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datetimepicker/default-cs15" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datetimepicker/default-cs16/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datetimepicker/default-cs16/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datetimepicker/default-cs16" %}

> If the value of `min` or `max` properties changed through code behind, then you have to update the `value` property to set within the range.
