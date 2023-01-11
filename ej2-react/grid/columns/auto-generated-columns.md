---
layout: post
title: Auto generated columns in React Grid component | Syncfusion
description: Learn here all about Auto generated columns in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Auto generated columns 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Auto generated columns in React Grid component

The [`columns`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/) are automatically generated when
[`columns`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/) declaration is empty or undefined while initializing the grid.
All the columns in the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/#datasource) are bound as grid columns.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-cs2" %}

## Set Primary key column for auto generated columns when editing is enabled

Primary key can be defined in the declaration of column object of the grid. When we didn't declare the columns, the grid will generate the columns automatically. For these auto generated columns, you can set [`isPrimaryKey`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#isprimarykey) column property as true by using the following ways,

If Primary key "column index" is known then refer the following code example

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-cs3" %}

If Primary key **column** and its **field** is known then primary key for the respective [`column`](https://ej2.syncfusion.com/documentation/api/grid/column/) can be defined as follows.

```ts

  const column: ColumnModel = grid.getColumnByField('OrderID');
  column.isPrimaryKey = true;

```

## Set column options to auto generated columns

You can set column options such as [`format`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#format), [`width`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#width) to the auto generated columns by using [`dataBound`](https://ej2.syncfusion.com/angular/documentation/api/grid/#databound) event of the grid.

In the below example, [`width`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#width) is set for **OrderID** column, [`date`](../../common/internationalization/#date-formatting) type is set for **OrderDate** column and **numeric** type is set for **Freight** column.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs4/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-cs4" %}