---
layout: post
title: Axis types in React Stock chart component | Syncfusion
description: Learn here all about Axis types in Syncfusion React Stock chart component of Syncfusion Essential JS 2 and more.
control: Axis types 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Axis types in React Stock chart component

## DateTime axis

DateTime axis uses date time scale and displays the date time values as axis labels in the specified format. To use DateTime axis, set the [`valueType`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartAxisModel#valuetype) of axis to `DateTime`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/appearance/title-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/appearance/title-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stock-chart/appearance/title-cs3" %}

>Note: To use this axis, we need to inject DateTime using `<Inject services={[DateTime]}>` method and set the [`valueType`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartAxisModel#valuetype) of axis to `DateTime`.

## DateTimeCategory axis

DateTimeCategory axis in the stock chart is used to display only business days. To use DateTimeCategory axis, set the [`valueType`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartAxisModel#valuetype) of axis to `DateTimeCategory`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/axis-types-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/axis-types-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stock-chart/axis-types-cs2" %}

>Note: To use this axis, we need to inject DateTimeCategory using `<Inject services={[DateTimeCategory]}>` method and set the [`valueType`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartAxisModel#valuetype) of axis to `DateTimeCategory`.

## Logarithmic axis

<!-- markdownlint-disable MD033 -->

Logarithmic axis uses logarithmic scale and it is very useful in visualizing data, when it has numerical values in both lower order of magnitude (eg: 10<sup>-6</sup>) and higher order of magnitude (eg: 10<sup>6</sup>). To use Logarithmic axis, set the [`valueType`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartAxisModel#valuetype) of axis to `Logarithmic`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/axis-types-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/axis-types-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stock-chart/axis-types-cs1" %}

>Note: To use this axis, we need to inject Logarithmic using `<Inject services={[Logarithmic]}>` method and set the [`valueType`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartAxisModel#valuetype) of axis to `Logarithmic`.

## See also

* [Axis Customization](./axis-customization)