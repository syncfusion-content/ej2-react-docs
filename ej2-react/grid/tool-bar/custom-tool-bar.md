---
layout: post
title: Custom tool bar in React Grid component | Syncfusion
description: Learn here all about Custom tool bar in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Custom tool bar
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Custom toolbar in React Grid component

Custom toolbar in Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid allows you to create a distinctive toolbar layout, style, and functionality that aligns with the specific needs of your application, providing a personalized experience within the Grid component.

This can be achieved by utilizing the `toolbarTemplate` property, which offers extensive customization options for the toolbar. You can define a custom template for the toolbar and handle the actions of the toolbar items in the **clicked** event.

The following example demonstrates, how to render the custom toolbar using `toolbarTemplate`
 
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

Render an image with text in custom toolbar in Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid allows easily render an image along with text in the toolbar of the Grid. This feature enhances the visual presentation of the Grid, providing additional context and improving the overall experience.

The following example demonstrates how to render an image in the toolbar of the grid using `template`.  

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

> You can further customize the styles and layout of the image and text in the custom toolbar to suit your specific design requirements.

## Render DropDownList in custom toolbar

Render DropDownList in custom toolbar in Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid enables you to extend the functionality of the custom toolbar by incorporating a [DropDownList](https://ej2.syncfusion.com/react/documentation/drop-down-list/getting-started) component, allowing you to perform various actions within the Grid based on their selections.

This can be achieved by utilizing the `template`. The example below demonstrates how to render the **DropDownList** component in the custom toolbar, where the toolbar template includes the its [change](https://ej2.syncfusion.com/react/documentation/api/drop-down-list#change) event is bound to the **onChange** method.

In the **onChange** method, the text of the selected item is checked to determine the appropriate action. For example, if **Update** is chosen, the [endEdit](https://ej2.syncfusion.com/react/documentation/api/grid#endedit) method is called to exit the edit mode. If **Edit** is selected, the selected record is passed to the [startEdit](https://ej2.syncfusion.com/react/documentation/api/grid#startedit) method to initiate the edit mode dynamically. Similarly, if **Delete** is picked, the selected record is passed to the [deleteRecord](https://ej2.syncfusion.com/react/documentation/api/grid#deleterecord) method to remove it from the grid.

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

## Render a component or element using the toolbar template

Rendering a component or element using the toolbar template in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid allows you to extend the capabilities of the grid toolbar by incorporating custom components or elements. This provides flexibility to enhance the toolbar with custom buttons, dropdowns, input fields, icons, or any other desired UI elements. You can bind event handlers or handle interactions within the template to enable specific actions or behaviors associated with the added components or elements.

To render custom components or elements within the toolbar, use the `template` directive. This allows you to include other components, such as a [Button](https://ej2.syncfusion.com/react/documentation/button/getting-started), and perform specific grid actions based on the button click. For example, when the **ExcelExport** button is clicked, the [excelExport](https://ej2.syncfusion.com/react/documentation/api/grid/#excelexport) method is called to export the grid to Excel. Similarly, when the **PdfExport** button is clicked, the [pdfExport](https://ej2.syncfusion.com/react/documentation/api/grid/#pdfexport) method is called to export the grid to PDF format.Likewise, when the **Print** button is clicked, the [print](https://ej2.syncfusion.com/react/documentation/api/grid/#print) method will triggered to print the grid.

The following example demonstrates how to render a **Button** component in the toolbar using `template` and perform grid action based on the respected button click.

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