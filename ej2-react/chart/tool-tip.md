---
layout: post
title: Tooltip in React Chart component | Syncfusion
description: Learn here all about Tooltip in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Tooltip 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip in React Chart component

The chart displays detailed information about a data point through a tooltip when the mouse pointer moves over the point.

<!-- markdownlint-disable MD036 -->

## Default tooltip

By default, the tooltip is not visible. You can enable the tooltip by setting the [`enable`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#enable) property to **true** and by injecting `Tooltip` into the `provide`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction/tooltip-cs1" %}

## Fixed tooltip

By default, the tooltip tracks the mouse movement. You can render the tooltip at a fixed position by using the [`location`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#location) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs11/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs11/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs11/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction/tooltip-cs11" %}

## Format the tooltip

By default, the tooltip displays the x- and y-values of a data point. Additional information can be shown by specifying a custom format. For example, the format `${series.name} ${point.x}` displays the series name along with the x-value of the data point.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction/tooltip-cs2" %}

<!-- markdownlint-disable MD013 -->

## Individual series format

Each series tooltip can be formatted separately by using the series [`tooltipFormat`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#tooltipformat) property.

> Note: When the series [`tooltipFormat`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#tooltipformat) property is specified, the tooltip for that series is displayed in the defined format. Otherwise, the global tooltip format is applied.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction/tooltip-cs3" %}

<!-- markdownlint-disable MD013 -->

## Tooltip template

Custom HTML content can be rendered in the tooltip by using the [`template`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#template) property. The `${x}` and `${y}` placeholders can be used within the template to display the x- and y-values of the corresponding data point.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction/tooltip-cs4" %}

## Enable highlight

By setting the [`enableHighlight`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#enablehighlight) property to **true**, all points in the hovered series are highlighted while the remaining points are dimmed. This behavior improves focus and readability during data analysis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs12/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs12/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs12/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction/tooltip-cs12" %}

## Tooltip mapping name

By default, the tooltip displays only the x- and y-values of a data point. Additional information from the data source can be shown by using the [`tooltipMappingName`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel#tooltipmappingname) property of the series. Use the `${point.tooltip}` placeholder in the tooltip format to display the mapped value.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction/tooltip-cs5" %}

## Customize the appearance of tooltip

The appearance of the tooltip can be customized by using the following properties:
- [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#fill) to set the background color
- [`border`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#border) to configure the tooltip border
- [`textStyle`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#textstyle) to customize the tooltip text style
The [`highlightColor`](https://ej2.syncfusion.com/react/documentation/api/chart#highlightcolor) property is used to change the color of a data point when it is highlighted during tooltip interaction.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction/tooltip-cs6" %}

## Closest tooltip

The [`showNearestTooltip`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel#shownearesttooltip) property displays the tooltip for the data point nearest to the pointer, even when the pointer is not directly positioned over the point.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs13/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs13/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs13/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction/tooltip-cs13" %}

## See also

* [Format the Tooltip Value](./how-to/tool-tip-format)
* [Create a Table in Tooltip](./how-to/tool-tip-table)
* [Show Tooltip Template on Button Click](https://support.syncfusion.com/kb/article/21534/how-to-show-tooltip-template-on-button-click-using-react-chart)