---
layout: post
title: Strict mode in React Datepicker component | Syncfusion
description: Learn here all about Strict mode in Syncfusion React Datepicker component of Syncfusion Essential JS 2 and more.
control: Strict mode 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Strict mode in React Datepicker component

When [`strictMode`](https://ej2.syncfusion.com/react/documentation/api/datepicker#strictmode) is enabled, the DatePicker validates user input against specified min/max constraints. The following behaviors apply:

- **Valid dates within range**: Accepted and applied
- **Out-of-range dates**: Automatically adjusted to the nearest boundary (min or max)
- **Invalid dates**: Rejected; the component retains the previous value

The following example demonstrates the DatePicker in `strictMode` with a range from the 5th to the 25th of May. When attempting to enter the 28th (exceeding the maximum), the component sets the value to the maximum date (25th). If an invalid date is entered, the component preserves the previous selection.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datepicker/default-cs19/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datepicker/default-cs19/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datepicker/default-cs19" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datepicker/default-cs20/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datepicker/default-cs20/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datepicker/default-cs20" %}

By default, `strictMode` is disabled (`false`), allowing users to enter invalid or out-of-range dates in the input field. When an invalid or out-of-range date is entered:

- The model value is set to the out-of-range value or `null` respectively
- The input is highlighted with an `error` class to indicate the validation failure

The following example demonstrates the `strictMode` as `false`. Here, it allows to enter the valid or invalid value in textbox. If you are entering out-of-range or invalid date value, then the model value will be set to `out of range` date value or `null` respectively with highlighted  `error` class to indicates the date is out of range or invalid.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datepicker/default-cs21/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datepicker/default-cs21/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datepicker/default-cs21" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/datepicker/default-cs22/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/datepicker/default-cs22/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datepicker/default-cs22" %}

> If the value of `min` or `max` properties changed through code behind. Then you have to update the `value` property to set within the range.
