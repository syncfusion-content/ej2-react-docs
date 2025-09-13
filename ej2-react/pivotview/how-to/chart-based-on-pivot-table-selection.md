---
layout: post
title: Chart based on pivot table selection in React | Syncfusion
description: Learn here all about Chart based on pivot table selection in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
control: Chart based on pivot table selection 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Chart based on pivot table selection in React Pivotview component

The React Pivot Table component supports creating charts based on cell selections within the pivot table. This customization allows charts to be plotted dynamically using data from selected cells, providing visual representation of specific data segments.

## Configuration

Cell selection is enabled using the [`allowSelection`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettings/#allowselection) property. The selection behavior is configured through the [`selectionSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotSelectionSettings/) property to define selection type and mode.

## Implementation

The [`cellSelected`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#cellselected) event triggers when cells are selected in the pivot table. This event provides selected cell information including row header name, column header name, measure name, and values. Using this data, the [`chart`](https://ej2.syncfusion.com/react/documentation/chart/getting-started) control can be plotted accordingly.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs157/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs157/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs157/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs157/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs157" %}