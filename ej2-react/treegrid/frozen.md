---
layout: post
title: Frozen in React TreeGrid | Syncfusion
description: Learn here all about Frozen in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Frozen
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Frozen in React TreeGrid

## Frozen rows and columns

Frozen rows and columns provide an option to keep rows and columns always visible on the top and left sides of the TreeGrid while scrolling.  

To use frozen rows and columns, inject the **Freeze** module in the TreeGrid.

In this demo, [frozenColumns](https://ej2.syncfusion.com/react/documentation/api/treegrid/#frozencolumns) is set to **2** and [frozenRows](https://ej2.syncfusion.com/react/documentation/api/treegrid/#frozenrows) is set to **3**. As a result, the left two columns and top three rows remain frozen.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/frozencolumn-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/frozencolumn-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/code-snippet/treegrid/frozencolumn-cs1" %}

### Freeze particular columns

Use the [isFrozen](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#isfrozen) property to freeze selected columns in the TreeGrid.  
In this demo, the columns with field names `taskName` and `startDate` are frozen using the `isFrozen` property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/isfrozen-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/isfrozen-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/code-snippet/treegrid/isfrozen-cs1" %}

### Freeze direction

Freeze TreeGrid columns on the left or right side using the [column.freeze](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#freeze) property; remaining columns are movable. The TreeGrid automatically places columns on the left or right based on the [column.freeze](https://ej2.syncfusion.[REDACTED]/#freeze) value.

Types of [column.freeze](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#freeze) directions:
* **Left**: Freezes columns on the left.
* **Right**: Freezes columns on the right.

In this demo, the **Task Name** column is frozen on the left and the **Priority** column is frozen on the right side of the content table.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/freeze-direction-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/freeze-direction-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/code-snippet/treegrid/freeze-direction-cs1" %}

> Freeze direction is not compatible with the [isFrozen](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#isfrozen) and [frozenColumns](https://ej2.syncfusion.com/react/documentation/api/treegrid/#frozencolumns) properties.

### Limitations of frozen TreeGrid

The following features are not supported with frozen rows and columns:

* Row Template
* Detail Template
* Cell Editing

Additional limitations for the Freeze direction feature:

* Infinite scroll cache mode
* Freeze direction in the stacked header is not compatible with column reordering.

> Refer to the [React TreeGrid](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for feature highlights. Explore the [React TreeGrid example](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to learn how to present and manipulate data.