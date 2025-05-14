---
layout: post
title: Scrolling in React Grid component | Syncfusion
description: Learn here all about Scrolling in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Scrolling 
documentation: ug
domainurl: ##DomainURL##
---

# Scrolling in React Grid component

The scrolling feature in the React Grid component allows you to navigate through the content that extends beyond the visible area of the grid . It provides scrollbars that are automatically displayed when the content exceeds the specified `width` or `height` of the grid element. This feature is useful when you have a large amount of data or when the content needs to be displayed within a limited space. The vertical and horizontal scrollbars will be displayed based on the following criteria:

* The vertical scrollbar appears when the total height of rows present in the grid exceeds its element height.
* The horizontal scrollbar appears when the sum of columns width exceeds the grid element width.
* The [height](https://ej2.syncfusion.com/react/documentation/api/grid/#height) and [width](https://ej2.syncfusion.com/react/documentation/api/grid/#width) are used to set the grid height and width, respectively.

> The default value for `height`and `width` is `auto`.

## Set width and height

The React Grid component offers a straightforward method to tailor the width and height of the scroller to meet your specific requirements. This is particularly useful when you want precise control over the dimensions of the scroller. To achieve this, you can use pixel values as numbers for the [width](https://ej2.syncfusion.com/react/documentation/api/grid/#width) and [height](https://ej2.syncfusion.com/react/documentation/api/grid/#height) properties of the Grid.

In the following example, the scrollbar is enabled, and the grid's `height` is set to 315 pixels, while the `width` is set to 400 pixels:

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

The Grid component allows you to create a responsive layout by making it fill its parent container and automatically adjust its size based on the available space and changes in the container's dimensions. This capability is particularly useful for building applications that need to adapt to various screen sizes and devices.

To achieve this, you need to specify the [width](https://ej2.syncfusion.com/react/documentation/api/grid/#width) and [height](https://ej2.syncfusion.com/react/documentation/api/grid/#height) properties of the Grid as 100%. However, keep in mind that setting the height property to 100% requires the Grid's parent element to have an explicit height defined.

In the following example, the parent container has explicit height and width set, and the Grid container's height and width are both set to 100%. This ensures that the Grid adjusts its size responsively based on the dimensions of the parent container:

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

## Sticky header

The React Grid component provides a feature that allows you to make column headers remain fixed while scrolling, ensuring they stay visible at all times. To achieve this, you can utilize the [enableStickyHeader](https://ej2.syncfusion.com/react/documentation/api/grid/#enablestickyheader) property by setting it to **true**.

In the below demo, the Grid headers will be sticky while scrolling the Grid's parent div element.

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

## Scroll to selected row

The React Grid component allows you to scroll the grid content to the position of the selected row, ensuring that the selected row is automatically brought into view. This feature is particularly useful when dealing with a large dataset and wanting to maintain focus on the selected row. To achieve this, you can utilize the [rowSelected](https://ej2.syncfusion.com/react/documentation/api/grid/#rowselected) event provided by the Grid.

The following example that demonstrates how to use the `rowSelected` event to scroll to the selected row:

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

The Syncfusion Grid component provides a feature to hide the empty placeholder of the scrollbar, offering a cleaner interface without unnecessary scrollbars. To achieve this, you can utilize the [hideScroll](https://ej2.syncfusion.com/react/documentation/api/grid/#hidescroll) method. This method allows you to determine whether the scrollbar should be hidden based on the content's overflow.

The following example that demonstrates how to use the `hideScroll` method inside the [dataBound](https://ej2.syncfusion.com/react/documentation/api/grid/#databound) event:

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
The Syncfusion React Grid allows rendering scrollbars at both the top and bottom, enhancing horizontal navigation for large datasets. This feature ensures users can scroll the Grid from either direction, enhancing usability and accessibility.

Steps to render scrollbars at the top in the Grid:

1. **Add a Scrollbar** - Insert a `<div id="scroller">` above the Grid in the template to act as a top scrollbar.
2. **Initialize Scrollbar in [created](https://ej2.syncfusion.com/react/documentation/api/grid/#created) Event** - Retrieve the Grid's content and move the scroller `div` above it dynamically.
3. **Synchronize Scroll Events** - Link `onscroll` events of the scroller `div` and the Grid content to scroll together.
4. **Adjust Scrollbar Width and Visibility** - Use `setScroller()` to match the scrollbar width with the Grid and update it on window resize.

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