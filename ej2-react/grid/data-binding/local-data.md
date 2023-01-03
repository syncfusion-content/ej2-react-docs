---
layout: post
title: Local data in React Grid component | Syncfusion
description: Learn here all about Local data in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Local data 
publishingplatform: React
documentation: ug
domainurl: ##DomainURL##
---

# Local data in React Grid component

To bind local data to the grid, you can assign a JavaScript object array to the
[`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/#datasource) property.
The local data source can also be provided as an instance of the [`DataManager`](https://ej2.syncfusion.com/react/documentation/data/getting-started/).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/data-binding-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/data-binding-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/data-binding-cs3" % }

> By default **DataManager** uses [`JsonAdaptor`](https://ej2.syncfusion.com/react/documentation/data/adaptors/#json-adaptor) for local data-binding.

## Refresh the data source

You can add/delete the datasource records through an external button. To reflect the datasource changes in grid, you need to invoke the [`refresh`](https://ej2.syncfusion.com/angular/documentation/api/grid/#refresh) method.

Please follow the below steps to refresh the grid after datasource change.

**Step 1**:

Add/delete the datasource record by using the following code.

```typescript
    /** Add a new record */
    grid.dataSource.unshift(data);

    /** Delete a record */
    grid.dataSource.splice(selectedRow, 1);

```

**Step 2**:

Refresh the grid after the datasource change by using the [`refresh`](https://ej2.syncfusion.com/angular/documentation/api/grid/#refresh) method.

```typescript

    /** Refresh the Grid */
    grid.refresh();

```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/editing-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/editing-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/editing-cs1" % }