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

Filtering allows you to view particular records based on filter criteria. To enable filtering in the Grid, set the [`allowFiltering`](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowfiltering) to true. Filtering options can be configured through [`filterSettings`](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/).

To use filter, inject the **Filter** module in the grid.

To learn about how to work with Filtering Options, you can check on this video for React Grid.

{% youtube "https://www.youtube.com/watch?v=UQmuY9D0efQ" %}

<!---
The Grid supports two types of filter, they are
* Filter bar
* Excel
-->

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

> * You can apply and clear filtering, by using [`filterByColumn`](https://ej2.syncfusion.com/angular/documentation/api/grid/filter/#filterbycolumn) and [`clearFiltering`](https://ej2.syncfusion.com/angular/documentation/api/grid/filter/#clearfiltering) methods.
> * To disable Filtering for a particular column, by specifying [`columns.allowFiltering`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#allowfiltering) to **false**.

## Initial filter

To apply the filter at initial rendering, set the filter [`predicate`](https://ej2.syncfusion.com/angular/documentation/api/grid/predicate/) object in [`filterSettings.columns`](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettingsModel/#columns).

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

## Filter operators

The filter operator for a column can be defined in [`filterSettings.columns.operator`](https://ej2.syncfusion.com/angular/documentation/api/grid/predicateModel/#operator) property.

The available operators and its supported data types are,

Operator |Description |Supported Types
-----|-----|-----
startswith |Checks whether a value begins with the specified value. |String
endswith |Checks whether a value ends with specified value. |String
contains |Checks whether a value contains with specified value. |String
doesnotstartwith |Checks whether the value does not begin with the specified value. |String
doesnotendwith |Checks whether the value does not end with the specified value. |String
doesnotcontain |Checks whether the value does not contain the specified value. |String
equal |Checks whether a value equal to specified value. |String &#124; Number &#124; Boolean &#124; Date
notequal |Checks whether a value not equal to specified value. |String &#124; Number &#124; Boolean &#124; Date
greaterthan |Checks whether a value is greater than with specified value. |Number &#124; Date
greaterthanorequal|Checks whether a value is greater than or equal to specified value. |Number &#124; Date
lessthan |Checks whether a value is less than with specified value. |Number &#124; Date
lessthanorequal |Checks whether a value is less than or equal to specified value. |Number &#124; Date
isnull |Returns the values that are null. |String &#124; Number &#124; Date
isnotnull |Returns the values that are not null. |String &#124; Number &#124; Date
isempty |Returns the values that are empty. |String
isnotempty |Returns the values that are not empty. |String
between|Filter the values based on the range between the start and end specified values. |Number &#124; Date

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
* Filter Bar with the [`filterSettings.showFilterBarOperator`](https://ej2.syncfusion.com/angular/documentation/api/grid/filter/#showFilterBarOperator) property enabled on the Grid [`filterSettings`](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/).
* Custom Filter of Excel filter type.

**For example:**

Operator |Description
-----|-----
%ab% |Returns all the value that are contains "ab" character.
ab% |Returns all the value that are ends with "ab" character.
%ab |Returns all the value that are starts with "ab" character.

![LIKEFilter](../images/like_filter.gif)

## Diacritics filter

By default, grid ignores diacritic characters while filtering. To include diacritic characters, set the [`filterSettings.ignoreAccent`](https://ej2.syncfusion.com/angular/documentation/api/grid/filter/#ignoreaccent) as **true**.

In the following sample, type **aero** in **Name** column to filter diacritic characters.

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

## Filter bar

You can customize default filter bar component of a column by custom component using [`filter template`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#filtertemplate).

The following example demonstrates the way to use filter template for a column when using filter bar. In the following example, the **DropdownList** component is used to filter **CustomerID** column using filter template.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/filter-cs10/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/filter-cs10/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/filter-cs10/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/filter-cs10/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/filter-cs10" %}

## Filter menu

You can customize default filter menu component of a column by custom component using [`filter template`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#filtertemplate).

The following example demonstrates the way to use filter template for a column when using filter menu. In the following example, the **DropdownList** component is used to filter **ShipName** column using filter template.



```ts
import { DataUtil } from '@syncfusion/ej2-data';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, FilterSettingsModel } from '@syncfusion/ej2-react-grids';
import { Filter, Grid, GridComponent, Inject } from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: Grid | null;
  const fields: object = { text: 'CustomerID', value: 'CustomerID' };
  const filterOptions: FilterSettingsModel = {
    type: 'Menu'
  };
  const dropdata: string[] = DataUtil.distinct(data, 'CustomerID') as string[];
  const filterTemplate = (props: any): any => {
    return (<DropDownListComponent id={props.column.field} value={props.CustomerID} popupHeight='250px'
      fields={fields} dataSource={dropdata} />);
  }
  return <GridComponent ref={g => grid = g} dataSource={data} filterSettings={filterOptions} allowFiltering={true} >
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='140' textAlign="Right" />
      <ColumnDirective field='EmployeeID' headerText='EmployeeID' width='140' textAlign="Right" />
      <ColumnDirective field='CustomerID' filterTemplate={filterTemplate} width='140' />
      <ColumnDirective field='ShipName' width='170' textAlign="Right" />
    </ColumnsDirective>
    <Inject services={[Filter]} />
  </GridComponent>
};
export default App;
```



## See Also

* [Customizing Filter Dialog by using an additional parameter](../how-to/add-params-for-filtering)
* [Hide sorting options on Excel filter Dialog](../how-to/hide-sorting-in-excel-filter)
* [How to create a custom menu component to do date range filtering in React Grid](https://www.syncfusion.com/forums/162774/how-to-create-a-custom-menu-component-to-do-date-range-filtering-in-react-grid)
* [How to show the active and outdated records in React Grid](https://www.syncfusion.com/forums/158310/how-to-show-the-active-and-outdated-records-in-react-grid)