---
layout: post
title: Tool tip in React Chart component | Syncfusion
description: Learn here all about Tool tip in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Tool tip 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Tool tip in React Chart component

Chart will display details about the points through tooltip, when the mouse is moved over the point

<!-- markdownlint-disable MD036 -->

## Default Tooltip

<!-- markdownlint-disable MD012 -->
By default, tooltip is not visible. Enable the tooltip by setting [`enable`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel/#enable) property to true and by injecting `Tooltip` module into the `services`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/user-interaction/tooltip-cs1" %}

## Format the Tooltip

By default, tooltip shows information of x and y value in points. In addition to that, you can show more information in tooltip. For example the format '${series.name} ${point.x}' shows series name and point x value.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/user-interaction/tooltip-cs2" %}

<!-- markdownlint-disable MD013 -->

## Individual Series Format

 You can format the each series tooltip separately using series `tooltipFormat` property.

 >Note: If series `tooltipFormat` is given, it shows the tooltip for that series in that format, or else it will take tooltip format.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/user-interaction/tooltip-cs3" %}

<!-- markdownlint-disable MD013 -->

## Tooltip Template

Any HTML elements can be displayed in the tooltip by using the ‘template’ property of the tooltip. You can use the ${x} and ${y} as place holders in the HTML element to display the x and y values of the corresponding data point.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/user-interaction/tooltip-cs4" %}

## Tooltip Mapping Name

By default, tooltip shows information of x and y value in points. You can show more information from data source in tooltip by using the `tooltipMappingName` property of the tooltip. You can use the `${point.tooltip}` as place holders to display the specified tooltip content.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/user-interaction/tooltip-cs5" %}

## Customize the Appearance of Tooltip

The [`fill`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel/#fill) and [`border`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel/#border) properties are used to customize the background color and border of the tooltip respectively. The [`textStyle`](https://ej2.syncfusion.com/react/documentation/api/chart/tooltipSettingsModel/#textstyle) property in the tooltip is used to customize the font of the tooltip text. The [`highlightColor`](https://ej2.syncfusion.com/react/documentation/api/chart/#highlightcolor) property is used to customize the point color while hovering for tooltip.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/user-interaction/tooltip-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/user-interaction/tooltip-cs6" %}

## See Also

* [Format the tooltip value](./how-to/#format-the-tooltip-value)
* [Create a table in tooltip](./how-to/#create-a-table-in-tooltip)