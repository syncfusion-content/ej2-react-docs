---
layout: post
title: Searching in React Grid component | Syncfusion
description: Learn here all about Searching in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Searching 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Searching in React Grid component

The Syncfusion React Grid includes a powerful built-in searching feature that allows users to search for specific data within the grid. This feature enables efficient filtering of grid records based on user-defined search criteria, making it easier to locate and display relevant information. Whether you have a large dataset or simply need to find specific records quickly, the search feature provides a convenient solution.

To use the searching feature, need to inject **Search** module in the grid and set the [allowSearching](https://ej2.syncfusion.com/react/documentation/api/grid/column/#allowsearching) property to **true** to enable the searching feature in the grid.

To further enhance the search functionality, you can integrate a search text box directly into the grid's toolbar. This allows users to enter search criteria conveniently within the grid interface. To add the search item to the grid's toolbar, use the [toolbar](https://ej2.syncfusion.com/react/documentation/api/grid/#toolbar) property and add **Search** item.
 
{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/searching-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/searching-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/searching-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/searching-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/searching-cs1" %}

> The clear icon is shown in the Data Grid search text box when it is focused on search text or after typing the single character in the search text box. A single click of the clear icon clears the text in the search box as well as the search results in the Grid.

## Initial search

By default, the search operation can be performed on the grid data after the grid renders. However, there might be scenarios where need to perform a search operation on the grid data during the initial rendering of the grid. In such cases, you can make use of the initial search feature provided by the grid.

To apply search at initial rendering, need to set the following properties in the [searchSettings](https://ej2.syncfusion.com/react/documentation/api/grid/#searchsettings) object.

Property |Description
--------|-----
**fields** |Specifies the [fields](https://ej2.syncfusion.com/react/documentation/api/grid/searchSettingsModel/#fields) in which the search operation needs to be performed.
**operator** |Specifies the [operator](https://ej2.syncfusion.com/react/documentation/api/grid/searchSettings/#operator) to be used for the search operation.
**key** |Specifies the [key](https://ej2.syncfusion.com/react/documentation/api/grid/searchSettings/#key) value to be searched.
**ignoreCase** |[ignoreCase](https://ej2.syncfusion.com/react/documentation/api/grid/searchSettings/#ignoreaccent) specifies whether the search operation needs to be case-sensitive or case-insensitive.
**ignoreAccent** |[ignoreAccent](https://ej2.syncfusion.com/react/documentation/api/grid/searchSettingsModel/#ignoreaccent) property will ignore the diacritic characters or accents in the text during a search operation.

The following example demonstrates how to set an initial search in the grid using the `searchSettings` property. The `searchSettings` property is set with the following values:

1. `fields`: **CustomerID** specifies that the search should be performed only in the 'CustomerID' field.
2. `operator`: **contains** indicates that the search should find records that contain the specified search key.
3. `key`: **Ha** is the initial search key that will be applied when the grid is rendered.
4. `ignoreCase`: **true** makes the search case-insensitive.
5. `ignoreAccent`: **true** will ignores diacritic characters or accents during the search operation.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/searching-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/searching-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/searching-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/searching-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/searching-cs2" %}

> By default, grid searches all the bound column values. However, you can customize this behavior by definining the [searchSettings.fields](https://ej2.syncfusion.com/react/documentation/api/grid/searchSettings/#fields) property.

## Search operators

Search operators are symbols or keywords used to define the type of comparison or condition applied during a search operation. They help specify how the search key should match the data being searched. The [searchSettings.operator](https://ej2.syncfusion.com/react/documentation/api/grid/searchSettings/#operator) property can be used to define the search operator in the grid. 

By default, the `searchSettings.operator` is set to **contains**, which returns the values contains the search key. The following operators are supported in searching:

Operator |Description
-----|-----
startswith |Checks whether a value begins with the specified value.
endswith |Checks whether a value ends with the specified value.
contains |Checks whether a value contains with the specified value.
wildcard |Processes one or more search patterns using the **"*"** symbol, returning values that match the given patterns.
like |Processes a single search pattern using the **"%"** symbol, retrieving values that match the specified pattern.
equal |Checks whether a value equal to the specified value.
notequal |Checks whether a value not equal to the specified value.

These operators provide flexibility in defining the search behavior and allow you to perform different types of comparisons based on your requirements.

The following example demonstrates how to set the `searchSettings.operator` property based on changing the dropdown value using the [change](https://ej2.syncfusion.com/react/documentation/api/drop-down-list/#change) event of the [DropDownList](https://ej2.syncfusion.com/react/documentation/drop-down-list/getting-started) component.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent, SearchSettingsModel } from '@syncfusion/ej2-react-grids';
import { Inject, Search, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';
import { DropDownListComponent, ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns'

function App() {
  const [searchOptions, setSearchOptions] = useState({ operator: 'contains' });
  const toolbarOptions = ['Search'];
  const ddlData = [
    { text: 'startswith', value: 'startswith' },
    { text: 'endswith', value: 'endswith' },
    { text: 'wildcard', value: 'wildcard' },
    { text: 'like', value: 'like' },
    { text: 'equal', value: 'equal' },
    { text: 'notequal', value: 'notequal' },
  ];

  const valueChange = (args) => {
    const searchOperator = { operator: args.value };
    setSearchOptions(searchOperator);
  }
  return (<div>
    <label style={{ padding: "10px 10px 26px 0" }}>Change the search operators:</label>
    <DropDownListComponent id="value" index={0} width={100} dataSource={ddlData} change={valueChange}></DropDownListComponent>
    <GridComponent dataSource={data} toolbar={toolbarOptions} searchSettings={searchOptions}
      height={272}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' width='100' />
        <ColumnDirective field='EmployeeID' width='100' textAlign="Right" />
        <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right" />
        <ColumnDirective field='ShipCountry' width='100' />
      </ColumnsDirective>
      <Inject services={[Search, Toolbar]} />
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent, SearchSettingsModel } from '@syncfusion/ej2-react-grids';
import { Inject, Search, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';
import { DropDownListComponent, ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns'

function App() {
  const [searchOptions, setSearchOptions] = useState<SearchSettingsModel>({ operator: 'contains' });
  const toolbarOptions: ToolbarItems[] = ['Search'];
  const ddlData: { [key: string]: Object; }[] = [
    { text: 'startswith', value: 'startswith' },
    { text: 'endswith', value: 'endswith' },
    { text: 'wildcard', value: 'wildcard' },
    { text: 'like', value: 'like' },
    { text: 'equal', value: 'equal' },
    { text: 'notequal', value: 'notequal' },
  ];

  const valueChange = (args: ChangeEventArgs) => {
    const searchOperator: SearchSettingsModel = { operator: args.value };
    setSearchOptions(searchOperator);
  }
  return (<div>
    <label style={{ padding: "10px 10px 26px 0" }}>Change the search operators:</label>
    <DropDownListComponent id="value" index={0} width={100} dataSource={ddlData} change={valueChange}></DropDownListComponent>
    <GridComponent dataSource={data} toolbar={toolbarOptions} searchSettings={searchOptions}
      height={272}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' width='100' />
        <ColumnDirective field='EmployeeID' width='100' textAlign="Right" />
        <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right" />
        <ColumnDirective field='ShipCountry' width='100' />
      </ColumnsDirective>
      <Inject services={[Search, Toolbar]} />
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/searching-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/searching-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/searching-cs8" %}

## Search by external button

The Syncfusion Grid component allows you to perform searches programmatically, enabling you to search for records using an external button instead of relying solely on the built-in search bar. This feature provides flexibility and allows for custom search implementations within your application. To search for records using an external button, you can utilize the [search](https://ej2.syncfusion.com/react/documentation/api/grid/#search) method provided by the Grid component.

The `search` method allows you to perform a search operation based on a search key or criteria. The following example demonstrates how to implement `search` by an external button using the following steps:

1. Add a button element outside of the grid component.
2. Attach a click event handler to the button.
3. Inside the event handler, get the reference of the grid component.
4. Invoke the `search` method of the grid by passing the search key as a parameter.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/searching-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/searching-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/searching-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/searching-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/searching-cs3" %}

## Search specific columns

By default, the [search](https://ej2.syncfusion.com/react/documentation/api/grid/#search) functionality searches all visible columns. However, if you want to `search` only specific columns, you can define the specific column's field names in the [searchSettings.fields](https://ej2.syncfusion.com/react/documentation/api/grid/searchSettings/#fields) property. This allows you to narrow down the search to a targeted set of columns, which is particularly useful when dealing with large datasets or grids with numerous columns.

The following example demonstrates how to search specific columns such as **CustomerID**, **Freight**, and **ShipCity** by using the `searchSettings.fields` property.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/searching-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/searching-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/searching-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/searching-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/searching-cs4" %}

## Search on each key stroke

The search on each keystroke feature in Syncfusion Grid enables you to perform real-time searching of grid data as they type in the search text box. This functionality provides a seamless and interactive searching experience, allowing you to see the search results dynamically updating in real time as they enter each keystroke in the search box.

To achieve this, you need to bind the `keyup` event to the search input element inside the [created](https://ej2.syncfusion.com/react/documentation/api/grid/#created) event of the grid component. 

In the following example, the `created` event is bound to the grid component, and inside the event handler, the `keyup` event is bound to the [search](https://ej2.syncfusion.com/react/documentation/api/grid/#search) input element. Whenever the `keyup` event is triggered, the current `search` string is obtained from the `search` input element, and the `search` method is invoked on the grid instance with the current search string as a parameter. This allows the search results to be displayed in real-time as you type in the search box.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/searching-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/searching-cs6/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/searching-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/searching-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/searching-cs6" %}

> Search on each key stroke approach may affect the performance of the application when dealing with a large number of records.

## Perform search based on column formatting

By default, the search operation considers the underlying raw data of each cell for searching. However, in some cases, you may want to search based on the formatted data visible to the users. To search data based on column formatting, you can utilize the `grid.valueFormatterService.fromView` method within the [actionBegin](https://ej2.syncfusion.com/react/documentation/api/grid/#actionbegin) event. This method allows you to retrieve the formatted value of a cell and perform searching on each column using the **OR** predicate.

The following example demonstrates how to implement searching based on column formatting in the Grid. In the `actionBegin` event, retrieve the search value from the [getColumns](https://ej2.syncfusion.com/react/documentation/api/grid/#getcolumns) method. Iterate through the columns and check whether the column has a format specified. If the column has a format specified, use the `grid.valueFormatterService.fromView` method to get the formatted value of the cell. If the formatted value matches the search value, set the **OR** predicate that includes the current column filter and the new filter based on the formatted value.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/searching-cs9/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/searching-cs9/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/searching-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/searching-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/searching-cs9" %}

## Perform search operation in Grid using multiple keywords

In addition to searching with a single keyword, the Grid component offers the capability to perform a search operation using multiple keywords. This feature enables you to narrow down your search results by simultaneously matching multiple keywords. It can be particularly useful when you need to find records that meet multiple search conditions simultaneously. This can be achieved by the [actionBegin](https://ej2.syncfusion.com/react/documentation/api/grid/#actionbegin) event of the Grid.

The following example demonstrates, how to perform a search with multiple keywords in the grid by using the `query` property when the `requestType` is searching in the `actionBegin` event. The searchString is divided into multiple keywords using a comma (,) as the delimiter. Each keyword is then utilized to create a `predicate` that checks for a match in the desired columns. If multiple keywords are present, the predicates are combined using an **OR** condition. Finally, the Grid's `query` property is updated with the constructed `predicate`, and the Grid is refreshed to update the changes in the UI.

On the other hand, the [actionComplete](https://ej2.syncfusion.com/react/documentation/api/grid/#actioncomplete) event is used to manage the completion of the `search` operation. It ensures that the search input value is updated if necessary and clears the `query` when the search input is empty.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/searching-cs7/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/searching-cs7/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/searching-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/searching-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/searching-cs7" %}
 
> By using this approach, you can perform a search operation in the grid using multiple keywords.

## How to ignore accent while searching

By default, the searching operation in the Grid component does not ignore diacritic characters or accents. However, there are cases where ignoring diacritic characters becomes necessary. This feature enhances the search experience by enabling data searching without considering accents, ensuring a more comprehensive and accurate search  and it can be achieved by utilizing the [searchSettings.ignoreAccent](https://ej2.syncfusion.com/react/documentation/api/grid/searchSettings/#ignoreaccent) property of the Grid component as **true**.

The following example demonstrates how to define the `ignoreAccent` property within the [searchSettings](https://ej2.syncfusion.com/react/documentation/api/grid/#searchsettings) property of the grid. Additionally, the [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/react/documentation/switch/getting-started) component is included to modify the value of the `searchSettings.ignoreAccent` property. When the switch is toggled, the [change](https://ej2.syncfusion.com/react/documentation/api/switch/#change) event is triggered, and the `searchSettings.ignoreAccent` property is updated accordingly. This functionality helps to visualize the impact of the `searchSettings.ignoreAccent` setting when performing search operations.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, Search } from '@syncfusion/ej2-react-grids';
import { Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid;
    const valueChange = (args) => {
        grid.searchSettings.ignoreAccent = args.checked;
    }
    return (<div>
        <label style={{ padding: "10px 10px" }}>Enable or disable ignoreAccent property</label>
        <SwitchComponent id='switch' change={valueChange}></SwitchComponent>
        <GridComponent ref={g => grid = g} dataSource={data} height={280} toolbar={['Search']} >
            <ColumnsDirective>
                <ColumnDirective field='CategoryName' headerText='Category Name' width='100' textAlign="Right" />
                <ColumnDirective field='ProductName' headerText='Product Name' width='100' />
                <ColumnDirective field='QuantityPerUnit' headerText='Quantity Per Unit' width='100' textAlign="Right" />
                <ColumnDirective field='UnitsInStock' headerText='Units In Stock' width='100' />
            </ColumnsDirective>
            <Inject services={[Toolbar, Search]} />
        </GridComponent>
    </div>);
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { SwitchComponent, ChangeEventArgs } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, Search } from '@syncfusion/ej2-react-grids';
import { Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
  let grid: GridComponent | null;
  const valueChange = (args: ChangeEventArgs) => {
    (grid as GridComponent).searchSettings.ignoreAccent = args.checked;
  }
  return (<div>
    <label style={{ padding: "10px 10px" }}>Enable or disable ignoreAccent property:</label>
    <SwitchComponent id='switch' change={valueChange}></SwitchComponent>
    <GridComponent ref={g => grid = g} dataSource={data} height={280} toolbar={['Search']} >
      <ColumnsDirective>
        <ColumnDirective field='CategoryName' headerText='Category Name' width='100' textAlign="Right" />
        <ColumnDirective field='ProductName' headerText='Product Name' width='100' />
        <ColumnDirective field='QuantityPerUnit' headerText='Quantity Per Unit' width='100' textAlign="Right" />
        <ColumnDirective field='UnitsInStock' headerText='Units In Stock' width='100' />
      </ColumnsDirective>
      <Inject services={[Toolbar, Search]} />
    </GridComponent>
  </div>);
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/searching-cs10/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/searching-cs10/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/searching-cs10" %}

> * You can set [searchSettings.ignoreAccent](https://ej2.syncfusion.com/react/documentation/api/grid/searchSettings/#ignoreaccent) property along with other search settings such as [fields](https://ej2.syncfusion.com/react/documentation/api/grid/searchSettings/#fields), [operator](https://ej2.syncfusion.com/react/documentation/api/grid/searchSettings/#operator), and [ignoreCase](https://ej2.syncfusion.com/react/documentation/api/grid/searchSettings/#ignoreaccent) to achieve the desired search behavior.
> * This feature works only for the characters that are not in the ASCII range.
> * This feature may have a slight impact on search performance.

## Highlight the search text

The Syncfusion Grid component allows you to visually highlight search results within the displayed data. This feature helps you to quickly identify where the search items are found within the displayed data. By adding a style to the matched text, you can quickly identify where the search items are present in the grid.

To achieve search text highlighting in the Grid, you can utilize the [queryCellInfo](https://ej2.syncfusion.com/react/documentation/api/grid/#querycellinfo) event. This event is triggered for each cell during the Grid rendering process, allowing you to customize the cell content based on your requirements.

The following example demonstrates how to highlight search text in grid using the `queryCellInfo` event. The `queryCellInfo` event checks if the current cell is in the desired search column, retrieves the cell value, search keyword and uses the `includes` method to check if the cell value contains the search keyword. If it does, the matched text is replaced with the same text wrapped in a `span` tag with a `customcss` class. You can then use CSS to define the `customcss` class and style to easily identify where the search keywords are present in the grid.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/searching-cs11/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/searching-cs11/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/searching-cs11/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/searching-cs11/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/searching-cs11" %}

## Clear search by external button

The Syncfusion Grid component provides a capability to clear searched data in the grid. This functionality offers the ability to reset or clear any active search filters that have been applied to the grid's data.

To clear the searched grid records from an external button, you can set the [searchSettings.key](https://ej2.syncfusion.com/react/documentation/api/grid/searchSettings/#key) property to an `empty` string to clear the search text. This property represents the current search text in the search box.

The following example demonstrates how to clear the searched records using an external button.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/searching-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/searching-cs5/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/searching-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/searching-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/searching-cs5" %}

> You can also clear the searched records by using the clear icon within the search input field.

## Retrieve searched records by external button

The Syncfusion React Grid allows users to retrieve searched records using an external button. This functionality enables capturing the search text entered in the toolbar and filtering the data accordingly.

To achieve this, the [actionComplete](../api/grid/#actionComplete) event can be used. This event is triggered when a search action is performed, allowing access to the search text. The captured search string can then be used with the `executeQuery` method of the `DataManager` to retrieve the matching records.

The following example demonstrates how to retrieve searched records using an external button:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/retrieve-searched-records-cs1/app/App.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/retrieve-searched-records-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/retrieve-searched-records-cs1/app/datasource.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/retrieve-searched-records-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/retrieve-searched-records-cs1" %}

## See also

* [How to perform search by using Wildcard and LIKE operator filter](./filtering/filtering/#wildcard-and-like-operator-filter)