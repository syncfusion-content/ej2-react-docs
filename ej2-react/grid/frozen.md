---
layout: post
title: Frozen in React Grid component | Syncfusion
description: Learn here all about Frozen in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Frozen 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Frozen in React Grid component

Frozen rows and columns provides an option to make rows and columns always visible in the top and left side of the grid while scrolling.

To use frozen rows and columns support, inject the **Freeze** module in the Grid.

In this demo, the [`frozenColumns`](https://ej2.syncfusion.com/angular/documentation/api/grid/#frozencolumns) is set as **'2'** and the [`frozenRows`](https://ej2.syncfusion.com/angular/documentation/api/grid/#frozenrows)
is set as **'3'**. Hence, the left two columns and top three rows are frozen.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/scrolling-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/scrolling-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/scrolling-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/scrolling-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/scrolling-cs1" % }

> Frozen rows and columns should not be set outside the grid view port.
> Frozen Grid will support row and column virtualization feature, which helps to improve the Grid performance while loading a large dataset.

## Limitations of Frozen Grid

The following features are not supported in frozen rows and columns:

* Grouping
* Row Template
* Detail Template
* Hierarchy Grid

## Freeze Direction

You can freeze the Grid columns on the left or right side by using the [`column.freeze`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#freeze) property and the remaining columns will be movable. The grid will automatically move the columns to the left or right position based on the [`column.freeze`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#freeze) value.

Types of the [`column.freeze`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#freeze) directions:

* **`Left`**: Allows you to freeze the columns at the left.
* **`Right`**: Allows you to freeze the columns at the right.

In this demo, the **ShipCountry** column is frozen at the left and the **CustomerID** column is frozen at the right side of the content table.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/scrolling-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/scrolling-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/scrolling-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/scrolling-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/scrolling-cs2" % }

> * Freeze Direction is not compatible with the [`isFrozen`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#isfrozen) and [`frozenColumns`](https://ej2.syncfusion.com/angular/documentation/api/grid/#frozencolumns) properties.

## Limitations of Freeze Direction

This feature has the below limitations, along with the above mentioned Frozen Grid limitations.

* Column virtualization
* Infinite scroll cache mode
* Freeze direction in the stacked header is not compatible with column reordering.

## Add validation rule for frozen Grid

In a frozen column enabled Grid, Grid content will be separated into frozen and movable parts. The following code can be used to dynamically add validation to input fields that are placed in the movable part. In the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) event args, you can find the movableform instance as an argument. Here, you can add validation rules dynamically.

```typescript
  actionComplete: (args: DialogEditEventArgs) => {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Add Validation Rules
            args.movableForm.ej2_instances[0].addRules('Freight', { max: 200 }); // Here, 'Freight' is the column name.
        }
    }

```

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/scrolling-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/scrolling-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/scrolling-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/scrolling-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/scrolling-cs3" % }

> This is applicable when a frozen column is enabled and the edit mode is set as "**Normal**" in the Grid.