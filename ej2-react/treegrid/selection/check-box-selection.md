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

To render a checkbox in each TreeGrid row, add a column with the [type](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#type) property set to **CheckBox**.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/selection-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/selection-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/selection-cs2" %}

> By default, selection is allowed by clicking a TreeGrid row or its checkbox. To allow selection only through checkboxes, set [selectionSettings.checkboxOnly](https://ej2.syncfusion.com/react/documentation/api/treegrid/selectionSettings/#checkboxonly) to **true**.
> Selection can be persisted on all the operations using [selectionSettings.persistSelection](https://ej2.syncfusion.com/react/documentation/api/treegrid/selectionSettings/#persistselection). To enable persistence, define at least one column as a primary key using [columns.isPrimaryKey](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#isprimarykey) property.

## Checkbox selection mode

In checkbox selection, rows can also be selected by clicking anywhere on the row. Configure the behavior using [selectionSettings.checkboxMode](https://ej2.syncfusion.com/react/documentation/api/treegrid/selectionSettings/#checkboxmode). 

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

## Conditional row selection using isRowSelectable

The TreeGrid supports conditional row selection through the [isRowSelectable](https://ej2.syncfusion.com/react/documentation/api/treegrid/#isRowSelectable) property. This feature enables dynamic business logic to determine which rows can be selected, ensuring that only rows meeting specific conditions are selectable. The `isRowSelectable` property accepts a function that evaluates each row’s data and returns **true** to enable selection or **false** to disable it. The function is executed for the entire data source before rendering, making it suitable for scenarios where selection must be restricted based on criteria.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/selection-cs10/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/selection-cs10/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/selection-cs10" %}

In this sample, we have disabled checkbox selection for rows where the "Progress" column has the value **"Completed"**.

## Interactive Checkbox Selection via showCheckbox

1. ### Enable Checkboxes in Columns

   To render checkboxes in existing column, you need to set [`columns.showCheckbox`] property as `true`.

   It is also possible to select the rows hierarchically using checkboxes in TreeGrid by enabling [`autoCheckHierarchy`] property. When we check on any parent record checkbox then the child record checkboxes will get checked.

   {% if page.publishingplatform == "typescript" %}

    {% tabs %}
    {% highlight ts tabtitle="index.ts" %}
    {% include code-snippet/treegrid/columns-cs10/index.ts %}
    {% endhighlight %}
    {% highlight html tabtitle="index.html" %}
    {% include code-snippet/treegrid/columns-cs10/index.html %}
    {% endhighlight %}
    {% endtabs %}

    {% previewsample"page.domainurl/code-snippet/treegrid/columns-cs10" %}

    {% elsif page.publishingplatform == "javascript" %}

    {% tabs %}
    {% highlight js tabtitle="index.js" %}
    {% include code-snippet/treegrid/columns-cs10/index.js %}
    {% endhighlight %}
    {% highlight html tabtitle="index.html" %}
    {% include code-snippet/treegrid/columns-cs10/index.html %}
    {% endhighlight %}
    {% endtabs %}

    {% previewsample "page.domainurl/code-snippet/treegrid/columns-cs10" %}
    {% endif %}

2. ### Column cell checkbox support for checkbox selection in virtualization

    The TreeGrid component is designed to efficiently manage large datasets while offering flexible row selection interactions. The [`showCheckbox`](../../api/treegrid/columnmodel#showcheckbox) property displays checkboxes in column cells, allowing rows to be selected or deselected through direct interaction, and this functionality is enabled by setting the property to **"true"**. The [`enableVirtualization`](../../api/treegrid/#enablevirtualization) property improves performance by rendering only visible rows and columns during scrolling, and this feature is activated by setting the property to "**true**". When both properties are applied together, the Data Grid component supports checkbox‑based row selection seamlessly within a virtualized environment, ensuring usability and efficiency even with extensive data.

    {% if page.publishingplatform == "typescript" %}

    {% tabs %}
    {% highlight ts tabtitle="index.ts" %}
    {% include code-snippet/treegrid/selection-cs11/index.ts %}
    {% endhighlight %}
    {% highlight html tabtitle="index.html" %}
    {% include code-snippet/treegrid/selection-cs11/index.html %}
    {% endhighlight %}
    {% endtabs %}

    {% previewsample "page.domainurl/code-snippet/treegrid/selection-cs11" %}

    {% elsif page.publishingplatform == "javascript" %}

    {% tabs %}
    {% highlight js tabtitle="index.js" %}
    {% include code-snippet/treegrid/selection-cs11/index.js %}
    {% endhighlight %}
    {% highlight html tabtitle="index.html" %}
    {% include code-snippet/treegrid/selection-cs11/index.html %}
    {% endhighlight %}
    {% endtabs %}

    {% previewsample "page.domainurl/code-snippet/treegrid/selection-cs11" %}
    {% endif %}