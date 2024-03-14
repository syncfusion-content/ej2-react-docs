---
layout: post
title: Clipboard in React Grid component | Syncfusion
description: Learn here all about Clipboard in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Clipboard 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Clipboard in React Grid component

The clipboard feature in the Syncfusion React Grid provides an easy way to copy selected rows or cells data into the clipboard. You can use keyboard shortcuts to perform the copy operation. The following list of keyboard shortcuts is supported in the Grid to copy selected rows or cells data into clipboard.

Interaction keys |Description
-----|-----
<kbd>Ctrl + C</kbd> |Copy selected rows or cells data into clipboard.
<kbd>Ctrl + Shift + H</kbd> |Copy selected rows or cells data with header into clipboard.

By using these keyboard shortcuts, you can quickly copy data from the grid to the clipboard, making it easy to paste the data into other applications or documents.

To enable the clipboard feature, you can use the grid component with your data source and selection property. 

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/clipboard-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/clipboard-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/clipboard-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/clipboard-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/clipboard-cs1" %}

## Copy to clipboard by external buttons

Copying data to the clipboard by using external buttons in the Syncfusion React Grid allows you to programmatically trigger the copy operation, making it more friendly, especially for those who may not be familiar with keyboard shortcuts or manual copying.

To copy selected rows or cells data into the clipboard with the help of external buttons, you can utilize the [copy](https://ej2.syncfusion.com/react/documentation/api/grid/clipboard/#copy) method available in the grid component. This is demonstrated in the following example,

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/clipboard-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/clipboard-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/clipboard-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/clipboard-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/clipboard-cs2" %}

## AutoFill

The AutoFill feature in the Syncfusion React Grid allows you to copy the data of selected cells and paste it into other cells by simply dragging the autofill icon of the selected cells to the desired cells. This feature provides a convenient way to quickly populate data in a grid.

**how to use the autofill feature**

1. Select the cells from which you want to copy data.

2. Hover over the bottom-right corner of the selection to reveal the autofill icon.

3. Click and hold the autofill icon, then drag it to the target cells where you want to paste the copied data.

4. Release the mouse to complete the autofill action, and the data from the source cells will be copied and pasted into the target cells.

This feature is enabled by defining [enableAutoFill](https://ej2.syncfusion.com/react/documentation/api/grid/#enableautofill) property as **true**. 

The following example demonstrates, how to enable autofill feature in the grid.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/clipboard-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/clipboard-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/clipboard-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/clipboard-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/clipboard-cs3" %}

> * If [enableAutoFill](https://ej2.syncfusion.com/react/documentation/api/grid/#enableautofill) is set to **true**, then the autofill icon will be displayed on cell selection to copy cells.
> * It requires the selection `mode` to be **Cell**,  `cellSelectionMode` to be **Box** and also `editMode` to be **Batch** .

### Limitations

* AutoFill does not automatically convert string values to number or date types. If the selected cells contain string data and are dragged to number-type cells, the target cells will display **NaN**. Similarly, when dragging string-type cells to date-type cells, the target cells will display as an **empty cell**. It is important to ensure data types are compatible before using autofill to avoid unexpected results.

* The AutoFill feature does not support generating non-linear series or sequential data automatically. Cannot create complex series or patterns by simply dragging cells with non-sequential data. The autofill feature is designed for copying and pasting data from a selected range of cells.

* The Auto Fill feature can only be applied to the viewport cell when enabling the features of virtual scrolling, infinite scrolling, or column virtualization in the grid.

## Paste

The Syncfusion React Grid provides a paste feature that allows you to copy the content of a cell or a group of cells and paste it into another set of cells. This feature allows you to quickly copy and paste content within the grid, making it convenient for data entry and manipulation.

Follow the steps below to use the Paste feature in the grid:

1. Select the cells from which you want to copy the content.

2. Press the <kbd>Ctrl + C</kbd> shortcut key to copy the selected cells' content to the clipboard.

3. Select the target cells where you want to paste the copied content.

4. Press the <kbd>Ctrl + V</kbd> shortcut key to paste the copied content into the target cells.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/clipboard-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/clipboard-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/clipboard-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/clipboard-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/clipboard-cs4" %}

> To perform paste functionality, it requires the selection **mode** to be **Cell**,  **cellSelectionMode** to be **Box** and also Batch Editing should be enabled.

### Limitations

* The Paste feature does not automatically convert string values to number or date types. If the selected cells contain string data and are dragged to number-type cells, the target cells will display **NaN**. Similarly, when dragging string-type cells to date-type cells, the target cells will display as an **empty cell**. It is important to ensure data types are compatible before using AutoFill to avoid unexpected results.