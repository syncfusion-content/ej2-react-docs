---
layout: post
title: React Grid - Column Headers | Syncfusion
description: React Grid column headers support header templates, tooltips, multi-line layouts, and customization options for enhanced header appearance and interactions.
control: Headers 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Headers in React Grid component

Column headers in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid display the titles for each column, making it clear what data is shown. They provide context and make the grid easier to read and navigate. Headers can be customized by adjusting text alignment, applying templates, stacking multiple headers, or updating them dynamically, offering flexibility to design the grid as needed.

## Header text

In the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid, the [headerText](https://ej2.syncfusion.com/react/documentation/api/grid/column#headertext) property of the `ColumnDirective` defines the label shown in a column’s header; when this property is not set, the column automatically displays its [field](https://ej2.syncfusion.com/react/documentation/api/grid/column#field) value, so assigning header text provides a more descriptive label in place of the field name.


{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs29/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs29/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs29/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs29/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-cs29" %}

## Header template

The [headerTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/column#headertemplate) property provides full control over customizing column header cells. Instead of plain text, the header can render custom HTML elements or React components, such as icons, styled labels, or interactive elements, to create a richer and more engaging design.

The following example demonstrates custom elements rendered for the "Customer ID", "Freight", and "Order Date" column headers.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent} from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import React, {useState} from 'react';
import { data } from './datasource';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';

function App() {
    const dropDownData = ['Freight', 'Shipment', 'Cargo'];
    const [headerText, setHeaderText] = useState('Order Date');
    const customerIDTemplate = () => {
      return (<div>
        <span className="e-icon-userlogin e-icons employee"></span> Customer ID
      </div>);
    }
    const freightTemplate = () => {
      return (<div>
        <DropDownListComponent dataSource={dropDownData} index={0} width="140" />
      </div>);
    }
    const orderDateTemplate = () => {
        return (<div>
          <SwitchComponent change={onSwitchToggle} />
          <label style={{padding: "0px 0px 0px 20px"}}>{headerText}</label>
        </div>);
    }
    const onSwitchToggle = (args) =>{
        setHeaderText(args.checked ? 'Purchase Date' : 'Order Date');
    }
    return <GridComponent dataSource={data} height={315}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' headerTemplate={customerIDTemplate} width='150' />
        <ColumnDirective field='Freight' headerText='Freight' width='150' headerTemplate={freightTemplate} />
        <ColumnDirective field='OrderDate' headerText='Order Date' width='135' headerTemplate={orderDateTemplate} format='yMd' textAlign='Right' />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
      </ColumnsDirective>
    </GridComponent>
  
  };
  export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent} from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import React, {useState} from 'react';
import { data } from './datasource';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';

function App() {
    const dropDownData: string[] = ['Freight', 'Shipment', 'Cargo'];
    const [headerText, setHeaderText] = useState('Order Date');
    const customerIDTemplate = () => {
      return (<div>
        <span className="e-icon-userlogin e-icons employee"></span> Customer ID
      </div>);
    }
    const freightTemplate = () => {
      return (<div>
        <DropDownListComponent dataSource={dropDownData} index={0} width="140" />
      </div>);
    }
    const orderDateTemplate = () => {
        return (<div>
          <SwitchComponent change={onSwitchToggle} />
          <label style={{padding: "0px 0px 0px 20px"}}>{headerText}</label>
        </div>);
    }
    const onSwitchToggle = (args: any) =>{
        setHeaderText(args.checked ? 'Purchase Date' : 'Order Date');
    }
    return <GridComponent dataSource={data} height={315}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' headerTemplate={customerIDTemplate} width='150' />
        <ColumnDirective field='Freight' headerText='Freight' width='150' headerTemplate={freightTemplate} />
        <ColumnDirective field='OrderDate' headerText='Order Date' width='135' headerTemplate={orderDateTemplate} format='yMd' textAlign='Right' />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
      </ColumnsDirective>
    </GridComponent>
  
  };
  export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/header-template-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/header-template-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/header-template-cs1" %}

>* The `headerTemplate` property applies only to Grid columns that have a header element.
>* Any HTML or React component can be used in the header template to add functionality to the header element.

## Stacked header 

Stacked headers enable hierarchical organization of column headers by grouping related columns under parent headers. This feature is useful for complex data layouts where columns need logical grouping for better readability and organization. Stacked headers are implemented using the [ColumnDirective](https://ej2.syncfusion.com/documentation/api/grid/column#columns) property to define an array of column objects as sub-headers under a main header. The `headerText` property of each sub-header column sets the display text. The appearance of stacked header elements can be customized using the `headerTemplate` property, which accepts a template reference enabling definition of custom HTML elements or React components.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/header-template-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/header-template-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/header-template-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/header-template-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/header-template-cs2" %}

## Header text alignment

Header text alignment improves readability and visual organization of the grid. The [headerTextAlign](https://ej2.syncfusion.com/react/documentation/api/grid/column#headertextalign) property controls how text is positioned inside column headers. By default, header text is aligned to the left, but it can be changed to better match the data or design. Supported options are:

* `Left`: Aligns text to the left (default).
* `Center`: Aligns text to the center.
* `Right`: Aligns text to the right.
* `Justify`: Justifies header text.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const alignmentData = [
    { text: 'Left', value: 'Left' },
    { text: 'Right', value: 'Right' },
    { text: 'Center', value: 'Center' },
    { text: 'Justify', value: 'Justify' },
  ];
  const changeAlignment = ((args) => {
    grid.columns.forEach(col => {
      col.headerTextAlign = args.value;
    });
    grid.refreshHeader();
  })
  return (
    <div>
      <label style={{ padding: '30px 17px 0 0' }}>Align the text for columns :</label>
      <DropDownListComponent dataSource={alignmentData} index={0} width="100" change={changeAlignment}></DropDownListComponent>
      <div style={{ padding: '40px 0 0 0' }}>
        <GridComponent dataSource={data} height={315} ref={g => grid = g}>
          <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
            <ColumnDirective field='Freight' headerText='Freight' width='100' />
            <ColumnDirective field='OrderDate' headerText='Order Date' width='140' format='yMd'/>
          </ColumnsDirective>
        </GridComponent></div></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: Grid | null;
  const alignmentData: any = [
    { text: 'Left', value: 'Left' },
    { text: 'Right', value: 'Right' },
    { text: 'Center', value: 'Center' },
    { text: 'Justify', value: 'Justify' },
  ];
  const changeAlignment = ((args: any) => {
    (grid as any).columns.forEach((col: any) => {
      col.headerTextAlign = (args as any).value;
    });
    (grid as any).refreshHeader();
  })
  return (
    <div>
      <label style={{ padding: '30px 17px 0 0' }}>Align the text for columns :</label>
      <DropDownListComponent dataSource={alignmentData} index={0} width="100" change={changeAlignment}></DropDownListComponent>
      <div style={{ padding: '40px 0 0 0' }}>
        <GridComponent dataSource={data} height={315} ref={g => grid = g}>
          <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
            <ColumnDirective field='Freight' headerText='Freight' width='100' />
            <ColumnDirective field='OrderDate' headerText='Order Date' width='140' format='yMd' />
          </ColumnsDirective>
        </GridComponent></div></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs39/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs39/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-cs39" %}

>* The `headerTextAlign` property only affects header text alignment, not the content alignment. To align both header and content, use the [textAlign](https://ej2.syncfusion.com/react/documentation/api/grid/column#textalign) property.
>* The `headerTextAlign` property can also be used with the stacked header feature; it aligns header text in sub-headers as well.

## Header text wrapping

Header text wrapping enables proper display of lengthy column names or descriptive labels within defined column widths. When content exceeds boundary limits, automatic wrapping to multiple lines maintains readability and prevents text overflow. The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid supports configurable text wrapping with options to wrap headers only, content only, or both, optimizing space usage without sacrificing information clarity. To enable autowrap, set the `allowTextWrap` property to `true`. The auto wrap mode can be configured using the [textWrapSettings.wrapMode](https://ej2.syncfusion.com/react/documentation/api/grid/textWrapSettings#wrapmode) property.

Grid provides the below three options for configuring:

* `Both`: This is the default value for wrapMode. With this option, both the grid header text and content is wrapped.
* `Header`: With this option, only the grid header text is wrapped.
* `Content`: With this option, only the grid content is wrapped.

>* If a `ColumnDirective` width is not specified, then the Autowrap of columns will be adjusted with respect to the grid's width.
>* If a `ColumnDirective` header text contains no white space, the text may not be wrapped.
>* If the content of a cell contains HTML tags, the Autowrap functionality may not work as expected. In such cases, use the [headerTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/column#headertemplate) and [template](https://ej2.syncfusion.com/react/documentation/api/grid/column#template) properties of the column to customize the appearance of the header and cell content.

In the following example, the `textWrapSettings.wrapMode` property is set to `Header` to wrap only the grid header text to the next line.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, Grid, GridComponent, TextWrapSettingsModel} from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { inventoryData } from './datasource';

function App() {
  let grid;
  const wrapSettings = { wrapMode: 'Header' };
  const dropDownData = [
    { text: 'Header', value: 'Header' },
    { text: 'Both', value: 'Both' },
  ];
  const valueChange = ((args) => {
    grid.textWrapSettings.wrapMode = args.value;
  })
  return (
    <div>
      <label style={{ padding: '30px 17px 0 0' }}>Autowrap for header column :</label>
      <DropDownListComponent dataSource={dropDownData} index={0} width="100" change={valueChange}></DropDownListComponent>
      <div style={{ padding: '40px 0 0 0' }}>
        <GridComponent dataSource={inventoryData} height={315} ref={g => grid = g} allowPaging={true} allowTextWrap={true} textWrapSettings={wrapSettings}>
          <ColumnsDirective>
            <ColumnDirective field='Inventor' headerText='Inventor' width='100' />
            <ColumnDirective field='NumberofPatentFamilies' headerText='Number of Patent Families' width='100' />
            <ColumnDirective field='Country' headerText='Country' width='100' />
            <ColumnDirective field='Mainfieldsofinvention' headerText='Main fields of invention' width='140' />
          </ColumnsDirective>
        </GridComponent></div></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, Grid, GridComponent, TextWrapSettingsModel } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { inventoryData } from './datasource';

function App() {
  let grid: Grid | null;
  const wrapSettings: TextWrapSettingsModel = { wrapMode: 'Header' };
  const dropDownData: any = [
    { text: 'Header', value: 'Header' },
    { text: 'Both', value: 'Both' },
  ];
  const valueChange = ((args: any) => {
    (grid as any).textWrapSettings.wrapMode = args.value;
  })
  return (
    <div>
      <label style={{ padding: '30px 17px 0 0' }}>Autowrap for header column :</label>
      <DropDownListComponent dataSource={dropDownData} index={0} width="100" change={valueChange}></DropDownListComponent>
      <div style={{ padding: '40px 0 0 0' }}>
        <GridComponent dataSource={inventoryData} height={315} ref={g => grid = g} allowPaging={true} allowTextWrap={true} textWrapSettings={wrapSettings}>
          <ColumnsDirective>
            <ColumnDirective field='Inventor' headerText='Inventor' width='100' />
            <ColumnDirective field='NumberofPatentFamilies' headerText='Number of Patent Families' width='100' />
            <ColumnDirective field='Country' headerText='Country' width='100' />
            <ColumnDirective field='Mainfieldsofinvention' headerText='Main fields of invention' width='140' />
          </ColumnsDirective>
        </GridComponent></div></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/autowrap-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/autowrap-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/autowrap-cs4" %}

## Change header height

When the default header height is not sufficient to display content, it can be adjusted to fit the design requirements. This is especially useful when headers are customized with a header template that includes icons, images, or multi‑line text. Header height can be modified using CSS styles or dynamic methods, ensuring that all content is visible and the grid remains well‑organized.

**Using CSS:**

Use CSS to override the default height of the `.e-grid .e-headercell` class to change the height of the header.

```css
.e-grid .e-headercell {
  height: 130px;
}
```

**Using methods:**

To dynamically adjust the header height, use the [getHeaderContent](https://ej2.syncfusion.com/react/documentation/api/grid#getheadercontent) method to retrieve the header content element. Then use `querySelectorAll` to access all header cell elements with the class `e-headercell` and adjust their height via the style property.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs40/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs40/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs40/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs40/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-cs40" %}

>* The [getHeaderTable](https://ej2.syncfusion.com/react/documentation/api/grid#getheadertable) method can also be used to access the header table element for adjustment.
>* The header row height cannot be reduced below the default height of "42px" using the `e-columnheader` class.

## Change header text dynamically

Dynamic header modification is essential for interactive grids where header content needs to change based on input, runtime conditions, or business logic. The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component enables real-time modification of column header text through events or property accessors. This feature is particularly useful in scenarios such as localization, conditional labeling, or updating headers based on applied filters or grouping.

**Using event:**

The [headerCellInfo](https://ej2.syncfusion.com/react/documentation/api/grid#headercellinfo) event of the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid enables modification of header text dynamically. This event triggers for each header cell element rendered in the Grid. When the `headerCellInfo` event triggers, it provides a `HeaderCellInfoEventArgs` object containing the following properties:

* **cell**: The header cell being modified.
* **node**: The DOM element of the header cell being modified.

These properties enable access to and modification of the header text.

**Using methods:**

The Grid component provides several methods to change column header text dynamically:

| # | Method                          | Description                                                                                                           |
|---|---------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| 1 | [getColumnByField](https://ej2.syncfusion.com/react/documentation/api/grid#getcolumnbyfield)             | Returns the entire column object corresponding to a field name, including properties such as header text, width, and alignment. |
| 2 | [getColumnHeaderByField](https://ej2.syncfusion.com/react/documentation/api/grid#getcolumnheaderbyfield)        | Retrieves the header element of a column by its field name. Modify the `textContent` property to change header text. This method returns only the header element reference, not the column object. |
| 3 |  [getColumnIndexByField](https://ej2.syncfusion.com/documentation/api/grid#getcolumnindexbyfield)         | Retrieves the column index by field name. Use with `getColumnByIndex` to retrieve the column object and modify its `headerText` property. |
| 4 | [getColumnByUid](https://ej2.syncfusion.com/react/documentation/api/grid#getcolumnbyuid)               | Retrieves the column object by its unique identifier (UID). Modify the `headerText` property to change header text. |
| 5 | [getColumnHeaderByIndex](https://ej2.syncfusion.com/react/documentation/api/grid#getcolumnheaderbyindex)        | Retrieves the header element by its zero-based index. Modify the `textContent` property to change header text. |
| 6 | [getColumnIndexByUid](https://ej2.syncfusion.com/react/documentation/api/grid#getcolumnindexbyuid)          | Retrieves the column index by unique identifier. Use with `getColumnByIndex` to modify the `headerText` property. |
| 7 | [getColumnHeaderByUid](https://ej2.syncfusion.com/react/documentation/api/grid#getcolumnheaderbyuid)         | Retrieves the header element by its unique identifier. Modify the `textContent` property to change header text. If the column has only a template without a defined field, this method provides access to the header element. |



>* When header text is changed dynamically, the Grid must be refreshed by calling the [refreshHeader](https://ej2.syncfusion.com/react/documentation/api/grid#refreshheader) method to reflect the changes.
>* UIDs are automatically generated by the Grid component and may change when the grid is refreshed or updated.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { data } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';

function App() {
    let grid;
    let dropDown;
    let textBox;
    const field = { text: 'text', value: 'value' };
    const alignmentData= [
        { text: 'OrderID', value: 'OrderID' },
        { text: 'CustomerID', value: 'CustomerID' },
        { text: 'Freight', value: 'Freight' },
        { text: 'OrderDate', value: 'OrderDate' },
    ];

    const changeHeaderText = (() => {
        if (textBox.element.value.trim() !== '') {
            const column = grid.getColumnByField(dropDown.value);
            column.headerText = textBox.element.value;
            grid.refreshHeader();
        }
    })
    return (
        <div>
            <label style={{ padding: '10px 10px 26px 0' }}>Select column name  :</label>
            <DropDownListComponent dataSource={alignmentData} ref={d => dropDown = d} index={0} width="100" fields={field}></DropDownListComponent><br/>
            <label style={{ padding: '30px 17px 0 0' }}>Enter new header text :</label>
            <TextBoxComponent ref={t => textBox = t} placeholder="Enter new header text" width='200' />
            <label style={{ padding: '30px 17px 0 0' }}>Click the change button :</label>
            <ButtonComponent id="button" cssClass="e-outline" onClick={changeHeaderText}>Change</ButtonComponent>
            <div style={{ padding: '40px 0 0 0' }}>
                <GridComponent dataSource={data} height={315} ref={g => grid = g}>
                    <ColumnsDirective>
                        <ColumnDirective field='OrderID' headerText='Order ID' width='100' />
                        <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
                        <ColumnDirective field='Freight' headerText='Freight' format='C' width='80' />
                        <ColumnDirective field='OrderDate' headerText='Order Date' format='yMd' width='120' />
                    </ColumnsDirective>
                </GridComponent></div></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent, Column } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { data } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';

function App() {
    let grid: GridComponent | null;
    let dropDown: DropDownListComponent | null;
    let textBox: TextBoxComponent | null;
    const field: Object = { text: 'text', value: 'value' };
    const alignmentData: Object[] = [
        { text: 'OrderID', value: 'OrderID' },
        { text: 'CustomerID', value: 'CustomerID' },
        { text: 'Freight', value: 'Freight' },
        { text: 'OrderDate', value: 'OrderDate' },
    ];

    const changeHeaderText = (() => {
        if (textBox.element.value.trim() !== '') {
            const column: Column = (grid as GridComponent).getColumnByField((dropDown as DropDownListComponent).value);
            column.headerText = textBox.element.value;
            (grid as GridComponent).refreshHeader();
        }
    })
    return (
        <div>
            <label style={{ padding: '10px 10px 26px 0' }}>Select column name  :</label>
            <DropDownListComponent dataSource={alignmentData} ref={d => dropDown = d} index={0} width="100" fields={field}></DropDownListComponent><br/>
            <label style={{ padding: '30px 17px 0 0' }}>Enter new header text :</label>
            <TextBoxComponent ref={t => textBox = t} placeholder="Enter new header text" width='200' />
            <label style={{ padding: '30px 17px 0 0' }}>Click the change button :</label>
            <ButtonComponent id="button" cssClass="e-outline" onClick={changeHeaderText}>Change</ButtonComponent>
            <div style={{ padding: '40px 0 0 0' }}>
                <GridComponent dataSource={data} height={315} ref={g => grid = g}>
                    <ColumnsDirective>
                        <ColumnDirective field='OrderID' headerText='Order ID' width='100' />
                        <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
                        <ColumnDirective field='Freight' headerText='Freight' format='C' width='80' />
                        <ColumnDirective field='OrderDate' headerText='Order Date' format='yMd' width='120' />
                    </ColumnsDirective>
                </GridComponent></div></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs41/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs41/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-cs41" %}

**Conditional header text customization:**

The column `headerValueAccessor` property in Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid enables customization of column header cell text. This is useful in scenarios requiring alternate language display, specific formatting, or additional header information. This property triggers every time the header cell renders. This property accepts a callback function with two arguments:

* **field**: The current column field.
* **column**: The current column object.

>* Use `headerValueAccessor` only to modify header text; avoid DOM operations such as adding or manipulating elements. Use the [headerCellInfo](https://ej2.syncfusion.com/react/documentation/api/grid#headercellinfo) event for DOM-related customizations.
>* The callback function should return a string representing the new header text.
>* The [refreshHeader](https://ej2.syncfusion.com/react/documentation/api/grid#refreshheader) method can be used to refresh only the column header after dynamically changing the header content.
>* This property can be applied to individual columns or for all columns by adding it to the grid's properties.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnModel, ColumnsDirective, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { data } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';

function App() {
  let grid;
  let dropDown;
  let textBox;
  const field = { text: 'text', value: 'value' };
  const alignmentData = [
    { text: 'OrderID', value: 'OrderID' },
    { text: 'CustomerID', value: 'CustomerID' },
    { text: 'Freight', value: 'Freight' },
    { text: 'OrderDate', value: 'OrderDate' },
  ];

  const changeHeaderText = ((args) => {
    grid.refreshHeader();
  });

  const headerValueAccessor = ((field, columns) => {
    if (textBox && textBox.value && textBox.value.trim() !== '' && columns.field === dropDown.value) {
      return columns.headerText = textBox.value;
    }
  });

  return (
    <div>
      <label style={{ padding: '10px 10px 26px 0' }}>Select column name  :</label>
      <DropDownListComponent dataSource={alignmentData} ref={d => dropDown = d} index={0} width="100" fields={field}></DropDownListComponent><br/>
      <label style={{ padding: '30px 17px 0 0' }}>Enter new header text :</label>
      <TextBoxComponent ref={t => textBox = t} placeholder="Enter new header text" width='200' />
      <label style={{ padding: '30px 17px 0 0' }}>Click the change button :</label>
      <ButtonComponent id="button" cssClass="e-outline" onClick={changeHeaderText}>Change</ButtonComponent>
      <div style={{ padding: '40px 0 0 0' }}>
        <GridComponent dataSource={data} height={315} ref={g => grid = g} >
          <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
            <ColumnDirective field='Freight' headerText='Freight' format='C' width='80' />
            <ColumnDirective field='OrderDate' headerText='Order Date' headerValueAccessor={headerValueAccessor} format='yMd' width='120' />
          </ColumnsDirective>
        </GridComponent></div></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnModel, ColumnsDirective, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { data } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';

function App() {
  let grid: Grid | null;
  let dropDown: DropDownListComponent | null;
  let textBox: any;
  const field: Object = { text: 'text', value: 'value' };
  const alignmentData: any = [
    { text: 'OrderID', value: 'OrderID' },
    { text: 'CustomerID', value: 'CustomerID' },
    { text: 'Freight', value: 'Freight' },
    { text: 'OrderDate', value: 'OrderDate' },
  ];

  const changeHeaderText = ((args: any) => {
    (grid as any).refreshHeader();
  });

  const headerValueAccessor = ((field: string, columns: ColumnModel) => {
    if (textBox && textBox.value && textBox.value.trim() !== '' && columns.field === (dropDown as any).value) {
      return columns.headerText = textBox.value;
    }
  });

  return (
    <div>
      <label style={{ padding: '10px 10px 26px 0' }}>Select column name  :</label>
      <DropDownListComponent dataSource={alignmentData} ref={d => dropDown = d} index={0} width="100" fields={field}></DropDownListComponent><br/>
      <label style={{ padding: '30px 17px 0 0' }}>Enter new header text :</label>
      <TextBoxComponent ref={t => textBox = t} placeholder="Enter new header text" width='200' />
      <label style={{ padding: '30px 17px 0 0' }}>Click the change button :</label>
      <ButtonComponent id="button" cssClass="e-outline" onClick={changeHeaderText}>Change</ButtonComponent>
      <div style={{ padding: '40px 0 0 0' }}>
        <GridComponent dataSource={data} height={315} ref={g => grid = g} >
          <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
            <ColumnDirective field='Freight' headerText='Freight' format='C' width='80' />
            <ColumnDirective field='OrderDate' headerText='Order Date' headerValueAccessor={headerValueAccessor} format='yMd' width='120' />
          </ColumnsDirective>
        </GridComponent></div></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/change-valueaccessor-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/change-valueaccessor-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/change-valueaccessor-cs1" %}

**Changing the header text of all columns:**

To change header text for all columns, loop through the columns collection and set the `headerText` property for each column.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnModel, ColumnsDirective, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function App() {
  let grid;
  const headerTextMap = {
    'OrderID': 'Order ID',
    'CustomerID': 'Customer ID',
    'Freight': 'Freight Charge',
    'ShipCity': 'Ship To City'
  };

  const changeHeaderText = (() => {
    grid.columns.forEach((column) => {
      column.headerText = headerTextMap[column.field];
    });
    grid.refreshHeader();
  });

  return (
    <div>
      <ButtonComponent cssClass="e-success" onClick={changeHeaderText}>Change Header Text</ButtonComponent>
      <div style={{ padding: '40px 0 0 0' }}>
        <GridComponent dataSource={data} height={315} ref={g => grid = g} >
          <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='OrderID' width='100' />
            <ColumnDirective field='CustomerID' headerText='CustomerID' width='120' />
            <ColumnDirective field='Freight' headerText='Freight' format='C' width='80' />
            <ColumnDirective field='ShipCity' headerText='ShipCity' width='120' />
          </ColumnsDirective>
        </GridComponent></div></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnModel, ColumnsDirective, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function App() {
  let grid: Grid | null;
  const headerTextMap: { [key: string]: string } = {
    'OrderID': 'Order ID',
    'CustomerID': 'Customer ID',
    'Freight': 'Freight Charge',
    'ShipCity': 'Ship To City'
  };

  const changeHeaderText = (() => {
    (grid as any).columns.forEach((column: ColumnModel | any) => {
      column.headerText = headerTextMap[column.field as string];
    });
    (grid as any).refreshHeader();
  });

  return (
    <div>
      <ButtonComponent cssClass="e-success" onClick={changeHeaderText}>Change Header Text</ButtonComponent>
      <div style={{ padding: '40px 0 0 0' }}>
        <GridComponent dataSource={data} height={315} ref={g => grid = g} >
          <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='OrderID' width='100' />
            <ColumnDirective field='CustomerID' headerText='CustomerID' width='120' />
            <ColumnDirective field='Freight' headerText='Freight' format='C' width='80' />
            <ColumnDirective field='ShipCity' headerText='ShipCity' width='120' />
          </ColumnsDirective>
        </GridComponent></div></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/change-headerText-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/change-headerText-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/change-headerText-cs3" %}

## Change the orientation of header text

By default, column header text in the Grid is oriented horizontally. In data visualization scenarios—especially grids with many columns where horizontal headers consume excessive space—rotating the header text vertically, diagonally, or at a custom angle optimizes layout and enhances visual hierarchy and readability. This can be achieved by applying a custom CSS class to the header cell using the [customAttributes](https://ej2.syncfusion.com/react/documentation/api/grid/column#customattributes) property, then defining CSS transformations.

Follow these steps to change header text orientation in Grid:

**Step 1: Create a CSS class with orientation style for grid header cell**

Create a CSS class with the `transform` property to rotate header text "90" degrees. This class will be applied to the header cell using the `customAttributes` property.

```css
.orientationcss .e-headercelldiv {
    transform: rotate(90deg);
}
```

**Step 2: Add the custom CSS class to the grid column**

Add the custom CSS class to a column using the `customAttributes` property. For example, to add the "orientationcss" class to the "Freight" column:

```typescript
<ColumnDirective field='Freight' headerText='Freight' textAlign='Center' format='C2' customAttributes={customAttributes} width=80></ColumnDirective>
```

**Step 3: Resize the header cell height**

After adding the custom CSS class to a column, resize the header cell height to ensure the rotated header text displays fully using the following code:

```ts
const setHeaderHeight = () => {
  /** Obtain the width of the headerText content */
  const textWidth: number = (document.querySelector(".orientationcss > div") as HTMLElement).scrollWidth;
  const headerCell: NodeList = document.querySelectorAll(".e-headercell");
  for(let i: number = 0; i < headerCell.length; i++) {
    /** Assign the obtained textWidth as the height of the headerCell */
    ((headerCell as any).item(i)).style.height = textWidth + 'px';
  }
}
```

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/header-orientation-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/header-orientation-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/header-orientation-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/header-orientation-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/header-orientation-cs1" %}

## Custom tooltip for header

Tooltips in headers provide contextual information that helps understand the purpose or content of each column without cluttering the UI. Custom tooltips for headers display additional information when hovering over column headers in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid, particularly useful when space limitations prevent full descriptions in headers or when additional column metadata needs to be communicated.

Custom tooltips can be enabled using the [beforeRender](https://ej2.syncfusion.com/react/documentation/api/grid#beforeRender) event of the Grid component. This event triggers before each header cell renders, enabling addition of a custom tooltip using the [tooltip](https://ej2.syncfusion.com/react/documentation/tooltip/content) component.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/header-tooltip-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/header-tooltip-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/header-tooltip-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/header-tooltip-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/header-tooltip-cs1" %}

> The [headerCellInfo](https://ej2.syncfusion.com/react/documentation/api/grid#querycellinfo) event can also be used to customize the header tooltip. This event is triggered for each header cell after it is rendered.

## Customize header text styles

Header styling enables visual distinction and emphasizes important columns or data categories within the grid. Customizing header appearance through font, background color, and other styles meets specific design requirements and improves information hierarchy. The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component provides multiple approaches for header customization through CSS, properties, methods, or event-based styling.

**Using CSS:**

Styles can be applied to header cells using CSS selectors. The Grid assigns the `.e-headercell` class to each header cell element, which can be used to change the background color and text color of column headers.

```CSS
  .e-grid .e-headercell {
    background-color: #a2d6f4;
    color:rgb(3, 2, 2);
  }
```

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/header-style-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/header-style-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/header-style-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/header-style-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/header-style-cs1" %}

**Using property:** 

Column header appearance in Grid can be customized using the [customAttributes](https://ej2.syncfusion.com/react/documentation/api/grid/column#customattributes) property. This property accepts an object with name-value pairs to customize CSS properties for grid header cells. Multiple CSS properties can be set to the custom class using the `customAttributes` property.

To customize column headers, follow these steps:

Step 1: Define a CSS class specifying the desired styles for header cells.

```CSS
  .e-grid .e-headercell.customcss {
     background-color: rgb(43, 205, 226);
    color: black;
  }
```

Step 2: Set the `customAttributes` property of the column to an object containing the CSS class "customcss". This class will be applied to the column's header cell.

```ts
  {field="Freight" headerText="Freight" customAttributes={class: '.customcss'}}
```

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnModel, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    return (
        <div>
            <GridComponent dataSource={data} height={315}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='OrderID' width='100' customAttributes={{ class: 'customcss' }} />
                    <ColumnDirective field='CustomerID' headerText='CustomerID' width='120' />
                    <ColumnDirective field='Freight' headerText='Freight' format='C' width='80' customAttributes={{ class: 'customcss' }} />
                    <ColumnDirective field='ShipCity' headerText='ShipCity' width='120' />
                </ColumnsDirective>
            </GridComponent></div>)
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
    return (
        <div>
            <GridComponent dataSource={data} height={315}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='OrderID' width='100' customAttributes={{ class: 'customcss' }} />
                    <ColumnDirective field='CustomerID' headerText='CustomerID' width='120' />
                    <ColumnDirective field='Freight' headerText='Freight' format='C' width='80' customAttributes={{ class: 'customcss' }} />
                    <ColumnDirective field='ShipCity' headerText='ShipCity' width='120' />
                </ColumnsDirective>
            </GridComponent></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/header-style-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/header-style-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/header-style-cs2" %}

**Using methods:** 

Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid provides methods to customize column header appearance:

| # | Method | Description |
|---|--------|-------------|
| 1 | [getColumnHeaderByIndex](https://ej2.syncfusion.com/react/documentation/api/grid#getcolumnheaderbyindex) | Customizes a specific column header by specifying the column index. |
| 2 | [getColumnHeaderByField](https://ej2.syncfusion.com/react/documentation/api/grid#getcolumnheaderbyfield) | Retrieves the header element by field name to customize its appearance. |
| 3 | [getColumnHeaderByUid](https://ej2.syncfusion.com/react/documentation/api/grid#getcolumnheaderbyuid) | Retrieves the header element by unique ID to customize its appearance. |
| 4 | [getColumnIndexByField](https://ej2.syncfusion.com/react/documentation/api/grid#getcolumnindexbyfield) | Retrieves the column index by field name to access and customize the header element. |
| 5 | [getColumnIndexByUid](https://ej2.syncfusion.com/react/documentation/api/grid#getcolumnindexbyuid) | Retrieves the column index by unique ID to access and customize the header element. |

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/header-style-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/header-style-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/header-style-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/header-style-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/header-style-cs3" %}

>* The UID is automatically generated by the Grid component and may change whenever the grid is refreshed or updated.

**Using event:**

The [headerCellInfo](https://ej2.syncfusion.com/react/documentation/api/grid#querycellinfo) event of the grid enables customization of header appearance. This event triggers when each header cell renders in the grid and provides an object that contains information about the header cell. This object can be used to modify header column styles.

The following example demonstrates adding a `headerCellInfo` event handler to check if the current header column is the "Freight" field and apply the appropriate CSS class based on its value.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/header-style-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/header-style-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/header-style-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/header-style-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/header-style-cs4" %}

## Refresh header

Header refresh functionality enables synchronization between the visual display and underlying column definitions. Whenever column properties are programmatically modified (such as header text, width, or alignment), refreshing the header ensures the UI reflects all changes immediately. The [refreshHeader](https://ej2.syncfusion.com/react/documentation/api/grid#refreshheader) method provides a lightweight approach to update only the header section without reloading the entire grid.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function App() {
    let grid;
    const refreshHeader = ((args) => {
        const column = grid.getColumnByIndex(1);
        column.headerText = 'New Header Text'; // update the header text of the column object
        grid.refreshHeader(); // refresh the grid header
    });

    return (
        <div>
            <ButtonComponent onClick={refreshHeader}>Refresh Header</ButtonComponent>
            <div style={{ padding: '40px 0 0 0' }}>
                <GridComponent ref={g => grid = g} dataSource={data} height={315} >
                    <ColumnsDirective>
                        <ColumnDirective field='OrderID' headerText='OrderID' width='100' />
                        <ColumnDirective field='CustomerID' headerText='CustomerID' width='120' />
                        <ColumnDirective field='Freight' headerText='Freight' format='C' width='80' />
                        <ColumnDirective field='ShipCity' headerText='ShipCity' width='120' />
                    </ColumnsDirective>
                </GridComponent></div></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function App() {
    let grid: Grid | null;
    const refreshHeader = ((args: any) => {
        const column = (grid as any).getColumnByIndex(1);
        column.headerText = 'New Header Text'; // update the header text of the column object
        (grid as any).refreshHeader(); // refresh the grid header
    });

    return (
        <div>
            <ButtonComponent onClick={refreshHeader}>Refresh Header</ButtonComponent>
            <div style={{ padding: '40px 0 0 0' }}>
                <GridComponent ref={g => grid = g} dataSource={data} height={315} >
                    <ColumnsDirective>
                        <ColumnDirective field='OrderID' headerText='OrderID' width='100' />
                        <ColumnDirective field='CustomerID' headerText='CustomerID' width='120' />
                        <ColumnDirective field='Freight' headerText='Freight' format='C' width='80' />
                        <ColumnDirective field='ShipCity' headerText='ShipCity' width='120' />
                    </ColumnsDirective>
                </GridComponent></div></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/refresh-header-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/refresh-header-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/refresh-header-cs1" %}

> The `refreshHeader` method updates only the grid header, not the entire grid. To refresh the entire grid, use the `refresh` method instead.

## Get header element 

Accessing header elements programmatically is necessary for advanced customizations, styling, or interaction handling that go beyond built-in configuration options. The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid provides multiple methods to retrieve specific header elements by various identifiers, enabling direct DOM manipulation or reading header metadata.

| # | Method | Description | Example |
|---|--------|-------------|---------|
| 1 | [getHeaderContent](https://ej2.syncfusion.com/react/documentation/api/grid#getheadercontent) | Returns the header div element of the Grid, providing access to the entire header content. | `const headerElement = grid.getHeaderContent();` |
| 2 | [getHeaderTable](https://ej2.syncfusion.com/react/documentation/api/grid#getheadertable) | Returns the header table element of the Grid, providing access only to the header table. | `const headerTableElement = grid.getHeaderTable();` |
| 3 | [getColumnHeaderByUid](https://ej2.syncfusion.com/react/documentation/api/grid#getcolumnindexbyuid) | Returns the column header element by its unique identifier. | `const columnHeaderElement = grid.getColumnHeaderByUid("e-grid2");` |
| 4 | [getColumnHeaderByIndex](https://ej2.syncfusion.com/react/documentation/api/grid#getcolumnheaderbyindex) | Returns the column header element by its index. | `const columnHeaderElement = grid.getColumnHeaderByIndex(0);` |
| 5 | [getColumnHeaderByField](https://ej2.syncfusion.com/react/documentation/api/grid#getcolumnheaderbyfield) | Returns the column header element by its field name. | `const columnHeaderElement = grid.getColumnHeaderByField("OrderID");` |

> The UID is automatically generated by the Grid component and may change whenever the grid is refreshed or updated.