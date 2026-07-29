---
layout: post
title: Integrate D3.js with React Pivot Table | Syncfusion
description: Learn how to use D3.js with the Syncfusion React Pivot Table and keep custom visualizations synchronized with pivot report changes.
control: Integrate Pivot Table with D3.js
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Integrate D3.js with React Pivot Table

The Syncfusion React Pivot Table can act as an interactive aggregation layer for a custom [D3.js](https://d3js.org/) visualization. When users rearrange fields, filter members, sort values, or expand and collapse members, the Pivot Table recalculates its values and the D3 visualization can render the updated result.

Use this approach when an application requires a bespoke visualization or detailed control over SVG elements, transitions, and interactions. For standard chart types that should work without a custom data adapter, use the built-in [Pivot Chart](../pivot-chart).

## Install D3.js

After configuring the React Pivot Table, install D3.js:

```bash
npm install d3
```

For a TypeScript application, also install the D3 type declarations:

```bash
npm install --save-dev @types/d3
```

## How synchronization works

The integration uses the following data flow:

1. The Pivot Table aggregates the source records according to its current report.
2. The [`enginePopulated`](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#enginepopulated) event runs after the pivot engine finishes processing.
3. The event's [`pivotValues`](https://ej2.syncfusion.com/react/documentation/api/pivotview/enginepopulatedeventargs#pivotvalues) collection is converted into a small chart model containing the row header, column header, and numeric value for each displayed value cell.
4. The chart model is stored in React state and passed to the D3 component.
5. The D3 component redraws when the chart model changes.

Using `pivotValues` from `EnginePopulatedEventArgs` keeps the integration on the documented event API and avoids accessing internal engine modules. The same event handles initial rendering and subsequent report changes, so a second `dataBound` handler is not required.

## Configure the Pivot Table and D3 chart

The following example creates a responsive grouped bar chart next to the Pivot Table. It excludes grand-total cells to prevent totals from being plotted with their contributing values. Use the Field List or Grouping Bar to modify the report and observe the chart update automatically.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs350/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs350/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="D3GroupedBar.jsx" %}
{% include code-snippet/pivot-table/default-cs350/app/D3GroupedBar.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="D3GroupedBar.tsx" %}
{% include code-snippet/pivot-table/default-cs350/app/D3GroupedBar.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs350/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs350/app/datasource.tsx %}
{% endhighlight %}
{% highlight css tabtitle="App.css" %}
{% include code-snippet/pivot-table/default-cs350/app/App.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs350" %}

The `toChartData` function reads only value cells for the `Amount` measure. Each chart point uses `rowHeaders` as its category, `columnHeaders` as its series, and `value` as its numeric measure. The example includes visible subtotals but excludes grand totals; also exclude cells whose `isSum` value is `true` when the chart should contain leaf members only. If the report contains multiple value fields, include the cell's `actualText` value in the series key so values from different measures remain separate.

> This example demonstrates the value-cell adapter with relational data. Validate the cell metadata and total-handling rules separately before applying the same adapter to an OLAP report.

## Performance and accessibility considerations

* Transform `pivotValues` only in the `enginePopulated` handler instead of scanning the Pivot Table DOM.
* Limit the number of visible categories and series with Pivot Table filters before drawing a large SVG. Pivot Table virtualization optimizes the grid, while D3 still renders each chart mark that it receives.
* Keep the event handler stable with `React.useCallback` to avoid unnecessary component updates.
* Provide an accessible name for the SVG and each data mark. The example makes every bar keyboard-focusable and adds its category, series, and value to an `aria-label`.
* When binding remote data, use only trusted, authenticated endpoints and validate the returned data before assigning it to the Pivot Table.

> When paging, virtual scrolling, or server-side processing is enabled, a chart derived from `pivotValues` reflects the result currently loaded for rendering. If the visualization must always represent the complete report, retrieve a separately aggregated chart dataset from the trusted backend.

## Troubleshooting

### The chart is empty

Ensure the report contains at least one numeric value field and that `enginePopulated` is assigned to the Pivot Table. If the D3 component is placed in a custom layout, its container must also have a measurable width.

### The chart does not update after report changes

Update React state from `args.pivotValues` every time `enginePopulated` runs. Do not mutate the existing chart-data array because React requires a new array reference to trigger the D3 component's effect.

### The chart contains too many bars

Apply member or value filters in the Pivot Table, or transform only the categories needed by the visualization. For large source datasets, see the [performance best practices](../performance-best-practices) and [server-side engine](../server-side-pivot-engine) topics.

## See also

* [Data binding events](../data-binding#enginepopulated)
* [Field List](../field-list)
* [Grouping Bar](../grouping-bar)
* [Complete Pivot Table and D3.js sample](https://github.com/SyncfusionExamples/react-syncfusion-pivot-d3-visualization)
