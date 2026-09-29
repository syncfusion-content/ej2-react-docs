---
layout: post
title: React Grid Row Number Column | Syncfusion
description: Learn how to display and manage row numbers in the Syncfusion React Data Grid with paging, sorting, filtering, and grouping support.
control: Row Number Column
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Row Number Column in React Data Grid

The React Data Grid provides built-in support for displaying row numbers through a dedicated row number column. This column displays the position of each record in the current view and is automatically maintained by the Grid.

To display row numbers, set the [columns->type](https://ej2.syncfusion.com/react/documentation/api/grid/column#type) property to `RowNumber`. This creates a read-only column for displaying row numbers, eliminating the need to include a separate row number field in the data source.

The Grid automatically updates row numbers when operations such as paging, sorting, filtering, and grouping are performed. This ensures that the displayed row numbers always reflect the current view and order of the records.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/rownumber/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/rownumber/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/rownumber/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/rownumber/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/rownumber" %}