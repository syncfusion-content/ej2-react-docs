---
layout: post
title: Smithchart series in React Smithchart component | Syncfusion
description: Learn here all about Smithchart series in Syncfusion React Smithchart component of Syncfusion Essential JS 2 and more.
control: Smithchart series 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Smithchart series in React Smithchart component

You can add any number of series to Smith chart as needed. By using the series setting, you can add or customize the data. For the points and data source added in the series, line can be drawn. You can customize the each series with marker, data label, animation, opacity, and so on.

## points or data source

For adding values in the Smith chart, you can use either points or data source in the series. Both the points and data source should be an array of object, which should contain the field names resistance and rectangle.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/smithchart/getting-started-cs25/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/smithchart/getting-started-cs25/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs25" %}

## Series customization

Using the following options in series settings, you can customize the each series in Smith chart:

* [`fill`]: Customizes the fill color for the series.
* [`enableSmartLabels`]: Places the data labels on Smith chart without overlapping with each other.
* [`visibility`]: Handles the visibility of the series.
* [`opacity`]: Controls the opacity of the series line.
* [`width`]: Customizes the width of the series line.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/smithchart/getting-started-cs26/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/smithchart/getting-started-cs26/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs26" %}