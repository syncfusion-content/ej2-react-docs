---
layout: post
title: Setting cell size in React Dashboard Layout  component | Syncfusion
description: Learn here all about Setting size of cells in Syncfusion React Dashboard Layout  component of Syncfusion Essential JS 2 and more.
control: Dashboard Layout 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Setting cell size in React Dashboard Layout component

The layout's dimensions are determined by the parent element's width and height. A responsive or static layout can be created by assigning percentage or fixed dimensions to the parent element. The layout adapts to mobile resolutions by transforming into a stacked orientation so that panels are displayed in a vertical column.

The **Dashboard Layout** is a grid-structured component that can be split into subsections of equal size known as cells. The total number of cells in each row is defined using the [`columns`](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout#columns) property. The width of each cell is automatically calculated based on the total number of cells in a row, and the height of a cell is equal to its width by default. The height of these cells can be configured using the [`cellAspectRatio`](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout#cellaspectratio) property (cellwidth/cellheight ratio) which defines the cell width-to-height ratio.

The number of rows within the layout is unlimited and depends on the number and positions of panels. Panels act as data containers and are positioned over these cells.

## Modifying cell dimensions

Dashboard content can require different cell dimensions. Use the [`columns`](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout#columns) and [`cellAspectRatio`](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout#cellaspectratio) properties to modify grid cell sizes to meet those requirements.

The following sample demonstrates how to modify cell size using the `columns` and `cellAspectRatio` properties. In the following sample, the width of the parent element is dividing it into 5 equal cells based on the columns property value resulting the width of each cell as 100px. The height of these cells will be 50px based on the cellAspectRatio value 100/50 (i.e., for every 100px of width, 50px will be the height of the cell).

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dashboard-layout/modifying-cell-size-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dashboard-layout/modifying-cell-size-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dashboard-layout/modifying-cell-size-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dashboard-layout/modifying-cell-size-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.css" %}
{% include code-snippet/dashboard-layout/modifying-cell-size-cs1/App.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/modifying-cell-size-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dashboard-layout/modifying-cell-size-cs1" %}

## Configuring cell spacing

The spacing between each panel in a row and column is defined using the [`cellSpacing`](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout#cellspacing) property. Adding spacing between panels improves visual clarity and layout readability.

The following sample demonstrates the usage of the [`cellSpacing`](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout#cellspacing) property for clear data representation.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dashboard-layout/setting-cell-spacing-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dashboard-layout/setting-cell-spacing-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dashboard-layout/setting-cell-spacing-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dashboard-layout/setting-cell-spacing-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.css" %}
{% include code-snippet/dashboard-layout/setting-cell-spacing-cs1/App.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/setting-cell-spacing-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dashboard-layout/setting-cell-spacing-cs1" %}

## Graphical representation of layout

These cells collectively form a grid-structured layout, which is hidden by default. Enable the [`showGridLines`](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout#showgridlines) property to display the gridlines that indicate cell boundaries. Gridlines help during initial dashboard design for panel sizing and placement.

In the following sample, the gridlines indicate the layout's cell split-up and the data containers placed over these cells are known as panels.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dashboard-layout/graphical-layout-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dashboard-layout/graphical-layout-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dashboard-layout/graphical-layout-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dashboard-layout/graphical-layout-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.css" %}
{% include code-snippet/dashboard-layout/graphical-layout-cs1/App.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/graphical-layout-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dashboard-layout/graphical-layout-cs1" %}

## Rendering component in right-to-left direction

Render the Dashboard Layout in right-to-left direction by setting the [enableRtl](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout#enablertl) API to true.

The following sample demonstrates Dashboard Layout in right-to-left direction.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dashboard-layout/rtl-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dashboard-layout/rtl-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dashboard-layout/rtl-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dashboard-layout/rtl-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.css" %}
{% include code-snippet/dashboard-layout/rtl-cs1/App.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/rtl-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dashboard-layout/rtl-cs1" %}

> Refer to the [React Dashboard Layout](https://www.syncfusion.com/react-ui-components/react-dashboard-layout) feature tour page for its groundbreaking feature representations. Also explore the [React Dashboard Layout example](https://ej2.syncfusion.com/react/demos/#/tailwind3/dashboard-layout/default) to knows how to present and manipulate data.
