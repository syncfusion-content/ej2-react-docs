---
layout: post
title: Check box selection in React Grid component | Syncfusion
description: Learn here all about Check box selection in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Check box selection 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Check box Selection in React Grid component

Checkbox selection in the Grid component allows you to provide an option to select multiple records by using a checkbox in each row. This feature is particularly useful when you need to perform bulk actions or operations on selected records within the Grid.

To render checkbox in each grid row, you need to use checkbox column with type as **checkbox** using column [type](https://ej2.syncfusion.com/react/documentation/api/grid/column/#type) property.

Here's an example of how to enable check box selection using `type` property in the Grid component:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/selection-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/selection-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/selection-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/selection-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/selection-cs3" %}

> By default selection is allowed by clicking a grid row or checkbox in that row. To allow selection only through checkbox, you can set [selectionSettings.checkboxOnly](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings/#checkboxonly) property to **true**.
> Selection can be persisted on all the operations using [selectionSettings.persistSelection](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings/#persistselection) property. For persisting selection on the Grid, any one of the column should be defined as a primary key using [isPrimaryKey](https://ej2.syncfusion.com/react/documentation/api/grid/column/#isprimarykey) property.

## Checkbox selection mode

The checkbox selection mode in the Grid allows you to select rows either by clicking on checkboxes or by clicking on the rows themselves. This feature provides two types of checkbox selection modes that can be set using the [selectionSettings.checkboxMode](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings/#checkboxmode) property. The available modes are:

* **Default**: This is the default value of the `checkboxMode`. In this mode, you can select multiple rows by clicking rows one by one. When you click on a row, the checkbox associated with that row also switches to the 'checked' state.
* **ResetOnRowClick**: In `ResetOnRowClick` mode, when clicking on row it will reset previously selected row. Also you can perform multiple-selection in this mode by press and hold CTRL key and click the desired rows. To select range of rows, press and hold the SHIFT key and click the rows.

In the following example, it demonstrates how to dynamically enable and change the `checkboxMode` using the `DropDownList` component:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const dropdownData = [
    { text: 'Default', value: 'Default' },
    { text: 'ResetOnRowClick', value: 'ResetOnRowClick' },

  ];
  const valueChange = (args) => {
    grid.selectionSettings.checkboxMode = args.value;
  }
  return (<div>
    <label style={{ padding: "30px 17px 0 0" }} >Choose checkbox selection mode:</label>
    <DropDownListComponent index={0} width={150} dataSource={dropdownData} change={valueChange}></DropDownListComponent>
    <GridComponent ref={g => grid = g} dataSource={data} height={315}>
      <ColumnsDirective>
        <ColumnDirective type='checkbox' width='50' />
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='100' />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
      </ColumnsDirective>
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const dropdownData: { [key: string]: Object; }[] = [
    { text: 'Default', value: 'Default' },
    { text: 'ResetOnRowClick', value: 'ResetOnRowClick' },

  ];
  const valueChange = (args: ChangeEventArgs) => {
    (grid as GridComponent).selectionSettings.checkboxMode = args.value;
  }
  return (<div>
    <label style={{ padding: "30px 17px 0 0" }} >Choose checkbox selection mode:</label>
    <DropDownListComponent index={0} width={150} dataSource={dropdownData} change={valueChange}></DropDownListComponent>
    <GridComponent ref={g => grid = g} dataSource={data} height={315}>
      <ColumnsDirective>
        <ColumnDirective type='checkbox' width='50' />
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='100' />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
      </ColumnsDirective>
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/selection-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/selection-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/selection-cs4" %}

## Hide selectall checkbox in column header 

You can hide the select all checkbox in the column header of the Syncfusion Grid. This is a useful feature in various scenarios where you want to customize the appearance and behavior of the checkboxes within the grid.

By default, when you set the column type as [checkbox](https://ej2.syncfusion.com/react/documentation/api/grid/column/#type), it renders a column with checkboxes for selection purposes. However, if you want to hide the header checkbox, you can achieve this by defining an empty [HeaderTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/column/#headertemplate) directive in the grid Column.

Here's an example of how to hide selectall checkbox in column header using empty `HeaderTemplate` directive in the Grid component:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/selection-checkbox-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/selection-checkbox-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/selection-checkbox-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/selection-checkbox-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/selection-checkbox-cs1" %}

## Prevent specific rows from being selected in checkbox selection

The checkbox selection mode allows you to select rows either by clicking on checkboxes or by clicking on the rows themselves. However, there might be scenarios where you want to prevent specific rows from being selected based on certain conditions or business requirements.

To achieve this, you can use the [rowDataBound](https://ej2.syncfusion.com/react/documentation/api/grid/#rowdatabound) event of the Grid. The `rowDataBound` event is triggered for each row after it is bound to the data source. In this event, you can check the row data and determine whether the row should be selectable or not. If you want to prevent the row from being selected, you can set the [isSelectable](https://ej2.syncfusion.com/react/documentation/api/grid/rowDataBoundEventArgs/#isselectable) argument of the event to **false**.

In the following sample, the selection of specific rows has been prevented based on the `isSelectable` argument in the `rowDataBound` event.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Edit, Toolbar, Filter, Selection, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    const settings = { persistSelection: true, type: 'Multiple' };
    const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
    const filterOptions = { type: 'CheckBox' };
    const load = () => {
        for (let i = 0; i < data.length; i++) {
            data[i]['List'] = i + 1;
        }
    }
    const rowDataBound = (args) => {
        args.isSelectable = args.data.List % 5 === 0;
    }
    return <GridComponent dataSource={data} selectionSettings={settings}
        editSettings={editSettings} toolbar={toolbarOptions} filterSettings={filterOptions} allowPaging={true} allowFiltering={true} pageSettings={{ pageSize: 5 }}
        rowDataBound={rowDataBound} load={load}>
        <ColumnsDirective>
            <ColumnDirective type='checkbox' width='50' />
            <ColumnDirective field='List' width='120' headerText="List" />
            <ColumnDirective field='OrderID' headerText="Order ID" isPrimaryKey="true" width='150' />
            <ColumnDirective field='CustomerID' headerText="Customer ID" width='150' />
            <ColumnDirective field='EmployeeID' headerText="Employee ID" width='150' />
            <ColumnDirective field='ShipCity' headerText="Ship City" width='150' />
        </ColumnsDirective>
        <Inject services={[Edit, Toolbar, Filter, Selection, Page]} />
    </GridComponent>
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Edit, Toolbar, Filter, Selection, Page, ToolbarItems, FilterSettingsModel, RowDataBoundEventArgs, EditSettingsModel, SelectionSettingsModel} from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
  const settings: SelectionSettingsModel = { persistSelection: true, type:'Multiple' };
  const editSettings: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
  const filterOptions: FilterSettingsModel = { type: 'CheckBox' };
  const load = () => {
    for (let i = 0; i < data.length; i++) {
      data[i]['List'] = i + 1;
    }
  }
  const rowDataBound = (args: RowDataBoundEventArgs) => {
    args.isSelectable = args.data.List % 5 === 0;
  }
    return <GridComponent dataSource={data} selectionSettings={settings}
    editSettings={editSettings} toolbar={toolbarOptions} filterSettings={filterOptions} allowPaging={true} allowFiltering={true} pageSettings={{pageSize : 5}}
    rowDataBound={rowDataBound} load={load}>
            <ColumnsDirective>
              <ColumnDirective type='checkbox' width='50'/>
              <ColumnDirective field='List' width='120' headerText="List"/>
              <ColumnDirective field='OrderID' headerText="Order ID" isPrimaryKey="true" width='150'/>
              <ColumnDirective field='CustomerID' headerText="Customer ID" width='150'/>
              <ColumnDirective field='EmployeeID' headerText="Employee ID" width='150'/>
              <ColumnDirective field='ShipCity' headerText="Ship City" width='150'/>
            </ColumnsDirective>
            <Inject services={[Edit, Toolbar, Filter, Selection, Page]}/>
            </GridComponent>
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/selection-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/selection-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/selection-cs5" %}

## How to select single row in checkbox selection mode

The React Grid allows you to select only one row at a time within the Grid. This feature is particularly useful when you want to ensure that only a single row is selected, and any previous selections are cleared when a new row is selected.

To achieve single-row selection in checkbox selection mode within the Grid, you can handle the [rowSelecting](https://ej2.syncfusion.com/react/documentation/api/grid/#rowselecting) event and use the [clearSelection](https://ej2.syncfusion.com/react/documentation/api/grid/#clearselection) method to clear any previous selections before selecting a new row. This ensures that only one row is selected at a time, and any prior selections are deselected when a new row is chosen.

> When you set the [checkboxMode](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings/#checkboxmode) property to **ResetOnRowClick**, it will reset the previously selected row when you click on a new row. Please note that this behavior applies to rows and not checkboxes, and it is the default behavior of the grid.

Here's an example of how to select a single row in checkbox selection mode using the `clearSelection` method along with the `rowSelecting` event:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/selection-checkbox-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/selection-checkbox-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/selection-checkbox-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/selection-checkbox-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/selection-checkbox-cs2" %}

## Allow selection only through checkbox click

By default, the Grid component allows selection by clicking either a grid row or the checkbox within that row. If you want to restrict selection so that it can only be done by clicking the checkboxes, you can set the [selectionSettings.checkboxOnly](https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings/#checkboxonly) property to **true**.

Here's an example of how to enable selection only through checkbox click using `checkboxOnly` property:
 
{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/selection-checkbox-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/selection-checkbox-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/selection-checkbox-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/selection-checkbox-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/selection-checkbox-cs3" %}