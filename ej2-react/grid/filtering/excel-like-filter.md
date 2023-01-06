---
layout: post
title: Excel like filter in React Grid component | Syncfusion
description: Learn here all about Excel like filter in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Excel like filter 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Excel like filter in React Grid component

You can use the [`columns.filterTemplate`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#filtertemplate) property to define custom component in advanced filter UI from excel filter for a particular column.

The following example demonstrates the way to use filter template for a column when using excel filter. In the following example, the **DropdownList** component is used to filter **CustomerID** column using filter template.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/filter-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/filter-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/filter-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/filter-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/filter-cs1" % }

> * By default, while opening the excel/checkbox filter in the Grid, the filter dialog will get and display the distinct data from the first 1000 records bound to the Grid to optimize performance. The remaining records will be returned as a result of the search option of the filter dialog.
> * However, we can increase the excel/checkbox filter count by modifying the `filterChoiceCount` argument value(as per our need) in the [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionBegin) event when the [`requestType`](https://ej2.syncfusion.com/angular/documentation/api/grid/filterEventArgs/#requesttype) is `filterchoicerequest` or `filtersearchbegin`. This is demonstrated in the below code snippet,

```typescript
const actionBegin = (args: FilterSearchBeginEventArgs) => {
    if (args.requestType === "filterchoicerequest" || args.requestType === "filtersearchbegin") {
        args.filterChoiceCount = 3000;
    }
}
```