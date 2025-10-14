---
layout: post
title: Show tooltips for row/column headers in React Pivot Table | Syncfusion
description: Learn here all about Show tooltip for row and column headers in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Show tooltip for row and column headers 
documentation: ug
domainurl: ##DomainURL##
---

# Show tooltip for row and column headers in React Pivot Table component

You can display custom tooltips for row and column headers to provide additional context and information. This approach enhances the user experience by showing detailed field information when hovering over header cells in the pivot table.

## Implementation

To display tooltips for row and column headers, initialize an external [`Tooltip`](https://ej2.syncfusion.com/react/documentation/tooltip/getting-started) component within the Pivot Table's [dataBound](https://ej2.syncfusion.com/react/documentation/api/pivotview/#databound) event. This ensures the tooltip is created only once, after the Pivot Table has finished rendering and is ready to interact with its elements. The tooltip targets both row and column header elements using specific CSS selectors: `td.e-rowsheader` for row headers and `th.e-columnsheader` for column headers.

For row header tooltips, the formatted text and field name of the current row header are retrieved from the [`pivotValues`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#pivotvalues) and displayed in the tooltip. For column header tooltips, the text content of the respective column header element is extracted and displayed directly in the tooltip.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs313/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs313/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs313/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs313/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs313" %}