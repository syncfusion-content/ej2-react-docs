---
layout: post
title: Filtering in React Grid component | Syncfusion
description: Learn here all about Filtering in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Filtering 
publishingplatform: React
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in React Grid component

Filtering allows you to view particular records based on filter criteria. To enable filtering in the Grid, set the [`allowFiltering`](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowfiltering) to true.
Filtering options can be configured through [`filterSettings`](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettings/).

To use filter, inject the **Filter** module in the grid.

To learn about how to work with Filtering Options, you can check on this video for React Grid.

{% youtube "https://www.youtube.com/watch?v=UQmuY9D0efQ" %}

<!---
The Grid supports two types of filter, they are
* Filter bar
* Excel
-->

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/filter-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/filter-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/filter-cs8" % }

> * You can apply and clear filtering, by using [`filterByColumn`](https://ej2.syncfusion.com/angular/documentation/api/grid/filter/#filterbycolumn) and [`clearFiltering`](https://ej2.syncfusion.com/angular/documentation/api/grid/filter/#clearfiltering) methods.
> * To disable Filtering for a particular column, by specifying
[`columns.allowFiltering`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#allowfiltering) to **false**.

## Initial filter

To apply the filter at initial rendering, set the filter [`predicate`](https://ej2.syncfusion.com/angular/documentation/api/grid/predicate/) object in [`filterSettings.columns`](https://ej2.syncfusion.com/angular/documentation/api/grid/filterSettingsModel/#columns).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/filter-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/filter-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/filter-cs9" % }

## Filter operators

The filter operator for a column can be defined in [`filterSettings.columns.operator`](https://ej2.syncfusion.com/angular/documentation/api/grid/predicateModel/#operator) property.

The available operators and its supported data types are,

Operator |Description |Supported Types
-----|-----|-----
startswith |Checks whether a value begins with the specified value. |String
endswith |Checks whether a value ends with specified value. |String
contains |Checks whether a value contains with specified value. |String
equal |Checks whether a value equal to specified value. |String &#124; Number &#124; Boolean &#124; Date
notequal |Checks whether a value not equal to specified value. |String &#124; Number &#124; Boolean &#124; Date
greaterthan |Checks whether a value is greater than with specified value. |Number &#124; Date
greaterthanorequal|Checks whether a value is greater than or equal to specified value. |Number &#124; Date
lessthan |Checks whether a value is less than with specified value. |Number &#124; Date
lessthanorequal |Checks whether a value is less than or equal to specified value. |Number &#124; Date
between|Filter the values based on the range between the start and end specified values. |Number &#124; Date

## Diacritics filter

By default, grid ignores diacritic characters while filtering. To include diacritic characters, set the [`filterSettings.ignoreAccent`](https://ej2.syncfusion.com/angular/documentation/api/grid/filter/#ignoreaccent) as **true**.

In the following sample, type **aero** in **Name** column to filter diacritic characters.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/filter-diacritics-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/filter-diacritics-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/filter-diacritics-cs1" % }

## Filter bar

You can customize default filter bar component of a column by custom component using [`filter template`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#filtertemplate).

The following example demonstrates the way to use filter template for a column when using filter bar. In the following example, the **DropdownList** component is used to filter **CustomerID** column using filter template.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/filter-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/filter-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/filter-cs10" % }

## Filter menu

You can customize default filter menu component of a column by custom component using [`filter template`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#filtertemplate).

The following example demonstrates the way to use filter template for a column when using filter menu. In the following example, the **DropdownList** component is used to filter **ShipName** column using filter template.

<!--{% tab template="grid/filter", sourceFiles="app/App.tsx" %}-->

```typescript
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

<!--{% endtab %}-->

## See Also

* [Customizing Filter Dialog by using an additional parameter](../how-to/add-params-for-filtering)
* [Hide sorting options on Excel filter Dialog](../how-to/hide-sorting-in-excel-filter)
* [How to create a custom menu component to do date range filtering in React Grid](https://www.syncfusion.com/forums/162774/how-to-create-a-custom-menu-component-to-do-date-range-filtering-in-react-grid)
* [How to show the active and outdated records in React Grid](https://www.syncfusion.com/forums/158310/how-to-show-the-active-and-outdated-records-in-react-grid)