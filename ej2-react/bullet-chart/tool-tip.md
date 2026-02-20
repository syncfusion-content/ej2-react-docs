---
layout: post
title: Tool tip in React Bullet chart component | Syncfusion
description: Learn here all about Tool tip in Syncfusion React Bullet chart component of Syncfusion Essential JS 2 and more.
control: Tool tip 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Tool tip in React Bullet chart component

When the mouse is hovered over a bar in the Bullet Chart, the tooltip displays important summary about the actual and the target bar values.

## Default Tooltip

The tooltip is not visible by default. To make it visible, set the [`enable`](https://ej2.syncfusion.com/react/documentation/api/bullet-chart/bulletTooltipSettingsModel#enable) property in the [`tooltip`](https://ej2.syncfusion.com/react/documentation/api/bullet-chart#tooltip) to **true**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/bullet-chart/code-path/working-with-data/local-data-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/bullet-chart/code-path/working-with-data/local-data-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/bullet-chart/preview-sample/working-with-data/local-data-cs5" %}

## Tooltip Template

Any HTML elements can be displayed in the tooltip by using the [`template`](https://ej2.syncfusion.com/react/documentation/api/bullet-chart/bulletTooltipSettingsModel#template) property of the [`tooltip`](https://ej2.syncfusion.com/react/documentation/api/bullet-chart#tooltip). You can use the **${target}** and **${value}** as place holders in the HTML element to display the value and target values from the data source of corresponding data point.

## Customize the Appearance of Tooltip

The [`fill`](./https://ej2.syncfusion.com/documentation/api/bullet-chart/bulletTooltipSettingsModel#fill) and [`border`](./https://ej2.syncfusion.com/documentation/api/bullet-chart/bulletTooltipSettingsModel#border) properties are used to customize the background color and border of the tooltip respectively. The [`textStyle`](./https://ej2.syncfusion.com/documentation/api/bullet-chart/bulletTooltipSettingsModel#textstyle) property in the tooltip is used to customize the font of the tooltip text.

## Tooltip Customization

The following properties can be used to customize the Bullet Chart tooltip.

* [`fill`](https://ej2.syncfusion.com/react/documentation/api/bullet-chart/bulletTooltipSettingsModel#fill) - Specifies the color of tooltip.
* [`border`](https://ej2.syncfusion.com/react/documentation/api/bullet-chart/bulletTooltipSettingsModel#border) - Specifies the tooltip border color and width.
* [`textStyle`](https://ej2.syncfusion.com/react/documentation/api/bullet-chart/bulletTooltipSettingsModel#textstyle) - Specifies the tooltip font family, font style, font weight, color and size.
