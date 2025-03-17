---
layout: post
title: Tool bar items in React Grid component | Syncfusion
description: Learn here all about Tool bar items in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Tool bar items 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Toolbar items in React Grid component

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid offers a flexible toolbar that enables the addition of custom toolbar items or modification of existing ones. This customizable toolbar is positioned above the grid, providing a convenient way to access various actions and functionalities

## Built-in toolbar items

Built-in toolbar items in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component involves utilizing pre-defined actions to perform standard operations within the Grid.

These items can be added by defining the [toolbar](https://ej2.syncfusion.com/react/documentation/api/grid/#toolbar) property as a collection of built-in items. Each item is rendered as a button with an icon and text. The following table lists the built-in toolbar items and their respective actions.

| Built-in Toolbar Items | Actions |
|------------------------|---------|
| Add | Adds a new row to the Grid.|
| Edit | Enables editing mode for the selected row in the Grid.|
| Update | Saves the changes made during the editing mode.|
| Delete | Deletes the selected record from the Grid.|
| Cancel | Discards the changes made during the editing mode.|
| Search | Displays a search box to filter the Grid records.|
| Print | Print the Grid content.|
| ColumnChooser | Choose the column's visibility.|
| PdfExport | Exports the Grid data to a PDF file.|
| ExcelExport | Exports the Grid data to an Excel file.|
| CsvExport | Exports the Grid data to a CSV file.|

The following example demonstrates how to enable built-in toolbar items such as **Print** and **Search** in the grid.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/toolbar-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/toolbar-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/toolbar-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/toolbar-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/toolbar-cs1" %}

> The [toolbar](https://ej2.syncfusion.com/react/documentation/api/grid/#toolbar) has options to define both built-in and custom toolbar items.

### Show only icons in built-in toolbar items

Showing only icons in the built-in toolbar items of the Grid involves customizing the appearance of the toolbar to display icons without text.

To display only icons in the built-in toolbar items of the Grid, you can use CSS to hide the text portion of the buttons using the following CSS style.

```css
.e-grid .e-toolbar .e-tbar-btn-text, 
.e-grid .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn-text {
    display: none;   
}
```

This is demonstrated in the following sample:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/toolbaricon-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/toolbaricon-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/toolbaricon-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/toolbaricon-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/toolbaricon-cs1" %}

### Customize the built-in toolbar items

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component allows you to customize the built-in toolbar items to meet your specific requirements. This can include adding, removing, or modifying toolbar items, as well as handling custom actions when toolbar buttons are clicked.

To customize the built-in toolbar items, you can use the [toolbarClick](https://ej2.syncfusion.com/react/documentation/api/grid/#toolbarclick) event of the grid.

The following example demonstrate how to customize the toolbar by disabling and canceling the **Add** button functionlity and showing a custom message when the **Add** button of toolbar is clicked.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
{% endraw %}
import { ColumnDirective, ColumnsDirective, Edit, GridComponent, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';
function App() {
    let grid;
    const [message, setMessage] = useState('');
    function toolbarClick(args) {
        if (args.item.text === 'Add') { 
            args.cancel = true;
            const newRecord = {
                OrderID: 10247,
                CustomerID: 'TOMSP',
                ShipName: 'Hanari Carnes',
                ShipCity: 'Lyon',
            };
            grid.addRecord(newRecord);
            setMessage('The default adding action is cancelled, and a new record is added using the addRecord method.');
        }
        else{
            setMessage('');
        }
    }
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true };
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    return (
    <div>    
        <div style={{marginLeft:"180px"}}><p style={{color:"red"}} id="message">{message}</p></div>
        <GridComponent ref={g=> grid = g} dataSource={data} editSettings={editOptions} toolbar={toolbarOptions} toolbarClick={toolbarClick} height={270}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
                <ColumnDirective field='ShipCity' headerText='Ship City' width='100' />
                <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
            </ColumnsDirective>
            <Inject services={[Toolbar, Edit]} />
        </GridComponent>
    </div>);
}
export default App;

{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}


import { ColumnDirective, ColumnsDirective, EditSettingsModel, Edit, GridComponent, Inject, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { data } from './datasource';

function App() {
    let grid: GridComponent | null;
    const [message, setMessage] = useState('');
    const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
    const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    function toolbarClick(args:ClickEventArgs) {
        if (args.item.text === 'Add') { 
            args.cancel = true;
            const newRecord = {
                OrderID: 10247,
                CustomerID: 'TOMSP',
                ShipName: 'Hanari Carnes',
                ShipCity: 'Lyon',
            };
            (grid as GridComponent).addRecord(newRecord);
            setMessage('The default adding action is cancelled, and a new record is added using the addRecord method.');
        }
        else{
            setMessage('');
        }
    }
    return (
    <div> 
        <div style={{marginLeft:"180px"}}><p style={{color:"red"}} id="message">{message}</p></div>
        <GridComponent ref={g=> grid = g} dataSource={data} editSettings={editOptions} toolbar={toolbarOptions} toolbarClick={toolbarClick} height={270}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
                <ColumnDirective field='ShipCity' headerText='Ship City' width='100' />
                <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
            </ColumnsDirective>
            <Inject services={[Toolbar, Edit]} />
        </GridComponent>
    </div>
    )
}
export default App;

{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/toolbar-built/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/toolbar-built/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/toolbar-built" %}

## Custom toolbar items

Adding custom toolbar items to the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid involves incorporating personalized functionality into the toolbar.

Custom toolbar items can be added to the Grid component by defining the [toolbar](https://ej2.syncfusion.com/react/documentation/api/grid/#toolbar) property as a collection of [ItemModel](https://ej2.syncfusion.com/react/documentation/api/toolbar/itemModel) objects. These objects define the custom items and their corresponding actions. The actions for the customized toolbar items are defined in the [toolbarClick](https://ej2.syncfusion.com/react/documentation/api/grid/#toolbarclick) event.

By default, custom toolbar items are positioned on the **left** side of the toolbar. However, you can change the position by using the [align](https://ej2.syncfusion.com/react/documentation/api/toolbar/itemModel/#align) property of the `ItemModel`. The following example demonstrates how to apply the `align` property with the value **Right** for the **Collapse All** toolbar item.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/toolbar-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/toolbar-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/toolbar-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/toolbar-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/toolbar-cs2" %}

> * The [toolbar](https://ej2.syncfusion.com/react/documentation/api/grid/#toolbar) has options to define both built-in and custom toolbar items.
> * If a toolbar item does not match with built-in items, it will be treated as custom toolbar item.

## Both built-in and custom items in toolbar

Built-in and custom items in a toolbar within the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid provides the flexibility to create a customized toolbar with a combination of standard actions and custom actions.

To use both types of toolbar items, you can define the [toolbar](https://ej2.syncfusion.com/react/documentation/api/grid/#toolbar) property of the Grid as an array that includes both built-in and custom items. The built-in items are specified as strings, while the custom items are defined as objects with properties such as [text](https://helpej2.syncfusion.com/react/documentation/api/toolbar/itemDirective/#text), [prefixIcon](https://helpej2.syncfusion.com/react/documentation/api/toolbar/itemDirective/#prefixicon), and [id](https://helpej2.syncfusion.com/react/documentation/api/toolbar/itemDirective/#id) within the toolbar component.

The following example demonstrates, how to use both built-in and custom toolbar items in the grid. The built-in toolbar items includes **Add**, **Edit**, **Delete**, **Update**, and **Cancel**, while the custom toolbar item is **Click**.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Toolbar, Edit } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';

function App() {
    const [message, setMessage] = useState('');
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true };
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel',
        { text: 'Click', tooltipText: 'Click', prefixIcon: 'e-expand', id: 'Click' }
    ];
    const clickHandler = (args) => {
        if (args.item.id === 'Click') {
            setMessage("Custom Toolbar Clicked");
        }
    }
    return (<div>
        <div style={{ marginLeft: "180px" }}><p style={{ color: 'red' }}>{message}</p></div>
        <GridComponent dataSource={data} toolbar={toolbarOptions}
            toolbarClick={clickHandler} editSettings={editOptions} height={240}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
                <ColumnDirective field='ShipCity' headerText='Ship City' width='100' />
                <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
            </ColumnsDirective>
            <Inject services={[Toolbar, Edit]} />
        </GridComponent></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, EditSettingsModel, GridComponent, Inject, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { ClickEventArgs } from '@syncfusion/ej2-react-navigations';
import { Toolbar, Edit } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';

function App() {
  const [message, setMessage] = useState('');
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel',
    { text: 'Click', tooltipText: 'Click', prefixIcon: 'e-expand', id: 'Click' }
  ];
  const clickHandler = (args: ClickEventArgs) => {
    if (args.item.id === 'Click') {
      setMessage("Custom Toolbar Clicked");
    }
  }
  return (<div>
    <div style={{ marginLeft: "180px" }}><p style={{ color: 'red' }}>{message}</p></div>
    <GridComponent dataSource={data} toolbar={toolbarOptions}
      toolbarClick={clickHandler} editSettings={editOptions} height={240}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='100' />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
      </ColumnsDirective>
      <Inject services={[Toolbar, Edit]} />
    </GridComponent></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/toolbar-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/toolbar-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/toolbar-cs3" %}

## Custom toolbar items in a specific position

Customizing the position of a custom toolbar within the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid involves modifying the default placement of the custom toolbar items. This enables you to precisely control the positioning of each custom toolbar item according to your specific requirements and desired layout within the Grid.

By default, custom toolbar items in Grid component are aligned on the left side of the toolbar. However, you have the ability to modify the position of the custom toolbar items by utilizing the [align](https://ej2.syncfusion.com/react/documentation/api/toolbar/itemModel) property of the [ItemModel](https://ej2.syncfusion.com/react/documentation/api/toolbar/itemModel).

In the following sample, the **Collapse All** toolbar item is positioned on the **Right**, the **Expand All** toolbar item is positioned on the **Left**, and the **Search** toolbar item is positioned at the **Center**.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/toolbar-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/toolbar-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/toolbar-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/toolbar-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/toolbar-cs4" %}