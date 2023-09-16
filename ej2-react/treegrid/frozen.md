---
layout: post
title: Frozen in React Treegrid component | Syncfusion
description: Learn here all about Frozen in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Frozen 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Frozen in React Treegrid component

## Frozen rows and columns

Frozen rows and columns provides an option to make rows and columns always visible in the top and left side of the tree grid while scrolling.

To use frozen rows and columns support, inject the **Freeze** module in the tree grid.

In this demo, the [`frozenColumns`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#frozencolumns) is set as **'2'** and the [`frozenRows`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#frozenrows)
is set as **'3'**. Hence, the left two columns and top three rows are frozen.

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

You can use [`isFrozen`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#isfrozen) property to freeze selected columns in tree grid.

In this demo, the columns with field name `taskName` and `startDate` is frozen using the `isFrozen` property.

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

You can freeze the tree grid columns on the left or right side by using the [`column.freeze`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#freeze) freeze property and the remaining columns will be movable. The tree grid will automatically move the columns to the left or right position based on the [`column.freeze`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#freeze) value.

Types of the [`column.freeze`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#freeze) directions:

* **`Left`**: Allows you to freeze the columns at the left.
* **`Right`**: Allows you to freeze the columns at the right.

In this demo, the **Task Name** column is frozen at the left and the **Priority** column is frozen at the right side of the content table.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/freeze-direction-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/freeze-direction-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/freeze-direction-cs1" %}

> * Freeze Direction is not compatible with the [`isFrozen`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#isfrozen) and [`frozenColumns`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#frozencolumns) properties.

### Limitations of frozen tree grid

The following features are not supported in frozen rows and columns:

* Row Template
* Detail Template
* Cell Editing

Freeze Direction feature has the below limitations, along with the above mentioned limitations.

* Infinite scroll cache mode
* Freeze direction in the stacked header is not compatible with column reordering.

> You can refer to our [`React Tree Grid`](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.
