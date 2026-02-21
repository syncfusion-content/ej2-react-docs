---
layout: post
title: Range selection in React Daterangepicker component | Syncfusion
description: Learn here all about Range selection in Syncfusion React Daterangepicker component of Syncfusion Essential JS 2 and more.
control: Range selection 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Range selection in React Daterangepicker component

Range selection in the DateRangePicker can be customized with specific restrictions based on application requirements.

## Restrict the range within a range

The [`min`](https://ej2.syncfusion.com/react/documentation/api/daterangepicker/#min) and [`max`](https://ej2.syncfusion.com/react/documentation/api/daterangepicker/#max) properties restrict the allowable date range:

* `min` – Sets the minimum date that can be selected as the start date
* `max` – Sets the maximum date that can be selected as the end date

In the following sample, you can select a date range from 15th date of this month to 15th date of next month.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/daterangepicker/default-cs17/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/daterangepicker/default-cs17/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/daterangepicker/default-cs17" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/daterangepicker/default-cs18/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/daterangepicker/default-cs18/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/daterangepicker/default-cs18" %}

**Important Behavior Notes:**

When `min` or `max` properties change programmatically, update the start and end dates accordingly. If dates fall outside the specified range:

- **Without strict mode**: An `error` class is applied to the input element to indicate validation failure
- **With strict mode enabled**:
  - If both dates are less than `min`, both are adjusted to `min`
  - If both dates exceed `max`, both are adjusted to `max`
  - If only start date is below `min`, it is adjusted to `min`
  - If only end date exceeds `max`, it is adjusted to `max`

## Range span

The number of days in a selected range can be restricted using [`minDays`](https://ej2.syncfusion.com/react/documentation/api/daterangepicker/#mindays) and [`maxDays`](https://ej2.syncfusion.com/react/documentation/api/daterangepicker/#maxdays) properties. This ensures users select ranges within the acceptable number of days:

* `minDays` – Sets the minimum number of days required between start and end dates
* `maxDays` – Sets the maximum number of days allowed between start and end dates

In the following sample, the range selection should be greater than 3 days and less than 8 days else it won’t set.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/daterangepicker/default-cs19/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/daterangepicker/default-cs19/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/daterangepicker/default-cs19" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/daterangepicker/default-cs20/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/daterangepicker/default-cs20/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/daterangepicker/default-cs20" %}

## Strict mode

When [`strictMode`](https://ej2.syncfusion.com/react/documentation/api/daterangepicker/#strictmode) is enabled, the DateRangePicker validates that only valid date ranges within the specified constraints can be selected. If an invalid range is specified, the component reverts to the previously valid value. This mode ensures data integrity by preventing invalid selections.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/daterangepicker/default-cs21/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/daterangepicker/default-cs21/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/daterangepicker/default-cs21" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/daterangepicker/default-cs22/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/daterangepicker/default-cs22/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/daterangepicker/default-cs22" %}