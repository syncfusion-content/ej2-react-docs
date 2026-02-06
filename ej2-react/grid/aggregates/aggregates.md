---
layout: post
title: React Grid - Aggregates | Syncfusion
description: Explore aggregates in Syncfusion React Grid (EJ2) to show sum, average, min, max, and count in footers, group footers, and captions using built‑in settings.
control: Aggregates 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Aggregates in React Grid Component

The Aggregates feature in Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid provides built-in calculations such as sum, average, count, minimum, and maximum for specific columns. The results can be displayed in different sections of the grid.

- Footer: overall summary values for the entire grid.
- Group Footer: aggregate values for each group of records.
- Group Caption: summary information shown alongside the group title.

The aggregate feature is enabled by importing the `Aggregate` module from `@syncfusion/ej2-react-grids` and injecting the `Aggregate` service into the grid.

```jsx
import { GridComponent, Inject, Aggregate } from '@syncfusion/ej2-react-grids';

<GridComponent>
  <Inject services={[Aggregate]} />
</GridComponent>
```

Aggregates in the React Grid are linked to columns using a few key properties:

- `field`: Defines the field name of the column on which the aggregation is performed. The value must match the column’s data source field.
- `type`: Defines the type of aggregate calculation for the column.for example Sum, Average, Min, Max, or Count.
-  Templates: Decide where the result is displayed in the grid in `footerTemplate`, `groupFooterTemplate`, `groupCaptionTemplate`.
- `format`: Applies formatting to numeric and date columns when displaying aggregate values.

```ts
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Aggregate } from '@syncfusion/ej2-react-grids';
import { AggregateColumnsDirective, AggregateColumnDirective, AggregateDirective, AggregatesDirective } from '@syncfusion/ej2-react-grids';
<GridComponent dataSource={data}>
  <ColumnsDirective>
    <ColumnDirective field='Freight' headerText='Freight' format='C2' textAlign='Right' width='150' />
  </ColumnsDirective>
  <AggregatesDirective>
    <AggregateDirective>
      <AggregateColumnsDirective>
        <AggregateColumnDirective field='Freight' type='Sum' format='C2' footerTemplate={footerSum} />
      </AggregateColumnsDirective>
    </AggregateDirective>
  </AggregatesDirective>
  <Inject services={[Aggregate]} />
</GridComponent>
```
**Directives for aggregate configuration:**
- `AggregatesDirective`: Root container for all aggregate definitions.
- `AggregateDirective`: Defines one aggregate row (can contain multiple columns).
- `AggregateColumnsDirective`: Wraps one or more aggregate column definitions.
- `AggregateColumnDirective`: Defines a single aggregate for a specific field and type.

Aggregates can also be integrated using the [aggregates](https://ej2.syncfusion.com/react/documentation/api/grid#aggregates) property of the grid instead of using directives. For example:

```ts
const aggregate = [
  {
    columns: [
      {
        type: 'Max',
        field: 'Freight',
        format: 'C2',
        footerTemplate: 'Max:${Max}',
      },
    ],
  },
];
<GridComponent dataSource={data} aggregates={aggregate} >
  <ColumnsDirective>
    <ColumnDirective field="Freight" headerText="Freight" width="150" format="C2" />
  </ColumnsDirective>
  <Inject services={[Aggregate]} />
</GridComponent>
```

## Displaying aggregate values

By default, aggregate values are shown in the footer, group footer, and group caption cells. The display of aggregate values can be configured to appear in any one of these cells, or enabled in all, by using the following properties:

- [footerTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn#footertemplate): Displays the aggregate value in the footer cell.
- [groupFooterTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn#groupfootertemplate): Displays the aggregate value in the group footer cell.
- [groupCaptionTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn#groupcaptiontemplate): Displays the aggregate value in the group caption cell.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/aggregate-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/aggregate-cs5/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/aggregate-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/aggregate-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/aggregate-cs5" %}

### Custom formatting for aggregate values

A custom template can be defined to control how the aggregate value is displayed. For example, instead of showing just the raw number, labels, formatting, or styling can be applied.

```ts
const footerSum = (props) => {
  const value= props.Sum; 
  const style = { color: value > 1000 ? 'green' : 'red' }; 
  return <span style={style}>Total Freight: ${value.toFixed(2)}</span>;
};
```
The aggregate type `Sum` by default displays the raw value (e.g., "1234.56") in the footer, but with a custom template it shows "Total Freight: $1234.56" and applies green color if greater than 1000, or red color if 1000 or less.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/aggregate-customize/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/aggregate-customize/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/aggregate-customize/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/aggregate-customize/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/aggregate-customize" %}

## Aggregate using local and remote data

 - Local data: Since all rows are already loaded into the grid, the total summary is always calculated across the entire dataset.
 - Remote data: The grid only loads one page of records at a time. By default, the total summary is calculated for the current page only. To display total summaries for the entire dataset, the server must return these fields in its response:
   - `result`: the current page of records.
   - `count`: the total number of records after filtering.
   - `aggregate`: the calculated aggregate values for the entire dataset.
   
   For example:
 
    ```ts
        {
      "result": [ /* Paged array of records */ ],
      "count": 500,          // Total records after filtering.
      "aggregate": {         // Aggregate values for the entire dataset.
        "Freight - Sum": 12345.67,
        "Freight - Average": 456.78
      }
    }
    ```

## Built-in aggregate types

The Syncfusion React Grid supports the following built-in aggregate types that can be specified in the [type](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn#type) property:

- `Sum`: Calculates the total of all values in the column.
- `Average`: Calculates the mean of all values.
- `Min`: Returns the smallest value.
- `Max`: Returns the largest value.
- `Count`: Counts the total number of records.
- `TrueCount`: Counts the number of true values in the column.
- `FalseCount`: Counts the number of false values in the column.

Here is an example that demonstrates how to use built-in aggregate types in the grid:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/aggregate-cs8/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/aggregate-cs8/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/aggregate-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/aggregate-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/aggregate-cs8" %}

## Multiple aggregates for a column

A grid column typically supports a single aggregate function such as Sum, Average, or Count, which produces one summary value for the entire column. In cases where different summary values are required at the same time, multiple aggregates can be configured. This feature makes it possible to calculate and display several values such as Sum, Average, Minimum, Maximum, or custom calculations concurrently for a specific column.

In the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid, multiple aggregates can be defined in two ways:

- By specifying the aggregate `type` as an array, which allows multiple values to be shown together in a single summary row. For example:
  ```ts
  const aggregate = [{ 
    columns: [ 
      { type: ['Sum', 'Max', 'Min'], // Multiple aggregates in one row. 
        field: 'Freight', 
        format: 'C2', 
        footerTemplate: 'Sum: ${Sum}, Min:${Min}, Max:${Max}'
      } 
    ] 
  }];
  ```
- By defining separate `AggregateDirective` elements, each containing an `AggregateColumnDirective` with its own `type`. In this case, each aggregate is rendered in its own summary row in the footer.

Here's an example of how to use multiple aggregates in the grid:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/aggregate-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/aggregate-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/aggregate-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/aggregate-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/aggregate-cs1" %}

## See also
- [Custom aggregates](./custom-aggregate)
- [Reactive aggregates](./reactive-aggregate)
- [Group and caption aggregates](./group-and-caption-aggregate)
- [Aggregates API](https://ej2.syncfusion.com/react/documentation/api/grid/aggregatecolumn)
