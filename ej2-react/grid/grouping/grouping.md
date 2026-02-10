---
layout: post
title: React Grid - Grouping | Syncfusion
description: Enable grouping in Syncfusion React Grid (EJ2) with drag‑drop columns, multi‑level groups, reordered hierarchy, formatted grouping, and events.
control: Grouping 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in React Grid Component

The grouping feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid enables data to be organized into a hierarchical structure, allowing records to be expanded and collapsed for improved readability and analysis.

The group feature is enabled by importing the `Group` module from `@syncfusion/ej2-react-grids` and injecting the `Group` service into the grid.

```jsx
import { GridComponent, Inject, Group } from '@syncfusion/ej2-react-grids';

<GridComponent>
  <Inject services={[Group]} />
</GridComponent>
```

To enable grouping, set the [allowGrouping](https://ej2.syncfusion.com/react/documentation/api/grid#allowgrouping) property to `true`. When grouping is enabled, column headers can be dragged into the group drop area to organize data.

The [groupSettings](https://ej2.syncfusion.com/react/documentation/api/grid/groupSettings) property provides options to customize grouping behavior, such as:

- Showing or hiding the group drop area.
- Controlling how grouped columns are displayed.
- Defining custom caption templates for grouped rows.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/group-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/group-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/group-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/group-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/group-cs2" %}

> - Columns can be grouped and ungrouped dynamically using the [groupColumn](https://ej2.syncfusion.com/react/documentation/api/grid/group#groupcolumn) and [ungroupColumn](https://ej2.syncfusion.com/react/documentation/api/grid/group#ungroupcolumn) methods.
> - To disable grouping for a specific column, set the [allowGrouping](https://ej2.syncfusion.com/react/documentation/api/grid/column#allowgrouping) property to `false` in column configuration.

## Initial group

Initial grouping in the grid is configured by assigning an array of column field names to the [groupSettings.columns](https://helpej2.syncfusion.com/react/documentation/api/grid/groupSettings#columns) property. This approach is effective for organizing large datasets based on predefined criteria.

The example below demonstrates grouping by "Customer ID" and "Ship City", rendering the grid with data structured in a two-level hierarchy first by "Customer ID", followed by "Ship City" within each group.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/group-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/group-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/group-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/group-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/group-cs3" %}

> To group multiple columns, specify an array of column names in the `groupSettings.columns` property.

## Prevent grouping for specific columns

Columns that contain unique identifiers or sensitive information may not be suitable for grouping. In such cases, grouping can be disabled by setting the [allowGrouping](https://ej2.syncfusion.com/react/documentation/api/grid/column#allowgrouping) property to `false` in the column configuration, preventing the column header from being placed in the group drop area.

The following example prevents grouping on the "Customer ID" column. While other columns can be grouped, "Customer ID" cannot be dragged to the group drop area.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/group-cs12/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/group-cs12/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/group-cs12/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/group-cs12/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/group-cs12" %}

## Hide drop area

By default, the Grid shows a drop area container where column headers can be dragged to configure grouping or ungrouping. In scenarios where grouping through the drag‑and‑drop interface is not required, this drop area can be hidden.

To disable the group drop area container, set the [groupSettings.showDropArea](https://ej2.syncfusion.com/react/documentation/api/grid/groupSettings#showdroparea) property to `false`. This hides the drop area from the UI, while still allowing grouping to be managed programmatically using the Grid `groupColumn` and `ungroupColumn` methods if needed.

In this example, the [Syncfusion React Switch Button](https://ej2.syncfusion.com/react/documentation/switch/getting-started) component is used to dynamically show or hide the group drop area. When the switch is toggled, the [change](https://ej2.syncfusion.com/react/documentation/api/switch#change) event updates the Grid’s `groupSettings.showDropArea` property to either display or hide the drop area.


{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}

import { ChangeEventArgs, SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Group, GroupSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const groupOptions = {
    columns: ['CustomerID', 'ShipCity'],
    showDropArea: false
  };
  const onSwitchChange = (args) => {
    if (args.checked) {
      grid.groupSettings.showDropArea = true;
    }
    else {
      grid.groupSettings.showDropArea = false;
    }
  }
  return (
    <div>
      <div style={{display: "flex", margin: "10px"}}>
        <label style={{ marginRight: "5px" }}>Hide or show drop area</label>
        <SwitchComponent change={onSwitchChange}></SwitchComponent>
      </div>
      <GridComponent ref={g => grid = g} dataSource={data} allowGrouping={true} groupSettings={groupOptions} height={315}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
        </ColumnsDirective>
        <Inject services={[Group]} />
      </GridComponent >
    </div>
  )
};
export default App;

{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="App.tsx" %}
{% raw %}

import { ChangeEventArgs, SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Group, GroupSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const groupOptions: GroupSettingsModel = {
    columns: ['CustomerID', 'ShipCity'],
    showDropArea: false
  };
  const onSwitchChange = (args: ChangeEventArgs) => {
    if (args.checked) {
      (grid as GridComponent).groupSettings.showDropArea = true;
    }
    else {
      (grid as GridComponent).groupSettings.showDropArea = false;
    }
  }
  return (
    <div>
      <div style={{display: "flex", margin: "10px"}}>
        <label style={{ marginRight: "5px" }}>Hide or show drop area</label>
        <SwitchComponent change={onSwitchChange}></SwitchComponent>
      </div>
      <GridComponent ref={g => grid = g} dataSource={data} allowGrouping={true} groupSettings={groupOptions} height={315}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
        </ColumnsDirective>
        <Inject services={[Group]} />
      </GridComponent >
    </div>
  )
};
export default App;

{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/group-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/group-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/group-cs4" %}


## Show the grouped column

By default, when a column is grouped in the Grid, that column is hidden from the display. This keeps the layout clean and makes grouped rows easier to read. To keep grouped columns visible, set the [groupSettings.showGroupedColumn](https://ej2.syncfusion.com/react/documentation/api/grid/groupSettings#showgroupedcolumn) property to `true`.

In the example below, a [Syncfusion React Toggle Switch Button](https://ej2.syncfusion.com/react/documentation/switch/getting-started) component is used to control this setting. When the switch is toggled, the [change](https://ej2.syncfusion.com/react/documentation/api/switch#change) event updates the Grid’s `groupSettings.showGroupedColumn` property, showing or hiding the grouped columns as needed.


{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}

import { ChangeEventArgs, SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Group, GroupSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const groupOptions = {
    columns: ['CustomerID', 'ShipCity'],
    showGroupedColumn: true
  };
  const onSwitchChange = (args) => {
    if (args.checked) {
      grid.groupSettings.showGroupedColumn = false;
    }
    else {
      grid.groupSettings.showGroupedColumn = true;
    }
  }
  return (
    <div>
      <div style={{display: "flex", margin: "10px"}}>
        <label style={{ marginRight: "5px" }}>Hide or show grouped columns</label>
        <SwitchComponent change={onSwitchChange}></SwitchComponent>
      </div>
      <GridComponent ref={g => grid = g} dataSource={data} allowGrouping={true} groupSettings={groupOptions} height={315}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
        </ColumnsDirective>
        <Inject services={[Group]} />
      </GridComponent >
    </div>
  )
};
export default App;

{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="App.tsx" %}
{% raw %}

import { ChangeEventArgs, SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Group, GroupSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const groupOptions: GroupSettingsModel = {
    columns: ['CustomerID', 'ShipCity'],
    showGroupedColumn: true
  };
  const onSwitchChange = (args: ChangeEventArgs) => {
    if (args.checked) {
      (grid as GridComponent).groupSettings.showGroupedColumn = false;
    }
    else {
      (grid as GridComponent).groupSettings.showGroupedColumn = true;
    }
  }
  return (
    <div>
      <div style={{display: "flex", margin: "10px"}}>
        <label style={{ marginRight: "5px" }}>Hide or show grouped columns</label>
        <SwitchComponent change={onSwitchChange}></SwitchComponent>
      </div>
      <GridComponent ref={g => grid = g} dataSource={data} allowGrouping={true} groupSettings={groupOptions} height={315}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
        </ColumnsDirective>
        <Inject services={[Group]} />
      </GridComponent >
    </div>
  )
};
export default App;

{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/group-cs13/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/group-cs13/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/group-cs13" %}

## Reordering on grouped columns 

By default, grouped columns follow the order in which they are added to the group drop area. Because grouping order determines the hierarchy of data organization, modifying this order can present different structural views. For example, grouping by "Region" before "Sales Person" produces a different arrangement than the reverse.

To allow reordering, set [groupSettings.allowReordering](https://ej2.syncfusion.com/react/documentation/api/grid/groupSettings#allowReordering) to `true`. This enables drag-and-drop rearrangement of grouped column badges, and the grid dynamically updates the data hierarchy to reflect the new order.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/group-reorder-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/group-reorder-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/group-reorder-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/group-reorder-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/group-reorder-cs1" %}

## Sort grouped columns in descending order during initial grouping

Grouped columns are sorted in ascending order by default (A–Z, 0–9, oldest to newest). To display grouped values in descending order such as showing the most recent dates or highest values first (Z–A, 9–0, newest to oldest) configure the [sortSettings.columns](https://ej2.syncfusion.com/react/documentation/api/grid/sortSettings#columns) property with the appropriate [field](https://ej2.syncfusion.com/react/documentation/api/grid/sortDescriptorModel#field) and set its [direction](https://ej2.syncfusion.com/react/documentation/api/grid/sortDescriptorModel#direction-string) to `Descending`.

The following example demonstrates how to sort the "Customer ID" column in descending order during the grid's initial load.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/group-cs8/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/group-cs8/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/group-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/group-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/group-cs8" %}

## Group with paging

The Grid component supports column grouping in combination with paging. When grouping is enabled, aggregated values and item counts are calculated based on the current page by default. As a result, group footers and caption summaries reflect only the visible page data. To include aggregate values and total item counts across all pages, set the [groupSettings.disablePageWiseAggregates](https://ej2.syncfusion.com/react/documentation/api/grid/groupSettings#disablePageWiseAggregates) property to `false`.

> When using remote data binding, enabling this option triggers two separate requests during grouping one to retrieve grouped data and another to fetch aggregate values and total item counts.

## Group by format

By default, grouping is based on the raw data values of each row. For numeric or datetime columns, grouping can also be performed using a specified format for example, grouping dates by month or numbers by range. To enable this behavior, set the [enableGroupByFormat](https://ej2.syncfusion.com/react/documentation/api/grid/column#enablegroupbyformat) property on the corresponding column. This allows the grid to group values based on their specific format.

The following example demonstrates grouping the "Order Date" and "Freight" columns using formatted values.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/group-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/group-cs5/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/group-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/group-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/group-cs5" %}

> Numeric columns can be grouped based on formats such as currency or percentage, while datetime columns can be grouped based on specific date or time formats.

## Show grouped rows based on page size

In the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid, controlling the number of grouped rows per page is useful when working with grouped data and a fixed page size.

By default, the [pageSize](https://ej2.syncfusion.com/react/documentation/api/grid/pageSettings#pagesize) setting applies to individual grid rows, not grouped rows. To show grouped column rows based on the `pageSize`, a custom implementation can be used.

This can be achieved by customizing the `generateQuery` method of the "Data prototype", allowing the query logic to be modified for grouped row pagination. This can be achieved in the below example.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/group-cs11/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/group-cs11/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/group-cs11/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/group-cs11/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/group-cs11" %}

## Collapse all grouped rows at initial rendering

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid provides the ability to expand or collapse grouped rows, enabling better control over data visibility. This is especially useful for large datasets where an initial summarized view is preferred.

To collapse all grouped rows on initial render, use the [dataBound](https://ej2.syncfusion.com/react/documentation/api/grid#databound) event in combination with the [collapseAll](https://ej2.syncfusion.com/react/documentation/api/grid/group#collapseall) method. This can be achieved in the below example.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/group-cs9/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/group-cs9/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/group-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/group-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/group-cs9" %}

>  All grouped rows can also be collapsed at the initial rendering using the [groupCollapseAll](https://ej2.syncfusion.com/react/documentation/api/grid#groupcollapseall) method within the [dataBound](https://ej2.syncfusion.com/react/documentation/api/grid#databound) event. The following code snippet demonstrates this approach:

```typescript
  const dataBound = () => {
    if (initial === true) {
      (grid as GridComponent).groupCollapseAll();
      initial = false;
    }
  }
```
>  The collapse all approach is recommended for a limited number of records since collapsing every grouped record requires time. For large datasets, [lazy-load grouping](https://ej2.syncfusion.com/react/documentation/grid/grouping/lazy-load-grouping) is recommended to optimize performance. This approach is also applicable to the [groupExpandAll](https://ej2.syncfusion.com/react/documentation/api/grid#groupexpandall) method.

## Group or ungroup column externally

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid supports both interactive and programmatic approaches to column grouping. Columns can be grouped manually via drag-and-drop or programmatically using the [groupColumn](https://ej2.syncfusion.com/react/documentation/api/grid#groupcolumn) and [ungroupColumn](https://ej2.syncfusion.com/react/documentation/api/grid#ungroupcolumn) methods.

The following example demonstrates how to implement programmatic grouping and ungrouping using the [DropDownList](https://ej2.syncfusion.com/react/documentation/drop-down-list/getting-started) component for column selection. When the corresponding button is activated, the selected column is grouped or ungrouped using the appropriate API method.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Group, GroupSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  let dropColumn;
  const columns = [
    { text: 'CustomerID', value: 'CustomerID' },
    { text: 'OrderID', value: 'OrderID' },
    { text: 'Ship City', value: 'ShipCity' },
    { text: 'Ship Name', value: 'ShipName' },
  ];
  const field = { text: 'text', value: 'value' };
  const groupOptions = {
    columns: ['CustomerID', 'ShipCity'],
    showDropArea: false
  };
  const groupColumn = () => {
    grid.groupColumn(dropColumn.value);
  }
  const unGroupColumn = () => {
    grid.ungroupColumn(dropColumn.value);
  }
  return (
    <div>
      <div style={{display: "inline-block"}}>
        <label style={{ padding:  "10px 10px 15px 0" }}> Column name :</label>
        <DropDownListComponent ref={drop => dropColumn = drop} index={0} width={120} dataSource={columns} fields={field}></DropDownListComponent>
      </div>
      <ButtonComponent style={{ margin:"5px 0 5px 5px", padding: "8px 8px" }} id="group" cssClass="e-outline" onClick={groupColumn}>Group Column</ButtonComponent>
      <ButtonComponent style={{ margin:"5px 0 5px 5px", padding: "8px 8px" }} id="ungroup" cssClass="e-outline" onClick={unGroupColumn}>UnGroup Column</ButtonComponent>
      <GridComponent ref={g => grid = g} dataSource={data} allowGrouping={true} groupSettings={groupOptions} height={267}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
        </ColumnsDirective>
        <Inject services={[Group]} />
      </GridComponent >
    </div>
  )
};
export default App;

{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="App.tsx" %}
{% raw %}

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Group, GroupSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  let dropColumn: DropDownListComponent | null;
  const columns: { [key: string]: Object; }[] = [
    { text: 'CustomerID', value: 'CustomerID' },
    { text: 'OrderID', value: 'OrderID' },
    { text: 'Ship City', value: 'ShipCity' },
    { text: 'Ship Name', value: 'ShipName' },
  ];
  const field: object = { text: 'text', value: 'value' };
  const groupOptions: GroupSettingsModel = {
    columns: ['CustomerID', 'ShipCity'],
    showDropArea: false
  };
  const groupColumn = () => {
    (grid as GridComponent).groupColumn(((dropColumn as DropDownListComponent).value as string));
  }
  const unGroupColumn = () => {
    (grid as GridComponent).ungroupColumn(((dropColumn as DropDownListComponent).value as string));
  }
  return (
    <div>
      <div style={{display: "inline-block"}}>
        <label style={{ padding:  "10px 10px 15px 0" }}> Column name :</label>
        <DropDownListComponent ref={drop => dropColumn = drop} index={0} width={120} dataSource={columns} fields={field}></DropDownListComponent>
      </div>
      <ButtonComponent style={{ margin:"5px 0 5px 5px", padding: "8px 8px" }} id="group" cssClass="e-outline" onClick={groupColumn}>Group Column</ButtonComponent>
      <ButtonComponent style={{ margin:"5px 0 5px 5px", padding: "8px 8px" }} id="ungroup" cssClass="e-outline" onClick={unGroupColumn}>UnGroup Column</ButtonComponent>
      <GridComponent ref={g => grid = g} dataSource={data} allowGrouping={true} groupSettings={groupOptions} height={267}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
        </ColumnsDirective>
        <Inject services={[Group]} />
      </GridComponent >
    </div>
  )
};
export default App;

{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/group-cs14/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/group-cs14/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/group-cs14" %}

## Expand or collapse externally

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid supports external control of grouped row visibility through programmatic expand and collapse. This functionality can be integrated using the grid's methods to manage grouped data display dynamically.

### Expand or collapse all grouped rows

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid enables programmatic expand and collapse of all grouped rows using the [groupExpandAll](https://ej2.syncfusion.com/react/documentation/api/grid#groupexpandall) and [groupCollapseAll](https://ej2.syncfusion.com/react/documentation/api/grid#groupcollapseall) methods.

In the example below, the [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/react/documentation/switch/getting-started) component is used to control the visibility of grouped rows. When toggled, the [change](https://ej2.syncfusion.com/react/documentation/api/switch#change) event triggers the appropriate method to expand or collapse all groups accordingly.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}

import { ChangeEventArgs, SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Group, GroupSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const groupOptions = {
    columns: ['CustomerID', 'ShipCity'],
    showDropArea: false
  };
  const onSwitchChange = (args) => {
    if (args.checked) {
      grid.groupCollapseAll();
    }
    else {
      grid.groupExpandAll();
    }
  }
  return (
    <div>
      <div style={{display: "flex", margin: "10px"}}>
        <label style={{ marginRight: "5px" }}>Expand or collapse rows</label>
        <SwitchComponent change={onSwitchChange}></SwitchComponent>
      </div>
      <GridComponent ref={g => grid = g} dataSource={data} allowGrouping={true} groupSettings={groupOptions} height={315}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
        </ColumnsDirective>
        <Inject services={[Group]} />
      </GridComponent >
    </div>
  )
};
export default App;

{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="App.tsx" %}
{% raw %}

import { ChangeEventArgs, SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Group, GroupSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const groupOptions: GroupSettingsModel = {
    columns: ['CustomerID', 'ShipCity'],
    showDropArea: false
  };
  const onSwitchChange = (args: ChangeEventArgs) => {
    if (args.checked) {
      (grid as GridComponent).groupCollapseAll();
    }
    else {
      (grid as GridComponent).groupExpandAll();
    }
  }
  return (
    <div>
      <div style={{display: "flex", margin: "10px"}}>
        <label style={{ marginRight: "5px" }}>Expand or collapse rows</label>
        <SwitchComponent change={onSwitchChange}></SwitchComponent>
      </div>
      <GridComponent ref={g => grid = g} dataSource={data} allowGrouping={true} groupSettings={groupOptions} height={315}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
        </ColumnsDirective>
        <Inject services={[Group]} />
      </GridComponent ></div>)
};
export default App;

{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/group-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/group-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/group-cs7" %}

### Expand or collapse selected grouped row

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid allows programmatic expand or collapse of specific grouped rows through the [expandCollapseRows](https://ej2.syncfusion.com/react/documentation/api/grid/group#expandcollapserows) method, which toggles the state of a targeted group caption row based on its current visibility.

To implement this functionality, follow these steps:

- Capture the grouped row index via an input field.
- Use a button to trigger a method.
- Retrieve grouped rows using `querySelectorAll` method.
- Identify the target group caption element by index.
- Call `expandCollapseRows` to toggle its state.

The example below demonstrates collapsing a selected grouped row using an external button.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Group } from '@syncfusion/ej2-react-grids';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import React, { useState }  from 'react';
import { data } from './datasource';

function App() {
  let grid;
  let textbox;
  const [message, setMessage] = useState('');
  const groupOptions = {
    columns: ['CustomerID'],
    showDropArea: false
  };
  const onExpandCollapseButtonClick = () => {
    const groupedRows = Array.from(grid.getContentTable().querySelectorAll('.e-recordplusexpand, .e-recordpluscollapse'));
    const groupedRowIndex = parseInt(textbox.value);
    if (groupedRows.length >= 0 && groupedRowIndex < groupedRows.length) {
      setMessage('');
      const groupCaptionElement = groupedRows[groupedRowIndex];
      grid.groupModule.expandCollapseRows(groupCaptionElement);
    } else {
      setMessage('The entered index exceeds the total number of grouped rows. Please enter a valid grouped index.');
    }
  }
  return (
    <div>
      <div style={{display: "flex", margin: "10px"}}>
        <TextBoxComponent ref={t => textbox = t} type='number' placeholder="Enter Grouped Row Index" width={200}></TextBoxComponent>
        <ButtonComponent style={{marginLeft: "5px"}} onClick={onExpandCollapseButtonClick}>Collapse or Expand Row</ButtonComponent>
      </div>
      <p style={{ color: "red" }}>{message}</p>
      <GridComponent ref={g => grid = g} dataSource={data} allowGrouping={true} groupSettings={groupOptions} height={315}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
        </ColumnsDirective>
        <Inject services={[Group]} />
      </GridComponent >
    </div>
  )
};
export default App;

{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="App.tsx" %}
{% raw %}

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Group, GroupSettingsModel } from '@syncfusion/ej2-react-grids';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import { useState } from 'react';
import { data } from './datasource';
function App() {
  let grid: GridComponent | null;
  let textbox: TextBoxComponent | null;
  const [message, setMessage] = useState('');
  const groupOptions: GroupSettingsModel = {
    columns: ['CustomerID'],
    showDropArea: false
  };
  const onExpandCollapseButtonClick = () => {
    const groupedRows = Array.from((grid as GridComponent).getContentTable().querySelectorAll('.e-recordplusexpand, .e-recordpluscollapse'));
    const groupedRowIndex: number = parseInt((textbox as TextBoxComponent).value);
    if (groupedRows.length >= 0 && groupedRowIndex < groupedRows.length) {
      setMessage('');
      const groupCaptionElement = groupedRows[groupedRowIndex];
      (grid as GridComponent).groupModule.expandCollapseRows(groupCaptionElement);
    } else {
      setMessage('The entered index exceeds the total number of grouped rows. Please enter a valid grouped index.');
    }
  }
  return (
    <div>
      <div style={{display: "flex", margin: "10px"}}>
        <TextBoxComponent ref={t => textbox = t} type='number' placeholder="Enter Grouped Row Index" width={200}></TextBoxComponent>
        <ButtonComponent style={{marginLeft: "5px"}} onClick={onExpandCollapseButtonClick}>Collapse or Expand Row</ButtonComponent>
      </div>
      <p style={{ color: "red" }}>{message}</p>
      <GridComponent ref={g => grid = g} dataSource={data} allowGrouping={true} groupSettings={groupOptions} height={315}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
        </ColumnsDirective>
        <Inject services={[Group]} />
      </GridComponent >
    </div>
  )
};
export default App;

{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/group-cs16/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/group-cs16/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/group-cs16" %}

## Clear grouping 

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid provides a [clearGrouping](https://ej2.syncfusion.com/react/documentation/api/grid#cleargrouping) method to remove all grouped columns programmatically. This is useful for resetting the grid to an ungrouped state.

The following example demonstrates how to execute `clearGrouping` through an external button click.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/group-cs15/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/group-cs15/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/group-cs15/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/group-cs15/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/group-cs15" %}

## Grouping events

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid provides two key events for handling grouping operations. These events enable the integration of custom logic before and after a grouping action:

- [actionBegin](https://ej2.syncfusion.com/react/documentation/api/grid#actionbegin): Triggered before a grouping action starts. It provides details such as the group field name and `requestType`, allowing conditional logic or cancellation.
- [actionComplete](https://ej2.syncfusion.com/react/documentation/api/grid#actioncomplete): Triggered after a grouping action completes. It exposes the updated grid state for post-processing tasks like UI updates or data handling.

The following example demonstrates how to cancel grouping for the "Order ID" column using `actionBegin` and display a status message via `actionComplete`.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}

import { ColumnDirective, ColumnsDirective, GridComponent, GroupEventArgs, Inject, Group } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { useState } from 'react';
import { data } from './datasource';

function App() {
  const [message, setMessage] = useState('');
  const actionBegin = (args) => {
    if (args.requestType === 'grouping' && args.columnName === 'OrderID') {
      args.cancel = true;
      setMessage('Grouping action cancelled for ' + args.columnName + ' column');
    }
  }
  const actionComplete = (args) => {
    if (args.requestType === 'grouping') {
    setMessage('Grouping action completed for ' + args.columnName + ' column');
    }
    else{
      setMessage('');
    }
  }
  return (<div>
    <div style={{ marginLeft: "100px" }}><p style={{ color: "red" }} id="message">{message}</p></div>
    <GridComponent dataSource={data} allowGrouping={true} height={315} actionBegin={actionBegin} actionComplete={actionComplete}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='100' />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
      </ColumnsDirective>
      <Inject services={[Group]} />
    </GridComponent>
    </div>
  )
};
export default App;

{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}

import { ColumnDirective, ColumnsDirective, GridComponent, GroupEventArgs, Inject, Group } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { useState } from 'react';
import { data } from './datasource';

function App() {
  const [message, setMessage] = useState('');
  const actionBegin = (args: GroupEventArgs) => {
    if (args.requestType === 'grouping' && args.columnName === 'OrderID') {
      args.cancel = true;
      setMessage('Grouping action cancelled for ' + args.columnName + ' column');
    }
  }
  const actionComplete = (args: GroupEventArgs) => {
    if (args.requestType === 'grouping') {
    setMessage('Grouping  action completed for ' + args.columnName + ' column');
    }
    else{
      setMessage('');
    }
  }
  return (<div>
    <div style={{ marginLeft: "100px" }}><p style={{ color: "red" }} id="message">{message}</p></div>
    <GridComponent dataSource={data} allowGrouping={true} height={315} actionBegin={actionBegin} actionComplete={actionComplete}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='100' />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
      </ColumnsDirective>
      <Inject services={[Group]} />
    </GridComponent>
    </div>
  )
};
export default App;

{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/group-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/group-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/group-cs6" %}

> The [args.requestType](https://ej2.syncfusion.com/react/documentation/api/grid/sortEventArgs#requesttype) property represents the name of the current action being performed. For instance, during grouping, the `args.requestType` value is "grouping".

## Limitations

Grouping is not compatible with the autofill feature.

## See also

* [Exporting grouped records](https://ej2.syncfusion.com/react/documentation/grid/excel-export/excel-export-options#exporting-grouped-records)
* [Lazy load grouping](./lazy-load-grouping)
* [Group and caption aggregates](./caption-template)
* [Aggregates overview](../aggregates/aggregates)