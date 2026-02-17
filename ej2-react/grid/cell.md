---
layout: post
title: React Grid - Cell | Syncfusion
description: React Grid offers cell rendering, editing options, and APIs to customize content, formatting, and interactive behavior within each cell.
control: Cell
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Cell in React Grid Component

A cell in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component represents the smallest unit of data within the grid. Each cell corresponds to the intersection of a row and a column, and it is responsible for displaying the value associated with that specific row-column combination. Cells can display plain text, formatted values, or fully customized content, making them highly flexible for presenting structured data in a grid layout.

## Displaying the HTML content

Displaying HTML content in a Grid can be useful when displaying formatted content, such as images, links, or tables, in a tabular format. The Grid component allows HTML tags to be displayed in the Grid header and content. By default, HTML content is encoded to prevent potential security vulnerabilities. However, the [disableHtmlEncode](https://ej2.syncfusion.com/react/documentation/api/grid/column#disablehtmlencode) property can be set to `false` to display HTML tags without encoding. This feature is useful when displaying HTML content in a grid cell.

In the following example, the [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/react/documentation/switch/getting-started) component is added  to enable and disable the [disableHtmlEncode](https://ej2.syncfusion.com/react/documentation/api/grid/column#disablehtmlencode) property. When the switch is toggled, the [change](https://ej2.syncfusion.com/react/documentation/api/switch#change) event is triggered and the `disableHtmlEncode` property of the column is updated accordingly. The [refresh](https://ej2.syncfusion.com/react/documentation/api/grid#refresh) method is called to refresh the grid and display the updated content.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
function App() {
  let grid;
  const change = ((args) => {
    if (args.checked) {
      grid.getColumnByField('CustomerID').disableHtmlEncode = false;
    } else {
      grid.getColumnByField('CustomerID').disableHtmlEncode = true;
    }
    grid.refreshColumns();
  })
  return (
    <div>
      <div>
        <label style={{ padding: "10px 10px" }}>
          Enable or disable HTML Encode
        </label>
        <SwitchComponent id="switch" change={change}></SwitchComponent>
        <GridComponent ref={g => grid = g} dataSource={data} height={315}>
          <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign='Right' />
            <ColumnDirective field='CustomerID' headerText='<strong> Customer ID </strong>' width='120' />
            <ColumnDirective field='Freight' headerText='Freight' width='150' textAlign='Right' format='C' />
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='120' />

          </ColumnsDirective>
        </GridComponent></div></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { SwitchComponent, ChangeEventArgs } from '@syncfusion/ej2-react-buttons';
function App() {
  let grid: GridComponent | null;
  const change = ((args: ChangeEventArgs) => {
    if (args.checked) {
      (grid as GridComponent).getColumnByField('CustomerID').disableHtmlEncode = false;
    } else {
      (grid as GridComponent).getColumnByField('CustomerID').disableHtmlEncode = true;
    }
    (grid as GridComponent).refreshColumns();
  })
  return (
    <div>
      <div>
        <label style={{ padding: "10px 10px" }}>
          Enable or disable HTML Encode
        </label>
        <SwitchComponent id="switch" change={change}></SwitchComponent>
        <GridComponent ref={g => grid = g} dataSource={data} height={315}>
          <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign='Right' />
            <ColumnDirective field='CustomerID' headerText='<strong> Customer ID </strong>' width='120' />
            <ColumnDirective field='Freight' headerText='Freight' width='150' textAlign='Right' format='C' />
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='120' />

          </ColumnsDirective>
        </GridComponent></div></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/display-html-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/display-html-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/display-html-cs1" %}

> * The [disableHtmlEncode](https://ej2.syncfusion.com/react/documentation/api/grid/column#disablehtmlencode) property disables HTML encoding for the corresponding column in the grid. 
> * If the property is set to `true`, any HTML tags in the column's data will be displayed. 
> * If the property is set to `false`, the HTML tags will be removed and displayed as plain text.
> * Disabling HTML encoding can potentially introduce security vulnerabilities, so use caution when enabling this feature.
> * If [enableHtmlSanitizer](https://ej2.syncfusion.com/react/documentation/api/grid#enablehtmlsanitizer) property of grid is set to `true`, then the content is sanitized to prevent any potential security vulnerabilities.
> * The `disableHtmlEncode` property of the column can also be disabled using [getColumns](https://ej2.syncfusion.com/react/documentation/api/grid#getcolumns) method on [change](https://ej2.syncfusion.com/react/documentation/api/switch#change) event of Switch component. This is demonstrated in the following code snippet: 

```typescript
const change = ((args:ChangeEventArgs) {
  if (args.checked) {
    grid.getColumns()[1].disableHtmlEncode = false;
  } else {
    grid.getColumns()[1].disableHtmlEncode = true;
  }
  grid.refresh();
});
```

## Autowrap the grid content

The auto wrap feature allows cell content in the grid to wrap to the next line when it exceeds the boundary of the specified cell width. Cell content wrapping works based on the position of white space between words. To support the Autowrap functionality in Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid, an appropriate [width](https://ej2.syncfusion.com/react/documentation/api/grid/column#width) must be set for the columns. The column `width` defines the maximum width of a column and helps wrap content automatically.

To enable auto wrap, set the [allowTextWrap](https://ej2.syncfusion.com/react/documentation/api/grid#allowtextwrap) property to `true`. The wrap mode can also be configured by setting the [textWrapSettings.wrapMode](https://ej2.syncfusion.com/react/documentation/api/grid/textWrapSettings#wrapmode) property.

Grid provides the below three options for configuring:

* **`Both`** - This is the default value for wrapMode. With this option, both the grid header and content text is wrapped.
* **`Header`** - With this option, only the grid header text is wrapped.
* **`Content`** - With this option, only the grid content is wrapped.

> * If a column `width` is not specified, then the Autowrap of columns will be adjusted with respect to the grid's `width`.
> * If a column's header text contains no white space, the text may not be wrapped.
> * If the content of a cell contains HTML tags, the Autowrap functionality may not work as expected. In such cases, the [headerTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/column#headertemplate) and [template](https://ej2.syncfusion.com/react/documentation/api/grid/column#template) properties of the column can be used to customize the appearance of the header and cell content.

The following example demonstrates setting the [allowTextWrap](https://ej2.syncfusion.com/react/documentation/api/grid#allowtextwrap) property to `true` and specify the wrap mode as `Content` by setting the [textWrapSettings.wrapMode](https://ej2.syncfusion.com/react/documentation/api/grid/textWrapSettings#wrapmode) property. Also change the `textWrapSettings.wrapMode` property to `Content` and `Both` on changing the dropdown value using the [change](https://ej2.syncfusion.com/react/documentation/api/drop-down-list#change) event of the DropDownList component.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}

import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import React, { useState } from 'react';
import { inventoryData } from './datasource';

function App() {
  const [wrapSettings, setWrapSettings] = useState({ wrapMode: 'Content' });
  const dropDownData = [
    { text: 'Content', value: 'Content' },
    { text: 'Both', value: 'Both' },
  ];
  const valueChange = ((args) => {
    const newWrapValue = { wrapMode: args.value };
    setWrapSettings(newWrapValue);
  })
  return (
    <div>
      <label style={{ padding: '30px 17px 0 0' }}>Change the wrapmode of auto wrap feature:</label>
      <DropDownListComponent dataSource={dropDownData} index={0} width="100" change={valueChange}></DropDownListComponent>
      <GridComponent dataSource={inventoryData} height={315} allowPaging={true} allowTextWrap={true} textWrapSettings={wrapSettings}>
        <ColumnsDirective>
          <ColumnDirective field='Inventor' headerText='Inventor' width='100' />
          <ColumnDirective field='NumberofPatentFamilies' headerText='Number of Patent Families' textAlign='Right' width='100' />
          <ColumnDirective field='Country' headerText='Country' width='100' />
          <ColumnDirective field='Mainfieldsofinvention' headerText='Main fields of invention' width='140' />
        </ColumnsDirective>
      </GridComponent></div>)
}
export default App;

{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}

import { ColumnDirective, ColumnsDirective, GridComponent, TextWrapSettingsModel } from '@syncfusion/ej2-react-grids';
import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import React, { useState } from 'react';
import { inventoryData } from './datasource';

function App() {
  const [wrapSettings, setWrapSettings] = useState<TextWrapSettingsModel>({ wrapMode: 'Content' });
  const dropDownData: { [key: string]: Object; }[] = [
    { text: 'Content', value: 'Content' },
    { text: 'Both', value: 'Both' },
  ];
  const valueChange = ((args: ChangeEventArgs) => {
    const newWrapValue: TextWrapSettingsModel = { wrapMode: args.value };
    setWrapSettings(newWrapValue);
  })
  return (
    <div>
      <label style={{ padding: '30px 17px 0 0' }}>Change the wrapmode of auto wrap feature:</label>
      <DropDownListComponent dataSource={dropDownData} index={0} width="100" change={valueChange}></DropDownListComponent>
      <GridComponent dataSource={inventoryData} height={315} allowPaging={true} allowTextWrap={true} textWrapSettings={wrapSettings}>
        <ColumnsDirective>
          <ColumnDirective field='Inventor' headerText='Inventor' width='100' />
          <ColumnDirective field='NumberofPatentFamilies' headerText='Number of Patent Families' textAlign='Right' width='100' />
          <ColumnDirective field='Country' headerText='Country' width='100' />
          <ColumnDirective field='Mainfieldsofinvention' headerText='Main fields of invention' width='140' />
        </ColumnsDirective>
      </GridComponent></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/autowrap-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/autowrap-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/autowrap-cs1" %}

## Customize cell styles

Customizing grid cell styles allows modification of cell appearance in the Grid control to meet specific design requirements. The font, background color, and other cell styles can be customized using grid events, CSS, properties, or method support.

### Using event

The [queryCellInfo](https://ej2.syncfusion.com/react/documentation/api/grid#querycellinfo) event of the grid can be used to customize cell appearance. This event triggers when the grid renders each header cell and provides an object containing information about the header cell. This object can be used to modify header cell styles.

The following example demonstrates adding the [queryCellInfo](https://ej2.syncfusion.com/react/documentation/api/grid#querycellinfo) event handler to the grid. In the event handler, the current column is checked to determine if it is the "Freight" field, and the appropriate CSS class is applied to the cell based on its value.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/rows-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/rows-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/rows-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/rows-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/rows-cs1" %}

> * The [queryCellInfo](https://ej2.syncfusion.com/react/documentation/api/grid#querycellinfo) event is triggered for every cell of the grid, so it may impact grid performance when used to modify a large number of cells.

### Using CSS

Styles can be applied to cells using CSS selectors. The Grid provides a class name for each cell element, which can be used to apply styles to specific cells or cells in a particular column. The `e-rowcell` class is used to style row cells, and the `e-selectionbackground` class is used to change the background color of selected rows.

```CSS
.e-grid td.e-cellselectionbackground {
  background: #9ac5ee;
  font-style: italic;
}
```

The following example demonstrates customizing the appearance of a specific row in the grid on selection using "className". 

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}

import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const selectOptions = {
    type: 'Multiple',
    mode: 'Cell'
  }
  return (
    <div>
      <div style={{ padding: '40px 0 0 0' }}>
        <GridComponent dataSource={data} height={315} selectionSettings={selectOptions}>
          <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign='Right' />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
            <ColumnDirective field='Freight' headerText='Freight' width='100' textAlign='Right' />
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='140' />
          </ColumnsDirective>
        </GridComponent></div></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}

import { ColumnDirective, ColumnsDirective, GridComponent, SelectionSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const selectOptions: SelectionSettingsModel = {
    type: 'Multiple',
    mode: 'Cell'
  }
  return (
    <div>
      <div style={{ padding: '40px 0 0 0' }}>
        <GridComponent dataSource={data} height={315} selectionSettings={selectOptions}>
          <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right"/>
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
            <ColumnDirective field='Freight' headerText='Freight' width='100' textAlign="Right"/>
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='140' />
          </ColumnsDirective>
        </GridComponent></div></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/customize-cell-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/customize-cell-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/customize-cell-cs1" %}

### Using property

To customize the style of grid cells, define the [customAttributes](https://ej2.syncfusion.com/react/documentation/api/grid/column#customattributes) property in the column definition object. The `customAttributes` property takes an object with name-value pairs to customize CSS properties for grid cells. Multiple CSS properties can be set to the custom class using the `customAttributes` property.

```CSS
.custom-css {
  background: #d7f0f4;
  font-style: italic;
  color:navy
}
```
Here, the `customAttributes` property of the "Ship City" column is set to an object that contains the CSS class "custom-css". This CSS class is applied to all cells in the "Ship City" column of the grid.

```typescript
    <ColumnDirective field="OrderID" headerText="Order ID" customAttributes={class: 'custom-css'} width="100" textAlign="Right" />
```
The following example demonstrates customizing the appearance of the "Order ID" and "Ship City" columns using custom attributes. 

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  return (<div>
    <GridComponent dataSource={data} height={315} enableHover={false} allowSelection={false}>
      <ColumnsDirective>
        <ColumnDirective field="OrderID" headerText="Order ID" customAttributes={{class: 'custom-css'}} width="100" textAlign="Right" />
        <ColumnDirective field="CustomerID" headerText="Customer ID" width="100" />
        <ColumnDirective field="EmployeeID" headerText="Employee ID" customAttributes={{class: 'custom-css'}} width="100" textAlign="Right" />
        <ColumnDirective field="Freight" headerText="Freight" width="80" textAlign="Right" format="C2" />
        <ColumnDirective field="ShipCountry" headerText="Ship Country" width="100" />
      </ColumnsDirective>
    </GridComponent>
  </div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import {  ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  return (<div>
    <GridComponent dataSource={data} height={315} enableHover={false} allowSelection={false}>
      <ColumnsDirective>
        <ColumnDirective field="OrderID" headerText="Order ID" customAttributes={{class: 'custom-css'}} width="100" textAlign="Right" />
        <ColumnDirective field="CustomerID" headerText="Customer ID" width="100" />
        <ColumnDirective field="EmployeeID" headerText="Employee ID" customAttributes={{class: 'custom-css'}} width="100" textAlign="Right" />
        <ColumnDirective field="Freight" headerText="Freight" width="80" textAlign="Right" format="C2" />
        <ColumnDirective field="ShipCountry" headerText="Ship Country" width="100" />
      </ColumnsDirective>
    </GridComponent>
  </div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/customize-cell-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/customize-cell-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/customize-cell-cs2" %}

> Custom attributes can be used to customize any cell in the grid, including header and footer cells.

### Using methods

The Grid provides the following methods to customize the appearance of grid column headers and cells:

1. [getHeaderContent](https://ej2.syncfusion.com/react/documentation/api/grid#getheadercontent): The `getHeaderContent` method is used to customize column header appearance. The header element is accessed using the `querySelector` method, and styles are applied using the `style` property of the cell element.

2. [getCellFromIndex](https://ej2.syncfusion.com/react/documentation/api/grid#getcellfromindex): The `getCellFromIndex` method is used to customize the appearance of a specific cell in the grid by specifying the row and column index of the target cell.

The following example demonstrates the use of the [getColumnHeaderByIndex](https://ej2.syncfusion.com/react/documentation/api/grid#getcolumnheaderbyindex) and [getCellFromIndex](https://ej2.syncfusion.com/react/documentation/api/grid#getcellfromindex) methods to customize the appearance of the "CustomerID" column header and specific cell inside the [dataBound](https://ej2.syncfusion.com/react/documentation/api/grid#databound) event of the grid.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}

import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const dataBound = (() => {
    let header = grid.getHeaderContent().querySelector('.e-headercell');
    header.style.backgroundColor = 'red';
    header.style.color = 'white';
    let cell = grid.getCellFromIndex(1, 2);
    cell.style.background = '#f9920b';
    cell.style.color = 'white';
  });
  return (
    <div>
      <div style={{ padding: '40px 0 0 0' }}>
        <GridComponent dataSource={data} height={315} ref={g => grid = g} dataBound={dataBound}>
          <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right"/>
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
            <ColumnDirective field='Freight' headerText='Freight' width='100' textAlign="Right"/>
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='140' />
          </ColumnsDirective>
        </GridComponent></div></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const dataBound = (() => {
    let header = (grid as GridComponent).getHeaderContent().querySelector('.e-headercell');
    header.style.backgroundColor = 'red';
    header.style.color = 'white';
    let cell = (grid as GridComponent).getCellFromIndex(1, 2);
    cell.style.background = '#f9920b';
    cell.style.color = 'white';
  });
  return (
    <div>
      <div style={{ padding: '40px 0 0 0' }}>
        <GridComponent dataSource={data} height={315} ref={g => grid = g} dataBound={dataBound}>
          <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right"/>
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
            <ColumnDirective field='Freight' headerText='Freight' width='100' textAlign="Right"/>
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='140' />
          </ColumnsDirective>
        </GridComponent></div></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/customize-cell-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/customize-cell-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/customize-cell-cs3" %}

> Make sure to pass the correct row and column indices to [getCellFromIndex](https://ej2.syncfusion.com/react/documentation/api/grid#getcellfromindex) method, or else the appearance of the wrong cell might get customized.

## Clip mode

The clip mode feature is useful when grid cells contain long text or content that overflows the cell's width or height. It provides options to display overflow content by truncating it, displaying an ellipsis, or displaying an ellipsis with a tooltip. This feature is enabled by setting the [clipMode](https://ej2.syncfusion.com/react/documentation/api/grid/column#clipmode) property to one of the available options.

Three types of [clipMode](https://ej2.syncfusion.com/react/documentation/api/grid/column#clipmode) are available:

* **`Clip`**: Truncates the cell content when it overflows its area.
* **`Ellipsis`**: Displays ellipsis when the cell content overflows its area.
* **`EllipsisWithTooltip`**: Displays ellipsis when the cell content overflows its area, also it will display the tooltip while hover on ellipsis is applied. It also displays a tooltip when hover over the ellipsis.

The following example demonstrates, setting the [clipMode](https://ej2.syncfusion.com/react/documentation/api/grid/column#clipmode) property to `Clip` for the "Name of the Inventor" column, `Ellipsis` for the "Number of Patent Families" column, and `EllipsisWithTooltip` for the "Main Fields of Invention" column, on changing the dropdown value using the [change](https://ej2.syncfusion.com/react/documentation/api/drop-down-list#change) event of the DropDownList component.


{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}

import { ClipMode, ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent, ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { inventoryData } from './datasource';

function App() {
  let grid;
  const dropDownData = [
    { text: 'Ellipsis', value: 'Ellipsis' },
    { text: 'Clip', value: 'Clip' },
    { text: 'EllipsisWithTooltip', value: 'EllipsisWithTooltip' }
  ];
  const valueChange = ((args) => {
    grid.getColumnByField('Mainfieldsofinvention').clipMode = args.value ;
    grid.refreshColumns();

  })
  return (
    <div>
      <label style={{ padding: '30px 17px 0 0' }}> Change the clip mode: </label>
      <DropDownListComponent dataSource={dropDownData} index={0} width="100" change={valueChange}></DropDownListComponent>
      <GridComponent dataSource={inventoryData} height={315} ref={g => grid = g} allowPaging={true}>
        <ColumnsDirective>
          <ColumnDirective field='Inventor' headerText='Inventor' width='100' />
          <ColumnDirective field='NumberofPatentFamilies' headerText='Number of Patent Families' textAlign='Right' width='100' />
          <ColumnDirective field='Country' headerText='Country' width='100' />
          <ColumnDirective field='Mainfieldsofinvention' headerText='Main fields of invention' width='140' />
        </ColumnsDirective>
      </GridComponent></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}

import { ClipMode, ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent, ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { inventoryData } from './datasource';

function App() {
  let grid: GridComponent | null;
  const dropDownData: { [key: string]: Object; }[] = [
    { text: 'Ellipsis', value: 'Ellipsis' },
    { text: 'Clip', value: 'Clip' },
    { text: 'EllipsisWithTooltip', value: 'EllipsisWithTooltip' }
  ];
  const valueChange = ((args: ChangeEventArgs) => {
    (grid as GridComponent).getColumnByField('Mainfieldsofinvention').clipMode = args.value as ClipMode;
    (grid as GridComponent).refreshColumns();

  })
  return (
    <div>
      <label style={{ padding: '30px 17px 0 0' }}> Change the clip mode: </label>
      <DropDownListComponent dataSource={dropDownData} index={0} width="100" change={valueChange}></DropDownListComponent>
      <GridComponent dataSource={inventoryData} height={315} ref={g => grid = g} allowPaging={true}>
        <ColumnsDirective>
          <ColumnDirective field='Inventor' headerText='Inventor' width='100' />
          <ColumnDirective field='NumberofPatentFamilies' headerText='Number of Patent Families' textAlign='Right' width='100' />
          <ColumnDirective field='Country' headerText='Country' width='100' />
          <ColumnDirective field='Mainfieldsofinvention' headerText='Main fields of invention' width='140' />
        </ColumnsDirective>
      </GridComponent></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/autowrap-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/autowrap-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/autowrap-cs3" %}

> * By default, [clipMode](https://ej2.syncfusion.com/react/documentation/api/grid/column#clipmode) value is `Ellipsis`.
> * When the [width](https://ej2.syncfusion.com/react/documentation/api/grid/column#width) property is set for a column, the clip mode feature is automatically applied to that column if content exceeds the specified width.
> * The Clip mode should be used with caution, as it may result in important information being truncated. The `Ellipsis` or `EllipsisWithTooltip` modes are generally recommended instead.

## Tooltip

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid displays information about grid columns when the user hovers over them with the mouse.

### Render bootstrap tooltip in grid cells

The Grid component allows rendering "Bootstrap" tooltips in cells. To enable this feature, the "Bootstrap" link must be added. 

The sample code below demonstrates enabling a "Bootstrap" tooltip for the "CustomerID" field by using a `template` to customize the content of the corresponding grid cells.

Step 1: Run the following command to install the Bootstrap package using npm.

```bash
npm install react-bootstrap
npm install bootstrap   
```

Step 2: Import the following required files in the component.

```ts
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import 'bootstrap/dist/css/bootstrap.min.css';
```

Step 3: The following code demonstrates rendering "Bootstrap" tooltip for the "CustomerID" field with `template` on grid cells:

```ts
import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from './datasource';
const customerIDTemplate = (props:any) => {
  return (
    <div className="tooltip-container">
      <div className="col-md-2" style={textAlign:"right"}>
      <OverlayTrigger
        data-placement="left"
        overlay={<Tooltip id={`tooltip-${props.CustomerID}`}>{props.CustomerID}</Tooltip>}
      >
        <div>
          <i className="fas fa-pencil-alt"></i>
          {props.CustomerID}
        </div>
      </OverlayTrigger></div>
    </div>
  );
};
function App() {
  return (
    <div>
      <GridComponent dataSource={data} height={315}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right"/>
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' template={customerIDTemplate} />
          <ColumnDirective field='Freight' headerText='Freight' width='100' format='C' textAlign="Right"/>
          <ColumnDirective field='ShipCountry' headerText='Ship Country' width='140' />
        </ColumnsDirective>
      </GridComponent>
    </div>
  );
}
export default App;
```

![Bootstrap tooltip](./images/bootstrap-tooltip.gif)

> The Bootstrap link must be imported in the **App.tsx** file.

### Display custom tooltip for columns

The Grid provides a feature to display custom tooltips for its columns using the [EJ2 Tooltip](https://ej2.syncfusion.com/react/documentation/tooltip/getting-started) component. This allows providing additional information about columns when the user hovers over them.

To enable custom tooltips for columns in the grid, the Grid control is rendered inside the `Tooltip` component and the target is set as `.e-rowcell`. This displays the tooltip when hovering over grid cells.

The tooltip content for grid cells can be changed by using the following code in the [beforeRender](https://ej2.syncfusion.com/react/documentation/api/tooltip#beforerender) event.

```typescript
 const beforeRender = (args: TooltipEventArgs) => {
    if (args.target.classList.contains('e-rowcell')) {
        // event triggered before render the tooltip on target element.
        tooltip.content = 'This is value "' + args.target.innerText + '" ';
    }
  }

```

The following example demonstrates customizing the tooltip content for grid cells by using the [beforeRender](https://ej2.syncfusion.com/react/documentation/api/tooltip#beforerender) event of the `EJ2 Tooltip` component.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/custom-tooltip-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/custom-tooltip-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/custom-tooltip-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/custom-tooltip-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/custom-tooltip-cs1" %}

## Grid lines

The [gridLines](https://ej2.syncfusion.com/react/documentation/api/grid#gridlines) in a grid are used to separate cells with horizontal and vertical lines for better readability. Grid lines are enabled by setting the [gridLines](https://ej2.syncfusion.com/react/documentation/api/grid#gridlines) property to one of the following values:

| Modes | Actions |
|-------|---------|
| `Both` | Displays both the horizontal and vertical grid lines.|
| `None` | No grid lines are displayed.|
| `Horizontal` | Displays the horizontal grid lines only.|
| `Vertical` | Displays the vertical grid lines only.|
| `Default` | Displays grid lines based on the theme.|

The following example demonstrates setting the [gridLines](https://ej2.syncfusion.com/react/documentation/api/grid#gridlines) property based on changing the dropdown value using the [change](https://ej2.syncfusion.com/react/documentation/api/drop-down-list#change) event of the `DropDownList` component.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}

import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import React, { useState } from 'react';
import { inventoryData } from './datasource';

function App() {
  const [gridLine, setGridLine] = useState('Default');
  const dropDownData = [
    { text: 'Default', value: 'Default' },
    { text: 'Both', value: 'Both' },
    { text: 'Horizontal', value: 'Horizontal' },
    { text: 'Vertical', value: 'Vertical' },
    { text: 'None', value: 'None' }
  ];
  const valueChange = ((args) => {
    setGridLine(args.value);
  })
  return (
    <div>
      <label style={{ padding: '30px 17px 0 0' }}>Change the grid lines:</label>
      <DropDownListComponent dataSource={dropDownData} index={0} width="100" change={valueChange}></DropDownListComponent>
      <GridComponent dataSource={inventoryData} height={315} gridLines={gridLine}>
        <ColumnsDirective>
          <ColumnDirective field='Inventor' headerText='Inventor' width='100' />
          <ColumnDirective field='NumberofPatentFamilies' headerText='Number of Patent Families' textAlign='Right' width='100' />
          <ColumnDirective field='Country' headerText='Country' width='100' />
          <ColumnDirective field='Mainfieldsofinvention' headerText='Main fields of invention' width='140' />
        </ColumnsDirective>
      </GridComponent></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}

import { ColumnDirective, ColumnsDirective, GridComponent, GridLine } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent, ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';
import React, { useState } from 'react';
import { inventoryData } from './datasource';

function App() {
  const [gridLine, setGridLine] = useState<GridLine>('Default');
  const dropDownData: any = [
    { text: 'Default', value: 'Default' },
    { text: 'Both', value: 'Both' },
    { text: 'Horizontal', value: 'Horizontal' },
    { text: 'Vertical', value: 'Vertical' },
    { text: 'None', value: 'None' }
  ];
  const valueChange = ((args: ChangeEventArgs) => {
    setGridLine(args.value);
  })
  return (
    <div>
      <label style={{ padding: '30px 17px 0 0' }}>Change the grid lines:</label>
      <DropDownListComponent dataSource={dropDownData} index={0} width="100" change={valueChange}></DropDownListComponent>
      <GridComponent dataSource={inventoryData} height={315} gridLines={gridLine}>
        <ColumnsDirective>
          <ColumnDirective field='Inventor' headerText='Inventor' width='100' />
          <ColumnDirective field='NumberofPatentFamilies' headerText='Number of Patent Families' textAlign='Right' width='100' />
          <ColumnDirective field='Country' headerText='Country' width='100' />
          <ColumnDirective field='Mainfieldsofinvention' headerText='Main fields of invention' width='140' />
        </ColumnsDirective>
      </GridComponent></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/autowrap-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/autowrap-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/autowrap-cs2" %}

> By default, the grid renders with `Default` mode.

## See also

[How to customize the header cell styles using methods](./columns/column-headers#using-method)