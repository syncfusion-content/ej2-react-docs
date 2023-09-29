---
layout: post
title: Searching in React Grid component | Syncfusion
description: Learn here all about Searching in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Searching 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Searching in React Grid component

You can search records in a Grid, by using the [search](https://ej2.syncfusion.com/react/documentation/api/grid/#search) method with search key as a parameter.
This also provides an option to integrate search text box in Grid's toolbar by adding **Search** item to the [toolbar](https://ej2.syncfusion.com/react/documentation/api/grid/#toolbar).

To search records, inject the **Search** module in the grid.

> The clear icon is shown in the Data Grid search text box when it is focused on search text or after typing the single character in the search text box. A single click of the clear icon clears the text in the search box as well as the search results in the Data Grid.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/searching-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/searching-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/searching-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/searching-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/searching-cs1" %}

## Initial search

To apply search at initial rendering, set the [fields](https://ej2.syncfusion.com/react/documentation/api/grid/searchSettings/#fields), [operator](https://ej2.syncfusion.com/react/documentation/api/grid/searchSettings/#operator), [key](https://ej2.syncfusion.com/react/documentation/api/grid/searchSettings/#key), and [ignoreCase](https://ej2.syncfusion.com/react/documentation/api/grid/searchSettings/#ignorecase) in the [searchSettings](https://ej2.syncfusion.com/react/documentation/api/grid/#searchsettings).

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/searching-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/searching-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/searching-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/searching-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/searching-cs2" %}

> By default, Grid searches all the bound column values. To customize this behavior define the [searchSettings.fields](https://ej2.syncfusion.com/react/documentation/api/grid/searchSettings/#fields) property.

## Search operators

The search operator can be defined in the [searchSettings.operator](https://ej2.syncfusion.com/react/documentation/api/grid/searchSettings/#operator) property to configure specific searching.

The following operators are supported in searching:

Operator |Description
-----|-----
startswith |Checks whether a value begins with the specified value.
endswith |Checks whether a value ends with specified value.
contains |Checks whether a value contains with specified value.
equal |Checks whether a value equal to specified value.
notequal |Checks whether a value not equal to specified value.

## Search by external button

To search grid records from an external button, invoke the [search](https://ej2.syncfusion.com/react/documentation/api/grid/#search) method.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/searching-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/searching-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/searching-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/searching-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/searching-cs3" %}

## Search Specific Columns

By default, grid searches all visible columns. You can search specific columns by defining the specific column's field names in the [searchSettings.fields](https://ej2.syncfusion.com/react/documentation/api/grid/searchSettings/#fields) property.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/searching-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/searching-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/searching-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/searching-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/searching-cs4" %}

## Clear search by external button

To clear the searched grid records from the external button, set [searchSettings.key](https://ej2.syncfusion.com/react/documentation/api/grid/searchSettings/#key) property as **empty** string.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/searching-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/searching-cs5/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/searching-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/searching-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/searching-cs5" %}

## Search on each key stroke

You can search the Grid data on each key stroke by binding the `keyup` event for the search input element inside the [created](https://ej2.syncfusion.com/react/documentation/api/grid/#created) event. Inside the `keyup` handler you can search the Grid by invoking the [search](https://ej2.syncfusion.com/react/documentation/api/grid/#search) method of the Grid component.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/searching-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/searching-cs6/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/searching-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/searching-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/searching-cs6" %}

## Perform search operation in Grid using multiple keywords

You can perform a searching operation in the Grid using multiple keywords. This can be achieved by the [actionBegin](https://ej2.syncfusion.com/react/documentation/api/grid/#actionbegin) event of the Grid.
In the following sample, we have performed the searching with multiple keywords by using the query property of grid when the requestType is searching in the [actionBegin](https://ej2.syncfusion.com/react/documentation/api/grid/#actionbegin) event.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/searching-cs7/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/searching-cs7/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/searching-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/searching-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/searching-cs7" %}

 ## See also

 * [How to perform search by using Wildcard and LIKE operator filter](./filtering/filtering/#wildcard-and-like-operator-filter)