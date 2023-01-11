---
layout: post
title: State persistence in React Grid component | Syncfusion
description: Learn here all about State persistence in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: State persistence 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# State persistence in React Grid component

State persistence refers to the Grid's state maintained in the browser's [`localStorage`](https://www.w3schools.com/html/html5_webstorage.asp#) even if the browser is refreshed or if you move to the next page within the browser.
State persistence stores grid’s model object in the local storage when the [`enablePersistence`](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablepersistence) is defined as true.

## Restore initial Grid state

When the [`enablePersistence`](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablepersistence) property is set to **true**, the Grid will keep its state even if the page is reloaded. In some cases, you may be required to retain the Grid in its initial state. The Grid will not retain its initial state now since the [`enablePersistence`](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablepersistence) property has been enabled.

You can achieve this by destroying the grid after disabling the [`enablePersistence`](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablepersistence) property and clearing the local storage data, as shown in the sample below.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs34/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs34/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs34/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs34/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-cs34" %}

## Maintaining custom query in state persistence

The grid does not maintain the query params after page load event when the [`enablePersistence`](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablepersistence) is set to true.
This is because the grid refreshes its query params for every page load. You can maintain the custom query params by resetting the [`addParams`](https://ej2.syncfusion.com/documentation/api/data/query/#addparams) method of Grid [`query`](https://ej2.syncfusion.com/angular/documentation/api/grid/#query) in the [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionbegin) event.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs35/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs35/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs35/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs35/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-cs35" %}

## Add a new column in persisted columns list

The Grid columns can be persisted when the [enablePersistence](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablepersistence) property is set to true. If you want to add the new columns with the existing persist state, you can use the Grid inbuilt method such as `column.push` and call the [refreshColumns()](../../api/grid/#refreshcolumns) method for UI changes. Please refer to the following sample for more information.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs36/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs36/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs36/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs36/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-cs36" %}

## See Also

* [How to get persisted data in React Grid](https://www.syncfusion.com/forums/145524/how-to-get-persisted-data-in-react-grid)
* [How to get the Grid settings in React Grid](https://www.syncfusion.com/forums/155698/how-to-get-the-grid-settings-in-react-grid)