---
layout: post
title: React Grid - Excel like filter | Syncfusion
description: Learn here all about Excel like filter in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Excel like filter 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Excel like filter in React Grid component

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component offers an Excel-like filter feature, providing a familiar and user-friendly interface for filtering data within the grid. Excel-like filter displays a dialog with a checkbox list, search box, and sorting options, similar to Microsoft Excel's filter. This filtering type simplifies complex filtering operations on specific columns, allowing for quick data location and manipulation. Excel-like filtering is especially useful when dealing with large datasets and columns containing distinct categorical values (such as status, category, country, or department names).

The dialog displays all unique values from that column as a checkbox list. Values can be selected or deselected to include or exclude them from the Grid results, then **OK** button can be clicked to filter the data.

> For basic filtering setup and configuration, refer to the [Filter Feature Guide](filtering.md#setup-requirements).

## Enable Excel filtering

To enable the Excel like filtering, set the [filterSettings.type](https://ej2.syncfusion.com/react/documentation/api/grid/filterSettings) property to `Excel`. This property determines the type of filter UI rendered in the Grid.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/excel-like-filter-hide/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/excel-like-filter-hide/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/excel-like-filter-hide/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/excel-like-filter-hide/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/excel-like-filter-hide" %}

>* The Excel-like filter feature supports various filter conditions, including text-based, number-based, date-based, and boolean-based filters.
>* The filter dialog provides additional options, such as sorting filter values, searching for specific values, and clearing applied filters.

## Enable CheckBox filtering

Checkbox filtering is the core mechanism of Excel-like filter. When the filter dialog opens, all unique values from the selected column appear as a checkbox list. Multiple values can be selected by checking their boxes to include them in the filtered results. Values can be unchecked to exclude them from the results.

The checkbox list supports search functionality: typing in the search box filters the checkbox list to show only matching values, making it easier to find specific items in long lists.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/check-box-filter-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/check-box-filter-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/check-box-filter-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/check-box-filter-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/check-box-filter-cs1" %}

## Customize the filter choice count

By default, the filter choice count is set to 1000, which means the filter dialog displays a maximum of 1000 distinct values for each column as a checkbox list. This default value ensures the filter operation remains efficient, even with large datasets. Remaining records (those beyond the first 1000) are accessible through the search box within the filter dialog.

**Why this limit exists**: Loading all distinct values from a column with tens of thousands of unique entries would cause the filter dialog to open slowly or freeze. The 1000-value limit prevents this performance issue while still providing access to all data via search.

The Grid component allows customization of the number of distinct values displayed in the checkbox list of the Excel/Checkbox filter dialog. The filter choice count can be adjusted by modifying the [filterChoiceCount](https://ej2.syncfusion.com/react/documentation/api/grid/filterSearchBeginEventArgs#filterchoicecount) value. The count can be increased to display more initial options, or decreased to improve dialog opening speed for extremely large datasets.

The following example demonstrates how to customize the filter choice count in the checkbox list of the filter dialog. In the [actionBegin](https://ej2.syncfusion.com/react/documentation/api/grid#actionbegin) event, the code checks if the [requestType](https://ej2.syncfusion.com/react/documentation/api/grid/filterEventArgs#requesttype) is either `filterChoiceRequest` or `filterSearchBegin`, then sets the `filterChoiceCount` property to the desired value.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/excel-like-filter-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/excel-like-filter-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/excel-like-filter-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/excel-like-filter-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/excel-like-filter-cs2" %}

> The specified filter choice count value determines the display of unique items as a checkbox list in the `Excel/Checkbox` filter dialog. Higher values can result in a delay when rendering checkbox items while opening the filter dialog. Therefore, setting a restricted filter choice count value is advisable to maintain optimal performance.

## Add current selection to filter checkbox

By default, the `Excel/Checkbox` filter replaces previous selections when a new filter is applied to the same column. Applying a filter multiple times on the same column clears the previously filtered values. The "Add current selection to filter" checkbox allows retention of previous filter values by combining new selections with existing ones. This checkbox appears in the filter dialog when data is searched using the search bar of the `Excel/Checkbox` filter.

This feature is useful when building cumulative filters across multiple filtering operations without having to re-select previously chosen values each time.

The following image describes the above mentioned behavior:

![Checkbox filter](../images/checkboxfilter.png)

## Show customized text in checkbox list data

The Grid component provides flexibility to customize the text displayed in the `Excel/Checkbox` filtering options. This customization allows modification of default text to provide more meaningful and contextual labels for filtering values.

To customize the text in the `Excel/Checkbox` filter, a `filterItemTemplate` can be defined and bound to the desired column. The `filterItemTemplate` property allows creation of custom templates for filter items. Any logic and HTML elements can be used within this template to display the desired text or content.

In the example below, the text displayed in the filter checkbox list for the "Delivered" column is customized. This is achieved by defining a `filterItemTemplate` within the `ColumnDirective` element for that specific column. Inside the template, React's template syntax conditionally displays "Delivered" if the data value is `true` and "Not delivered" if the value is `false`.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/excel-like-filter-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/excel-like-filter-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/excel-like-filter-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/excel-like-filter-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/excel-like-filter-cs3" %}

## Show template in checkbox list data

The `filterItemTemplate` property in the Grid allows customization of the appearance of filter items in the Grid's filter checkbox list for a specific column. This property is useful when providing a custom UI or additional information within the filter checkbox list, such as icons, text, or any HTML elements, alongside the default filter items.

In this example, the `filterItemTemplate` renders icons along with the category names in the filter checkbox list for the "Category Name" column.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/excel-like-filter-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/excel-like-filter-cs5/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/excel-like-filter-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/excel-like-filter-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/excel-like-filter-cs5" %}

## Bind custom remote datasource for excel/checkbox filtering

The Grid allows dynamic change of the filter data source for the Excel or Checkbox filter module using custom remote data. This capability enables the filter dialog to display values from a different data source than the Grid's main data source.

This can be accomplished by either assigning a custom remote `DataManager` as the `dataSource` or by fetching the data initially and storing it in a global variable. This data can then be bound directly to the filter module's `dataSource` in the [actionBegin](https://ej2.syncfusion.com/react/documentation/api/grid#actionbegin) event for the `filterBeforeOpen` [requestType](https://ej2.syncfusion.com/react/documentation/api/grid/filterEventArgs#requesttype), as detailed in the [knowledge base article](https://support.syncfusion.com/kb/article/10065/how-to-change-the-data-source-for-checkbox-filter-popup-in-grid).

The following example demonstrates how to dynamically change the remote custom data source for all columns in the Excel or Checkbox filter dialog using a `DataManager` with `WebApiAdaptor`.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/excel-like-filter-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/excel-like-filter-cs6/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/excel-like-filter-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/excel-like-filter-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/excel-like-filter-cs6" %}

## Hide sorting option in filter dialog

The Excel-like filter dialog in the Grid includes built-in sorting options (ascending and descending) by default within the context menu. To hide these sorting options, the `display` property of the following CSS classes can be set to `none`.

```css
.e-excel-ascending,
.e-excel-descending,
.e-separator.e-excel-separator {
 display: none;
}
```

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/excel-like-filter-hide/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/excel-like-filter-hide/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/excel-like-filter-hide/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/excel-like-filter-hide/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/excel-like-filter-hide" %}

## Hide search box in filter dialog

The Excel-like filter dialog in the Grid includes a search box by default, which allows users to search for specific values in the filter checkbox list. To hide the search box in the filter dialog for a specific column, set the `hideSearchbox` property to `true` within the [column.filter](https://ej2.syncfusion.com/react/documentation/api/grid/column#filter) configuration.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/excel-like-filter-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/excel-like-filter-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/excel-like-filter-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/excel-like-filter-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/excel-like-filter-cs4" %}

## Render checkbox list data in on-demand for excel/checkbox filtering

The `Excel/Checkbox` filter type of grid has a restriction where only the first "1000" unique sorted items are accessible to view in the filter dialog checkbox list content by scrolling. This limitation is in place to avoid rendering delays when opening the filter dialog. However, the searching and filtering processes consider all unique items in that particular column.

**Limitation**: Without on-demand loading, displaying all unique values from a column with "50,000" distinct entries would cause the filter dialog to freeze or take several seconds to open. The 1000-item limit prevents this performance issue by loading only the first batch initially.

The `Excel/Checkbox` filter in the grid provides an option to load large data sets on-demand during scrolling to improve the scrolling limitation functionality. This is achieved by setting the [filterSettings.enableInfiniteScrolling](https://ej2.syncfusion.com/react/documentation/api/grid/filterSettings#enableinfinitescrolling) property to `true`. This feature proves especially beneficial for managing extensive datasets, enhancing data loading performance in the checkbox list, and allowing interactive checkbox selection with persistence for the selection based on filtering criteria.

**How on-demand loading works**: Similar to infinite scrolling in social media feeds, the filter dialog loads the next batch of values automatically as the scroll position reaches the bottom of the current list. This process repeats until all unique values have been loaded or the search box is used to narrow results.

The `Excel/Checkbox` filter retrieves distinct data in ascending order, governed by its [filterSettings.itemsCount](https://ej2.syncfusion.com/react/documentation/api/grid/filterSettings#itemscount) property, with a default value of "50". As the checkbox list data scroller reaches its end, the next dataset is fetched and displayed, with the notable advantage that this process only requests new checkbox list data without redundantly fetching the existing loaded dataset.

### Customize the items count for initial rendering

Based on the items count value, the Excel/Checkbox filter retrieves unique data and displays it in the Excel/Checkbox filter content dialog. The count of on-demand data rendering for Excel/Checkbox filter can be customized by adjusting the [filterSettings.itemsCount](https://ej2.syncfusion.com/react/documentation/api/grid/filterSettings#itemscount) property. The default value is `50`.

```ts
grid.filterSettings = { enableInfiniteScrolling: true, itemsCount: 40 };
```

> It is recommended to keep the itemsCount below "300". Higher values will result in unwanted whitespace and page performance issues due to increased DOM elements.

### Customize the loading animation effect

A loading effect is presented to signify that loading is in progress when the checkbox list data scroller reaches the end, and there is a delay in receiving the data response from the server. The loading effect during on-demand data retrieval for Excel/Checkbox filter can be customized using the [filterSettings.loadingIndicator](https://ej2.syncfusion.com/react/documentation/api/grid/filterSettings#loadingindicator) property. The default value is `Shimmer`.

**Example configuration**:

```ts
grid.filterSettings = { enableInfiniteScrolling: true, loadingIndicator: 'Spinner' };
```

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject, Page, Sort } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { Query, DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

function App() {
    const hostUrl = 'https://services.syncfusion.com/react/production/';
    const data = new DataManager({ url: hostUrl + 'api/UrlDataSource', adaptor: new UrlAdaptor });
    const query = new Query().addParams('dataCount', '10000');
    let gridInstance;
    const filterSettings = {
        type: 'Excel', enableInfiniteScrolling: true
    };
    return <GridComponent dataSource={data} query={query} allowSorting={true} allowPaging={true} ref={grid => gridInstance = grid} pageSettings={{ pageSize: 10, pageCount: 5 }} allowFiltering={true} filterSettings={filterSettings}>
    <ColumnsDirective>
        <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign='Right'></ColumnDirective>
        <ColumnDirective field='Employees' headerText='Employee Name' width='150'></ColumnDirective>
        <ColumnDirective field='Designation' headerText='Designation' width='130' textAlign='Right'/>
        <ColumnDirective field='CurrentSalary' headerText='Current Salary' width='120' format='C2' textAlign='Right'/>
    </ColumnsDirective>
    <Inject services={[Filter, Page, Sort]}/>
</GridComponent>;
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, FilterSettingsModel } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject, Sort, Page } from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { Query, DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

function App() {
  const hostUrl: string = 'https://services.syncfusion.com/react/production/';
  const data: DataManager = new DataManager({ url: hostUrl + 'api/UrlDataSource', adaptor: new UrlAdaptor });
  const query: Query = new Query().addParams('dataCount', '10000');
  let gridInstance: GridComponent;
  const filterSettings: FilterSettingsModel = {
    type: 'Excel', enableInfiniteScrolling: true
  };
  return <GridComponent dataSource={data} query={query} allowSorting={true} allowPaging={true} ref={grid => gridInstance = grid} pageSettings={{ pageSize: 10, pageCount: 5 }} allowFiltering={true} filterSettings={filterSettings}>
    <ColumnsDirective>
      <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign='Right'></ColumnDirective>
      <ColumnDirective field='Employees' headerText='Employee Name' width='150'></ColumnDirective>
      <ColumnDirective field='Designation' headerText='Designation' width='130' textAlign='Right' />
      <ColumnDirective field='CurrentSalary' headerText='CurrentSalary' width='120' format='C2' textAlign='Right' />
    </ColumnsDirective>
    <Inject services={[Filter, Page, Sort]} />
  </GridComponent>;
};
export default App;
{% endraw %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/checkbox-excel-filter" %}

## See also

* [How to perform filter by using Wildcard and LIKE operator filter](./filtering#wildcard-and-like-operator-filter)
* [How to change loading indicator in React Grid](../data-binding/data-binding#loading-animation)
