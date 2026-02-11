---
layout: post
title: React Grid - Filter bar | Syncfusion
description: Learn about filter bar in Syncfusion React Grid (EJ2) to enter filter criteria below column headers with different filter expressions.
control: Filter bar 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Filter Bar in React Grid Component

The filter bar feature provides a row of input fields directly below the Grid headers, enabling instant data filtering. Each column displays an input field where filter criteria can be entered, and the Grid updates immediately to show matching results.

For grid filtering setup and configuration, refer to the [Filtering](filtering#set-up-filtering).

To activate the filter bar, set the [allowFiltering](https://ej2.syncfusion.com/react/documentation/api/grid#allowfiltering) property to `true`.


**Filter bar expressions:**

Filter expressions are operators that define how the Grid compares entered values against data. The available operators depend on the column data type.

| Expression | Example | Description | Column Type |
|------------|---------|-------------|-------------|
| = | =value | Matches values exactly equal to the entered value | Number |
| != | !=value | Matches values not equal to the entered value | Number |
| > | >value | Matches values greater than the entered value | Number |
| < | <value | Matches values less than the entered value | Number |
| >= | >=value | Matches values greater than or equal to the entered value | Number |
| <= | <=value | Matches values less than or equal to the entered value | Number |
| * | *value | Matches values that start with the entered text | String |
| % | %value | Matches values that end with the entered text | String |
| N/A | N/A | Always uses equal operator for Date columns | Date |
| N/A | N/A | Always uses equal operator for Boolean columns | Boolean |

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/filter-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/filter-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/filter-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/filter-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/filter-cs2" %}

> If [filterSettings.type](https://ej2.syncfusion.com/react/documentation/api/grid/filtersettings#type) is not explicitly specified, the Grid defaults to **FilterBar** mode.

## Filter bar modes

The filter bar operates in two distinct modes that control when filtering is applied.

### OnEnter

Set [filterSettings.mode](https://ej2.syncfusion.com/react/documentation/api/grid/filterSettings#mode) to `OnEnter` to delay filtering until the Enter key is pressed. This mode allows entering complex filter criteria across multiple columns before applying the filter. Best for scenarios where multiple filter criteria need to be prepared before seeing results, or when working with large datasets where instant filtering may cause performance delays.

### Immediate

Set [filterSettings.mode](https://ej2.syncfusion.com/react/documentation/api/grid/filterSettings#mode) to `Immediate` to apply filtering instantly as each character is typed. The Grid updates in real-time as the filter criteria changes, enabling instant feedback as filter text is entered.

The following example demonstrates both modes with a toggle.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/filter-bar-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/filter-bar-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/filter-bar-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/filter-bar-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/filter-bar-cs1" %}

## Display filter text in pager

The [showFilterBarStatus](https://ej2.syncfusion.com/react/documentation/api/grid/filterSettings#showfilterbarstatus) property displays the current filter criteria in the Grid pager area. This provides a clear summary of active filters without examining each column's filter bar input.

**When to use**: Enable this when working with complex multi-column filters to maintain awareness of all active filtering criteria. This is particularly useful when filters are applied across columns that are scrolled out of view.

The following example shows filter status display in the pager:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, Page } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject } from '@syncfusion/ej2-react-grids'
import React, { useState } from 'react';
import { data } from './datasource';

function App() {
    const pageSettings = { pageSize: 5 };
    const [filterSettings, setFilterSettings] = useState();
    const onChange = (args) => {
        setFilterSettings({ showFilterBarStatus: args.checked });
    }
    return (<div>
        <label style={{ marginTop: "20px" }}><b> Show filter bar status </b></label>
        <SwitchComponent checked={true} change={onChange}></SwitchComponent>
        <GridComponent dataSource={data} allowFiltering={true} allowPaging={true} pageSettings={pageSettings} filterSettings={filterSettings} height={315}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
                <ColumnDirective field='OrderDate' headerText='Order Date' width='100' format='yMd' textAlign="Right" />
                <ColumnDirective field='ShipCity' headerText='Ship City' width='100' textAlign="Right" />
                <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
            </ColumnsDirective>
            <Inject services={[Filter, Page]} />
        </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ChangeEventArgs, SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, FilterSettingsModel, Page, PageSettingsModel } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject } from '@syncfusion/ej2-react-grids'
import React, { useState } from 'react';
import { data } from './datasource';

function App() {
    const pageSettings: PageSettingsModel = { pageSize: 5 };
    const [filterSettings, setFilterSettings] = useState<FilterSettingsModel>();
    const onChange = (args: ChangeEventArgs) => {
        setFilterSettings({ showFilterBarStatus: args.checked });
    }
    return (<div>
        <label style={{ marginTop: "20px" }}><b> Show filter bar status </b></label>
        <SwitchComponent checked={true} change={onChange}></SwitchComponent>
        <GridComponent dataSource={data} allowFiltering={true} allowPaging={true} pageSettings={pageSettings} filterSettings={filterSettings} height={315}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
                <ColumnDirective field='OrderDate' headerText='Order Date' width='100' format='yMd' textAlign="Right" />
                <ColumnDirective field='ShipCity' headerText='Ship City' width='100' textAlign="Right" />
                <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
            </ColumnsDirective>
            <Inject services={[Filter, Page]} />
        </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/filter-bar-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/filter-bar-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/filter-bar-cs2" %}

 > For Grid paging setup and configuration, refer to the [Page Feature Setup](../paging#set-up-paging).

## Show or hide filter bar operator

The [showFilterBarOperator](https://ej2.syncfusion.com/react/documentation/api/grid/filterSettings#showfilterbaroperator) property displays a dropdown in each filter bar cell, allowing the filter operator to be changed directly in the UI. By default, string columns use the `startswith` operator, but this can be changed to `contains`, `endswith`, `equal`, etc.

To display the operator dropdown in filter bar cells, set the [showFilterBarOperator](https://ej2.syncfusion.com/react/documentation/api/grid/filterSettings#showfilterbaroperator) property of the `filterSettings` configuration to `true`. By default, this property is set to `false`.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/filter-bar-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/filter-bar-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/filter-bar-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/filter-bar-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/filter-bar-cs3" %}

## Prevent filtering for particular column

Set the [allowFiltering](https://ej2.syncfusion.com/react/documentation/api/grid/column#allowfiltering) property to `false` on a [ColumnDirective](https://ej2.syncfusion.com/react/documentation/api/grid/column) to disable the filter bar input for that specific column. Disable filtering on non-filterable columns like action (button) columns, image columns, etc.

The following example disables filtering for the "Customer ID" column.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/filter-bar-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/filter-bar-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/filter-bar-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/filter-bar-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/filter-bar-cs4" %}

## Hide filter bar for template column

Template columns can be used to render images, action buttons, or other custom components that are inherently non-filterable. To completely hide the filter bar input for a template column, use the [filterTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/column#filtertemplate) property with an empty element.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/filter-bar-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/filter-bar-cs5/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/filter-bar-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/filter-bar-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/filter-bar-cs5" %}

## Filter bar template with custom component

The [filterBarTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/column#filterbartemplate) property replaces the default text input with a custom component in the filter bar. This allows using specialized input controls like date pickers, dropdowns, or numeric inputs that provide a better filtering experience for specific data types.

Use custom components when the default text input doesn't provide an optimal experience. For example, use a `DatePicker` for date columns instead of typing dates manually, or use a `DropDownList` for status columns with limited options.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/filter-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/filter-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/filter-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/filter-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/filter-cs3" %}

## See also

* [How to perform filter by using Wildcard and LIKE operator filter](./filtering#wildcard-and-like-operator-filter)
* [How to change loading indicator in React Grid](../data-binding/data-binding#loading-animation)
* [Filtering - Getting Started](filtering.md#getting-started)
