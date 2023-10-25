---
layout: post
title: Scrolling in React Grid Component | Syncfusion
description: Learn here all about Scrolling in Syncfusion Essential React Grid component, its elements and more.
control: Scrolling 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Scrolling in React Grid Component

 The scrollbar will be displayed in the grid when content exceeds the element [width](https://ej2.syncfusion.com/react/documentation/api/grid/#width) or [height](https://ej2.syncfusion.com/react/documentation/api/grid/#height).
 The vertical and horizontal scrollbars will be displayed based on the following criteria:

* The vertical scrollbar appears when the total height of rows present in the grid exceeds its element height.
* The horizontal scrollbar appears when the sum of columns width exceeds the grid element width.
* The [height](https://ej2.syncfusion.com/react/documentation/api/grid/#height) and [width](https://ej2.syncfusion.com/react/documentation/api/grid/#width) are used to set the grid height and width, respectively.

> The default value for [height](https://ej2.syncfusion.com/react/documentation/api/grid/#height) and [width](https://ej2.syncfusion.com/react/documentation/api/grid/#width) is **auto**.

## Set width and height

To specify the [width](https://ej2.syncfusion.com/react/documentation/api/grid/#width) and [height](https://ej2.syncfusion.com/react/documentation/api/grid/#height) of scroller in pixel, set the pixel value as number.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/scrolling-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/scrolling-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/scrolling-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/scrolling-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/scrolling-cs4" %}

## Responsive with parent container

Specify the [width](https://ej2.syncfusion.com/react/documentation/api/grid/#width) and [height](https://ej2.syncfusion.com/react/documentation/api/grid/#height) as **100%** to make the grid element fill its parent container.
Setting the [height](https://ej2.syncfusion.com/react/documentation/api/grid/#height) to **100%** requires the grid parent element to have explicit height.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/scrolling-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/scrolling-cs5/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/scrolling-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/scrolling-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/scrolling-cs5" %}

## Sticky Header

You can make the Grid column headers remain fixed while scrolling by using the [enableStickyHeader](https://ej2.syncfusion.com/react/documentation/api/grid/#enablestickyheader) property.

In the below demo, the Grid headers will be sticky while scrolling the Grid's parent div element.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/scrolling-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/scrolling-cs6/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/scrolling-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/scrolling-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/scrolling-cs6" %}

## Scroll To Selected Row

You can scroll the grid content to the selected row position by using the [rowSelected](https://ej2.syncfusion.com/react/documentation/api/grid/#rowselected) event.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/scrolling-cs7/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/scrolling-cs7/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/scrolling-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/scrolling-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/scrolling-cs7" %}

## Hide the scrollbar when the content is not overflown

You can hide the scrollbar of Grid content by using the [hideScroll](https://ej2.syncfusion.com/react/documentation/api/grid/#hidescroll) method when the content doesn't overflow its parent element.

In the following sample, we have invoked the [hideScroll](https://ej2.syncfusion.com/react/documentation/api/grid/#hidescroll) method inside the [dataBound](https://ej2.syncfusion.com/react/documentation/api/grid/#databound) event.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/scrolling-cs8/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/scrolling-cs8/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/scrolling-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/scrolling-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/scrolling-cs8" %}