---
layout: post
title: React Grid - Context Menu | Syncfusion
description: React Grid context menu supports, adding custom actions, and managing events to enhance interactions for rows and cells.
control: Context menu
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Context Menu in React Grid Component

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component includes a context menu that appears on right-click anywhere within the grid. The context menu provides quick access to actions such as sorting, filtering, and editing without navigating away from the grid.

Enable the context menu by configuring the grid's [contextMenuItems](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#contextmenuitems) property. The property accepts the default set of menu items or a custom collection of objects.

The `ContextMenu` module must be injected into the grid for the context menu to function.

The context menu appears when right-clicking different areas of the grid, including:

- **Header**: the grid header section.
- **Content**: the main grid content area.
- **Pager**: the pager section.

Context menu items vary by the clicked area; header items differ from content or pager items.

The default context menu items in the header area of the grid are as follows:

Items| Description
----|----
`AutoFit`|  Automatically adjust the column width to fit the content.
`AutoFitAll` | Automatically adjust all column widths to fit their content.
`Group` | Group the data based on the current column.
`Ungroup` | Remove grouping for the current column.
`SortAscending` | Sort the current column in ascending order.
`SortDescending` | Sort the current column in descending order.

The default context menu items in the content area of the grid are as follows:

Items| Description
----|----
`Edit`|  Edit the currently selected record in the grid.
`Delete` | Delete the currently selected record.
`Save` | Save the changes made to the edited record.
`Cancel` | Cancel the edit state and revert changes made to the edited record.
`Copy` | Copy the selected records to the clipboard.
`PdfExport` | Export the grid data as a PDF document.
`ExcelExport` | Export the grid data as an Excel document.
`CsvExport` | Export the grid data as a CSV document.

The default context menu items in the pager area of the grid are as follows:

Items| Description
----|----
`FirstPage` | Navigate to the first page of the grid.
`PrevPage` | Navigate to the previous page of the grid.
`LastPage` | Navigate to the last page of the grid.
`NextPage` | Navigate to the next page of the grid.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/context-menu-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/context-menu-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/context-menu-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/context-menu-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/context-menu-cs1" %}

## Custom context menu items

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid supports adding custom context menu items to the default menu.

Custom items are defined by setting the `contextMenuItems` property to a collection of [contextMenuItemModel](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#contextmenumodule) objects. Menu item actions are handled through the [contextMenuClick](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#contextmenuclick) event.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/context-menu-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/context-menu-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/context-menu-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/context-menu-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/context-menu-cs2" %}

## Show context menu on left click

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid can display the context menu on a left mouse click instead of the default right-click.

Implementing left-click behaviour typically involves handling the Grid's [created](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#created) event and the context menu's [beforeOpen](https://ej2.syncfusion.com/react/documentation/api/context-menu/index-default#beforeopen) event. Capture the click coordinates via the `onclick` listener and pass them to the context menu's `open` method so the menu opens at the clicked location. Prevent the default right-click behaviour where necessary, for example within the `created` handler.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/context-menu-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/context-menu-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/context-menu-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/context-menu-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/context-menu-cs3" %}

> Control the visibility of a context menu item for a particular grid area by setting the `target` property.

## Enable or disable context menu items

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid supports enabling or disabling default and custom context menu items via the context menu's [enableItems](https://ej2.syncfusion.com/react/documentation/api/context-menu/index-default#enableitems) method. Call `enableItems` with `true` to enable items or `false` to disable them.

The example below uses the [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/react/documentation/switch/getting-started) component to toggle a menu item. When the switch changes state, the `change` event updates the `Copy` item by calling `enableItems`.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ChangeEventArgs, SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, EditSettingsModel, GridComponent } from '@syncfusion/ej2-react-grids';
import { ContextMenu, ContextMenuItem, Inject, Page, Edit } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const contextMenuItems = ['Copy', 'Edit', 'Delete'];
  const editSettings = { allowEditing: true, allowDeleting: true };
  const change = (args) => {
    grid.contextMenuModule.contextMenu.enableItems(['Copy'], !args.checked);
  }
  return (
    <div>
      <label style={{ padding: "10px 10px" }}>Enable or disable context menu items</label>
      <SwitchComponent change={change}></SwitchComponent>
      <GridComponent dataSource={data} allowPaging={true} contextMenuItems={contextMenuItems} editSettings={editSettings} ref={g => grid = g} >
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' isPrimaryKey={true} width='100' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
          <ColumnDirective field='Freight' headerText='Freight' format='C' width='150' textAlign='Right' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='120' />
        </ColumnsDirective>
        <Inject services={[ContextMenu, Page, Edit]} />
      </GridComponent>
    </div>
  );
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ChangeEventArgs, SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, EditSettingsModel, GridComponent } from '@syncfusion/ej2-react-grids';
import { ContextMenu, ContextMenuItem, Inject, Page, Edit } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const contextMenuItems: ContextMenuItem[] = ['Copy', 'Edit', 'Delete'];
  const editSettings: EditSettingsModel = { allowEditing: true, allowDeleting: true };
  const change = (args: ChangeEventArgs) => {
    (grid as GridComponent).contextMenuModule.contextMenu.enableItems(['Copy'], !args.checked);
  }
  return (
    <div>
      <label style={{ padding: "10px 10px" }}>Enable or disable context menu items</label>
      <SwitchComponent change={change}></SwitchComponent>
      <GridComponent dataSource={data} allowPaging={true} contextMenuItems={contextMenuItems} editSettings={editSettings} ref={g => grid = g} >
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' isPrimaryKey={true} width='100' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
          <ColumnDirective field='Freight' headerText='Freight' format='C' width='150' textAlign='Right'/>
          <ColumnDirective field='ShipCity' headerText='Ship City' width='120' />
        </ColumnsDirective>
        <Inject services={[ContextMenu, Page, Edit]} />
      </GridComponent>
    </div>
  );
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/context-menu-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/context-menu-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/context-menu-cs4" %}

## Show or hide context menu items

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid supports showing or hiding default and custom context menu items using the context menu's [showItems](https://ej2.syncfusion.com/react/documentation/api/context-menu/index-default#showitems) and [hideItems](https://ej2.syncfusion.com/react/documentation/api/context-menu/index-default#hideitems) methods. Pass the target items as an argument to these methods.

The example below demonstrates the use of the [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/react/documentation/switch/getting-started) component. Its `change` event triggers either "showItems" or "hideItems" to modify the "Edit Record" and "Delete Record" items accordingly.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ChangeEventArgs, SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, EditSettingsModel, GridComponent } from '@syncfusion/ej2-react-grids';
import { ContextMenu, ContextMenuItem, Inject, Page, Edit } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const contextMenuItems = ['Copy', 'Edit', 'Delete'];
  const editSettings = { allowEditing: true, allowDeleting: true };
  const change = (args) => {
    if (args.checked) {
      grid.contextMenuModule.contextMenu.hideItems(['Edit Record', 'Delete Record']);
    } else {
      grid.contextMenuModule.contextMenu.showItems(['Edit Record', 'Delete Record']);
    }
  }
  return (
    <div>
      <label style={{ padding: "10px 10px" }}>Show or hide context menu items</label>
      <SwitchComponent change={change}></SwitchComponent>
      <GridComponent dataSource={data} allowPaging={true} contextMenuItems={contextMenuItems} editSettings={editSettings} ref={g => grid = g} >
        <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' isPrimaryKey={true} width='100' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
          <ColumnDirective field='Freight' headerText='Freight' format='C' width='150' textAlign='Right' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='120' />
        </ColumnsDirective>
        <Inject services={[ContextMenu, Page, Edit]} />
      </GridComponent>
    </div>
  );
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ChangeEventArgs, SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, EditSettingsModel, GridComponent } from '@syncfusion/ej2-react-grids';
import { ContextMenu, ContextMenuItem, Inject, Page, Edit } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const contextMenuItems: ContextMenuItem[] = ['Copy', 'Edit', 'Delete'];
  const editSettings: EditSettingsModel = { allowEditing: true, allowDeleting: true };
  const change = (args: ChangeEventArgs) => {
    if (args.checked) {
      (grid as GridComponent).contextMenuModule.contextMenu.hideItems(['Edit Record', 'Delete Record']);
    } else {
      (grid as GridComponent).contextMenuModule.contextMenu.showItems(['Edit Record', 'Delete Record']);
    }
  }
  return (
    <div>
      <label style={{ padding: "10px 10px" }}>Show or hide context menu items</label>
      <SwitchComponent change={change}></SwitchComponent>
      <GridComponent dataSource={data} allowPaging={true} contextMenuItems={contextMenuItems} editSettings={editSettings} ref={g => grid = g} >
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' isPrimaryKey={true} width='100' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
          <ColumnDirective field='Freight' headerText='Freight' format='C' width='150' textAlign='Right' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='120' />
        </ColumnsDirective>
        <Inject services={[ContextMenu, Page, Edit]} />
      </GridComponent>
    </div>
  );
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/context-menu-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/context-menu-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/context-menu-cs5" %}