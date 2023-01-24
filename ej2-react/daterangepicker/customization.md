---
layout: post
title: Customization in React Daterangepicker component | Syncfusion
description: Learn here all about Customization in Syncfusion React Daterangepicker component of Syncfusion Essential JS 2 and more.
control: Customization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customization in React Daterangepicker component

DateRangePicker makes available for the UI customization which can be achieved with events, properties that are available with this component.

## Day cell format

[`renderDayCell`](https://ej2.syncfusion.com/react/documentation/api/daterangepicker/renderDayCellEventArgs#renderdaycelleventargs) is a event which provides the option to customize each day cell while rendering itself.
The following example disables the weekends of every month using `renderDayCell` event. Here we have used the `e-disabled` class to highlight the disabled date

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/daterangepicker/default-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/daterangepicker/default-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/daterangepicker/default-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/daterangepicker/default-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/daterangepicker/default-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/daterangepicker/default-cs4" %}

## First day of week

Start day in a week will differ based on culture. But, you can customize this based on application needs also. For this, you can make use of `firstDayOfWeek` property. By default, first day of week in en-US is a Sunday.

In following sample, it customized to Monday with help of this property.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/daterangepicker/default-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/daterangepicker/default-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/daterangepicker/default-cs5" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/daterangepicker/default-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/daterangepicker/default-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/daterangepicker/default-cs6" %}

## Preset ranges

DateRangePicker provides an option to set the predefined ranges in a DateRangePicker via [`presets`](https://ej2.syncfusion.com/react/documentation/api/daterangepicker#presets) properties with the corresponding label. This property will accept the values in the order of label, start date (date object), end date (date object) and append these ranges in a component for quick selection.

In following sample, you can choose the frequently using ranges options from the list of ranges itself easily.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/daterangepicker/default-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/daterangepicker/default-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/daterangepicker/default-cs7" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/daterangepicker/default-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/daterangepicker/default-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/daterangepicker/default-cs8" %}

## See Also

* [How to customize DateRangePicker using cssClass](./how-to/customization-using-cssclass)
* [How to disable DateRangePicker component](./how-to/disable-the-daterangepicker-component)
* [How to customize the DateRangePicker day header](./how-to/customize-the-daterangepicker-day-header)