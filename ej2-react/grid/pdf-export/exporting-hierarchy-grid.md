---
layout: post
title: Exporting hierarchy grid in React Grid component | Syncfusion
description: Learn here all about Exporting hierarchy grid in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Exporting hierarchy grid 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Exporting hierarchy grid in React Grid component

The grid have an option to export the hierarchy grid to pdf document. By default, grid will exports the master grid with expanded child grids alone. you can change the exporting option by using the **PdfExportProperties.hierarchyExportMode** property. The available options are,

| Mode     | Behavior    |
|----------|-------------|
| Expanded | Exports the master grid with expanded child grids. |
| All      | Exports the master grid with all the child grids. |
| None     | Exports the master grid alone. |

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/pdf-export-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/pdf-export-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/pdf-export-cs6/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/pdf-export-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/pdf-export-cs6" % }

> By default, the hierarchy grid exports the expanded child grids from the visible page only. Refer [Export the expanded state of hierarchy grid from other pages](../how-to/#export-the-expanded-state-of-hierarchy-grid-from-other-pages).