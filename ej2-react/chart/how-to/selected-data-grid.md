---
layout: post
title: How to display selected data in a grid in React Chart | Syncfusion
description: Learn how to display Syncfusion React Chart range-selected data values inside a Syncfusion Grid using drag events.
control: Selected data grid
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to display selected data in a grid in React Chart

When you let the user drag-select a region of the chart, the [`dragComplete`](https://ej2.syncfusion.com/react/documentation/api/chart#dragcomplete) callback fires with `args.selectedDataValues` — an array of point objects (one per series) for the dragged region. You can push those points into a Syncfusion Grid so the user sees the exact data behind their selection.

## Enable range selection on the chart

Set `selectionMode` to one of the `Drag*` values on the chart to enable a draggable selection rectangle. The example uses `'DragXY'`, which selects both the x range and the y range.

{% raw %}
```
<ChartComponent id='charts'
    selectionMode='DragXY'
    legendSettings={{ visible: true, toggleVisibility: false }}
    dragComplete={dragComplete.bind(this)}>
```
{% endraw %}

`legendSettings.toggleVisibility: false` is deliberate: it stops the user from accidentally hiding the series by clicking its legend entry, which would also clear the selection state.

## Push the selected points into the Grid

The example captures both component instances via `ref` callbacks so the `dragComplete` callback can update the grid imperatively:

```
<ChartComponent ref={(g) => (chart = g)} ... />
<GridComponent  ref={(g) => (grid  = g)} height='250px'>
    <ColumnsDirective>
        <ColumnDirective field='x' headerText='x' type='string' />
        <ColumnDirective field='y' headerText='y' type='number' />
    </ColumnsDirective>
</GridComponent>
```

The `dragComplete` callback receives an `args` object whose `args.selectedDataValues` is an array of arrays — one inner array per series. With a single series, take the first inner array, assign it to the grid's `dataSource`, and call `grid.refresh()` so the grid re-renders:

```
function dragComplete(args) {
    grid.dataSource = args.selectedDataValues[0];
    grid.refresh();
}
```

### `args.selectedDataValues` shape

| Field | Meaning |
| --- | --- |
| `args.selectedDataValues` | An array of arrays; the outer index is the series, the inner array contains the original data point objects that fall inside the dragged region. |
| `args.selectedDataValues[0]` | The first series' selected points — use this when the chart has a single series. |

The complete example below wires the chart's `selectionMode`, the two refs, and the `dragComplete` callback together.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/how-to-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/how-to-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/code-path/how-to-cs9/index.html %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/how-to-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/how-to-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/how-to-cs9" %}

## Troubleshooting

* **"The drag rectangle never appears"** — `selectionMode` is not set to a `Drag*` value, or `Selection` is missing from the chart's `<Inject services={[…]}>>` array.
* **"The grid does not update after a drag"** — the `ref` callback is not wired on the `<GridComponent>`, or `grid.refresh()` is missing. Assigning `dataSource` does not auto-render the grid.
* **"The grid shows the entire series instead of the selection"** — `args.selectedDataValues[0]` is wrong because there are multiple series. Iterate the outer array and pick the right one.
* **"Clicking a legend item clears the selection"** — set `legendSettings.toggleVisibility: false` on the chart, as the example does.

## See also

* [Getting started](../getting-started)
* [Selection](../selection)
* [Tooltip template](../tool-tip)