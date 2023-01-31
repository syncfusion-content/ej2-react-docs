---
layout: post
title: Scrolling in React Treegrid component | Syncfusion
description: Learn here all about Scrolling in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Scrolling 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Scrolling in React Treegrid component

The scrollbar will be displayed in the treegrid when content exceeds the element [`width`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#width) or [`height`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#height). The vertical and horizontal scrollbars will be displayed based on the following criteria:

* The vertical scrollbar appears when the total height of rows present in the treegrid exceeds its element height.
* The horizontal scrollbar appears when the sum of columns width exceeds the treegrid element width.
* The [`height`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#height) and [`width`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#width) are used to set the treegrid height and width, respectively.

> The default value for [`height`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#height) and [`width`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#width) is *auto*.

## Set width and height

To specify the [`width`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#width) and [`height`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#height) of the scroller in the pixel, set the pixel value to a number.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/scrolling-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/scrolling-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/scrolling-cs1" %}

## Responsive with parent container

Specify the [`width`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#width) and [`height`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#height) as **100%** to make the treegrid element fill its parent container. Setting the [`height`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#height) to **100%** requires the treegrid parent element to have explicit height.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/responsive-scrolling-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/responsive-scrolling-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/responsive-scrolling-cs1" %}

## Scroll to selected row

You can scroll the treegrid content to the selected row position by using the [`rowSelected`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#rowselected) event.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/scrolling-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/scrolling-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/scrolling-cs2" %}
