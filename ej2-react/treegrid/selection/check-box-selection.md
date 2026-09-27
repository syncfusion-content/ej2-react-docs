---
layout: post
title: React TreeGrid Checkbox Selection | Syncfusion
description: Learn how to enable and configure checkbox selection in React TreeGrid, including selection modes, persist selection, and checkbox behavior.
control: Check box selection 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Checkbox Selection in React TreeGrid

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

> By default, selection is allowed by clicking a TreeGrid row or its checkbox. To allow selection only through checkboxes, set [selectionSettings.checkboxOnly](https://ej2.syncfusion.com/react/documentation/api/treegrid/selectionSettings#checkboxonly) to "true".
> Selection can be persisted on all the operations using [selectionSettings.persistSelection](https://ej2.syncfusion.com/react/documentation/api/treegrid/selectionSettings#persistselection). To enable persistence, define at least one column as a primary key using [columns.isPrimaryKey](https://ej2.syncfusion.com/react/documentation/api/treegrid/column#isprimarykey) property.

## Checkbox selection mode

In checkbox selection, rows can also be selected by clicking anywhere on the row. Configure the behavior using [selectionSettings.checkboxMode](https://ej2.syncfusion.com/react/documentation/api/treegrid/selectionSettings#checkboxmode). The modes are:

* `Default`: Multiple rows can be selected by clicking rows one by one.
* `ResetOnRowClick`: Clicking a row clears the previously selected rows. Multiple selection is still available by holding **CTRL** and clicking additional rows. To select a contiguous range, hold **SHIFT** and click the end row.

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

The TreeGrid supports conditional row selection through the [isRowSelectable](https://ej2.syncfusion.com/react/documentation/api/treegrid#isrowselectable) callback. This allows selection to be controlled by custom business logic, ensuring that only rows meeting specific conditions can be selected. The callback receives each row’s data and returns "true" to allow selection or "false" to prevent it.

Local data: The callback runs once when the TreeGrid initializes and evaluates all records because the full dataset is already available on the client.

Remote data: The callback runs only for the rows displayed on the current page when the TreeGrid first loads. It runs again whenever the TreeGrid fetches new data such as during paging, filtering, or sorting to re-evaluate the newly visible rows.

In the following sample, selection is disabled for rows where the "Progress" column has the value "Completed".

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/selection-cs10/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/selection-cs10/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/selection-cs10" %}

## Hierarchy checkbox selection

The hierarchy checkbox enables cascading selection of parent and child rows in Tree Grid. When a parent row checkbox is selected, all its child records are automatically selected, and the parent state updates based on children selection. To enable hierarchy checkbox selection, set the `showCheckbox` property to `true` in a column and configure the `hierarchyCheckboxMode` property. By default, hierarchy checkbox mode is set to `self`.

The available modes are displayed in the following table.

| Item | Description |
|-----|-----|
| `self` | Only the targeted row is selected; children and parent are not affected. |
| `hierarchy` | Selection cascades to all descendants and adjusts the parent state accordingly. |
| `filteredHierarchy` | Behaves like hierarchy, but applies the cascade only to records matching the current filter or search criteria. |

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/selection-cs12/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/selection-cs12/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/selection-cs12" %}
