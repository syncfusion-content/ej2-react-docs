---
layout: post
title: Selection in React Gantt component | Syncfusion
description: Learn here all about Selection in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Selection 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Selection in React Gantt component

Selection provides an option to highlight a row or a cell. It can be done using arrow keys or by scrolling down the mouse. To disable selection in the Gantt component, set the [`allowSelection`](https://ej2.syncfusion.com/react/documentation/api/gantt/#allowselection) to `false`.

To select data, inject the [`Selection`](https://ej2.syncfusion.com/react/documentation/api/gantt/#selectionmodule) module into the Gantt control.

The Gantt component supports two types of selection that can be set by using the [`selectionSettings.type`](https://ej2.syncfusion.com/react/documentation/api/gantt/selectionSettings/#type) property. They are:

* `Single`: Sets a single value by default and allows only selection of a single row or a cell.
* `Multiple`: Allows you to select multiple rows or cells. To perform the multi-selection, press and hold the CTRL key and click the desired rows or cells.

To get start quickly with Selection and to know its type and behaviors, you can check on this video

{% youtube "https://www.youtube.com/watch?v=a-5EU7KxzhQ" %}

## Selection mode

The Gantt component supports three types of selection modes that can be set by using the [`selectionSettings.mode`](https://ej2.syncfusion.com/react/documentation/api/gantt/selectionSettings/#mode). They are:

* `Row`: Allows you to select only rows, and the row value is set by default.
* `Cell`: Allows you to select only cells.
* `Both`: Allows you to select rows and cells at the same time.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/selection-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/selection-cs11/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/selection-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/selection-cs11" %}

## Toggle selection

The toggle selection allows you to select and deselect a specific row or cell. To enable toggle selection, set the `enableToggle` property of the selectionSettings to `true`. If you click the selected row or cell, then it will be deselected and vice versa.
By default, the `enableToggle` property is set to `false`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/selection-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/selection-cs12/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/selection-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/selection-cs12" %}


## Hover highlighting

The hover highlighting feature in the Syncfusion React Gantt Chart enhances user interaction by highlighting **tree grid rows, chart task bars, header cells, and timeline cells** when hovered, making it easier to track tasks in complex project timelines. Enable it by setting the [enableHover](../../api/gantt/#enablehover) property to **true** in the component.

The following code example shows how to enable the hover highlighting in Gantt.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/selection-cs16/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/selection-cs16/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/selection-cs16/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/selection-cs16" %}

## Clear selection

You can clear the selected cells and selected rows by using a method called [`clearSelection`](https://ej2.syncfusion.com/react/documentation/api/gantt/#clearselection). The following code example demonstrates how to clear the selected rows in Gantt Chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/selection-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/selection-cs13/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/selection-cs13/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/selection-cs13" %}

## Get selected row indexes and records

You can get the selected row indexes by using the [`getSelectedRowIndexes`](https://ej2.syncfusion.com/react/documentation/api/gantt/#getselectedrowindexes) method. And by using [`getSelectedRecords`](https://ej2.syncfusion.com/react/documentation/api/gantt/#getSelectedRecords) method, you can get the selected record details.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/selection-cs14/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/selection-cs14/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/selection-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/selection-cs14" %}

## Multiple Selection based on condition

You can select multiple rows based on condition by using the [`selectRows`](https://ej2.syncfusion.com/react/documentation/api/grid/#selectrows) method.

In the following code, the rows which contains `TaskId` value as 3 and 4 are selected at initial rendering.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/selection-cs15/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/selection-cs15/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/selection-cs15/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/selection-cs15" %}

## Touch interaction

The touch interaction feature in the Gantt component allows you to easily interact with the Gantt chart on touch screen devices. This feature is particularly useful for enhancing usability on mobile devices and tablets, making it easier to navigate and interact with the Gantt chart's content using touch gestures.

[`Single Row SSelection`](selection/#selection-mode) : When you tap on a row using a touch screen, the tapped row is automatically selected. This offers a straightforward way to select single rows with a touch interface.

[`Multiple Row Selection`](selection/#multiple-row-selection) : To select multiple rows, you can utilize the multi-row selection feature. When you tap on a row, a popup is displayed, indicating the option for multi-row selection. Tap on the popup, and then proceed to tap on the desired rows you want to select. This allows you to select and interact with multiple rows simultaneously, as shown in the following image:

![Multiple selection](../images/multiple-selection.PNG)