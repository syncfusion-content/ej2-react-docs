---
layout: post
title: Check box selection in React TreeGrid component | Syncfusion
description: Learn here all about Check box selection in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Check box selection 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Check box selection in React TreeGrid

Checkbox selection enables selecting multiple TreeGrid records using a checkbox in each row.

To render a checkbox in each TreeGrid row, add a column with the [type](https://ej2.syncfusion.com/react/documentation/api/treegrid/column#type) property set to **CheckBox**.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/selection-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/selection-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/selection-cs2" %}

> By default, selection is allowed by clicking a TreeGrid row or its checkbox. To allow selection only through checkboxes, set [selectionSettings.checkboxOnly](https://ej2.syncfusion.com/react/documentation/api/treegrid/selectionSettings#checkboxonly) to **true**.
> Selection can be persisted on all the operations using [selectionSettings.persistSelection](https://ej2.syncfusion.com/react/documentation/api/treegrid/selectionSettings#persistselection). To enable persistence, define at least one column as a primary key using [columns.isPrimaryKey](https://ej2.syncfusion.com/react/documentation/api/treegrid/column#isprimarykey) property.

## Checkbox selection mode

In checkbox selection, rows can also be selected by clicking anywhere on the row. Configure the behavior using [selectionSettings.checkboxMode](https://ej2.syncfusion.com/react/documentation/api/treegrid/selectionSettings#checkboxmode). 

**Modes:**

* **Default**: Multiple rows can be selected by clicking rows one by one.
* **ResetOnRowClick**: Clicking a row clears the previously selected rows. Multiple selection is still available by holding Ctrl and clicking additional rows. To select a contiguous range, hold Shift and click the end row.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/selection-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/selection-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/selection-cs3" %}

> Checkbox selection applies to row selection only and is not compatible with cell selection mode.

## Conditional row selection

The TreeGrid supports conditional row selection through the [isRowSelectable](https://ej2.syncfusion.com/react/documentation/api/treegrid#isRowSelectable) property. This feature enables dynamic business logic to determine which rows can be selected, ensuring that only rows meeting specific conditions are selectable. The `isRowSelectable` property accepts a function that evaluates each row’s data and returns **true** to enable selection or **false** to disable it. The function is executed for the entire data source before rendering, making it suitable for scenarios where selection must be restricted based on criteria.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/selection-cs10/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/selection-cs10/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/selection-cs10" %}

In this sample, checkbox selection is disabled for rows where the "Progress" column has the value **"Completed"**.

## Checkbox Selection In Tree Column

1. ### Enable checkboxes in tree column

    To render checkboxes in tree column, set the [columns.showCheckbox](https://ej2.syncfusion.com/react/documentation/api/treegrid/column#showcheckbox) property to true.

 
    It is possible to select rows hierarchically using checkboxes in TreeGrid by enabling the [autoCheckHierarchy](https://ej2.syncfusion.com/react/documentation/api/treegrid#autocheckhierarchy) property. When a parent record’s checkbox is checked, the checkboxes of its child records are automatically selected and vice-versa.

    {% tabs %}
    {% highlight js tabtitle="app.jsx" %}
    {% include code-snippet/treegrid/column-cs12/app/App.jsx %}
    {% endhighlight %}
    {% highlight ts tabtitle="app.tsx" %}
    {% include code-snippet/treegrid/column-cs12/app/App.tsx %}
    {% endhighlight %}
    {% endtabs %}

    {% previewsample "page.domainurl/code-snippet/treegrid/column-cs12" %}

2. ### Checkbox selection in tree column with virtualization

The TreeGrid component is designed to handle large datasets while providing flexible checkbox selection with virtualization enabled. The [`showCheckbox`](https://ej2.syncfusion.com/react/documentation/api/treegrid/columnmodel#showcheckbox) property displays checkboxes in tree column cells, allowing users to select or deselect them directly. This functionality is enabled by setting the property to "**true**". Similarly, the [`enableVirtualization`](https://ej2.syncfusion.com/react/documentation/api/treegrid/index-default#enablevirtualization) property enhances performance by rendering only the visible rows and columns during scrolling. This feature is activated by setting the property to "**true**".

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/selection-cs11/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/selection-cs11/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/selection-cs11" %}
