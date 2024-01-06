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

You can use the [columns.filterTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/column/#filtertemplate) property to define custom component in advanced filter UI from excel filter for a particular column.

The following example demonstrates the way to use filter template for a column when using excel filter. In the following example, the **DropdownList** component is used to filter **CustomerID** column using filter template.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/filter-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/filter-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/filter-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/filter-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/filter-cs1" %}

> * By default, while opening the excel/checkbox filter in the Grid, the filter dialog will get and display the distinct data from the first 1000 records bound to the Grid to optimize performance. The remaining records will be returned as a result of the search option of the filter dialog.
> * However, we can increase the excel/checkbox filter count by modifying the `filterChoiceCount` argument value(as per our need) in the [actionBegin](https://ej2.syncfusion.com/react/documentation/api/grid/#actionbegin) event when the [requestType](https://ej2.syncfusion.com/react/documentation/api/grid/filterEventArgs/#requesttype) is `filterchoicerequest` or `filtersearchbegin`. This is demonstrated in the below code snippet,

```ts
const actionBegin = (args: FilterSearchBeginEventArgs) => {
    if (args.requestType === "filterchoicerequest" || args.requestType === "filtersearchbegin") {
        args.filterChoiceCount = 3000;
    }
}
```

## Render checkbox list data in on-demand for excel/checkbox filtering

The Excel/Checkbox filter type of Grid has a restriction where only the first 1000 unique sorted items are accessible to view in the filter dialog checkbox list content by scrolling. This limitation is in place to avoid any rendering delays when opening the filter dialog. However, the searching and filtering processes consider all unique items in that particular column.

The Excel/Checkbox filter in the Grid provides an option to load large data sets on-demand during scrolling to improve scrolling limitation functionality. This is achieved by setting the [filterSettings.enableInfiniteScrolling](https://ej2.syncfusion.com/react/documentation/api/grid/filterSettings/#enableinfinitescrolling) property to **true**. This feature proves especially beneficial for managing extensive datasets, enhancing data loading performance in the checkbox list, and allowing interactive checkbox selection with persistence for the selection based on filtering criteria.

The Excel/Checkbox filter retrieves distinct data in ascending order, governed by its [filterSettings.itemsCount](https://ej2.syncfusion.com/react/documentation/api/grid/filterSettings/#itemscount) property, with a default value of **50**. As the checkbox list data scroller reaches its end, the next dataset is fetched and displayed, with the notable advantage that this process only requests new checkbox list data without redundantly fetching the existing loaded dataset.

### Customize the items count for initial rendering

Based on the items count value, the Excel/Checkbox filter gets unique data and displayed in Excel/Checkbox filter content dialog. You can customize the count of on-demand data rendering for Excel/Checkbox filter by adjusting the [filterSettings.itemsCount](https://ej2.syncfusion.com/react/documentation/api/grid/filterSettings/#itemscount) property. The default value is `50`

```ts
grid.filterSettings = { enableInfiniteScrolling = true, itemsCount = 40 };
```

> It is recommended to keep the itemsCount below **300**. Higher values will result in unwanted whitespace because of DOM maintenance performance degradation.

### Customize the loading animation effect

A loading effect is presented to signify that loading is in progress when the checkbox list data scroller reaches the end, and there is a delay in receiving the data response from the server. The loading effect during on-demand data retrieval for Excel/Checkbox filter can be customized using the [filterSettings.loadingIndicator](https://ej2.syncfusion.com/react/documentation/api/grid/filterSettings/#loadingindicator) property. The default value is `Shimmer`.

```ts
grid.filterSettings = { enableInfiniteScrolling = true, loadingIndicator = 'Spinner' };
```

In the provided example, On-Demand Excel filter has been enabled for the React Grid

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/checkbox-excel-filter/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/checkbox-excel-filter/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/checkbox-excel-filter" %}

## See also

* [How to perform filter by using Wildcard and LIKE operator filter](./filtering/#wildcard-and-like-operator-filter)
