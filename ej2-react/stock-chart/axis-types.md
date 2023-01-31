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

## DateTime Axis

Date time axis uses date time scale and displays the date time values as axis labels in the specified format and set the [`valueType`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartAxisModel/#valuetype) of axis to DateTime.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/appearance/title-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/appearance/title-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/appearance/title-cs3" %}

>Note: To use datetime axis, we need to inject DateTime using `<Inject services={[DateTime]}>` method and
set the [`valueType`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartAxisModel/#valuetype) of axis to DateTime.

## Logarithmic Axis

<!-- markdownlint-disable MD033 -->

Logarithmic axis uses logarithmic scale and it is very useful in visualizing data, when it has numerical values in both lower order of magnitude (eg: 10<sup>-6</sup>) and higher order of magnitude (eg: 10<sup>6</sup>) and set the [`valueType`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartAxisModel/#valuetype) of axis to `Lograthmic`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/axis-types-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/axis-types-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/axis-types-cs1" %}

>Note: To use log  axis, we need to inject `Logarithmic`  using `<Inject services={[Logarithmic]}>` method and
set the [`valueType`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartAxisModel/#valuetype) of axis to `Logarithmic`.

## See Also

* [Axis Customization](./axis-customization/)