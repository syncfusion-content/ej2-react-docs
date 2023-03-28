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

The clipboard provides an option to copy selected rows or cells data into the clipboard.

The following list of keyboard shortcuts is supported in the Grid to copy selected rows or cells data into clipboard.

Interaction keys |Description
-----|-----
<kbd>Ctrl + C</kbd> |Copy selected rows or cells data into clipboard.
<kbd>Ctrl + Shift + H</kbd> |Copy selected rows or cells data with header into clipboard.

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

To copy selected rows or cells data into clipboard with help of external buttons, you need to invoke the [`copy`](https://ej2.syncfusion.com/angular/documentation/api/grid/clipboard/#copy) method.

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

AutoFill Feature allows you to copy the data of selected cells and paste it to another cells by just dragging the autofill icon of the selected cells up to required cells. This feature is enabled by defining [`enableAutoFill`](https://ej2.syncfusion.com/angular/documentation/api/grid/#enableautofill) property as **true**.

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

> * If [`enableAutoFill`](https://ej2.syncfusion.com/angular/documentation/api/grid/#enableautofill) is set to **true**, then the autofill icon will be displayed on cell selection to copy cells.
> * It requires the selection [`mode`](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettingsModel/#mode) to be **Cell**,  [`cellSelectionMode`](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettingsModel/#cellselectionmode) to be **Box** and also Batch Editing should be enabled.

### Limitations of AutoFill

* Since the string values are not parsed to number and date type, so when the selected string type cells are dragged to number type cells then it will display as **NaN**. For date type cells, when the selected string type cells are dragged to date type cells then it will display as an **empty cell**.
* Linear series and the sequential data generations are not supported in this autofill feature.

## Paste

You can able to copy the content of a cell or a group of cells by selecting the cells and pressing <kbd>Ctrl + C</kbd> shortcut key and paste it to another set of cells by selecting the cells and pressing <kbd>Ctrl + V</kbd> shortcut key.

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

> To perform paste functionality, it requires the selection **mode** to be **Cell**,  [`cellSelectionMode`](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettingsModel/#cellselectionmode) to be **Box** and also Batch Editing should be enabled.

### Limitations of Paste Functionality

Since the string values are not parsed to number and date type, so when the copied string type cells are pasted to number type cells then it will display as **NaN**. For date type cells, when the copied string format cells are pasted to date type cells then it will display as an **empty cell**.