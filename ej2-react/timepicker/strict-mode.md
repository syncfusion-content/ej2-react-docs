---
layout: post
title: Strict mode in React Timepicker component | Syncfusion
description: Learn here all about Strict mode in Syncfusion React Timepicker component of Syncfusion Essential JS 2 and more.
control: Strict mode 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Strict mode in React Timepicker component

The [`strictMode`](https://ej2.syncfusion.com/react/documentation/api/timepicker#strictmode) property enforces validation for time entry within the specified min/max range. When enabled:

- **Invalid time values** revert to the previously valid value
- **Out-of-range values** adjust to the nearest boundary (min or max)

The following example demonstrates the TimePicker in `strictMode` with min/max range of `10:00 AM` to `4:00 PM` . It allows you to enter only valid time within the specified range. If you enter the out-of-range value like `8:00 PM`, the value sets to the max time `4:00 PM` as the value `8:00 PM` is greater than `max` value of `4:00 PM`. If you enter invalid time value like `9:00 tt`, the value sets to the previous value.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timepicker/default-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timepicker/default-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/timepicker/default-cs7" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timepicker/default-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timepicker/default-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/timepicker/default-cs8" %}

## Default Behavior (strictMode = false)

By default, the TimePicker operates with `strictMode` set to `false`, which allows entry of invalid or out-of-range times. When this occurs:

- **Out-of-range values**: Set to the out-of-range time with an `error` class applied
- **Invalid values**: Set to `null` with an `error` class applied to indicate validation failure

The following example demonstrates the `strictMode` as `false`. Here, it allows to enter the valid or invalid value in textbox. If you are entering the out-of-range or invalid time value, then the model value will be set to `out of range` time value or `null` respectively with highlighted `error` class to indicates the time is out of range or invalid.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timepicker/default-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timepicker/default-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/timepicker/default-cs9" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timepicker/default-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timepicker/default-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/timepicker/default-cs10" %}

> If the value of `min` or `max` property is changed through code behind, update the `value` property to set within the range.