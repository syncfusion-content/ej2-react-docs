---
layout: post
title: Frozen in React TreeGrid | Syncfusion
description: Learn here all about Frozen in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
<<<<<<< HEAD
control: Frozen
=======
control: Frozen 
>>>>>>> remotes/origin/development
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

<<<<<<< HEAD
# Frozen in React TreeGrid
=======
# Frozen in React TreeGrid 
>>>>>>> remotes/origin/development

## Frozen rows and columns

Frozen rows and columns provide an option to keep rows and columns always visible on the top and left sides of the TreeGrid while scrolling.  

To use frozen rows and columns, inject the **Freeze** module in the TreeGrid.

<<<<<<< HEAD
In this demo, [frozenColumns](https://ej2.syncfusion.com/react/documentation/api/treegrid/#frozencolumns) is set to **2** and [frozenRows](https://ej2.syncfusion.com/react/documentation/api/treegrid/#frozenrows) is set to **3**. As a result, the left two columns and top three rows remain frozen.
=======
In this demo, the [frozenColumns](https://ej2.syncfusion.com/react/documentation/api/treegrid/#frozencolumns) is set as **'2'** and the [frozenRows](https://ej2.syncfusion.com/react/documentation/api/treegrid/#frozenrows)
is set as **'3'**. Hence, the left two columns and top three rows are frozen.
>>>>>>> remotes/origin/development

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

<<<<<<< HEAD
Use the [isFrozen](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#isfrozen) property to freeze selected columns in the TreeGrid.  
In this demo, the columns with field names `taskName` and `startDate` are frozen using the `isFrozen` property.
=======
You can use [isFrozen](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#isfrozen) property to freeze selected columns in tree grid.

In this demo, the columns with field name `taskName` and `startDate` is frozen using the `isFrozen` property.
>>>>>>> remotes/origin/development

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

<<<<<<< HEAD
Freeze TreeGrid columns on the left or right side using the [column.freeze](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#freeze) property; remaining columns are movable. The TreeGrid automatically places columns on the left or right based on the [column.freeze](https://ej2.syncfusion.[REDACTED]/#freeze) value.

Types of [column.freeze](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#freeze) directions:
* **Left**: Freezes columns on the left.
* **Right**: Freezes columns on the right.
=======
You can freeze the tree grid columns on the left or right side by using the [column.freeze](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#freeze) freeze property and the remaining columns will be movable. The tree grid will automatically move the columns to the left or right position based on the [column.freeze](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#freeze) value.

Types of the [column.freeze](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#freeze) directions:
>>>>>>> remotes/origin/development

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

<<<<<<< HEAD
### Limitations of frozen TreeGrid
=======
> * Freeze Direction is not compatible with the [isFrozen](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#isfrozen) and [frozenColumns](https://ej2.syncfusion.com/react/documentation/api/treegrid/#frozencolumns) properties.
>>>>>>> remotes/origin/development

The following features are not supported with frozen rows and columns:

* Row Template
* Detail Template
* Cell Editing

Additional limitations for the Freeze direction feature:

* Infinite scroll cache mode
* Freeze direction in the stacked header is not compatible with column reordering.

<<<<<<< HEAD
> Refer to the [React TreeGrid](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for feature highlights. Explore the [React TreeGrid example](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to learn how to present and manipulate data.
=======
> You can refer to our [React TreeGrid](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [React TreeGrid example](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.
>>>>>>> remotes/origin/development
