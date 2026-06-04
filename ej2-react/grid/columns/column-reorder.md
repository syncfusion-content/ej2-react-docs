---
layout: post
title: React Grid - Column Reorder | Syncfusion
description: React Grid column reorder enables drag‑and‑drop movement, configurable restrictions, and events to track and persist updated column order.
platform: ej2-react
control: Column reorder 
documentation: ug
domainurl: ##DomainURL##
---

# Column Reorder in React Grid Component

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component provides column reordering through drag-and-drop functionality. This feature allows columns to be moved from one position to another within the grid, making it possible to customize the layout according to application requirements.

When a column header is dragged, a move indicator icon appears to show where the column will be placed. Dropping the header into the new position changes the column’s index, and the grid updates the order seamlessly. This makes it easier to organize and analyze data, especially when working with large datasets.

To enable column reordering in the Grid, set the [allowReordering](https://ej2.syncfusion.com/react/documentation/api/grid#allowreordering) property to `true` and inject the `Reorder` module. Once enabled, columns can be reordered by:

- Selecting a column header.
- Dragging it to the desired position.
- Dropping it at the new position to update the order.


{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs11/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs11/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs11/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs11/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-cs11" %}

> * The appearance of column headers during drag-and-drop operations can be customized by using the [columnDrag](https://ej2.syncfusion.com/react/documentation/api/grid#columndrag) and [columnDrop](https://ej2.syncfusion.com/react/documentation/api/grid#columndrop) events.
> * When columns are reordered, the position of the corresponding column data also changes. Ensure that any additional code or logic that relies on the column order is updated accordingly.

## Prevent reordering for specific columns

By default, all columns in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid can be reordered when the grid-level [allowReordering](https://ej2.syncfusion.com/react/documentation/api/grid#allowreordering) property is set to `true`. However, there may be specific columns that should remain in a fixed position and not be reordered. To prevent reordering for a particular column, set the [allowReordering](https://ej2.syncfusion.com/react/documentation/api/grid/column#allowreordering) property of that column to `false` in the column definition.

In the following example, the "ShipCity" column is prevented from being reordered by setting its [`allowReordering`](https://ej2.syncfusion.com/react/documentation/api/grid/column#allowreordering) property to `false`:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/reorder-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/reorder-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/reorder-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/reorder-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/reorder-cs1" %}

## Reorder columns programmatically

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid provides several methods to reorder columns programmatically without interaction. These methods allow moving columns based on their index, target index, or field name, providing flexibility in column arrangement based on application logic or preferences.

The Grid provides the following methods for programmatic column reordering:

| Method | Description | Parameters |
|--------|-------------|------------|
| [reorderColumnByIndex](https://ej2.syncfusion.com/react/documentation/api/grid#reordercolumnbyindex) | Reorders a column based on its current index to a new index position. | `fromIndex`, `toIndex` |
| [reorderColumnByTargetIndex](https://ej2.syncfusion.com/react/documentation/api/grid#reordercolumnbytargetindex) | Reorders single or multiple columns to a specific target index. | `fieldName`, `toIndex` |
| [reorderColumns](https://ej2.syncfusion.com/react/documentation/api/grid#reordercolumns) | Reorders columns based on their field names. | `fromFName`, `toFName` |
| [reorderColumnByModel](https://ej2.syncfusion.com/react/documentation/api/grid#reordercolumnbymodel) | Reorders columns using complete column model objects (ideal for stacked headers). | `fromColumn`, `toColumn` |

> Column positions are counted starting from "0". The first column has an index of "0", the second column has an index of "1", and so on.

### Reorder columns by index

The [reorderColumnByIndex](https://ej2.syncfusion.com/react/documentation/api/grid#reordercolumnbyindex) method reorders columns by moving them from their current index to a new index. This is useful when the exact positions of the columns are known, as it allows direct control over the column order without using drag-and-drop.

**Method signature:**
```typescript
reorderColumnByIndex(fromIndex: number, toIndex: number): void
```

**Parameters:**

* `fromIndex`: The current index of the column to move.
* `toIndex`: The new index where the column should be moved.


In this example, the "Customer ID" column, located at index 1, is moved to index 3 when clicking the "Reorder Column by Index" button.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/reorder-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/reorder-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/reorder-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/reorder-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/reorder-cs2" %}

### Reorder columns by target index

The [reorderColumnByTargetIndex](https://ej2.syncfusion.com/react/documentation/api/grid#reordercolumnbytargetindex) method enables reordering of one or more columns to a specific target index. This method is particularly useful when moving columns based on their field names rather than their current index positions.

**Method signature:**
```typescript
reorderColumnByTargetIndex(fieldName: string | string[], toIndex: number): void
```

**Parameters:**
* `fieldName`: The field name (or array of field names) of the column(s) to be reordered.
* `toIndex`: The target index where the column(s) should be moved.

The following example demonstrates the use of the `reorderColumnByTargetIndex` method to reorder both single and multiple columns:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/reorder-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/reorder-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/reorder-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/reorder-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/reorder-cs3" %}

### Reorder columns by field names

The [reorderColumns](https://ej2.syncfusion.com/react/documentation/api/grid#reordercolumns) method provides a way to reorder columns using their field names instead of index positions. This method is particularly useful when the exact column positions are unknown, but the field names are available. By specifying the source column field name and the target column field name, the grid updates the order automatically.

**Method signature:**
```typescript
reorderColumns(fromFName: string | string[], toFName: string): void
```

**Parameters:**
* `fromFName`: The field name (or array of field names) of the column(s) to be moved.
* `toFName`: The field name of the target column before which the source column(s) should be placed.

The following example demonstrates the use of the `reorderColumns` method to reorder both single and multiple columns based on field names by clicking the respective buttons.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs13/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs13/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs13/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs13/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-cs13" %}

### Reorder columns using column model

The [reorderColumnByModel](https://ej2.syncfusion.com/react/documentation/api/grid#reordercolumnbymodel) method provides an advanced way to reorder columns by working with complete column model objects. This method is specifically designed to handle complex column structures, particularly [stacked header columns](https://ej2.syncfusion.com/react/documentation/grid/columns/column-headers#stacked-header), but it also works seamlessly with normal column configurations. While methods like `reorderColumnByIndex`, `reorderColumns`, and `reorderColumnByTargetIndex` are suitable for simple, flat column structures, `reorderColumnByModel` is the preferred approach when working with hierarchical column arrangements.

**Method signature:**
```typescript
reorderColumnByModel(fromColumn: Column, toColumn: Column): void
```

**Parameters:**
* `fromColumn`: The column object to move.
* `toColumn`: The target column object before which the `fromColumn` should be placed.

**When to use this method:**

- Moving entire column groups.
- Handling complex column hierarchies.
- Working directly with column objects rather than field names or indices.

In this example:

- "Order Details" stacked header is moved before "Customer ID".
- "Ship Country" is moved before "Ship Name" within the "Ship Details" stacked header.

This shows the method handling reordering of both normal and stacked header columns.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/reorder-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/reorder-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/reorder-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/reorder-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/reorder-cs4" %}

## Column reorder events

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component provides events that are triggered during different stages of the column reordering process. These events make it possible to run custom actions or show the current status while columns are being reordered through drag-and-drop.

The Grid component supports the following column reorder events:

| Event | Description |
|-------|-------------|
| [columnDragStart](https://ej2.syncfusion.com/react/documentation/api/grid#columndragstart) | Triggers when column header element drag starts. |
| [columnDrag](https://ej2.syncfusion.com/react/documentation/api/grid#columndrag) | Triggers continuously while a column header is being dragged. |
| [columnDrop](https://ej2.syncfusion.com/react/documentation/api/grid#columndrop) | Triggered when a column header is dropped into its new position. |

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs14/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs14/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs14/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs14/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-cs14" %}
