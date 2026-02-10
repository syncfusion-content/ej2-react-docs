---
layout: post
title: React Grid - Custom Toolbar | Syncfusion
description: Learn about custom toolbar in Syncfusion React Grid (EJ2) to create a customized toolbar layout and functionality using toolbarTemplate property.
control: Custom Toolbar
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Custom Toolbar in React Grid Component

Custom toolbar in Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid enables the creation of a customized toolbar layout and functionality to match specific application requirements. This is achieved by utilizing the [toolbarTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#toolbartemplate) property, which provides comprehensive customization options for the toolbar layout and styling. Define a custom template for the toolbar and handle the actions of the toolbar items in the [clicked](https://ej2.syncfusion.com/react/documentation/api/toolbar/index-default#clicked) event.

The following example demonstrates rendering the custom toolbar `toolbarTemplate` property.
 
{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/toolbar-template-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/toolbar-template-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/toolbar-template-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/toolbar-template-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/toolbar-template-cs1" %}

## Render image with text in custom toolbar

Rendering an image with text in custom toolbar in Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid enables easy display of an image along with text in the toolbar of the Grid. This feature enhances the visual presentation of the Grid, providing additional context and improving the overall experience.

The following example demonstrates rendering an image in the Grid toolbar using `toolbarTemplate` property. 

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/toolbar-template-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/toolbar-template-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/toolbar-template-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/toolbar-template-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/toolbar-template-cs2" %}

> The styles and layout of the image and text in the custom toolbar can be further customized to suit specific design requirements.

## Render DropDownList in custom toolbar

Rendering a DropDownList in custom toolbar in Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid extends the functionality of the custom toolbar by incorporating a [DropDownList](https://ej2.syncfusion.com/react/documentation/drop-down-list/getting-started) component, allowing various actions to be performed within the Grid based on the selected items.

This can be achieved by utilizing the `toolbarTemplate` property. The example below demonstrates rendering the `DropDownList` component in the custom toolbar, and its [change](https://ej2.syncfusion.com/react/documentation/api/drop-down-list#change) event is bound to the "onChange" method to handle the custom actions.

In the `onChange` method, the text of the selected item is checked to determine the appropriate action. For example, if "Update" is chosen, the [endEdit](https://ej2.syncfusion.com/react/documentation/api/grid#endedit) method is called to exit the edit mode. If "Edit" is selected, the selected record is passed to the [startEdit](https://ej2.syncfusion.com/react/documentation/api/grid#startedit) method to initiate the edit mode dynamically. Similarly, if "Delete" is picked, the selected record is passed to the [deleteRecord](https://ej2.syncfusion.com/react/documentation/api/grid#deleterecord) method to remove it from the grid.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Toolbar, Edit } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

function App() {
    let grid;
    let dropDown;
    const placeholder = 'Select a value'
    const editSettings = { allowAdding: true, allowDeleting: true, allowEditing: true };
    const dropDownData = [{ text: 'Edit' }, { text: 'Delete' }, { text: 'Update' }];
    const toolbarTemplate = () => {
        return (
            <div>
                <label style={{ padding: "10px 10px 26px 0" }}>Change the value:</label>
                <DropDownListComponent ref={d => dropDown = d} width={250} dataSource={dropDownData} change={onChange} placeholder={placeholder}></DropDownListComponent>
            </div>
        )
    }
    const onChange = (args) => {
        const selectedRow = grid.getSelectedRecords()[0];
        if (args.itemData.text === 'Update') {
            grid.endEdit();
        }
        if (args.itemData.text === 'Edit') {
            grid.startEdit();
        }
        if (args.itemData.text === 'Delete') {
            grid.deleteRecord(selectedRow);
        }
        dropDown.placeholder = args.itemData.text;

    }
    return (<GridComponent dataSource={data} editSettings={editSettings} toolbarTemplate={toolbarTemplate} ref={g => grid = g} height={240}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
            <ColumnDirective field='ShipCity' headerText='Ship City' width='100' />
            <ColumnDirective field='ShipName' headerText='ShipName' width='100' />
        </ColumnsDirective>
        <Inject services={[Toolbar, Edit]} />
    </GridComponent>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, EditSettingsModel, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Toolbar, Edit } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

function App() {
  let grid: GridComponent | null;
  let dropDown: DropDownListComponent | null;
  const placeholder = 'Select a value'
  const editSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
  const dropDownData = [{ text: 'Edit' }, { text: 'Delete' }, { text: 'Update' }];
  const toolbarTemplate = () => {
    return (
      <div>
        <label style={{ padding: "10px 10px 26px 0" }}>Change the value:</label>
        <DropDownListComponent ref={d => dropDown = d} width={250} dataSource={dropDownData} change={onChange} placeholder={placeholder}></DropDownListComponent>
      </div>
    )
  }
  const onChange = (args: ChangeEventArgs) => {
    const selectedRow = (grid as GridComponent).getSelectedRecords()[0];
    if (args.itemData.text === 'Update') {
      (grid as GridComponent).endEdit();
    }
    if (args.itemData.text === 'Edit') {
      (grid as GridComponent).startEdit();
    }
    if (args.itemData.text === 'Delete') {
      (grid as GridComponent).deleteRecord(selectedRow);
    }
    (dropDown as DropDownListComponent).placeholder = args.itemData.text;

  }
  return (<GridComponent dataSource={data} editSettings={editSettings} toolbarTemplate={toolbarTemplate} ref={g => grid = g} height={240}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
      <ColumnDirective field='ShipCity' headerText='Ship City' width='100' />
      <ColumnDirective field='ShipName' headerText='ShipName' width='100' />
    </ColumnsDirective>
    <Inject services={[Toolbar, Edit]} />
  </GridComponent>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/toolbar-template-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/toolbar-template-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/toolbar-template-cs3" %}

## Render custom components using the toolbar template

Rendering custom components using the toolbar template in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid provides flexibility to enhance the toolbar with custom buttons, dropdowns, input fields, icons, or any other desired UI elements. Event handlers can be bound and interactions handled within the template to enable specific actions or behaviors associated with the added components or elements.

To render custom components or elements within the toolbar, use the `toolbarTemplate` property. This allows the inclusion of other components, such as a [Button](https://ej2.syncfusion.com/react/documentation/button/getting-started), and enables specific grid actions based on the button click. For example, when the "ExcelExport" button is clicked, the [excelExport](https://ej2.syncfusion.com/react/documentation/api/grid#excelexport) method is called to export the grid to Excel. Similarly, when the "PdfExport" button is clicked, the [pdfExport](https://ej2.syncfusion.com/react/documentation/api/grid#pdfexport) method is called to export the grid to PDF format. Likewise, when the "Print" button is clicked, the [print](https://ej2.syncfusion.com/react/documentation/api/grid#print) method is triggered to print the grid.

The following example demonstrates rendering the `Button` component in the toolbar using `toolbarTemplate` property and performing grid action based on the corresponding button click.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/toolbar-template-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/toolbar-template-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/toolbar-template-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/toolbar-template-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/toolbar-template-cs4" %}
