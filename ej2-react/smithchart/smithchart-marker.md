---
layout: post
title: Smithchart marker in React Smithchart component | Syncfusion
description: Learn here all about Smithchart marker in Syncfusion React Smithchart component of Syncfusion Essential JS 2 and more.
control: Smithchart marker 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Smithchart marker in React Smithchart component

The markers and data labels are used to provide information about the data points in the series. You can add a shape to adorn each data point. By default, both the marker and data label are disabled in Smith chart. You can enable them by setting the visible property to true in marker and data label settings.

## Enable marker for Smith Chart

You can add and customize the markers in the Smith Chart. This can be achieved by setting the [`visible`](https://ej2.syncfusion.com/react/documentation/api/smithchart/seriesmarkermodel#visible) property to `true` in the [`marker`](https://ej2.syncfusion.com/react/documentation/api/smithchart/smithchartseriesmodel#marker) object. The sample below enables markers for the first series. 

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/smithchart/code-path/getting-started-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/smithchart/code-path/getting-started-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/smithchart/preview-sample/getting-started-cs4" %}

### Marker customization

Using marker settings in series, you can customize the marker for each series differently. You can customize the markers using the following properties differently for each series in the Smith chart:

* [`width`]: Controls the width of the marker.
* [`height`]: Controls the height of the marker.
* [`fill`]: Customizes the fill color of the marker.
* [`opacity`]: Customizes the opacity of the marker.
* [`border`]: Controls the width and color of the marker's border.
* [`shape`]: Changes the shape of the marker.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/smithchart/code-path/getting-started-cs22/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/smithchart/code-path/getting-started-cs22/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs22" %}

## Enable dataLabel for Smith Chart marker

You can add data labels to improve the readability of the Smith Chart. This can be achieved by setting the [`visible`](https://ej2.syncfusion.com/react/documentation/api/smithchart/seriesmarkerdatalabelmodel#visible) property to `true` in the [`dataLabel`](https://ej2.syncfusion.com/react/documentation/api/smithchart/seriesmarkermodel#datalabel) object. The data labels are arranged automatically to avoid overlap based on the position of each series. The sample below enables data labels for the first series.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/smithchart/code-path/getting-started-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/smithchart/code-path/getting-started-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/smithchart/preview-sample/getting-started-cs5" %}

### Data label customization

Using data label settings in marker, you can customize the data label for each series differently. The following properties are used to customize data labels differently for each series:

* [`fill`]: Changes the fill color of the data label's shape.
* [`opacity`]: Controls the opacity of the data label's shape.
* [`border`]: Customizes the width and color of the border.
* [`textStyle`]: Customizes the font color, width, and size.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/smithchart/code-path/getting-started-cs24/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/smithchart/code-path/getting-started-cs24/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs24" %}