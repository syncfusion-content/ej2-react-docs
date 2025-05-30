---
layout: post
title: Aggregates in React Grid component | Syncfusion
description: Learn here all about Aggregates in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Aggregates 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Aggregates in React Grid component

The Aggregates feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component allows you to display aggregate values in the footer, group footer, and group caption of the grid. With this feature, you can easily perform calculations on specific columns and show summary information. This feature can be configured using the **e-aggregates** directive. To represent an aggregate column, you need to specify the minimum required properties, such as [field](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn/#field) and [type](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn/#type).

To use aggregate feature, you need to inject the **Aggregate** module into the grid.

**Displaying aggregate values**

By default, the aggregate values are displayed in the footer, group, and caption cells of the grid. However, you can choose to display the aggregate value in any of these cells by using the following properties:

* **[footerTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn/#footertemplate):** Use this property to display the aggregate value in the footer cell. You can define a custom template to format the aggregate value as per your requirements.

* **[groupFooterTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn/#groupfootertemplate):** Use this property to display the aggregate value in the group footer cell. Similar to the footerTemplate, you can provide a custom template to format the aggregate value.

* **[groupCaptionTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn/#groupcaptiontemplate):** Use this property to display the aggregate value in the group caption cell. You can define a custom template to format the aggregate value.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/aggregate-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/aggregate-cs5/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/aggregate-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/aggregate-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/aggregate-cs5" %}

> * When using local data, the total summary is calculated based on the entire dataset available in the grid. The aggregate values will reflect calculations across all the rows in the grid.

> * When working with remote data, the total summary is calculated based on the current page records. This means that if you have enabled pagination and are displaying data in pages, the aggregate values in the footer will represent calculations only for the visible page.

## Built-in aggregate types

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component provides several built-in aggregate types that can be specified in the [type](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn/#type) property to configure an aggregate column.

The available built-in aggregate types are:

* **Sum:** Calculates the sum of the values in the column.
* **Average:** Calculates the average of the values in the column.
* **Min:** Finds the minimum value in the column.
* **Max:** Finds the maximum value in the column.
* **Count:** Counts the number of values in the column.
* **TrueCount:** Counts the number of true values in the column.
* **FalseCount:** Counts the number of false values in the column.

Here is an example that demonstrates how to use built-in aggregates types in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/aggregate-cs8/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/aggregate-cs8/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/aggregate-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/aggregate-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/aggregate-cs8" %}

## Multiple aggregates for a column

Multiple aggregates for a column allows you to calculate and display different summary values simultaneously for a single column in a grid. Normally, a column is associated with a single aggregate function, such as sum, average, count and etc., which provides a single summary value for the entire column.

However, in scenarios where you need to display multiple summary values for the same column, multiple aggregates come into play. This feature enables you to calculate and display various aggregate values, such as sum, average, minimum, maximum, or custom calculations, concurrently for a specific column.

You can use multiple aggregates for a single column in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid by specifying the aggregate [type](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn/#type) as an array.

Here's an example of how to use multiple aggregates in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/aggregate-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/aggregate-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/aggregate-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/aggregate-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/aggregate-cs1" %}