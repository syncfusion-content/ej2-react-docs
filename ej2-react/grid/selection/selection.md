---
layout: post
title: Selection in React Grid component | Syncfusion
description: Learn here all about Selection in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Selection 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Selection in React Grid component

Selection provides an option to highlight a row or cell or column.
Selection can be done through simple Mouse down or Arrow keys.
To disable selection in the Grid, set the [`allowSelection`](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowselection) to false.

The grid supports two types of selection that can be set by using the
[`selectionSettings.type`](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#type). They are:

* **Single** - The **Single** is set by default. Allows you to select only a single row or cell or column.
* **Multiple** - It allows you to select multiple rows or cells or columns.
To perform the multi-selection, press and hold CTRL key and click the desired rows or cells or columns.
To select range of rows or cells or columns, press and hold the SHIFT key and click the rows or cells or columns.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/selection-cs13/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/selection-cs13/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/selection-cs13/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/selection-cs13/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/selection-cs13" %}

## Selection mode

The grid supports three types of selection mode that can be set by using
the [`selectionSettings.mode`](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#mode). They are:

* **Row** - The **Row** value is set by default. Allows you to select rows only.
* **Cell** - Allows you to select cells only.
* **Both** - Allows you to select rows and cells at the same time.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/selection-cs14/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/selection-cs14/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/selection-cs14/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/selection-cs14/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/selection-cs14" %}

## Touch interaction

When you tap a grid row on touchscreen device, the tapped row is selected.
It also shows a popup ![Selection](../images/selection.jpg)  for multi-row selection.
To select multiple rows or cells, tap the popup![Multi Selection](../images/mselection.jpg)  and then tap the desired rows or cells.

> For multi-selection, It requires the selection [`type`](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings/#type) to be **Multiple**.

The following screenshot represents a grid touch selection in the device.

![Touch Interaction](../images/touch-selection.jpg)

> [`getSelectedRecords`](https://ej2.syncfusion.com/angular/documentation/api/grid/#getselectedrecords) method has been used to retrieve the selected records.

## See Also

* [How to select row at initial rendering by record ID in React Grid](https://www.syncfusion.com/forums/152812/how-to-select-row-at-initial-rendering-by-record-id-in-react-grid)
* [How to update the row while deselecting by using keyboard down arrow in React Grid](https://www.syncfusion.com/forums/152287/how-to-update-the-row-while-deselecting-by-using-keyboard-down-arrow-in-react-grid)