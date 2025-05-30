---
layout: post
title: Filtering in React Grid component | Syncfusion
description: Learn here all about Filtering in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Filtering 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in React Grid component

Filtering is a powerful feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component that enables you to selectively view data based on specific criteria. It allows you to narrow down large datasets and focus on the information you need, thereby enhancing data analysis and decision-making.

To use filter, inject **Filter** module in the grid.

To enable filtering in the Grid, you need to set the [allowFiltering](https://ej2.syncfusion.com/react/documentation/api/grid/#allowfiltering) property of the Grid component to true. Once filtering is enabled, you can configure various filtering options through the [filterSettings](https://ej2.syncfusion.com/react/documentation/api/grid/filterSettings) property of the Grid component. This property allows you to define the behavior and appearance of the filter.

Here is an example that demonstrates the default filtering feature of the grid:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/filter-cs8/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/filter-cs8/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/filter-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/filter-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/filter-cs8" %}

> * You can apply and clear filtering, by using [filterByColumn](https://ej2.syncfusion.com/react/documentation/api/grid/filter/#filterbycolumn) and [clearFiltering](https://ej2.syncfusion.com/react/documentation/api/grid/filter/#clearfiltering) methods.
> * To disable Filtering for a particular column, by specifying [allowFiltering](https://ej2.syncfusion.com/react/documentation/api/grid/column/#allowfiltering) to false.

## Initial filter

To apply an initial filter, you need to specify the filter criteria using the [predicate](https://ej2.syncfusion.com/react/documentation/api/grid/predicate) object in [filterSettings.columns](https://ej2.syncfusion.com/react/documentation/api/grid/filterSettingsModel/#columns). The `predicate` object represents the filtering condition and contains properties such as field, operator, and value.

Here is an example of how to configure the initial filter using the `predicate` object:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/filter-cs9/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/filter-cs9/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/filter-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/filter-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/filter-cs9" %}

### Initial filter with multiple values for same column

In the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid, you can establish an initial filter containing multiple values for a particular column, which helps you to preset filter conditions for a specific column using multiple values. This functionality allows you to display a filtered records in the grid right after the grid is initially loaded.

To apply the filter with multiple values for same column at initial rendering, set the filter [predicate](https://ej2.syncfusion.com/react/documentation/api/grid/predicate) object in [filterSettings.columns](https://ej2.syncfusion.com/react/documentation/api/grid/filterSettingsModel/#columns).

The following example demonstrates, how to perform an initial filter with multiple values for same **CustomerID** column using `filterSettings.columns` and `predicate`.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/filter-cs20/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/filter-cs20/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/filter-cs20/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/filter-cs20/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/filter-cs20" %}

### Initial filter with multiple values for different columns 

By applying an initial filter with multiple values for different columns in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid, you have the flexibility to set predefined filter settings for each column. This results in a filtered records of the grid right after the grid is initially loaded.

To apply the filter with multiple values for different column at initial rendering, set the filter [predicate](https://ej2.syncfusion.com/react/documentation/api/grid/predicate) object in [filterSettings.columns](https://ej2.syncfusion.com/react/documentation/api/grid/filterSettingsModel/#columns).

The following example demonstrates how to perform an initial filter with multiple values for different **Order ID** and **Customer ID** columns using `filterSettings.columns` and `predicate`.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/filter-cs21/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/filter-cs21/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/filter-cs21/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/filter-cs21/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/filter-cs21" %}

## Filter operators

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component provides various filter operators that can be used to define filter conditions for columns. The filter operator for a column can be defined using the [operator](https://ej2.syncfusion.com/react/documentation/api/grid/predicateModel/#operator) property in the [filterSettings.columns](https://ej2.syncfusion.com/react/documentation/api/grid/filterSettings/#columns) object.

The available operators and its supported data types are,

Operator |Description |Supported Types
-----|-----|-----
startsWith |Checks whether a value begins with the specified value. |String
endsWith |Checks whether a value ends with specified value. |String
contains |Checks whether a value contains with specified value. |String
doesnotstartwith |Checks whether the value does not begin with the specified value. |String
doesnotendwith |Checks whether the value does not end with the specified value. |String
doesnotcontain |Checks whether the value does not contain the specified value. |String
equal |Checks whether a value equal to specified value. |String &#124; Number &#124; Boolean &#124; Date
notEqual |Checks whether a value not equal to specified value. |String &#124; Number &#124; Boolean &#124; Date
greaterThan |Checks whether a value is greater than with specified value. |Number &#124; Date
greaterThanOrEqual|Checks whether a value is greater than or equal to specified value. |Number &#124; Date
lessThan |Checks whether a value is less than with specified value. |Number &#124; Date
lessThanOrEqual |Checks whether a value is less than or equal to specified value. |Number &#124; Date
isnull |Returns the values that are null. |String &#124; Number &#124; Date
isnotnull |Returns the values that are not null. |String &#124; Number &#124; Date
isempty |Returns the values that are empty. |String
isnotempty |Returns the values that are not empty. |String
between|Filter the values based on the range between the start and end specified values. |Number &#124; Date
in |Filters multiple records in the same column that exactly match any of the selected values. |String &#124; Number &#124; Date
notin |Filters multiple records in the same column that do not match any of the selected values. |String &#124; Number &#124; Date

## Wildcard and LIKE operator filter

**Wildcard** and **LIKE** filter operators filters the value based on the given string pattern, and they apply to string-type columns. But it will work slightly differently.

### Wildcard filtering

The **Wildcard** filter can process one or more search patterns using the "*" symbol, retrieving values matching the specified patterns.

* The **Wildcard** filter option is supported for the DataGrid that has all search options.

**For example:**

Operator |Description
-----|-----
a*b |Everything that starts with "a" and ends with "b".
a* |Everything that starts with "a".
*b |Everything that ends with "b".
*a* |Everything that has an "a" in it.
*a*b* |Everything that has an "a" in it, followed by anything, followed by a "b", followed by anything.

![WildcardFilter](../images/wildcard_search.gif)

### LIKE filtering

The **LIKE** filter can process single search patterns using the "%" symbol, retrieving values matching the specified patterns. The following Grid features support LIKE filtering on string-type columns:

* Filter Menu
* Filter Bar with the [filterSettings.showFilterBarOperator](https://ej2.syncfusion.com/react/documentation/api/grid/filter/#showFilterBarOperator) property enabled on the Grid [filterSettings](https://ej2.syncfusion.com/react/documentation/api/grid/filterSettings).
* Custom Filter of Excel filter type.

**For example:**

Operator |Description
-----|-----
%ab% |Returns all the value that are contains "ab" character.
ab% |Returns all the value that are ends with "ab" character.
%ab |Returns all the value that are starts with "ab" character.

![LIKEFilter](../images/like_filter.gif)

> By default, the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid uses different filter operators for different column types. The default filter operator for string type columns is **startsWith**, for numerical type columns is **equal**, and for boolean type columns is also **equal**.

## Diacritics filter

The diacritics filter feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid is useful when working with text data that includes accented characters (diacritic characters). By default, the grid ignores these characters during filtering. However, if you need to consider diacritic characters in your filtering process, you can enable this feature by setting the [filterSettings.ignoreAccent](https://ej2.syncfusion.com/react/documentation/api/grid/filter/#filterbycolumn) property to true using the [filterSettings](https://ej2.syncfusion.com/react/documentation/api/grid/filterSettings/).

Consider the following sample where the `ignoreAccent` property is set to true in order to include diacritic characters in the filtering process:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/filter-diacritics-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/filter-diacritics-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/filter-diacritics-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/filter-diacritics-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/filter-diacritics-cs1" %}

## Perform ENUM column filtering

The Syncfusion React Grid allows you to filter enum-type data using the [filterTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/column/#filtertemplate) feature. This is particularly useful for filtering predefined values, such as categories or statuses.

To achieve this functionality:

1. Render [DropDownList](https://ej2.syncfusion.com/react/documentation/drop-down-list/getting-started) in the `filterTemplate` for the enum-type column.

2. Bind the enumerated list data to the column.

3. Use the [template](https://ej2.syncfusion.com/react/documentation/api/grid/column/#template) property in the **Type** column to display enum values in a readable format.

4. In the [change](https://ej2.syncfusion.com/react/documentation/api/drop-down-list#change) event of the **DropDownList**, dynamically filter the column using the [filterByColumn](https://ej2.syncfusion.com/react/documentation/api/grid#filterbycolumn) method of the Grid.

Below is an example demonstrating how to filter enum-type data in a Grid:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/filtering-enum/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/filtering-enum/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/filtering-enum/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/filtering-enum/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/filtering-enum" %}

## Filtering with case sensitivity

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid provides the flexibility to enable or disable case sensitivity during filtering. This feature is useful when you want to control whether filtering operations should consider the case of characters. It can be achieved by using the  [enableCaseSensitivity](https://ej2.syncfusion.com/react/documentation/api/grid/filterSettings/#enablecasesensitivity) property within the [filterSettings](https://ej2.syncfusion.com/react/documentation/api/grid/filterSettings) of the grid.

Below is an example code demonstrating how to enable or disable case sensitivity while filtering:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ChangeEventArgs, SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, FilterSettingsModel } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject } from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const filterSettings = { enableCaseSensitivity: false };
  const onToggleCaseSensitive = (args) => {
    if (args.checked) {
      grid.filterSettings.enableCaseSensitivity = true;
    }
    else {
    grid.filterSettings.enableCaseSensitivity = false;
    }
  }
  return (<div>
    <label style={{marginTop:'20px'}}> Enable Case Sensitivity </label>
    <SwitchComponent change={onToggleCaseSensitive}></SwitchComponent>
    <GridComponent ref={g => grid = g} dataSource={data} allowFiltering={true} filterSettings={filterSettings} >
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='100' textAlign="Right" />
        <ColumnDirective field='ShipRegion' headerText='Ship Region' width='100' textAlign="Right" />
      </ColumnsDirective>
      <Inject services={[Filter]} />
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ChangeEventArgs, SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, FilterSettingsModel } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject } from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const filterSettings: FilterSettingsModel = { enableCaseSensitivity: false };
  const onToggleCaseSensitive = (args: ChangeEventArgs) => {
    if (args.checked) {
      (grid as GridComponent).filterSettings.enableCaseSensitivity = true;
    }
    else {
      (grid as GridComponent).filterSettings.enableCaseSensitivity = false;
    }
  }
  return (<div>
    <label style={{marginTop:'20px'}}> Enable Case Sensitivity </label>
    <SwitchComponent change={onToggleCaseSensitive}></SwitchComponent>
    <GridComponent ref={g => grid = g} dataSource={data} allowFiltering={true} filterSettings={filterSettings} >
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='100' textAlign="Right" />
        <ColumnDirective field='ShipRegion' headerText='Ship Region' width='100' textAlign="Right" />
      </ColumnsDirective>
      <Inject services={[Filter]} />
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/filter-cs12/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/filter-cs12/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/filter-cs12" %}

## Enable different filter for a column

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid offers the flexibility to customize filtering behavior for different columns by enabling various types of filters such as **Menu**, **Excel**, **Checkbox**. This feature allows you to tailor the filtering experience to suit the specific needs of each column in your grid. For example, you might prefer a menu-based filter for a category column, an Excel-like filter for a date column, and a checkbox filter for a status column. 

It can be achieved by adjusting the [filter.type](https://ej2.syncfusion.com/react/documentation/api/grid/column/#filter) property based on your requirements.

Here's an example where the menu filter is enabled by default for all columns, but you can dynamically modify the filter types through a dropdown:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/filter-cs13/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/filter-cs13/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/filter-cs13/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/filter-cs13/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/filter-cs13" %}

## Change default filter operator for particular column

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component provides the flexibility to change the default filter operator for a particular column. By default, the filter operator for string-type columns is **startsWith**, for numerical-type columns is **equal**, and for boolean-type columns is also **equal**. However, you may need to customize the filter operator to better match the nature of the data in a specific column. This can be achieved using the operator property within the [filterSettings](https://ej2.syncfusion.com/react/documentation/api/grid/#filtersettings) configuration.

Here's an example that demonstrates how to change the default filter operator column :

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/filter-cs14/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/filter-cs14/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/filter-cs14/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/filter-cs14/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/filter-cs14" %}

## Filter grid programmatically with single and multiple values using method 

Programmatic filtering in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid with single and multiple values allows you to apply filters to specific columns in the grid without relying on interactions through the interface.

This can be achieved by utilizing the [filterByColumn](https://ej2.syncfusion.com/react/documentation/api/grid/#filterbycolumn) method of the Grid.

The following example demostrates, how to programmatically filter the Grid using single and multiple values for the **OrderID** and **CustomerID** columns. This is accomplished by calling the `filterByColumn` method within an external button click function.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/filter-cs22/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/filter-cs22/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/filter-cs22/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/filter-cs22/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/filter-cs22" %}

## How to get filtered records

Retrieving filtered records in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid is Essential<sup style="font-size:70%">&reg;</sup> when you want to work with data that matches the currently applied filters. You can achieve this using available methods and properties in the grid component.

**1.Using the getFilteredRecords() method**

The [getFilteredRecords](https://ej2.syncfusion.com/react/documentation/api/grid/#getfilteredrecords) method is used to obtain an array of records that match the currently applied filters on the grid.

This method retrieves an array of records that match the currently applied filters on the grid.

Here's an example of how to get the filtering data in a Syncfusion<sup style="font-size:70%">&reg;</sup> grid using the `getFilteredRecords` method:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject, Page, PageSettingsModel } from '@syncfusion/ej2-react-grids'
import { MessageComponent } from '@syncfusion/ej2-react-notifications';
import React, { useState } from 'react';
import { data } from './datasource';
function App() {
  let grid;
  let filteredGrid;
  const pageSettings = { pageSize: 10, pageCount: 5 };
  let filteredData;
  let showRecords;
  let showWarning;
  const [isFilteredGridVisible, setIsFilteredGridVisible] = useState(false);
  const [isMsgWarningVisible, setIsMsgWarningVisible] = useState(false);
  const getFilter = () => {
    filteredData = grid.getFilteredRecords();
    showRecords = filteredData.length > 0 ? true : false;
    showWarning = !showRecords;
    if (showRecords) {
      filteredGrid.dataSource = filteredData;
    }
    setIsMsgWarningVisible(showWarning);
    setIsFilteredGridVisible(showRecords);
  }
  const clear = () => {
    grid.clearFiltering();
    showRecords = false;
    showWarning = false;
    setIsMsgWarningVisible(false);
    setIsFilteredGridVisible(false);
  }
  return (<div><div id='msgWarning' style={{ display: isMsgWarningVisible ? 'block' : 'none' }}>
    <MessageComponent content="No Records" cssClass="e-content-center" severity="Warning"></MessageComponent></div>
    <ButtonComponent cssClass="e-success" onClick={getFilter}>Get Filtered Data</ButtonComponent>
    <ButtonComponent cssClass='e-danger' onClick={clear}>Clear</ButtonComponent>
    <GridComponent ref={g => grid = g} dataSource={data} allowFiltering={true} pageSettings={pageSettings} allowPaging={true}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
        <ColumnDirective field='Freight' headerText='Freight' format='C' width='100' textAlign="Right" />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='100' textAlign="Right" />
      </ColumnsDirective>
      <Inject services={[Filter, Page]} />
    </GridComponent>
    <div id='filteredGrid' style={{ display: isFilteredGridVisible ? 'block' : 'none' }}>
      <h3>Filtered Records</h3>
      <GridComponent ref={fg => filteredGrid = fg} allowPaging={true}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
          <ColumnDirective field='Freight' headerText='Freight' format='C' width='100' textAlign="Right" />
          <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='100' textAlign="Right" />
        </ColumnsDirective>
        <Inject services={[Page]} />
      </GridComponent>
    </div></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject, Page, PageSettingsModel } from '@syncfusion/ej2-react-grids'
import { MessageComponent } from '@syncfusion/ej2-react-notifications';
import React, { useState } from 'react';
import { data } from './datasource';
function App() {
  let grid: GridComponent | null;
  let filteredGrid: GridComponent | null;
  const pageSettings: PageSettingsModel = { pageSize: 10, pageCount: 5 };
  let filteredData;
  let showRecords;
  let showWarning;
  const [isFilteredGridVisible, setIsFilteredGridVisible] = useState(false);
  const [isMsgWarningVisible, setIsMsgWarningVisible] = useState(false);
  const getFilter = () => {
    filteredData = (grid as GridComponent).getFilteredRecords();
    showRecords = filteredData.length > 0 ? true : false;
    showWarning = !showRecords;
    if (showRecords) {
      (filteredGrid as GridComponent).dataSource = filteredData;
    }
    setIsMsgWarningVisible(showWarning);
    setIsFilteredGridVisible(showRecords);
  }
  const clear = () => {
    (grid as GridComponent).clearFiltering();
    showRecords = false;
    showWarning = false;
    setIsMsgWarningVisible(false);
    setIsFilteredGridVisible(false);
  }
  return (<div><div id='msgWarning' style={{ display: isMsgWarningVisible ? 'block' : 'none' }}>
    <MessageComponent content="No Records" cssClass="e-content-center" severity="Warning"></MessageComponent></div>
    <ButtonComponent cssClass="e-success" onClick={getFilter}>Get Filtered Data</ButtonComponent>
    <ButtonComponent cssClass='e-danger' onClick={clear}>Clear</ButtonComponent>
    <GridComponent ref={g => grid = g} dataSource={data} allowFiltering={true} pageSettings={pageSettings} allowPaging={true}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
        <ColumnDirective field='Freight' headerText='Freight' format='C' width='100' textAlign="Right" />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='100' textAlign="Right" />
      </ColumnsDirective>
      <Inject services={[Filter, Page]} />
    </GridComponent>
    <div id='filteredGrid' style={{ display: isFilteredGridVisible ? 'block' : 'none' }}>
      <h3>Filtered Records</h3>
      <GridComponent ref={fg => filteredGrid = fg} allowPaging={true}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
          <ColumnDirective field='Freight' headerText='Freight' format='C' width='100' textAlign="Right" />
          <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='100' textAlign="Right" />
        </ColumnsDirective>
        <Inject services={[Page]} />
      </GridComponent>
    </div></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/filter-cs10/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/filter-cs10/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/filter-cs10" %}

**2.Using the properties in the FilterEventArgs object**

Alternatively, you can use the properties available in the [FilterEventArgs](https://ej2.syncfusion.com/react/documentation/api/grid/filterEventArgs) object to obtain the filter record details.

* [columns](https://ej2.syncfusion.com/react/documentation/api/grid/filterEventArgs/#columns): This property returns the collection of filtered columns.

* [currentFilterObject](https://ej2.syncfusion.com/react/documentation/api/grid/filterEventArgs/#currentfilterobject): This property returns the object that is currently filtered.

* [currentFilteringColumn](https://ej2.syncfusion.com/react/documentation/api/grid/filterEventArgs/#currentfilteringcolumn): This property returns the column name that is currently filtered.

To access these properties, you can use the [actionComplete](https://ej2.syncfusion.com/react/documentation/api/grid/#actioncomplete) event handler as shown below:

```typescript
actionComplete(args: FilterEventArgs) {
    let column = args.columns;
    let object = args.currentFilterObject;
    let name = args.currentFilteringColumn;
}
```

## Clear filtering using methods

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid provides a method called [clearFiltering](https://ej2.syncfusion.com/react/documentation/api/grid/#clearfiltering) to clear the filtering applied to the grid. This method is used to remove the filter conditions and reset the grid to its original state. 

Here's an example of how to clear the filtering in a Syncfusion<sup style="font-size:70%">&reg;</sup> grid using the `clearFiltering` method:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/filter-cs15/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/filter-cs15/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/filter-cs15/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/filter-cs15/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/filter-cs15" %}

## Filtering events

Filtering events allow you to customize the behavior of the grid when filtering is applied. You can prevent filtering for specific columns, show messages to users, or perform other actions to suit your application's needs.

To implement filtering events in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid, you can utilize the available events such as [actionBegin](https://ej2.syncfusion.com/react/documentation/api/grid/#actionbegin) and [actionComplete](https://ej2.syncfusion.com/react/documentation/api/grid/#actioncomplete). These events allow you to intervene in the filtering process and customize it as needed.

In the given example, the filtering is prevented for **ShipCity** column during `actionBegin` event.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/filter-cs16/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/filter-cs16/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/filter-cs16/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/filter-cs16/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/filter-cs16" %}

## See also

* [Customizing Filter Dialog by using an additional parameter](../how-to/add-params-for-filtering)
* [Hide sorting options on Excel filter dialog](../how-to/hide-sorting-in-excel-filter)
* [How to change loading indicator in React Grid](../data-binding/data-binding#loading-animation)