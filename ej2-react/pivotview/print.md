---
layout: post
title: Print in React Pivot Table | Syncfusion
description: Learn how the React Pivot Table prints pivot table and pivot chart content directly from the browser with options to control the print layout.
platform: ej2-react
control: Pivot Table
documentation: ug
domainurl: ##DomainURL##
---

# Print in React Pivot Table

The React Pivot Table component supports print functionality, allowing users to print the current state of the pivot table or pivot chart. This feature enables users to generate hard copies of pivot table reports for convenient review and data sharing.

## Print pivot table

Call the [`print`](https://ej2.syncfusion.com/react/documentation/api/grid/#print) method on the underlying [`Grid`](https://ej2.syncfusion.com/react/documentation/grid/getting-started) instance (accessed via the `grid` property of the `PivotViewComponent` ref) to print the rendered pivot table. The `Grid` control captures the current state of the pivot table, including all applied filters, sorting, and formatting.

The sample below prints the pivot table when an external button is clicked. The button uses the `@syncfusion/ej2-react-buttons` package — install it first:

```bash
npm install @syncfusion/ej2-react-buttons --save
```

or

```bash
yarn add @syncfusion/ej2-react-buttons
```

> Pass options such as `{ pageSize: 'A4', orientation: 'landscape' }` to the `print()` method to control the page size and orientation of the printed output.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs320/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs320/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs320/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs320/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs320" %}

## Print pivot chart

Call the [`print`](https://ej2.syncfusion.com/react/documentation/api/chart/#print) method on the underlying [`Chart`](https://ej2.syncfusion.com/react/documentation/chart/getting-started) instance (accessed via the `chart` property of the `PivotViewComponent` ref) to print the pivot chart. The `Chart` control preserves colors, legends, and data labels in the printed output.

> Set the [`displayOption`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#displayoption) property to **Chart** or **Both** to display the pivot chart.

> To enable pivot chart functionality, inject the `PivotChart` module into the pivot table through `<Inject services={[PivotChart]} />`.

The sample below prints the pivot chart when an external button is clicked.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs321/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs321/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs321/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs321/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs321" %}

## See Also

* [Pivot Chart](./pivot-chart)
* [Excel Export](./excel-export)
* [PDF Export](./pdf-export)
* [PivotGrid Printing](https://www.syncfusion.com/blogs/post/pivotgrid-printing)