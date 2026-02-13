---
layout: post
title: React Grid - Scrolling | Syncfusion
description: Learn here all about Scrolling in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Scrolling 
documentation: ug
domainurl: ##DomainURL##
---

# Scrolling in React Grid Component

The scrolling feature in the React Grid component enables seamless navigation through content extending beyond the visible grid area. Scrollbars automatically appear when content exceeds the grid dimensions configured via the [height](https://ej2.syncfusion.com/react/documentation/api/grid#height) and [width](https://ej2.syncfusion.com/react/documentation/api/grid#width) properties.

Scrollbar behavior:

* **Vertical scrollbar**: Appears when total row height exceeds the grid element height.
* **Horizontal scrollbar**: Appears when total column width exceeds the grid element width.
* **Default dimensions**: Both `height` and `width` default to "auto".

## Set width and height

The Grid dimension configuration enables precise control over scrollbar display and grid size. Use pixel values with the [width](https://ej2.syncfusion.com/react/documentation/api/grid#width) and [height](https://ej2.syncfusion.com/react/documentation/api/grid#height) properties to define exact dimensions.

In the following example, the scrollbar is enabled, and the grid's `height` is set to "315" pixels, while the `width` is set to "400" pixels:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/scrolling-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/scrolling-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/scrolling-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/scrolling-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/scrolling-cs4" %}

## Responsive with parent container

Responsive grid sizing enables dynamic adjustment to available space. The [width](https://ej2.syncfusion.com/react/documentation/api/grid#width) and [height](https://ej2.syncfusion.com/react/documentation/api/grid#height) properties accept "100%" values to fill the parent container.

Parent element configuration is required when setting `height` to "100%". The parent container must explicitly define a height value for the Grid's responsive layout to function correctly.

In the following example, the parent container has explicit height and width set, and the Grid container's height and width are both set to "100%":

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  return (<div style={{ height: '500px', width: '600px' }}>
    <GridComponent dataSource={data} height='100%' width='100%'>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='OrderID' width='120' textAlign='Right' />
        <ColumnDirective field='CustomerID' headerText='CustomerID' width='150' />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format='C2' />
        <ColumnDirective field='ShipAddress' headerText='ShipAddress' width='150' />
      </ColumnsDirective>
    </GridComponent>
  </div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  return (<div style={{ height: '500px', width: '600px' }}>
    <GridComponent dataSource={data} height='100%' width='100%'>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='OrderID' width='120' textAlign='Right' />
        <ColumnDirective field='CustomerID' headerText='CustomerID' width='150' />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format='C2' />
        <ColumnDirective field='ShipAddress' headerText='ShipAddress' width='150' />
      </ColumnsDirective>
    </GridComponent>
  </div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/scrolling-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/scrolling-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/scrolling-cs5" %}

## Sticky header configuration

Sticky header configuration keeps column headers visible during vertical scrolling. The [enableStickyHeader](https://ej2.syncfusion.com/react/documentation/api/grid#enablestickyheader) property enables this behavior when set to `true`.

The following demo enables sticky header behavior during parent container scrolling.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const onChange = (args) => {
    grid.enableStickyHeader = args.checked;
  }
  return (<div>
    <label style={{ padding: "30px 20px 0 0" }}>Enable/Disable Sticky Header </label>
    <SwitchComponent change={onChange}></SwitchComponent>
    <GridComponent ref={g => grid = g} dataSource={data} >
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='OrderID' width='120' textAlign='Right' />
        <ColumnDirective field='CustomerID' headerText='CustomerID' width='150' />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format='C2' />
        <ColumnDirective field='ShipAddress' headerText='ShipAddress' width='150' />
      </ColumnsDirective>
    </GridComponent>
  </div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ChangeEventArgs, SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const onChange = (args: ChangeEventArgs) => {
    (grid as GridComponent).enableStickyHeader = args.checked;
  }
  return (<div>
    <label style={{ padding: "30px 20px 0 0" }}>Enable/Disable Sticky Header </label>
    <SwitchComponent change={onChange}></SwitchComponent>
    <GridComponent ref={g => grid = g} dataSource={data} >
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='OrderID' width='120' textAlign='Right' />
        <ColumnDirective field='CustomerID' headerText='CustomerID' width='150' />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format='C2' />
        <ColumnDirective field='ShipAddress' headerText='ShipAddress' width='150' />
      </ColumnsDirective>
    </GridComponent>
  </div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/scrolling-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/scrolling-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/scrolling-cs6" %}

## Auto-scroll to selected row

Auto-scroll functionality automatically displays selected rows in view. The [rowSelected](https://ej2.syncfusion.com/react/documentation/api/grid#rowselected) event triggers scroll positioning when navigating large datasets.

The following example demonstrates auto-scroll implementation using the `rowSelected` event:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const dropDownData = [
    { text: 'Select count' },
    { text: '10', value: '10' },
    { text: '20', value: '20' },
    { text: '30', value: '30' },
    { text: '80', value: '80' },
    { text: '100', value: '100' },
    { text: '200', value: '200' },
    { text: '232', value: '232' },
    { text: '300', value: '300' },
    { text: '500', value: '500' },
    { text: '800', value: '800' },
    { text: '820', value: '850' },
    { text: '920', value: '920' },
    { text: '2020', value: '2020' },
    { text: '3000', value: '3000' },
    { text: '4000', value: '4000' },
    { text: '4999', value: '4999' }

  ];
  const onChange = (args) => {
    grid.selectionModule.selectRow(parseInt((args.value), 10));
  }
  const rowSelected = () => {
    const rowHeight = grid.getRows()[grid.getSelectedRowIndexes()[0]].scrollHeight;
    grid.getContent().children[0].scrollTop = rowHeight * grid.getSelectedRowIndexes()[0];
  }
  return (<div>
    <label style={{ padding: "30px 20px 0 0" }} > Select row index :</label>
    <DropDownListComponent index={0} width={200} dataSource={dropDownData} change={onChange}></DropDownListComponent>
    <GridComponent dataSource={data} height="315" width="100%"
      rowSelected={rowSelected} ref={g => grid = g}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='OrderID' width='120' textAlign='Right' />
        <ColumnDirective field='CustomerID' headerText='CustomerID' width='150' />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format='C2' />
        <ColumnDirective field='ShipAddress' headerText='ShipAddress' width='150' />
      </ColumnsDirective>
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const dropDownData: { [key: string]: Object; }[] = [
    { text: 'Select count' },
    { text: '10', value: '10' },
    { text: '20', value: '20' },
    { text: '30', value: '30' },
    { text: '80', value: '80' },
    { text: '100', value: '100' },
    { text: '200', value: '200' },
    { text: '232', value: '232' },
    { text: '300', value: '300' },
    { text: '500', value: '500' },
    { text: '800', value: '800' },
    { text: '820', value: '850' },
    { text: '920', value: '920' },
    { text: '2020', value: '2020' },
    { text: '3000', value: '3000' },
    { text: '4000', value: '4000' },
    { text: '4999', value: '4999' }

  ];
  const onChange = (args: ChangeEventArgs) => {
    (grid as GridComponent).selectionModule.selectRow(parseInt((args.value as string), 10));
  }
  const rowSelected = () => {
    const rowHeight: number = (grid as GridComponent).getRows()[(grid as GridComponent).getSelectedRowIndexes()[0]].scrollHeight;
    (grid as GridComponent).getContent().children[0].scrollTop = rowHeight * (grid as GridComponent).getSelectedRowIndexes()[0];
  }
  return (<div>
    <label style={{ padding: "30px 20px 0 0" }} > Select row index :</label>
    <DropDownListComponent index={0} width={200} dataSource={dropDownData} change={onChange}></DropDownListComponent>
    <GridComponent dataSource={data} height="315" width="100%"
      rowSelected={rowSelected} ref={g => grid = g}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='OrderID' width='120' textAlign='Right' />
        <ColumnDirective field='CustomerID' headerText='CustomerID' width='150' />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format='C2' />
        <ColumnDirective field='ShipAddress' headerText='ShipAddress' width='150' />
      </ColumnsDirective>
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/scrolling-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/scrolling-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/scrolling-cs7" %}

## Hide the empty placeholder of scrollbar

Scrollbar placeholder hiding enhances interface cleanliness by removing unnecessary scrollbar placeholders. The [hideScroll](https://ej2.syncfusion.com/react/documentation/api/grid#hidescroll) method determines scrollbar visibility based on content overflow.

The following example demonstrates the `hideScroll` method implementation with the [dataBound](https://ej2.syncfusion.com/react/documentation/api/grid#databound) event:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/scrolling-cs8/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/scrolling-cs8/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/scrolling-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/scrolling-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/scrolling-cs8" %}

## Render scrollbar in both top and bottom

Dual scrollbar rendering at top and bottom positions enhances horizontal navigation for large datasets. This configuration enables convenient scrolling from either position.

Implementation steps:

| Step | Action | Details |
|------|--------|---------|
| 1 | Add HTML Element | Insert `<div id="scroller">` above the Grid to create a top scrollbar. |
| 2 | Initialize in [created](https://ej2.syncfusion.com/react/documentation/api/grid#created) event | Position the scroller `div` above Grid content dynamically. |
| 3 | Synchronize Scroll Events | Link `onscroll` events between the scroller and Grid content. |
| 4 | Adjust Width and Visibility | Use the `setScroller()` method to match scrollbar width and respond to resize. |

The following example demonstrates how to use the `created` event to insert a scrollbar at the top of the Grid content:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/scrolling-cs9/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/scrolling-cs9/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/scrolling-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/scrolling-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/scrolling-cs9" %}