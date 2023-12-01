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

Range selection in a DateRangePicker can be made-to-order with desire restrictions based on application needs.

## Restrict the range within a range

You can restrict the minimum and maximum date that can be allowed as start date, end date in a range selection with help of [`min`](https://ej2.syncfusion.com/react/documentation/api/daterangepicker#min), [`max`](https://ej2.syncfusion.com/react/documentation/api/daterangepicker#max) properties.
* `min` – sets the minimum  date that can be selected as startDate.
* `max` – sets the maximum date that can be selected as endDate

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

> If the value of `min` or `max` properties changed through code behind, then you have to update the `start date`, `end date` property to set within the range. Or else , if the `start` and `end` date is out of specified date range, a validation error class will be appended to the input element. If `strictMode` is enabled, and both the start, end date is lesser than the min date then start and end date will be updated with `min` date. If both the start and end date is higher than the max date then start and end date will be updated with `max` date. Or else, if startDate is less than `min` date, startDate will be updated with `min` date or if endDate is greater than `max` date, endDate will be updated with the `max` date.

## Range span

Days span between ranges can be limited in order to avoid excess or less days selection towards the required days in a range. In this, minimum and maximum span that can be allowed within the date range can be customized by [`minDays`](https://ej2.syncfusion.com/react/documentation/api/daterangepicker#mindays), [`maxDays`](https://ej2.syncfusion.com/react/documentation/api/daterangepicker#maxdays) properties.

* `minDays`- Sets the minimum number of days between start date and end date.
* `maxDays`- Sets the maximum number of days between start date and end date.

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

DateRangePicker provides the option to limit the user towards entering the valid date only. With strict mode, you can set only valid selection. Also, If any invalid range is specified then the date range value will reset to previous value.
This restriction can be availed by enabling the strict mode by setting true to [`strictMode`](https://ej2.syncfusion.com/react/documentation/api/daterangepicker#strictmode) property.

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