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

The DateRangePicker component offers extensive UI customization through events and properties that enable flexible design adaptation to specific application needs.

## Day cell format

The [`renderDayCell`](https://ej2.syncfusion.com/react/documentation/api/daterangepicker/renderDayCellEventArgs#renderdaycelleventargs) event provides an option to customize the appearance of each day cell during rendering. This allows for applying custom styles or disabling specific dates based on application logic.

The following example demonstrates disabling weekends in every month using the `renderDayCell` event and the `e-disabled` class:

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

The starting day of the week varies by culture; by default, it is Sunday in the en-US culture. The `firstDayOfWeek` property allows customization of the week's starting day to match application requirements or cultural preferences.

The following example demonstrates customizing the first day of week to Monday:

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

The [`presets`](https://ej2.syncfusion.com/react/documentation/api/daterangepicker#presets) property enables predefined date ranges to be displayed in the DateRangePicker, allowing users to quickly select common ranges such as "Last 7 Days" or "This Month" without manual selection. Each preset consists of a label and corresponding start and end dates.

The following example demonstrates preset ranges for quick selection:

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