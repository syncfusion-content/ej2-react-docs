---
layout: post
title: React Grid - Clipboard | Syncfusion
description: React Grid clipboard supports copying and pasting rows or cells, handling formats, integrating with external apps, and configuring clipboard behavior.
control: Clipboard 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Clipboard in React Grid Component

The clipboard feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid enables copying selected rows or cells to the system clipboard for use in other applications. The grid supports keyboard shortcuts for quick copy operations.

Interaction keys | Description
-----|-----
<kbd>Ctrl + C</kbd> | Copy selected rows or cells to the clipboard
<kbd>Ctrl + Shift + H</kbd> | Copy selected rows or cells with header to the clipboard

Examples below show grid configuration for clipboard operations. Configure the grid's `dataSource` and `selectionSettings` properties.

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

Copying data using external buttons enables programmatic triggering of the copy operation, which can improve accessibility compared with only supporting keyboard shortcuts.

Use the grid's [copy](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#copy) method to copy selected rows or cells via external controls.

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

The AutoFill feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid copies values from a selected cell range into target cells by dragging the AutoFill handle. This provides a fast method for populating repetitive or sequential data.

Enable AutoFill by setting the [enableAutoFill](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#enableautofill) property to `true`.

Using AutoFill

1. Select the source cells.
2. Hover over the bottom-right corner of the selection to reveal the AutoFill handle.
3. Drag the handle to the target cells.
4. Release the mouse to apply the copied values to the target range.

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


> * If `enableAutoFill` is `true`, the AutoFill handle appears when cells are selected.
> * AutoFill requires the selection `mode` to be `Cell`, `cellSelectionMode` to be `Box`, and `editSetttings.mode` to be `Batch`.

### Limitations

- AutoFill does not convert strings to numeric or date types. Pasting string values into number or date-typed cells can yield NaN or empty cells. Ensure data types are compatible before using autoFill.
- AutoFill does not generate complex or non-linear sequences; it copies values from the selected range and does not infer advanced patterns.
- When virtual scrolling, infinite scrolling, or column virtualization is enabled, autoFill applies only to cells in the current viewport.

## Paste

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid supports pasting clipboard content into selected cells for quick data entry and updates. Standard shortcuts allow copying and pasting between ranges within the grid or between the grid and external applications.

Steps to paste:

1. Select the source cells and press <kbd>Ctrl + C</kbd> to copy.
2. Select the target cells.
3. Press <kbd>Ctrl + V</kbd> to paste the copied content.

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


> Paste requires selection `mode` to be `Cell`, `cellSelectionMode` to be `Box`, and `Batch` editing to be enabled.

### Limitations

- Paste does not convert strings to number or date types; incompatible types can yield NaN or empty cells.