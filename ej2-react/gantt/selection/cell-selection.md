---
layout: post
title: Cell selection in React Gantt Chart component | Syncfusion
description: Learn here all about Cell selection in Syncfusion React Gantt Chart component of Syncfusion Essential JS 2 and more.
control: Cell selection 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Cell selection in React Gantt Chart component

You can select a cell in the Gantt Chart component by setting the [selectionSettings.mode](https://ej2.syncfusion.com/react/documentation/api/gantt/selectionSettings#mode) property to cell. You can get the selected cell information using the [getSelectedRowCellIndexes](https://ej2.syncfusion.com/react/documentation/api/gantt/selection#getselectedrowcellindexes) method. This method returns the result as an object collection, which has `cellIndexes` and `rowIndex` information of the selected cells.

Find the code example below to enable the cell selection in Gantt.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/selection-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/selection-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/selection-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/selection-cs1" %}

## Selecting multiple cells

You can select multiple cells by setting the [selectionSettings.type](https://ej2.syncfusion.com/react/documentation/api/gantt/selectionSettings#type) property to multiple and the [selectionSettings.mode](https://ej2.syncfusion.com/react/documentation/api/gantt/selectionSettings#mode) property to cell. Multiple cells can be selected by holding the CTRL key and selecting the cells. The following code example demonstrates how to select multiple cells.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/selection-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/selection-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/selection-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/selection-cs2" %}

## Selecting a cell dynamically

You can select a cell dynamically using the [selectCell](https://ej2.syncfusion.com/react/documentation/api/gantt/selection#selectcell) method. Refer to the following code example for details.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/selection-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/selection-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/selection-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/selection-cs3" %}

## Customize cell selection action

While selecting a cell in Gantt, the [cellSelecting](https://ej2.syncfusion.com/react/documentation/api/gantt#cellselecting) and [cellSelected](https://ej2.syncfusion.com/react/documentation/api/gantt#cellselected) event will be triggered. The [cellSelecting](https://ej2.syncfusion.com/react/documentation/api/gantt#cellselecting) event will be triggered on initialization of cell selection action, and you can get the current selecting cell information to prevent the selection of a particular cell in a particular row. The [cellSelected](https://ej2.syncfusion.com/react/documentation/api/gantt#cellselected) event will be triggered on completion of cell selection action, and you can get the current selected cell’s information. The following code example demonstrates how to prevent the selection of the cell using the [cellSelecting](https://ej2.syncfusion.com/react/documentation/api/gantt#cellselecting) event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/selection-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/selection-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/selection-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/selection-cs4" %}

## Limitations for cell selection

* Cell-based selection is not supported when virtualization is enabled.