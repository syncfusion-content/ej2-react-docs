---
layout: post
title: How to visualize Grid data in React Chart | Syncfusion
description: Learn how to visualize data from a Syncfusion React Grid in Syncfusion React Chart by using the Grid's actionComplete and dataBound events.
control: Grid data chart 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to visualize Grid data in React Chart

You can render a Syncfusion React Grid and a Syncfusion React Chart side by side and keep the chart in sync with the page the user is currently viewing in the Grid. The pattern uses two refs plus the Grid's [`actionComplete`](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#actioncomplete) and [`dataBound`](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#databound) events.

## Set up the Grid with paging

Initialize the `GridComponent` with a `dataSource` and `allowPaging={true}`, plus a `pageSettings` object (for example, `{ pageSize: 10 }`). Define the columns inside `<ColumnsDirective>` and add the [`Page`](https://ej2.syncfusion.com/react/documentation/api/grid/page) services to the Grid's `<Inject services={[…]}>` array.

## After paging

Use the Grid's [`actionComplete`](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#actioncomplete) event together with the [`getCurrentViewRecords()`](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#getcurrentviewrecords) method to retrieve the records of the current page. Refresh the chart only when paging caused the change — checking `args.requestType === 'paging'` keeps sort, filter, and search actions from triggering redundant refreshes.

```
function actionComplete(args) {
    if (args.requestType === 'paging') {
        chart.series[0].dataSource = grid.getCurrentViewRecords();
        chart.refresh();
    }
}
```

## On initial bind

Use the Grid's [`dataBound`](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#databound) event to push the current view records into the chart the first time the Grid finishes loading, so the chart is not empty on the initial render.

```
function dataBound(args) {
    chart.series[0].dataSource = grid.getCurrentViewRecords();
}
```

The included `datasource.jsx` and `datasource.tsx` files define the Grid's `dataSource` (an array of `OrderDate`, `ShippedDate`, and `Freight` fields). The chart series reads `OrderDate` as its `xName` and `Freight` as its `yName`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/grid-visual-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/grid-visual-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/grid-visual-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/grid-visual-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/grid-visual-cs2" %}

## Troubleshooting

* **"Refs are `undefined` inside the events"** — confirm the `ref={g => grid = g}` and `ref={g => chart = g}` callbacks are present on the Grid and Chart components. Without them, the bridge has no way to push data into the chart.
* **"The chart is empty on first render"** — make sure the `dataBound` handler is bound to the Grid (`dataBound={dataBound.bind(this)}`) and that it pushes the result of `getCurrentViewRecords()` into `chart.series[0].dataSource`.
* **"Page count does not match the chart"** — paging and chart refresh are decoupled here. If you customize the page size, make sure the chart's `primaryXAxis` still maps to the fields returned by `getCurrentViewRecords()`.

## See also

* [Getting started](../getting-started)
* [Chart annotations](../chart-annotations)
* [Tooltip template](../tool-tip)