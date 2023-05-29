---
layout: post
title: Smithchart axis in React Smithchart component | Syncfusion
description: Learn here all about Smithchart axis in Syncfusion React Smithchart component of Syncfusion Essential JS 2 and more.
control: Smithchart axis 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Smithchart axis in React Smithchart component

Like chart, Smith chart also has support for two types of axis:

* Horizontal axis: Axis drawn as straight line in horizontal direction of the chart.
* Radial axis: Axis drawn as circular path.

## Labels customization

Axis labels are used to denote the kind of data that is bound to Smith chart. Using axis labels, you can easily identify the interval, in which the chart is rendered. The following properties are used to customize the axis labels for horizontal and radial axes:

* [`labelPosition`]: Places the labels either inside or outside the axis line.
* [`labelIntersectAction`]: Hides the labels when intersect with other labels.
* [`labelStyle`]: Customizes the properties such as font size, family, weight, and opacity.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/smithchart/getting-started-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/smithchart/getting-started-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs8" %}

## Gridlines

To make the data easier to read in a chart that displays axes, display horizontal axis and radial axis gridlines. Gridlines are extended from any horizontal axis or radial axis across the plot area of the Smith chart.
Both horizontal and radial axes have support for major and minor gridlines. Major gridlines are drawn from the position in which labels are rendered. Minor gridlines are drawn between two major gridlines as per the count you set in settings.

You can customize the major and minor gridlines using the following properties:

* [`width`]: Customizes the width of gridlines.
* [`dashArray`]: Decides whether the gridlines have to be rendered as normal line or dashed line.
* [`visible`]: Enables or disables the visibility of the gridlines.
* [`opacity`]: Customizes the opacity of the major gridlines.
* [`count`]: Customizes the count of the minor gridlines.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/smithchart/getting-started-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/smithchart/getting-started-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs9" %}

## Axis line

Axis line is a line in Smith chart that can be configured to denote the axis. You can customize the axis line using the following properties:

* [`width`]: Customize the width of the axis line.
* [`dashArray`]: Renders the axis line as dashed line.
* [`visible`]: Enables or disable the visibility of the axis line.

By default, visibility of the axis line is true. You can customize its visibility by using the visible property in axis line.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/smithchart/getting-started-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/smithchart/getting-started-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs10" %}