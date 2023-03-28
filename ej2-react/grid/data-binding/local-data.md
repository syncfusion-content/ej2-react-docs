---
layout: post
title: Local data in React Grid component | Syncfusion
description: Learn here all about Local data in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Local data 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Local data in React Grid component

To bind local data to the grid, you can assign a JavaScript object array to the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/#datasource) property.
The local data source can also be provided as an instance of the [`DataManager`](https://ej2.syncfusion.com/react/documentation/data/getting-started/).

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/data-binding-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/data-binding-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/data-binding-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/data-binding-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/data-binding-cs3" %}

> By default **DataManager** uses [`JsonAdaptor`](https://ej2.syncfusion.com/react/documentation/data/adaptors/#json-adaptor) for local data-binding.

## Refresh the data source

You can add/delete the datasource records through an external button. To reflect the datasource changes in grid, you need to invoke the [`refresh`](https://ej2.syncfusion.com/angular/documentation/api/grid/#refresh) method.

Please follow the below steps to refresh the grid after datasource change.

**Step 1**:

Add/delete the datasource record by using the following code.

```ts
    /** Add a new record */
    grid.dataSource.unshift(data);

    /** Delete a record */
    grid.dataSource.splice(selectedRow, 1);

```

**Step 2**:

Refresh the grid after the datasource change by using the [`refresh`](https://ej2.syncfusion.com/angular/documentation/api/grid/#refresh) method.

```ts

    /** Refresh the Grid */
    grid.refresh();

```

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/editing-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/editing-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/editing-cs1" %}