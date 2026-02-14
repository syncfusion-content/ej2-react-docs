---
layout: post
title: React Grid - Filter Menu | Syncfusion
description: React Grid filter menu enables column‑specific filter dialogs, custom components, operator customization, multi‑value filtering, and granular filtering control.
control: Filter menu 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Filter menu in React Grid Component

The filter menu in the React Grid component provides a dialog-based filtering interface that appears when clicking the filter icon in column headers. This menu displays dropdown operators (such as equals, contains, startswith) and an input field for entering filter values, giving precise control over how data is filtered.

> For basic filtering setup and configuration, refer to the [Filter Feature Guide](filtering#set-up-filtering).

## Enable filter menu

To enable the filter menu, set the [filterSettings.type](https://ej2.syncfusion.com/react/documentation/api/grid/filterSettings) property to `Menu`. This property determines the type of filter UI rendered in the grid. Once enabled, clicking the filter icon in any column header opens the filter menu dialog with operator options and an input field.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/filter-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/filter-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/filter-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/filter-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/filter-cs4" %}

> * [allowFiltering](https://ej2.syncfusion.com/react/documentation/api/grid#allowfiltering) must be set as `true` to enable filter menu.
> * Setting [allowFiltering](https://ej2.syncfusion.com/react/documentation/api/grid/column#allowfiltering) to `false` on a specific column prevents the filter menu from rendering for that column.

## Custom component in filter menu

Enhance the filtering experience by replacing the default input in the filter menu with custom components like dropdowns or textboxes. By default, the filter menu provides an autocomplete component for string type columns, a numeric textbox for number type columns, and a dropdown component for boolean type columns.

The [filter.ui](https://ej2.syncfusion.com/react/documentation/api/grid/column#filter) property integrates custom filter components into specific columns. To implement a custom filter UI, define the following functions:

* `create`: Creates the custom component for the filter.
* `write`: Connects event handlers for the custom component. This function handles changes in the custom filter UI and updates filter behavior accordingly.
* `read`: Reads the filter value from the custom component. This retrieves the selected filter value when the filter is applied.

For example, replace the standard autocomplete with a dropdown component. This enables filtering by selecting values from a predefined list, rather than manually typing search queries.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/filter-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/filter-cs5/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/filter-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/filter-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/filter-cs5" %}

**Default filter input for CustomerID column**
![Default filter input for CustomerID column](../images/filter-menu-auto-complete.gif)
**Custom dropdown filter for CustomerID column**
![Custom dropdown filter for CustomerID column](../images/filter-menu-drop-down.gif)

## Show 24-hour time format in filter dialog

The Grid provides a feature to display the time in a 24-hour format in the date or datetime column filter dialog.

By default, the filter dialog displays time in 12-hour format (AM/PM) for date or datetime columns. To customize this, set the column type as `datetime` and format as "M/d/y HH:mm". Then, handle the [actionComplete](https://ej2.syncfusion.com/react/documentation/api/grid#actioncomplete) event with [requestType](https://ej2.syncfusion.com/react/documentation/api/grid/filterEventArgs#requesttype) as `filterafteropen` and set the `timeFormat` of the `DateTimepicker` to "HH:mm".

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/filter-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/filter-cs6/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/filter-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/filter-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/filter-cs6" %}

## Customize filter menu operators

Filter operators are comparison methods that determine how the filter value matches data. Examples include:

- `equals`: Exact match
- `contains`: Partial match (substring search)
- `startswith`: Matches beginning of value
- `greaterthan`: Numeric/date comparison

The Grid enables customizing the default filter operator list using the [filterSettings.operators](https://ej2.syncfusion.com/react/documentation/api/grid/filterSettings#operators) property. This feature defines custom sets of operators available in the filter menu, allowing restriction or simplification of filtering methods for specific columns.

Customize operators for string, number, date, and boolean data types using these options:

* `stringOperator` - defines customized string operator list.
* `numberOperator` - defines customized number operator list.
* `dateOperator` - defines customized date operator list.
* `booleanOperator` - defines customized boolean operator list.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/filter-cs17/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/filter-cs17/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/filter-cs17/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/filter-cs17/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/filter-cs17" %}

## Filter multiple values using filter menu

The Grid allows filtering based on multiple keywords simultaneously, rather than a single keyword. This is useful when users need to filter by selecting multiple values from a list.

To enable this feature, set [filterSettings.type](https://ej2.syncfusion.com/react/documentation/api/grid/filterSettings#type) as `Menu` and render the `MultiSelect` component as a custom component in the filter menu dialog using the `filter.ui` property.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/filter-cs7/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/filter-cs7/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/filter-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/filter-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/filter-cs7" %}

## Customize the default input component of filter menu dialog

Customize the default settings of input components within the menu filter using the `params` property within the column definition of [filter](https://ej2.syncfusion.com/react/documentation/api/grid/column#filter). This modifies the behavior of specific filter components to better suit application needs.

Each column type uses a default component in the filter menu, which can be customized with specific parameters:

| Column Type | Default component                                                                                 | Customization example                    | API Reference                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| String      | [AutoComplete](https://ej2.syncfusion.com/react/documentation/auto-complete/getting-started)    | Eg: { params: { autofill: false }}       | [AutoComplete API](https://ej2.syncfusion.com/react/documentation/api/auto-complete/autoCompleteModel) |
| Number      | [NumericTextBox](https://ej2.syncfusion.com/react/documentation/numerictextbox/getting-started) | Eg: { params: { showSpinButton: false }} | [NumericTextBox API](https://ej2.syncfusion.com/react/documentation/api/numerictextbox)                 |
| Boolean     | [DropDownList](https://ej2.syncfusion.com/react/documentation/drop-down-list/getting-started)   | Eg: { params: { sortOrder: "Ascending" }}  | [DropDownList API](https://ej2.syncfusion.com/react/documentation/api/drop-down-list)                   |
| Date        | [DatePicker](https://ej2.syncfusion.com/react/documentation/datepicker/getting-started)         | Eg: { params: { weekNumber: true }}      | [DatePicker API](https://ej2.syncfusion.com/react/documentation/api/datepicker)                         |
| DateTime    | [DateTimePicker](https://ej2.syncfusion.com/react/documentation/datetimepicker/getting-started) | Eg: { params: { showClearButton: true }} | [DateTimePicker API](https://ej2.syncfusion.com/react/documentation/api/datetimepicker)                 |


In the example provided below, the "Order ID" and "Freight" columns are numeric columns. When the filter dialog opens for these columns, a `NumericTextBox` with a spin button displays by default. However, using the `params` property, the spin button is hidden specifically for the "Order ID" column.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/filter-cs18/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/filter-cs18/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/filter-cs18/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/filter-cs18/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/filter-cs18" %}

### Prevent autofill option in menu filter

By default, the [AutoComplete](https://ej2.syncfusion.com/react/documentation/auto-complete/getting-started) component in the filter menu dialog automatically fills suggestions as typing occurs. In scenarios requiring more controlled user input without automatic suggestions, disable this autofill behavior.

Prevent the autofill feature by setting the [autofill](https://ej2.syncfusion.com/react/documentation/api/auto-complete#autofill) parameter to `false` using the `params` property within the column definition of the [filter](https://ej2.syncfusion.com/react/documentation/api/grid/column#filter).

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/filter-cs19/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/filter-cs19/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/filter-cs19/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/filter-cs19/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/filter-cs19" %}

## Hide filter icons

When performing filtering programmatically using methods in the Grid component, hiding the default filter icons may be desired to provide a simpler interface. This is useful when building custom filter UIs or applying filters through buttons or other controls outside the Grid.

To hide the filter icon in the grid, apply the following CSS rule using the `display` property of the filter menu class:

```css
.e-filtermenudiv.e-icons.e-icon-filter {
    display: none;
}
```

The following example demonstrates how to hide the default filter icons while filtering the "Customer ID" column programmatically using a method.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { data } from './datasource';
function App() {
  let grid;
    const FilterOptions = {
        type: 'Menu'
    };
    function btnClick(args) {
      if(args.currentTarget.id === 'performFilter'){
        grid.filterByColumn('CustomerID', 'startswith', 'v');
      }
      else{
        grid.clearFiltering()
      }
    }
    return (
      <div>
        <div style={{marginBottom: "20px"}}>
          <ButtonComponent id='performFilter' onClick={btnClick}>Filter Customer ID Column</ButtonComponent>
          <ButtonComponent  style={{marginLeft: "10px" }} id='clearFilter' onClick={btnClick}>Clear Filter</ButtonComponent>
        </div>
        <GridComponent ref={g => grid = g} dataSource={data} filterSettings={FilterOptions} allowFiltering={true} height={273}>
          <ColumnsDirective>
            <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
            <ColumnDirective field='CustomerID' width='100'/>
            <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
            <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
            <ColumnDirective field='ShipCountry' width='100'/>
          </ColumnsDirective>
          <Inject services={[Filter]}/> 
        </GridComponent>
      </div>)
}
;
export default App;

{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { data } from './datasource';
function App() {
  let grid;
    const FilterOptions = {
        type: 'Menu'
    };
    function btnClick(args) {
      if(args.currentTarget.id === 'performFilter'){
        grid.filterByColumn('CustomerID', 'startswith', 'v');
      }
      else{
        grid.clearFiltering()
      }
    }
    return (
      <div>
        <div style={{marginBottom: "20px"}}>
          <ButtonComponent id='performFilter' onClick={btnClick}>Filter Customer ID Column</ButtonComponent>
          <ButtonComponent  style={{marginLeft: "10px" }} id='clearFilter' onClick={btnClick}>Clear Filter</ButtonComponent>
        </div>
        <GridComponent ref={g => grid = g} dataSource={data} filterSettings={FilterOptions} allowFiltering={true} height={273}>
          <ColumnsDirective>
            <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
            <ColumnDirective field='CustomerID' width='100'/>
            <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
            <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
            <ColumnDirective field='ShipCountry' width='100'/>
          </ColumnsDirective>
          <Inject services={[Filter]}/> 
        </GridComponent>
      </div>)
}
;
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/filter-method/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/filter-method/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/filter-method" %}

## Filter menu events

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid offers the [actionBegin](https://ej2.syncfusion.com/react/documentation/api/grid#actionbegin) and [actionComplete](https://ej2.syncfusion.com/react/documentation/api/grid#actioncomplete) events, which provide information about the actions being performed. Within the event handlers, an argument named `requestType` specifies the [action](https://ej2.syncfusion.com/react/documentation/api/grid/action) being executed, such as `filterbeforeopen`, `filterafteropen`, or `filtering`. By analyzing this action type, custom logic can be implemented or messages displayed.

**Event types and their purposes**:

* `filterbeforeopen` - Triggered before the filter menu dialog opens. Use this to modify menu settings, pre-populate values, or prevent the dialog from opening based on conditions.
* `filterafteropen` - Triggered after the filter menu dialog opens. Use this to customize the dialog appearance, focus specific input fields, or add additional UI elements.
* `filtering` - Triggered when a filter is applied. Use this to log filter actions, display custom notifications, or perform additional data processing.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/filter-cs11/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/filter-cs11/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/filter-cs11/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/filter-cs11/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/filter-cs11" %}

## Troubleshoot filter menu operator issue

When the first row in the data source contains null or empty values for a column, the filter menu may display incorrect operators. For example, a number column might show string operators (contains, startswith) instead of numeric operators (equals, greaterthan).

**Why this happens**: The Grid infers column data type from the first data value encountered. When the first value is null or empty, the Grid cannot correctly determine the data type, resulting in incorrect operator options in the filter menu.

To resolve this issue, explicitly specify the data type for each column using the `type` property within the columns configuration.

```ts
<GridComponent dataSource={data}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' type='number' width='140' textAlign="Right"/>
      <ColumnDirective field='CustomerID' headerText='Customer ID' type='string' width='140' />
      <!-- Define data types for other columns as needed -->
    </ColumnsDirective>
  </GridComponent>
```

**Handle null or empty data:** If the data source contains null or empty values, ensure these values are appropriately handled within the data source or by preprocessing data to ensure consistency.

**Check data types in data source:** Ensure that the data types specified in the column definitions match the actual data types in the data source. Mismatched data types can lead to unexpected behavior.

## See also

* [How to perform filter by using Wildcard and LIKE operator filter](./filtering#wildcard-and-like-operator-filter)
* [How to change loading indicator in React Grid](../data-binding/data-binding#loading-animation)
