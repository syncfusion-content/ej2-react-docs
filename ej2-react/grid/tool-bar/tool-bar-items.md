---
layout: post
title: React Grid - Toolbar Items | Syncfusion
description: Learn about toolbar items in Syncfusion React Grid (EJ2) including built-in items, custom items, and adding components to the toolbar.
control: Toolbar Items
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Toolbar items in React Grid Component

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid includes a customizable toolbar positioned above the grid for accessing various actions and functionalities. Both built-in and custom toolbar items can be added to meet specific application requirements.

## Built-in toolbar items

Built-in toolbar items in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component provide predefined actions to perform standard operations within the Grid. These items can be added by defining the [toolbar](https://ej2.syncfusion.com/react/documentation/api/grid#toolbar) property as a collection of built-in items. Each item is rendered as a button with an icon and text. The following table lists the built-in toolbar items and their respective actions.

| Built-in Toolbar Items | Actions |
|------------------------|---------|
| Add | Adds a new row to the Grid.|
| Edit | Enables editing mode for the selected row in the Grid.|
| Update | Saves the changes made during the editing mode.|
| Delete | Deletes the selected record from the Grid.|
| Cancel | Discards the changes made during the editing mode.|
| Search | Displays a search box to filter the Grid records.|
| Print | Prints the Grid content.|
| ColumnChooser | Displays options to choose column visibility.|
| PdfExport | Exports the Grid data to a PDF file.|
| ExcelExport | Exports the Grid data to an Excel file.|
| CsvExport | Exports the Grid data to a CSV file.|

The following example demonstrates enabling built-in toolbar items such as `Print` and `Search` in the grid.

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

### Show only icons in built-in toolbar items

To display only icons in the built-in toolbar items of the Grid, use CSS to hide the text portion of the buttons. Add the following CSS style to the application:

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

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component allows customization of the built-in toolbar items to meet specific requirements. This customization can include adding, removing, or modifying toolbar items, as well as handling custom actions when toolbar buttons are clicked.

Customization of built-in toolbar items is achieved using the [toolbarClick](https://ej2.syncfusion.com/react/documentation/api/grid#toolbarclick) event of the grid. This event is triggered when any toolbar button is clicked, allowing custom logic to be implemented.

The following example demonstrates customizing the toolbar by disabling and canceling the `Add` button functionality and showing a custom message when the `Add` button of toolbar is clicked.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}

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

{% endraw %}
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

Custom toolbar items in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid allow addition of personalized functionality to the toolbar. These items can be added by defining the [toolbar](https://ej2.syncfusion.com/react/documentation/api/grid#toolbar) property as a collection of [ItemModel](https://ej2.syncfusion.com/react/documentation/api/toolbar/itemModel) objects. These objects define the custom items and their corresponding actions. The actions for customized toolbar items are defined in the [toolbarClick](https://ej2.syncfusion.com/react/documentation/api/grid#toolbarclick) event.

By default, custom toolbar items are positioned on the "left" side of the toolbar. The position can be changed by using the [align](https://ej2.syncfusion.com/react/documentation/api/toolbar/itemModel#align) property of the `ItemModel`. The following example demonstrates applying the `align` property with the value "Right" for the "Collapse All" toolbar item.

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

## Both built-in and custom items in toolbar

The toolbar in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid supports a combination of built-in and custom toolbar items to provide standard and custom actions within the same toolbar.

To use both types of toolbar items, define the [toolbar](https://ej2.syncfusion.com/react/documentation/api/grid#toolbar) property of the Grid as an array that includes both built-in and custom items. Built-in items are specified as strings, while custom items are defined as objects with properties such as [text](https://ej2.syncfusion.com/react/documentation/api/toolbar/itemmodel#text), [prefixIcon](https://ej2.syncfusion.com/react/documentation/api/toolbar/itemmodel#prefixicon), and [id](https://ej2.syncfusion.com/react/documentation/api/toolbar/itemmodel#id) within the toolbar component.

The following example demonstrates both built-in and custom toolbar items in the grid. The built-in toolbar items include `Add`, `Edit`, `Delete`, `Update`, and `Cancel`, while the custom toolbar item is `Click`.

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

## Add custom components to the Grid toolbar using template

The Syncfusion React Grid provides the flexibility to customize its toolbar by embedding custom components using the [template](https://ej2.syncfusion.com/react/documentation/api/toolbar/itemModel#template) property of the [ItemModel](https://ej2.syncfusion.com/react/documentation/api/toolbar/itemModel). Custom UI elements such as buttons, dropdowns, or input controls can be added directly into the toolbar, alongside built-in actions like `Add`, `Edit`, and `Delete` to enhance user interaction and provide seamless integration with Grid operations.

In the following example, an [AutoComplete](https://ej2.syncfusion.com/react/documentation/auto-complete/getting-started) is defined as a custom toolbar item using the `template` property. This property is assigned a function that returns a JSX element. The `AutoComplete` is populated with unique "ShipCity" values from the Grid's data. When a value is selected from the `AutoComplete`, the Grid is filtered to show only the records that match the selected city. Once the Grid is rendered, the custom `AutoComplete` appears as part of the toolbar, allowing interaction with both standard and custom toolbar elements.

Additionally, the [change](https://ej2.syncfusion.com/react/documentation/api/auto-complete#change) event of the `AutoComplete` is used to trigger a search operation within the Grid. When a value is selected or typed, the event handler invokes the Grid's [search](https://ej2.syncfusion.com/react/documentation/api/grid#search) method, dynamically filtering the displayed records in the "ShipCity" column based on the input.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/toolbar-cs8/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/toolbar-cs8/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/toolbar-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/toolbar-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/toolbar-cs8" %} 

## Custom toolbar items in a specific position

Custom toolbar items in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid can be positioned in specific locations by modifying the default placement. This enables precise control of each custom toolbar item's positioning according to specific requirements and desired layout within the Grid.

By default, custom toolbar items in the Grid component are aligned on the left side of the toolbar. The position of custom toolbar items can be modified by utilizing the [align](https://ej2.syncfusion.com/react/documentation/api/toolbar/itemModel#align) property of the [ItemModel](https://ej2.syncfusion.com/react/documentation/api/toolbar/itemModel).

In the following sample, the "Collapse All" toolbar item is positioned on the "Right", the "Expand All" toolbar item is positioned on the "left", and the `Search` toolbar item is positioned at the "Center".

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
