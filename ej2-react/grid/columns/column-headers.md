---
layout: post
title: Headers in React Grid component | Syncfusion
description: Learn here all about Headers in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Headers 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Headers in React Grid component

## Header text

By default, the header text of a column in Grid is displayed from the column's [field](https://ej2.syncfusion.com/react/documentation/api/grid/column/#field) value. However, you can easily override the default header title and provide a custom header text for the column using the [headerText](https://ej2.syncfusion.com/react/documentation/api/grid/column/#headertext) property. 

To enable the `headerText` property, you simply need to define it in the **ColumnDirective** element. The following example demonstrates how to enable header text for a  Grid column.

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

>* The `headerText` property is optional, and if it is not defined, then the corresponding column's field value is set as header text for that column.  
>* You can also use the [headerTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/column/#headertemplate) property to apply custom HTML content to the header cell.

## Header template

The [headerTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/column/#headertemplate) property is used to customize the header element of a Grid column. With this property, you can render custom HTML elements or React components to the header element. This feature allows you to add more functionality to the header, such as sorting or filtering.

In this demo, the custom element is rendered for both **CustomerID** and **OrderDate** column headers.

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

>* The `headerTemplate` property is only applicable to Grid columns that have a header element.
>* You can use any HTML or React component in the header template to add additional functionality to the header element.

## Stacked header 

In Grid, you can group multiple levels of column headers by stacking the Grid columns. This feature allows you to organize the Grid columns in a more structured and understandable way. This can be achieved by setting the [ColumnDirective](https://ej2.syncfusion.com/documentation/api/grid/column/#columns) property. Within this property, you can define an array of column objects to group together as sub-headers under a main header. You can define the `headerText` property of each sub-header column to set the text for that sub-header.

You can customize the appearance of the stacked header elements by using the `headerTemplate` property. This property accepts an template reference, which allows you to define custom HTML elements or React components to the header element. Here's an example of how to use stacked headers with a custom `headerTemplate` in Syncfusion<sup style="font-size:70%">&reg;</sup> Grid.

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

## Align the text of header text

You can horizontally align the text in column headers of the Grid component using the [headerTextAlign](https://ej2.syncfusion.com/react/documentation/api/grid/column/#headertextalign) property. By default, the text is aligned to the left, but you can change the alignment by setting the value of the `headerTextAlign` property to one of the following options:

* **Left**: Aligns the text to the left (default).
* **Center**: Aligns the text to the center.
* **Right**: Aligns the text to the right.
* **Justify**: Header text is justified.

Here is an example of using the `headerTextAlign` property to align the text of a Grid column header:

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

>* The `headerTextAlign` property only changes the alignment of the text in the column header, and not the content of the column. If you want to align both the column header and content, you can use the [textAlign](https://ej2.syncfusion.com/react/documentation/api/grid/column/#textalign) property.
>* You can also use the `headerTextAlign` property with the stacked header feature in Syncfusion<sup style="font-size:70%">&reg;</sup> Grid. The property will align the header text in the sub-headers as well.

## Autowrap the header text

The autowrap allows the cell content of the grid to wrap to the next line when it exceeds the boundary of the specified cell width. The cell content wrapping works based on the position of white space between words. To support the Autowrap functionality in Syncfusion<sup style="font-size:70%">&reg;</sup> Grid, you should set the appropriate [width](https://ej2.syncfusion.com/react/documentation/api/grid/column/#width) for the columns. The column width defines the maximum width of a column and helps to wrap the content automatically.

To enable autowrap, set the `allowTextWrap` property to **true**. You can also configure the auto wrap mode by setting the [textWrapSettings.wrapMode](https://ej2.syncfusion.com/react/documentation/api/grid/textWrapSettings/#wrapmode) property.

Grid provides the below three options for configuring:

* **Both**: This is the default value for wrapMode. With this option, both the grid header text and content is wrapped.
* **Header**: With this option, only the grid header text is wrapped.
* **Content**: With this option, only the grid content is wrapped.

>* If a ColumnDirective width is not specified, then the Autowrap of columns will be adjusted with respect to the grid's width.
>* If a ColumnDirective's header text contains no white space, the text may not be wrapped.
>* If the content of a cell contains HTML tags, the Autowrap functionality may not work as expected. In such cases, you can use the [headerTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/column/#headertemplate) and [template](https://ej2.syncfusion.com/react/documentation/api/grid/column/#template) properties of the column to customize the appearance of the header and cell content.

In the example below, the `textWrapSettings.wrapMode` property is set to **Header** only the grid header text is wrap to the next line.
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

## Change the height of header

Changing the height of the header can be useful in cases where the default height is not sufficient to display the header content cell. For example, if you have a header with a lot of text or if you want to add an image to the header, you may need to increase the height of the header to accommodate the content.This can be easily achieved by changing the height of the header using CSS or by dynamically adjusting the height using a methods.

**Using css**

You can use CSS to override the default height of the **.e-grid .e-headercell** class to change the height of the header. Here is an example code snippet:

```css
.e-grid .e-headercell {
  height: 130px;
}
```

**Using methods**

To change the height of the header dynamically, you can use the [getHeaderContent](https://ej2.syncfusion.com/react/documentation/api/grid#getheadercontent) method to get the header content element of the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid. Then, you can use the **querySelectorAll** method to get all the header cell elements with the class **e-headercell**. Finally, you can loop through each header cell element and set its style property to adjust the height.

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

>* You can also use the [getHeaderTable](https://ej2.syncfusion.com/react/documentation/api/grid#getheadertable) method to get the table element of the header, and then adjust the height.
>* You cannot change the height of row below the default height of 42px using the **e-columnheader** class.

## Change header text dynamically

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component provides a way to modify the header text of a corresponding column in real-time based on events or other events. This feature can be useful in various scenarios, such as displaying a custom header text for a specific column or updating the header text dynamically based on input. By allowing for dynamic changes to the header text, the Grid provides a more flexible and customizable experience.

**Using Event**

To modify the header text of a corresponding column dynamically, you can use the [headerCellInfo](https://ej2.syncfusion.com/react/documentation/api/grid/#headercellinfo) event provided by the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid. This event is triggered for each header cell element rendered in the Grid.

When the `headerCellInfo` event is triggered, it provides a **HeaderCellInfoEventArgs** object as a parameter. This object contains the following properties:

* **cell**: Defines the header cell that is being modified.
* **node**: Defines the DOM element of the header cell that is being modified.

You can use these properties to access and modify the header text of the corresponding column. Once the header text is modified, you can refresh the Grid to reflect the changes by calling the [refreshHeader](https://ej2.syncfusion.com/documentation/api/grid#refreshheader) method of the Grid.

**Using method**

The Grid component provides several methods that allow you to change the column header text dynamically. Here are some of the methods you can use:

1. [getColumnByField](https://ej2.syncfusion.com/react/documentation/api/grid/#getcolumnbyfield): This method takes a field name as a parameter and returns the entire column object that corresponds to that field name, including properties such as headerText, width, and alignment. You can use this method to modify any aspect of the column.

2.	[getColumnHeaderByField](https://ej2.syncfusion.com/react/documentation/api/grid/#getcolumnheaderbyfield): Retrieves the header element of a column based on its field name. You can modify the **textContent** property of the header element to change the header text. This method does not return a reference to the column object itself, only to the header element.

3.	[getColumnIndexByField](https://ej2.syncfusion.com/documentation/api/grid/#getcolumnindexbyfield): Retrieves the index of a column based on its field name. You can then use the `getColumnByIndex` method to retrieve the column object and modify its `headerText` property to change the header text.

4.	[getColumnByUid](https://ej2.syncfusion.com/react/documentation/api/grid/#getcolumnbyuid): Retrieves the column object based on its unique identifier (UID). You can modify the `headerText` property of the column object to change the header text.

5.	[getColumnHeaderByIndex](https://ej2.syncfusion.com/react/documentation/api/grid/#getcolumnheaderbyindex): Retrieves the header element of a column based on its zero-based index. You can modify the **textContent** property of the header element to change the header text. This method does not return a reference to the column object itself, only to the header element.

6.	[getColumnIndexByUid](https://ej2.syncfusion.com/react/documentation/api/grid/#getcolumnindexbyuid): Retrieves the index of a column based on its unique identifier (UID). You can then use the `getColumnByIndex` method to retrieve the column object and modify its `headerText` property to change the header text.

7.	[getColumnHeaderByUid](https://ej2.syncfusion.com/react/documentation/api/grid/#getcolumnheaderbyuid): Retrieves the header element of a column based on its unique identifier (UID). You can modify the **textContent** property of the  header element to change the header text. This method does not return a reference to the column object itself, only to the header element. If you only have an `template` for the column header, and the column itself is not defined with a `field` , then you can use the `getColumnHeaderByUid` method to get a reference to the header element and modify its text content to change the header text.

>* When you change the header text dynamically, make sure to **refresh** the Grid to reflect the changes by calling the [refreshHeader](https://ej2.syncfusion.com/react/documentation/api/grid/#refreshheader) method.
>* The UID is automatically generated by the Grid component and may change whenever the grid is refreshed or updated.

Here is an example of how to change the header text of a column using the `getColumnByField` method:

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

**Changing header text using headerValueAccessor property**

The `headerValueAccessor` property in Syncfusion<sup style="font-size:70%">&reg;</sup> Grid allows you to customize the text of a column header cell, which can be useful in scenarios where you want to change the text to display it in a different language, format or add additional information to the header. This property is triggered every time the header cell is rendered.

To enable the `headerValueAccessor` property, you need to set the [headerValueAccessor](https://ej2.syncfusion.com/react/documentation/api/grid/headervalueaccessor/) property of the corresponding column. This property accepts a callback function that takes two arguments:

  * **field**: Represents the current field of the column.
  * **column**: Represents the current column object.

>* The `headerValueAccessor` property should only be used to change the text of the header and not to perform any DOM-oriented operations such as adding or manipulating DOM elements in the header. In such cases, you should use the [headerCellInfo](https://ej2.syncfusion.com/react/documentation/api/grid/#headercellinfo) event instead.
>* The `headerValueAccessor` property is triggered every time the header cell is rendered or refreshed.
>* The callback function defined for the `headerValueAccessor` property should return a string that represents the new text of the column header.
>* If you only need to refresh the column header, you can dynamically change the header content using the [refreshHeader](https://ej2.syncfusion.com/react/documentation/api/grid/#refreshheader) method.
>* You can use this property for individual columns or for all columns by adding it to the grid's properties.
  
Here's an example of how to use the `headerValueAccessor` property to change the header text of a column:

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

**Changing the header text of all columns**

If you want to change the header text of all columns in the grid, you can loop through the Columns collection of the grid and set the `headerText` property for each column. Here is an example:

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

By default, the text in the column headers of the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid control is oriented horizontally. However, in some cases, you may want to change the orientation of the header text to vertical, diagonal, or at a custom angle. This can be achieved by adding a custom CSS class to the column header cell using the [customAttributes](https://ej2.syncfusion.com/react/documentation/api/grid/column/#customattributes) property of the Grid columns.

Follow the below steps to change the orientation of the header text in Grid:

**Step 1**: **Create a CSS class with orientation style for grid header cell**

To `rotate` the header text, you can create a CSS class with the `transform` property that rotates the header text 90 degrees. This class will be added to the header cell using the `customAttributes` property.

```css
.orientationcss .e-headercelldiv {
    transform: rotate(90deg);
}
```

**Step 2**: **Add the custom CSS class to the grid column**

Once you have created the CSS class, you can add it to the particular column by using the `customAttributes` property. This property allows you to add any custom attribute to the grid column.

For example, to add the orientationcss class to the Freight column, you can use the following code:

```typescript
<ColumnDirective field='Freight' headerText='Freight' textAlign='Center' format='C2' customAttributes={customAttributes} width=80></ColumnDirective>
```

**Step 3**: **Resize the header cell height**

After adding the custom CSS class to a column, you need to resize the header cell height so that the rotated header text is fully visible. You can do this by using the following code:

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

Custom tooltips for headers provide additional information when hovering over a column header in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid. This can be useful in situations where there is not enough space to display all of the information related to a column, or when there is additional context that may be helpful.

To enable custom tooltips for headers, you can use the [beforeRender](https://ej2.syncfusion.com/react/documentation/api/grid/#beforeRender) event of the Grid component. This event is triggered for each header cell before it is rendered, allowing you to add a custom tooltip to the header cell using [tooltip](https://ej2.syncfusion.com/react/documentation/tooltip/content) component.

Here's an example of how to use the `beforeRender` event to add a custom tooltip to a header cell:

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

> * The [headerCellInfo](https://ej2.syncfusion.com/react/documentation/api/grid/#querycellinfo) event can also be used to customize the header tooltip. This event is triggered for each header cell after it is rendered.

## Customize header text styles 

Customizing the grid header styles allows you to modify the appearance of the column header in the Grid control to meet your design requirements. You can customize the font, background color, and other styles of the header cells. To customize the header styles in the grid, you can use CSS, properties, methods, or event support provided by the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component.

### Using CSS

You can apply styles to the header cells using CSS selectors. The Grid provides a class name for each header cell element, which you can use to apply styles to that specific header cell. The **.e-headercell** class can be used to change the background color and text color of the column header.

```CSS
  .e-grid .e-headercell {
    background-color: #a2d6f4;
    color:rgb(3, 2, 2);
  }
```
Here's an example that demonstrates how to customize the appearance of a specific column header in the Grid using **className**.

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

### Using property 

You can customize the appearance of the column headers in Grid using the [customAttributes](https://ej2.syncfusion.com/react/documentation/api/grid/column/#customattributes) property. The `customAttributes` property takes an object with the name-value pair to customize the CSS properties for grid header cells. You can also set multiple CSS properties to the custom class using the customAttributes property.

To customize the header of a column, you can follow the steps below:

Step 1: Define a CSS class that specifies the styles you want to apply to the header cell of the column. For example, to change the background color and text color of the header cell, define a CSS class like this:

  ```CSS
    .e-grid .e-headercell.customcss {
       background-color: rgb(43, 205, 226);
      color: black;
    }

  ```

Step 2: Set the **customAttributes** property of the desired column to an object that contains the CSS class **customcss**. This CSS class will be applied to the header cell of the specified column in the Grid.

  ```ts
    {field="Freight" headerText="Freight" customAttributes={class: '.customcss'}}
  ```

The following example demonstrates how to customize the appearance of the **OrderID** and **Freight** columns using custom attributes.

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

### Using method 

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid provides methods to customize the appearance of the grid columns header.

1. [getColumnHeaderByIndex](https://ej2.syncfusion.com/react/documentation/api/grid/#getcolumnheaderbyindex): The method is used to customize the appearance of a specific column header in the grid by specifying the index of the column for which you want to customize the header.

2. [getColumnHeaderByField](https://ej2.syncfusion.com/react/documentation/api/grid/#getcolumnheaderbyfield): This method is used to retrieve the header element of a specific column by its field name. You can use the retrieved element to customize the appearance of the header element.
3. [getColumnHeaderByUid](https://ej2.syncfusion.com/react/documentation/api/grid/#getcolumnheaderbyuid): This method is used to retrieve the header element of a specific column by its unique ID. You can use the retrieved element to customize the appearance of the header element.

 4. [getColumnIndexByField](https://ej2.syncfusion.com/react/documentation/api/grid/#getcolumnindexbyfield):This method is used to retrieve the index of a specific column by its field name. You can use the retrieved index to access the header element and customize its appearance.

 5. [getColumnIndexByUid](https://ej2.syncfusion.com/react/documentation/api/grid/#getcolumnindexbyuid): This method is used to retrieve the index of a specific column by its unique ID. You can use the retrieved index to access the header element and customize its appearance.

Here's an example of how to use these methods to change the style of a specific column header:

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

### Using event

To customize the appearance of the grid header, you can handle the [headerCellInfo](https://ej2.syncfusion.com/react/documentation/api/grid/#querycellinfo) event of the grid. This event is triggered when each header cell is rendered in the grid, and provides an object that contains information about the header cell. You can use this object to modify the styles of the header column.

The following example demonstrates how to add a `headerCellInfo` event handler to the grid. In the event handler, checked whether the current header column is **Freight** field and then applied the appropriate CSS class to the cell based on its value.

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

## How to refresh header 

The refresh header feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid allows you to update the header section of the grid whenever changes are made to the grid's columns. This feature is useful when you want to reflect changes in the header immediately, such as modifying the column header text, width, or alignment.

To use the refresh header feature, you can call the [refreshHeader](https://ej2.syncfusion.com/react/documentation/api/grid/#refreshheader) method of the Grid component. This method updates the grid header with the latest changes made to the columns.

The following example demonstrates how to use the `refreshHeader` method to update the grid header:

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

>* The `refreshHeader` method updates only the grid header and not the entire grid.
>* If you want to refresh the entire grid, you can use the `refresh` method instead.

## How to get header element 

To get the header element in a Syncfusion<sup style="font-size:70%">&reg;</sup> Grid, you can use one of the following methods:

1. [getHeaderContent](https://ej2.syncfusion.com/react/documentation/api/grid/#getheadercontent): This method returns the header div element of the Grid. You can use this method to access the entire header content of the Grid.

    ```ts
    const headerElement = grid.getHeaderContent();    
    ```
2. [getHeaderTable](https://ej2.syncfusion.com/react/documentation/api/grid/#getheadertable): This method returns the header table element of the Grid. You can use this method to access only the header table of the Grid.

   ```ts
    const headerTableElement = grid.getHeaderTable();
   ```

3. [getColumnHeaderByUid](https://ej2.syncfusion.com/react/documentation/api/grid/#getcolumnindexbyuid): This method returns the column header element by its unique identifier.

   ```ts
    const columnHeaderElement = grid.getColumnHeaderByUid("e-grid2");
   ```

4. [getColumnHeaderByIndex](https://ej2.syncfusion.com/react/documentation/api/grid/#getcolumnheaderbyindex): This method returns the column header element by its index.

   ```ts
    const columnHeaderElement = grid.getColumnHeaderByIndex(0);
   ```
5. [getColumnHeaderByField](https://ej2.syncfusion.com/react/documentation/api/grid/#getcolumnheaderbyfield): This method returns the column header element by its field name.

   ```ts
    const columnHeaderElement = grid.getColumnHeaderByField("OrderID"); 
   ```

>* The UID is automatically generated by the Grid component and may change whenever the grid is refreshed or updated.