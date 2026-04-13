---
layout: post
title: Hyper link in React Pivot Table component | Syncfusion
description: Learn here all about Hyper link in Syncfusion React Pivot Table component of Syncfusion Essential JS 2 and more.
control: Hyper link 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Hyper link in React Pivot Table component

The Pivot Table component provides built-in support for displaying hyperlinks within individual cells. This feature allows users to link data in specific cells, enhancing interactivity and navigation.

Hyperlinks can be selectively enabled for various cell types, including:

- Row headers
- Column headers
- Value cells  
- Summary cells  

You can control hyperlink behavior using the [`hyperlinkSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#hyperlinksettings) property, which can be defined during the initial rendering through the code-behind.

## Available Hyperlink Settings

The following properties are available in hyperlinkSettings:

* [`showHyperlink`](https://ej2.syncfusion.com/react/documentation/api/pivotview/hyperlinkSettingsModel/#showhyperlink): It allows to set the visibility of hyperlink in all cells.
* [`showRowHeaderHyperlink`](https://ej2.syncfusion.com/react/documentation/api/pivotview/hyperlinkSettingsModel/#showrowheaderhyperlink): It allows to set the visibility of hyperlink in row headers.
* [`showColumnHeaderHyperlink`](https://ej2.syncfusion.com/react/documentation/api/pivotview/hyperlinkSettingsModel/#showcolumnheaderhyperlink): It allows to set the visibility of hyperlink in column headers.
* [`showValueCellHyperlink`](https://ej2.syncfusion.com/react/documentation/api/pivotview/hyperlinkSettingsModel/#showvaluecellhyperlink): It allows to set the visibility of hyperlink in value cells.
* [`showSummaryCellHyperlink`](https://ej2.syncfusion.com/react/documentation/api/pivotview/hyperlinkSettingsModel/#showsummarycellhyperlink): It allows to set the visibility of hyperlink in summary cells.
* [`headerText`](https://ej2.syncfusion.com/react/documentation/api/pivotview/hyperlinkSettingsModel/#headertext): It allows to set the visibility of hyperlink based on header text.
* [`conditionalSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/hyperlinkSettingsModel/#conditionalsettings): It allows to set the visibility of hyperlink based on specific condition.

> By default, the hyperlink options are disabled for all cells in the pivot table.

> User defined style can be applied to hyperlink using [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/pivotview/hyperlinkSettingsModel/#cssclass) property in [`hyperlinkSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#hyperlinksettings).

## Hyperlink for all cells

The pivot table provides an option to display hyperlinks across **all cells** currently visible in the table. To enable this functionality, set the [`showHyperlink`](https://ej2.syncfusion.com/react/documentation/api/pivotview/hyperlinkSettingsModel/#showhyperlink) property to **true** within the [`hyperlinkSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#hyperlinksettings).

Once enabled, hyperlinks will be shown consistently in row headers, column headers, value cells, and summary cells.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs170/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs170/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs170/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs170/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs170" %}

## Hyperlink for row headers

The pivot table provides a way to display hyperlinks specifically in **row header cells** that are currently visible. To enable this functionality, set the [`showRowHeaderHyperlink`](https://ej2.syncfusion.com/react/documentation/api/pivotview/hyperlinkSettingsModel/#showrowheaderhyperlink) property to **true** within the [`hyperlinkSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#hyperlinksettings). This ensures that only the row headers will display hyperlinks, while other cell types remain unaffected.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs171/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs171/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs171/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs171/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs171" %}

## Hyperlink for column headers

The pivot table provides an option to display hyperlinks specifically in column header cells that are currently visible. To enable this functionality, set the [`showColumnHeaderHyperlink`](https://ej2.syncfusion.com/react/documentation/api/pivotview/hyperlinkSettingsModel/#showcolumnheaderhyperlink) property to **true** within the [`hyperlinkSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#hyperlinksettings) object. This ensures that only the column headers will display hyperlinks, while other cell types remain unaffected.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs172/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs172/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs172/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs172/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs172" %}

## Hyperlink for value cells

The pivot table provides support for displaying hyperlinks specifically in value cells that are currently visible. To enable this option, set the [`showValueCellHyperlink`](https://ej2.syncfusion.com/react/documentation/api/pivotview/hyperlinkSettingsModel/#showvaluecellhyperlink) property to **true** within the [`hyperlinkSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#hyperlinksettings) object. This ensures that only the value cells will display hyperlinks, while other cell types remain unaffected.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs173/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs173/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs173/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs173/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs173" %}

## Hyperlink for summary cells

The pivot table provides support for displaying hyperlinks specifically in summary cells that are currently visible. To enable this option, set the [`showSummaryCellHyperlink`](https://ej2.syncfusion.com/react/documentation/api/pivotview/hyperlinkSettingsModel/#showsummarycellhyperlink) property to **true** within the [`hyperlinkSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#hyperlinksettings) object. This ensures that only the summary cells will display hyperlinks, while other cell types remain unaffected.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs174/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs174/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs174/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs174/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs174" %}

## Condition based hyperlink

The pivot table supports displaying hyperlinks in specific cells based on defined conditions. This functionality can be configured through code-behind during initial rendering using the [`conditionalSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/hyperlinkSettingsModel/#conditionalsettings) property.

* [`measure`](https://ej2.syncfusion.com/react/documentation/api/pivotview/conditionalSettingsModel/#measure): Specifies the value field name for which the hyperlink should be shown when the condition is met.
* [`conditions`](https://ej2.syncfusion.com/react/documentation/api/pivotview/conditionalSettingsModel/#conditions): Specifies the operator type such as **Equals**, **GreaterThan**, **LessThan**, etc.
* [`value1`](https://ej2.syncfusion.com/react/documentation/api/pivotview/conditionalSettingsModel/#value1): Sets the starting value for the condition.
* [`value2`](https://ej2.syncfusion.com/react/documentation/api/pivotview/conditionalSettingsModel/#value2): Sets the ending value for the condition (used in range-based comparisons).

In the example below, the pivot table is configured to display hyperlinks only in cells where the "Units Sold" field value is between **150** and **500**. This highlights specific aggregated values that meet the given condition.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs175/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs175/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs175/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs175/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs175" %}

## Header based hyperlink

The pivot table supports displaying hyperlinks in cells based on specific row or column headers. This functionality can be enabled using the [`headerText`](https://ej2.syncfusion.com/react/documentation/api/pivotview/hyperlinkSettingsModel/#headertext) property, which is configured through code-behind during initial rendering.

In the below code example, the value **FY 2015.Q1.Units Sold** is assigned to [`headerText`](https://ej2.syncfusion.com/react/documentation/api/pivotview/hyperlinkSettingsModel/#headertext), which means the pivot table will show hyperlinks only in cells that match this specific header combination.

N> The **dot(.)** character in **FY 2015.Q1.Units Sold** is used by default to identify the header levels in the pivot table's row and column. It can be changed by setting the [headerDelimiter](https://ej2.syncfusion.com/react/documentation/api/pivotview/valueSortSettingsModel/#headerdelimiter) in the [valueSortSettings](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#valuesortsettings) property to any other delimiter instead of the default separator.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs176/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs176/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs176/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs176/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs176" %}

## Event

The pivot table triggers the [`hyperlinkCellClick`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#hyperlinkcellclick) event whenever a hyperlink cell is clicked. This event allows you to either customize the clicked cell or retrieve information about it.

It provides two parameters:

* [`currentCell`](https://ej2.syncfusion.com/react/documentation/api/pivotview/hyperCellClickEventArgs/#currentcell): Refers to the clicked cell element, which can be modified as needed.
* [`cancel`](https://ej2.syncfusion.com/react/documentation/api/pivotview/hyperCellClickEventArgs/#cancel): If set to **true**, prevents any changes from being applied to the cell.
* [`data`](https://ej2.syncfusion.com/react/documentation/api/pivotview/hyperCellClickEventArgs/#data): Contains detailed information about the clicked cell, including its value, row and column headers, position, and whether it’s a summary cell.
* [`nativeEvent`](https://ej2.syncfusion.com/react/documentation/api/pivotview/hyperCellClickEventArgs/#nativeevent): Represents the original browser event triggered by the click, useful for advanced event handling.

In the example below, when a hyperlink cell is clicked, a custom attribute (**data-url**) is added to the cell to redirect users to the Syncfusion React Pivot Table Hyperlink [Demo](https://ej2.syncfusion.com/demos/#/tailwind3/pivot-table/hyper-link.html). The [`cancel`](https://ej2.syncfusion.com/react/documentation/api/pivotview/hyperCellClickEventArgs/#cancel) property is set to **false** to enable this interaction.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs177/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs177/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs177/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs177/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs177" %}

## See Also

* [Apply condition based hyperlink for specific row or column](./how-to/apply-condition-based-hyper-link-for-specific-row-or-column)