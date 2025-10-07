---
layout: post
title: Clipboard in React TreeGrid | Syncfusion
description: Learn here all about Clipboard in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Clipboard
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Clipboard in React TreeGrid 

The clipboard feature copies selected rows or cells to the system clipboard.

The following keyboard shortcuts are supported for copying rows or cells data.

Interaction keys | Description
-----|-----
<kbd>Ctrl + C</kbd> | Copy selected rows or cells to the clipboard.
<kbd>Ctrl + Shift + H</kbd> | Copy selected rows or cells with column headers.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/clip-board-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/clip-board-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/code-snippet/treegrid/clip-board-cs1" %}

## Copy to clipboard by external buttons

Invoke the [copy](https://ej2.syncfusion.com/react/documentation/api/treegrid/#copy) method to copy selected rows or cells using external buttons.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/clip-board-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/clip-board-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/code-snippet/treegrid/clip-board-cs2" %}

## Copy Hierarchy Modes

TreeGrid supports multiple copy modes via the [copyHierarchyMode](https://ej2.syncfusion.com/react/documentation/api/treegrid/filterSettingsModel/#hierarchymode) property.

* **Parent** : Default mode. Copies the selected records along with their parent records. If no parent exists, only the selected records are copied.

* **Child** : Copies the selected records along with their child records. If no child exists, only the selected records are copied.

* **Both** : Copies the selected records along with both parent and child records. If neither exists, only the selected records are copied.

* **None** : Copies only the selected records.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/clip-board-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/clip-board-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/code-snippet/treegrid/clip-board-cs3" %}

## AutoFill

AutoFill copies the data of selected cells and pastes it into adjacent cells by dragging the AutoFill handle. Enable this feature by setting `enableAutoFill` to true.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/clip-board-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/clip-board-cs4/app/App.tsx %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/code-snippet/treegrid/clip-board-cs4" %}

> * When `enableAutoFill` is true, the AutoFill handle appears on cell selection.  
> * It requires the selection `mode` to be `Cell`,  `cellSelectionMode` to be `Box` and also Batch Editing should be enabled.

### Limitations of AutoFill

* Since the string values are not parsed to number and date type, so when the selected string type cells are dragged to number type cells then it will display as **NaN**. For date type cells, when the selected string type cells are dragged to date type cells then it will display as an **empty cell**.
* Linear series and sequential data generation are not supported.

## Paste

Copy the content of a cell or a group of cells with <kbd>Ctrl + C</kbd> and paste into another set of cells with <kbd>Ctrl + V</kbd>.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/clip-board-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/clip-board-cs5/app/App.tsx %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/code-snippet/treegrid/clip-board-cs5" %}

> To perform paste functionality, it requires the selection `mode` to be `Cell`, `cellSelectionMode` to be `Box` and also Batch Editing should be enabled.

### Limitations of Paste Functionality

* Since the string values are not parsed to number and date type, so when the copied string type cells are pasted to number type cells then it will display as **NaN**. For date type cells, when the copied string format cells are pasted to date type cells then it will display as an **empty cell**.

> Refer to the [React TreeGrid](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for highlights. Explore the [React TreeGrid example](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to learn how to present and manipulate data.