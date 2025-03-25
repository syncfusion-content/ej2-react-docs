---
layout: post
title: Infinite scroll in React Grid component | Syncfusion
description: Learn here all about Infinite scroll in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Infinite scroll 
documentation: ug
domainurl: ##DomainURL##
---

# Infinite scroll in React Grid component

The infinite scrolling feature in the Grid is a powerful tool for seamlessly handling extensive data sets without compromising grid performance. It operates on a “load-on-demand” concept, ensuring that data is fetched only when needed. In the default infinite scrolling mode, a new block of data is loaded each time the scrollbar reaches the end of the vertical scroller. This approach significantly enhances the user experience when working with large data collections in the React Grid.

In this mode, a block of data accumulates every time the scrollbar reaches the end of the scroller. To clarify, in this context, a **block** represents the [pageSize](https://ej2.syncfusion.com/react/documentation/api/grid/pageSettings/#pagesize) of the Grid. If the `pageSize` is not explicitly specified, the Grid will automatically calculate it based on the grid viewport height and row height.

To enable infinite scrolling, you need to define [enableInfiniteScrolling](https://ej2.syncfusion.com/react/documentation/api/grid#enableinfinitescrolling) as **true** and content height by [height](https://ej2.syncfusion.com/react/documentation/api/grid/#height) property.

> In this feature, the Grid will not initiate a new data request when revisiting the same page.
> The `height` property must be specified when enabling `enableInfiniteScrolling`.

The following an example that demonstrates how to enable infinite scroll in the Grid:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/virtual-scroll-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/virtual-scroll-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="largeData.jsx" %}
{% include code-snippet/grid/virtual-scroll-cs1/app/largeData.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="largeData.tsx" %}
{% include code-snippet/grid/virtual-scroll-cs1/app/largeData.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/virtual-scroll-cs1" %}

## Number of blocks rendered during initial loading

The number of blocks to be initially rendered when the Grid is loaded. Each block corresponds to a page size of the Grid, resulting in the rendering of a certain number of row elements determined by multiplying the initial block size with the page size.

You can define the initial loading pages count by using [infiniteScrollSettings.initialBlocks](https://ej2.syncfusion.com/react/documentation/api/grid/infiniteScrollSettings/#initialblocks) property . By default, this property loads three pages during the initial rendering. Subsequently, additional data is buffered and loaded based on either the page size or the number of rows rendered within the provided height.

The following an example of how you can use the `initialBlocks` property to set the initial loading pages based on **DropDownList** input:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { PageSettingsModel, InfiniteScroll } from '@syncfusion/ej2-react-grids';
import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { data } from './largeData';

function App() {
  let grid;
  const datas = data(1000);
  const pageSettings = { pageSize: 50 };
  const dropDownData = [
    { text: 'Select count' },
    { text: '1', value: '1' },
    { text: '2', value: '2' },
    { text: '3', value: '3' },
    { text: '4', value: '4' },
    { text: '5', value: '5' },
    { text: '6', value: '6' },
    { text: '7', value: '7' }
  ];
  const onChange = (args) => {
    grid.infiniteScrollSettings.initialBlocks = parseInt((args.value ), 10);
    grid.refresh();
  }
  return (<div>
    <label style={{ padding: "30px 20px 0 0" }}>Select initialBlocks count: </label>
    <DropDownListComponent index={0} width={200} dataSource={dropDownData} change={onChange}></DropDownListComponent>
    <GridComponent ref={g => grid = g} dataSource={datas} height={300} enableInfiniteScrolling={true} pageSettings={pageSettings}>
      <Inject services={[InfiniteScroll]} />
      <ColumnsDirective>
        <ColumnDirective field='TaskID' headerText='Task ID' width='70' textAlign='Right' />
        <ColumnDirective field='Engineer' width='100' />
        <ColumnDirective field='Designation' width='100' />
        <ColumnDirective field='Estimation' headerText='Estimation' textAlign='Right' width='100' />
        <ColumnDirective field='Status' width='100' />
      </ColumnsDirective>
    </GridComponent></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { PageSettingsModel, InfiniteScroll } from '@syncfusion/ej2-react-grids';
import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { data } from './largeData';

function App() {
  let grid: GridComponent | null;
  const datas: object[] = data(1000);
  const pageSettings: PageSettingsModel = { pageSize: 50 };
  const dropDownData: { [key: string]: Object; }[] = [
    { text: 'Select count' },
    { text: '1', value: '1' },
    { text: '2', value: '2' },
    { text: '3', value: '3' },
    { text: '4', value: '4' },
    { text: '5', value: '5' },
    { text: '6', value: '6' },
    { text: '7', value: '7' }
  ];
  const onChange = (args: ChangeEventArgs) => {
    (grid as GridComponent).infiniteScrollSettings.initialBlocks = parseInt((args.value as string), 10);
    (grid as GridComponent).refresh();
  }
  return (<div>
    <label style={{ padding: "30px 20px 0 0" }}>Select initialBlocks count: </label>
    <DropDownListComponent index={0} width={200} dataSource={dropDownData} change={onChange}></DropDownListComponent>
    <GridComponent ref={g => grid = g} dataSource={datas} height={300} enableInfiniteScrolling={true} pageSettings={pageSettings}>
      <Inject services={[InfiniteScroll]} />
      <ColumnsDirective>
        <ColumnDirective field='TaskID' headerText='Task ID' width='70' textAlign='Right' />
        <ColumnDirective field='Engineer' width='100' />
        <ColumnDirective field='Designation' width='100' />
        <ColumnDirective field='Estimation' headerText='Estimation' textAlign='Right' width='100' />
        <ColumnDirective field='Status' width='100' />
      </ColumnsDirective>
    </GridComponent></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="largeData.jsx" %}
{% include code-snippet/grid/virtual-scroll-cs2/app/largeData.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="largeData.tsx" %}
{% include code-snippet/grid/virtual-scroll-cs2/app/largeData.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/virtual-scroll-cs2" %}

## Efficient data caching and DOM management in grid cache mode

In Grid cache mode, cached data blocks are reused when revisiting them, reducing the need for frequent data requests while navigating the same block. This mode also manages DOM row elements based on the [infiniteScrollSettings.maxBlocks](https://ej2.syncfusion.com/react/documentation/api/grid/infiniteScrollSettings/#maxblocks) count value. If this limit is exceeded, it removes a block of row elements to create new rows.

To enable cache mode, you need to define [enableCache](https://ej2.syncfusion.com/react/documentation/api/grid/infiniteScrollSettings/#enablecache) property of [infiniteScrollSettings](https://ej2.syncfusion.com/react/documentation/api/grid/infinitescrollsettings/) as **true**.

To enable maximum blocks, you need to define `maxBlocks` count of [infiniteScrollSettings](https://ej2.syncfusion.com/react/documentation/api/grid/infiniteScrollSettings), By default this property value is 3.

The following example that demonstrates how to enable/disable cache mode in infinite scrolling of the grid based on a [Switch](https://ej2.syncfusion.com/react/documentation/switch/getting-started) component[change](https://ej2.syncfusion.com/react/documentation/api/switch#change) event :

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/virtual-scroll-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/virtual-scroll-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="largeData.jsx" %}
{% include code-snippet/grid/virtual-scroll-cs3/app/largeData.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="largeData.tsx" %}
{% include code-snippet/grid/virtual-scroll-cs3/app/largeData.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/virtual-scroll-cs3" %}

> If [Hierarchy Grid](https://ej2.syncfusion.com/react/documentation/grid/hierarchy-grid) or [Detail Template](https://ej2.syncfusion.com/react/documentation/grid/row/detail-template) feature is enabled along with infinite scrolling without defining the height property, it will take a default height of **300px**. Since the [height](https://ej2.syncfusion.com/react/documentation/api/grid/#height) property is mandatory for the hierarchy grid and detail template features, ensure to define it accordingly. 

## Limitations

* Due to the element height limitation in browsers, the maximum number of records loaded by the grid is limited due to the browser capability.
* It is necessary to set a static height for the component or its parent container when using infinite scrolling. The 100% height will work only if the component height is set to 100%, and its parent container has a static height.
* When infinite scrolling is activated, compatibility for copy-paste and drag-and-drop operations is limited to the data items visible in the current viewport of the grid.
* Cell selection will not be persisted in cache mode.
* The group records cannot be collapsed in cache mode.
* Lazy load grouping with infinite scrolling does not support cache mode, and the infinite scrolling mode is exclusively applicable to parent-level caption rows in this scenario.
* The aggregated information and total group items are displayed based on the current view items. To get these information regardless of the view items, refer to the [Group with paging](https://ej2.syncfusion.com/react/documentation/grid/grouping/grouping#group-with-paging) topic.
* Programmatic selection using the [selectRows](https://ej2.syncfusion.com/react/documentation/api/grid/#selectrows) and [selectRow](https://ej2.syncfusion.com/react/documentation/api/grid/#selectrow) method is not supported in infinite scrolling.
* Infinite scrolling is not compatible with the following features:
    1. Batch editing
    2. Row spanning
    3. Column spanning
    4. Row template
    5. Row virtual scrolling
    6. Autofill
* Limitations of row drag and drop with infinite scrolling
    1. In cache mode, the grid refreshes automatically if the content's **tr** element count exceeds the cache limit of the grid's content after the drop action.
    2. When performing row drag and drop with lazy load grouping, the grid will refresh automatically.
    3. In remote data, changes are applied only in the UI. They will be lost once the grid is refreshed. To restore them, you need to update the changes in your database. By using the [rowDrop](https://ej2.syncfusion.com/react/documentation/api/grid/#rowdrop) event, you can send the request to the server and apply the changes in your database. After this, you need to refresh the grid to show the updated data.
