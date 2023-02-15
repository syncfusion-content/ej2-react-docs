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

## Marker

By default, the visibility of marker is false. You can enable marker by setting the visible property to true in marker settings. Using marker settings, you can customize marker differently for each series in Smith chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/smithchart/getting-started-cs21/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/smithchart/getting-started-cs21/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs21" %}

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
{% include code-snippet/smithchart/getting-started-cs22/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/smithchart/getting-started-cs22/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs22" %}

## Data labels

By default, the data labels are disabled. You can enable the data labels by setting the visible property to true in data label settings. For each point in series, a data label is created. The data labels for each series can be customized differently using the data label settings.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/smithchart/getting-started-cs23/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/smithchart/getting-started-cs23/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs23" %}

### Data label customization

Using data label settings in marker, you can customize the data label for each series differently. The following properties are used to customize data labels differently for each series:

* [`fill`]: Changes the fill color of the data label's shape.
* [`opacity`]: Controls the opacity of the data label's shape.
* [`border`]: Customizes the width and color of the border.
* [`textStyle`]: Customizes the font color, width, and size.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/smithchart/getting-started-cs24/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/smithchart/getting-started-cs24/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs24" %}