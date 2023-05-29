---
layout: post
title: Smithchart legend in React Smithchart component | Syncfusion
description: Learn here all about Smithchart legend in Syncfusion React Smithchart component of Syncfusion Essential JS 2 and more.
control: Smithchart legend 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Smithchart legend in React Smithchart component

Legend is a key used in smithchart; it contains symbols and descriptions. The legends provide a valuable information for interpreting what the Smith chart displays. They can be represented in various colors, shapes, or other identifiers based on the data. The legends are used to denote the series rendered in the Smith chart.

## Position and alignment

### Position

By default, the visibility of the legend is false. To enable the legend, set the visible property to true in legendSettings. The default position for the legend is bottom. By using the [`position`] property, you can either place the legend at the bottom, top, right, or left of the Smith chart. To use the legend in Smith chart, import and inject the SmithchartLegend from chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/smithchart/getting-started-cs14/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/smithchart/getting-started-cs14/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs14" %}

#### Custom position

The legends are not limited to place at the default positions only. You can place a legend anywhere in the Smith chart by setting the position as custom in legendSettings and specifying the x and y-coordinates using the x and y properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/smithchart/getting-started-cs15/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/smithchart/getting-started-cs15/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs15" %}

### Legend alignment

By default, the legends are aligned in center position. Using the [`alignment`] property, you can align the legend in near and far locations of the Smith chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/smithchart/getting-started-cs16/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/smithchart/getting-started-cs16/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs16" %}

## Customization

### Legend shape

By default, the legends are rendered in a circle shape. The color of the shape will be same as the series color. Using the [`shape`] property in legend settings, you can change the shape of the legend to rectangle, triangle, and so on.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/smithchart/getting-started-cs17/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/smithchart/getting-started-cs17/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs17" %}

### Legend size

By default, a legend takes 20 to 25% of the chart's height horizontally when it is placed at the top or bottom position and 20 to 25% of the width vertically when placing at the left or right. You can change the legend size using the [`width`] and [`height`] properties of the legendSettings.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/smithchart/getting-started-cs18/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/smithchart/getting-started-cs18/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs18" %}

### Padding

You can customize the space between two legend items and space between legend shape and text as needed. For customizing the space between two legend items, use the [`itemPadding`] property. To control the space between legend shape and text, use the [`shapePadding`] property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/smithchart/getting-started-cs19/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/smithchart/getting-started-cs19/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs19" %}

## Toggle visibility

By default, the series name is displayed in the legend. You can collapse the visibility of a series by clicking the legend for the particular series and toggle the series visibility to true or false using the [`toggleVisibility`] property. By default, this property is set to true.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/smithchart/getting-started-cs20/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/smithchart/getting-started-cs20/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs20" %}