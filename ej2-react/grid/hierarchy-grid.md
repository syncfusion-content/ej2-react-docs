---
layout: post
title: Hierarchy grid in React Grid component | Syncfusion
description: Learn here all about Hierarchy grid in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Hierarchy grid 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Hierarchy grid in React Grid component

The Grid allows display of table data in a hierarchical structure to visualize relations between parent and child records.
This feature is enabled by defining the [childGrid](https://ej2.syncfusion.com/react/documentation/api/grid/#childgrid) and [childGrid.queryString](https://ej2.syncfusion.com/react/documentation/api/grid/#querystring). The [childGrid](https://ej2.syncfusion.com/react/documentation/api/grid/#childgrid) describes the options of grid and the [childGrid.queryString](https://ej2.syncfusion.com/react/documentation/api/grid/#querystring) describes the relation between parent and child grids.

To use hierarchical binding, inject the [DetailRow](https://ej2.syncfusion.com/react/documentation/api/grid/detailRow/) module in the grid.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/hierarchy-grid-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/hierarchy-grid-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/hierarchy-grid-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/hierarchy-grid-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/hierarchy-grid-cs1" %}

> * Grid supports n levels of child grids.
> * Hierarchical Binding is not supported when [DetailTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/#detailtemplate) is enabled.

## ExpandAll by external Button

By default, grid renders in collapsed state. You can expand all child grid rows by invoking the [expandAll](https://ej2.syncfusion.com/react/documentation/api/grid/detailRow/#expandall) method and collapse all grid rows by invoking the [collapseAll](https://ej2.syncfusion.com/react/documentation/api/grid/detailRow/#collapseall) through an external button.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/hierarchy-grid-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/hierarchy-grid-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/hierarchy-grid-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/hierarchy-grid-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/hierarchy-grid-cs2" %}

## Expand Child Grid Initially

You can expand a particular Child Grid at initial rendering by invoking the [expand](https://ej2.syncfusion.com/react/documentation/api/grid/detailRow/#expand) method in [dataBound](https://ej2.syncfusion.com/react/documentation/api/grid/#databound) event.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/hierarchy-grid-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/hierarchy-grid-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/hierarchy-grid-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/hierarchy-grid-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/hierarchy-grid-cs3" %}

## Dynamically Load Child Grid Data

You can Dynamically load child Grid dataSource by using [load](https://ej2.syncfusion.com/react/documentation/api/grid/#load) event. This [load](https://ej2.syncfusion.com/react/documentation/api/grid/#load) event triggers while expand the child Grid at first time.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/hierarchy-grid-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/hierarchy-grid-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/hierarchy-grid-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/hierarchy-grid-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/hierarchy-grid-cs4" %}

## Bind hierarchy grid with different field

By default, Parent and child grid relation will be maintained by **queryString** property. We should use the same field name to map both parent and child grid. To achieve parent and child relation with different fields, we need to change the mapping value in the child grid [load](https://ej2.syncfusion.com/react/documentation/api/grid/#load) event.

In the below sample, we have bound the child and parent grid with different fields. Parent grid field name as **EmployeeID** and the child grid field name as **ID**. We need to define the mapping value of **parentKeyFieldValue** from the parent row data in the child grid **load** event.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/hierarchy-grid-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/hierarchy-grid-cs5/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/hierarchy-grid-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/hierarchy-grid-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/hierarchy-grid-cs5" %}

## Adding Record in ChildGrid

Parent and child grid are related by [queryString](https://ej2.syncfusion.com/react/documentation/api/grid/#querystring) field value.
To maintain this relation in newly added record, You need to set value for [queryString](https://ej2.syncfusion.com/react/documentation/api/grid/#querystring) field in the added data by the [actionBegin](https://ej2.syncfusion.com/react/documentation/api/grid/#actionbegin) event.

In the below demo, **EmployeeID** field relates the parent and child grids. To add a new record in child grid, We have to set the **EmployeeID** field with parent record's [queryString](https://ej2.syncfusion.com/react/documentation/api/grid/#querystring) field value in the [actionBegin](https://ej2.syncfusion.com/react/documentation/api/grid/#actionbegin) event.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/hierarchy-grid-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/hierarchy-grid-cs6/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/hierarchy-grid-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/hierarchy-grid-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/hierarchy-grid-cs6" %}

## Dynamically bind data to child grid based on parent row Data

By default, the [childGrid.queryString](https://ej2.syncfusion.com/react/documentation/api/grid/#querystring) describes the relationship between parent and child grids and visualizes the data in a hierarchical structure. Instead of the `queryString` property, we can dynamically bind the datasource to the `childGrid` based on the parent row data using the [detailDataBound](https://ej2.syncfusion.com/react/documentation/api/grid/#detaildatabound) event of the grid.

While expanding the child Grid, the `detailDataBound` event will be triggered. In this event, based on the EmployeeID column value of parent row data, filter the equally matched data from the `childGrid` datasource using the `DataManager` plugin and bind the filtered data as a datasource to the `childGrid`. This can be demonstrated by the following sample.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/hierarchy-grid-cs7/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/hierarchy-grid-cs7/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/hierarchy-grid-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/hierarchy-grid-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/hierarchy-grid-cs7" %}