---
layout: post
title: Tool bar in React Grid component | Syncfusion
description: Learn here all about Tool bar in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Tool bar 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Toolbar in React Grid component

The toolbar in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component offers several general use cases to enhance data manipulation and overall experience. Actions such as adding, editing, and deleting records within the grid can be performed, providing efficient data manipulation capabilities. The toolbar also facilitates data export and import functionality, allowing you to generate downloadable files in formats like Excel, CSV, or PDF. 

To enable the toolbar functionality, you need to inject the **Toolbar** module in the grid. This service provides the necessary methods to interact with the toolbar items. The toolbar can be customized with built-in toolbar items or custom toolbar items using the [toolbar](https://ej2.syncfusion.com/react/documentation/api/grid/#toolbar) property. The `toolbar` property accepts an array of strings representing the built-in toolbar items or an array of [ItemModel](https://ej2.syncfusion.com/react/documentation/api/toolbar/itemModel/) objects for custom toolbar items.

The following example demonstrates how to enable toolbar items in the grid.

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

## Enable or disable toolbar items

Enabling or disabling toolbar items dynamically in Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid is to provide control over the availability of specific functionality based on application logic. This feature allows you to customize the toolbar based on various conditions or individuals interactions. 

You can enable or disable toolbar items dynamically by using the [enableToolbarItems](https://ej2.syncfusion.com/react/documentation/api/grid/#enabletoolbaritems) method. This method allows you to control the availability of specific toolbar items based on your application logic.

In the following example, the [EJ2 Toggle Switch Button component](https://ej2.syncfusion.com/react/documentation/switch/getting-started) is added to enable and disable the toolbar items using `enableToolbarItems` method. When the switch is toggled, the [change](https://ej2.syncfusion.com/react/documentation/api/switch/#change) event is triggered and the toolbar items are updated accordingly.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Group, Toolbar, GroupSettingsModel, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';

function App() {
    let grid;
    const groupSettings = { columns: ['CustomerID'] };
    const toolbar = ['Expand', 'Collapse'];
    const toolbarClick = (args) => {
        if (args.item.id === 'Grid_Collapse') {
            grid.groupModule.collapseAll();
        }
        if (args.item.id === 'Grid_Expand') {
            grid.groupModule.expandAll();
        }
    }

    const onChange = (args) => {
        grid.toolbarModule.enableItems(['Grid_Collapse', 'Grid_Expand'], args.checked); // Enable or Disable toolbar items.
    }
    return (<div>
        <label style={{ padding: "30px 17px 0 0" }}> Enable or disable toolbar items </label>
        <SwitchComponent change={onChange}></SwitchComponent>
        <GridComponent id="Grid" dataSource={data} ref={g => grid = g} allowGrouping={true} groupSettings={groupSettings} toolbar={toolbar} toolbarClick={toolbarClick}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
                <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
                <ColumnDirective field='ShipName' headerText='ShipName' width='150' />
            </ColumnsDirective>
            <Inject services={[Group, Toolbar]} />
        </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Group, Toolbar, GroupSettingsModel, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { ChangeEventArgs, SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ClickEventArgs } from '@syncfusion/ej2-react-navigations';

function App() {
  let grid: GridComponent | null;
  const groupSettings: GroupSettingsModel = { columns: ['CustomerID'] };
  const toolbar: ToolbarItems[] = ['Expand', 'Collapse'];
  const toolbarClick = (args: ClickEventArgs) => {
    if (args.item.id === 'Grid_Collapse') {
      (grid as GridComponent).groupModule.collapseAll();
    }
    if (args.item.id === 'Grid_Expand') {
      (grid as GridComponent).groupModule.expandAll();
    }
  }

  const onChange = (args: ChangeEventArgs) => {
    (grid as GridComponent).toolbarModule.enableItems(['Grid_Collapse', 'Grid_Expand'], !args.checked); // Enable or Disable toolbar items.
  }
  return (<div>
    <label style={{ padding: "30px 17px 0 0" }}> Enable or disable toolbar items </label>
    <SwitchComponent change={onChange}></SwitchComponent>
    <GridComponent id="Grid" dataSource={data} ref={g => grid = g} allowGrouping={true} groupSettings={groupSettings} toolbar={toolbar} toolbarClick={toolbarClick}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
        <ColumnDirective field='ShipName' headerText='ShipName' width='150' />
      </ColumnsDirective>
      <Inject services={[Group, Toolbar]} />
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/toolbar-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/toolbar-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/toolbar-cs5" %}

## Add toolbar at the bottom of grid

By adding the toolbar at the bottom of the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid, important actions and functionality remain consistently visible and easily accessible, providing easy access to actions and operations without the need for scrolling.

To add the toolbar at the bottom of the Grid, you can utilize the [created](https://ej2.syncfusion.com/react/documentation/api/grid/#created) event. By handling this event, you can dynamically insert the toolbar items at the desired position in the grid layout.

The following example shows how to add the toolbar items at the bootom using `created` event of the grid.
 
{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/toolbar-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/toolbar-cs6/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/toolbar-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/toolbar-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/toolbar-cs6" %}

## Customize toolbar buttons using CSS

Customizing toolbar buttons in Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid using CSS involves modifying the appearance of built-in toolbar buttons by applying CSS styles. This provides a flexible and customizable way to enhance the visual presentation of the toolbar and create a cohesive interface.

The appearance of the built-in toolbar buttons can be modified by applying the following CSS styles.

```css
.e-grid .e-toolbar .e-tbar-btn .e-icons,
.e-grid .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn {
    background: #add8e6;   
}
```

The following example demonstrates how to change the background color of the `Add`, `Edit`, `Delete`, `Update` and `Cancel` toolbar buttons by applying CSS styles

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/toolbar-cs7/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/toolbar-cs7/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/toolbar-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/toolbar-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/toolbar-cs7" %}

## See also

* [Toolbar Component](https://ej2.syncfusion.com/react/documentation/toolbar/getting-started)