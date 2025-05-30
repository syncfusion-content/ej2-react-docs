---
layout: post
title: Virtual scroll in React Grid component | Syncfusion
description: Learn here all about Virtual scroll in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Virtual scroll 
documentation: ug
domainurl: ##DomainURL##
---

# Virtual scrolling in React Grid component

The virtual scrolling feature in the Grid allows you to efficiently handle and display a large amount of data without experiencing any performance degradation. It optimizes the rendering process by loading only the visible rows in the Grid viewport, rather than rendering the entire dataset at once. This is particularly useful when dealing with datasets that contain thousands of records.

To enable virtualization in the Grid, you need to inject the **VirtualScroll** module. This module is responsible for managing the virtual scrolling behavior and optimizing the rendering of data to enhance performance.

## Row virtualization

Row virtualization is a feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid that allows you to load and render rows only in the content viewport. It provides an alternative way of paging where data is loaded dynamically while scrolling vertically, rather than loading all the data at once. This is particularly useful when dealing with large datasets, as it improves the performance and reduces the initial load time.

To set up row virtualization, you need to define the [enableVirtualization](https://ej2.syncfusion.com/react/documentation/api/grid/#enablevirtualization) property as **true** and specify the content height using the [height](https://ej2.syncfusion.com/react/documentation/api/grid/#height) property in the Grid configuration.

The number of records displayed in the Grid is implicitly determined by the height of the content area. Additionally, you have an option to explicitly define the visible number of records using the [pageSettings.pageSize](https://ej2.syncfusion.com/react/documentation/api/grid/pageSettingsModel/#pagesize) property. The loaded data will be cached and reused when needed in the future.

The following example enable row virtualization using `enableVirtualization` and `height` property.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/virtual-scroll-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/virtual-scroll-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="largeData.jsx" %}
{% include code-snippet/grid/virtual-scroll-cs4/app/largeData.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="largeData.tsx" %}
{% include code-snippet/grid/virtual-scroll-cs4/app/largeData.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/virtual-scroll-cs4" %}

### Limitations 

* Row virtual scrolling is not compatible with the following feature
	1. Batch editing
	2. Detail template
	3. Row template
	4. Rowspan
	5. Autofill
	6. Hierarchy grid
* When row virtual scrolling is activated, compatibility for copy-paste and drag-and-drop operations is limited to the data items visible in the current viewport of the grid.
* The cell-based selection is not supported for row virtual scrolling. 
* Using different row heights with a template column, when the template height differs for each row, is not supported.
* Group expand and collapse state will not be persisted for remote data.
* Due to the element height limitation in browsers, the maximum number of records loaded by the Grid is limited by the browser capability.
* The height of the grid content is calculated using the row height and total number of records in the data source and hence features which changes row height such as text wrapping are not supported.
* If you want to increase the row height to accommodate the content then you can specify the row height as below to ensure all the table rows are in same height.

    ```css
    .e-grid .e-row {
        height: 2em;
    }
    ```
* Since data is virtualized in grid, the aggregated information and total group items are displayed based on the current view items. To get these information regardless of the view items, refer to the [Group with paging](https://ej2.syncfusion.com/react/documentation/grid/grouping/grouping#group-with-paging) topic. 
* It is necessary to set a static height for the component or its parent container when using row virtualization. The 100% height will work only if the component height is set to 100%, and its parent container has a static height.

## Column virtualization

Column virtualization feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid that allows you to optimize the rendering of columns by displaying only the columns that are currently within the viewport. It allows horizontal scrolling to view additional columns. This feature is particularly useful when dealing with grids that have a large number of columns, as it helps to improve the performance and reduce the initial loading time.

To enable column virtualization, you need to set the [enableColumnVirtualization](https://ej2.syncfusion.com/react/documentation/api/grid/#enablecolumnvirtualization) property of the Grid to **true**. This configuration instructs the Grid to only render the columns that are currently visible in the viewport. 

The following example enable/disable using `enableColumnVirtualization` property based on  a [Switch](https://ej2.syncfusion.com/react/documentation/switch/getting-started) component [change](https://ej2.syncfusion.com/react/documentation/api/switch/#change) event:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, VirtualScroll, Edit, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { dataSource } from './virtualData';
function App() {
    const data = dataSource();
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true };
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const rules = { required: true };
    return (<GridComponent dataSource={data} height={300} enableVirtualization={true} enableColumnVirtualization={true} pageSettings={{ pageSize: 50 }} editSettings={editOptions} toolbar={toolbarOptions}>
            <Inject services={[VirtualScroll, Edit, Toolbar]}/>
            <ColumnsDirective>
                <ColumnDirective field='SNo' headerText='S.No' width='120' isPrimaryKey={true} validationRules={rules}/>
                <ColumnDirective field='FIELD1' headerText='Player Name' width='140' editType='dropdownedit' validationRules={rules}/>
                <ColumnDirective field='FIELD2' headerText='Year' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD3' headerText='Stint' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD4' headerText='TMID' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD5' headerText='LGID' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD6' headerText='GP' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD7' headerText='GS' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD8' headerText='Minutes' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD9' headerText='Points' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD10' headerText='oRebounds' width='130' textAlign='Right'/>
                <ColumnDirective field='FIELD11' headerText='dRebounds' width='130' textAlign='Right'/>
                <ColumnDirective field='FIELD12' headerText='Rebounds' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD13' headerText='Assists' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD14' headerText='Steals' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD15' headerText='Blocks' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD16' headerText='Turnovers' width='130' textAlign='Right'/>
                <ColumnDirective field='FIELD17' headerText='PF' width='130' textAlign='Right'/>
                <ColumnDirective field='FIELD18' headerText='fgAttempted' width='150' textAlign='Right'/>
                <ColumnDirective field='FIELD19' headerText='fgMade' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD20' headerText='ftAttempted' width='150' textAlign='Right'/>
                <ColumnDirective field='FIELD21' headerText='ftMade' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD22' headerText='ThreeAttempted' width='150' textAlign='Right'/>
                <ColumnDirective field='FIELD23' headerText='ThreeMade' width='130' textAlign='Right'/>
                <ColumnDirective field='FIELD24' headerText='PostGP' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD25' headerText='PostGS' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD26' headerText='PostMinutes' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD27' headerText='PostPoints' width='130' textAlign='Right'/>
                <ColumnDirective field='FIELD28' headerText='PostoRebounds' width='130' textAlign='Right'/>
                <ColumnDirective field='FIELD29' headerText='PostdRebounds' width='130' textAlign='Right'/>
                <ColumnDirective field='FIELD30' headerText='PostRebounds' width='130' textAlign='Right' editType='numericedit' validationRules={rules}/>
            </ColumnsDirective>
            </GridComponent>);
}
;
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}


import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, VirtualScroll, Edit, Toolbar, EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { dataSource } from './virtualData';

function App() {  
  const data: object[] = dataSource();
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const rules: object = { required: true };
    return (<GridComponent dataSource={data} height={300} enableVirtualization={true}
            enableColumnVirtualization={true} pageSettings={{ pageSize: 50 }} editSettings={editOptions} toolbar={toolbarOptions}>
            <Inject services={[VirtualScroll, Edit, Toolbar]} />
            <ColumnsDirective>
                <ColumnDirective field='SNo' headerText='S.No' width='120' isPrimaryKey={true} validationRules={rules}/>
                <ColumnDirective field='FIELD1' headerText='Player Name' width='140' editType='dropdownedit' validationRules={rules}/>
                <ColumnDirective field='FIELD2' headerText='Year' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD3' headerText='Stint' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD4' headerText='TMID' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD5' headerText='LGID' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD6' headerText='GP' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD7' headerText='GS' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD8' headerText='Minutes' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD9' headerText='Points' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD10' headerText='oRebounds' width='130' textAlign='Right'/>
                <ColumnDirective field='FIELD11' headerText='dRebounds' width='130' textAlign='Right'/>
                <ColumnDirective field='FIELD12' headerText='Rebounds' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD13' headerText='Assists' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD14' headerText='Steals' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD15' headerText='Blocks' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD16' headerText='Turnovers' width='130' textAlign='Right'/>
                <ColumnDirective field='FIELD17' headerText='PF' width='130' textAlign='Right'/>
                <ColumnDirective field='FIELD18' headerText='fgAttempted' width='150' textAlign='Right'/>
                <ColumnDirective field='FIELD19' headerText='fgMade' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD20' headerText='ftAttempted' width='150' textAlign='Right'/>
                <ColumnDirective field='FIELD21' headerText='ftMade' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD22' headerText='ThreeAttempted' width='150' textAlign='Right'/>
                <ColumnDirective field='FIELD23' headerText='ThreeMade' width='130' textAlign='Right'/>
                <ColumnDirective field='FIELD24' headerText='PostGP' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD25' headerText='PostGS' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD26' headerText='PostMinutes' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD27' headerText='PostPoints' width='130' textAlign='Right'/>
                <ColumnDirective field='FIELD28' headerText='PostoRebounds' width='130' textAlign='Right'/>
                <ColumnDirective field='FIELD29' headerText='PostdRebounds' width='130' textAlign='Right'/>
                <ColumnDirective field='FIELD30' headerText='PostRebounds' width='130' textAlign='Right' editType='numericedit' validationRules={rules}/>
            </ColumnsDirective>
            </GridComponent>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="virtualData.tsx" %}
{% include code-snippet/grid/virtual-scroll-cs5/app/virtualData.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/virtual-scroll-cs5" %}

> Column's [width](https://ej2.syncfusion.com/react/documentation/api/grid/column/#width) is required for column virtualization. If column's width is not defined then Grid will consider its value as **200px**.

### Limitations 

* While using column virtual scrolling, column width should be in pixel. Percentage values are not accepted.
* Selected column details are only retained within the viewport. When the next set of columns is loaded, the selection for previously visible columns is lost.
* While using column virtualization, fixed position applied only viewport column. If scroll the next set of column fixed position is removed.
* The cell selection is not supported for column virtual scrolling.
* The **Ctrl + Home** and **Ctrl + End** keys are not supported when using column virtual scrolling.
* The following features are compatible with column virtualization and work within the viewport:
   1. Column resizing
   2. Column reordering
   3. Column chooser
   4. Auto-fit
   5. Print
   6. Clipboard
   7. Column menu - Column chooser, AutofitAll, Grouping
* Column virtual scrolling is not compatible with the following feature
    1. Grouping
    2. Colspan
    3. Batch editing
    4. Column with infinite scrolling
    6. Stacked header
    7. Row template
    8. Detail template
    9. Hierarchy grid
    10. Autofill
    11. Column chooser
        
## Browser height limitation in virtual scrolling and solution

You can load millions of records in the Grid by using virtual scrolling, where the grid loads and renders rows on-demand while scrolling vertically. As a result, Grid lightens the browser’s load by minimizing the DOM elements and rendering elements visible in the viewport. The height of the grid is calculated using the Total Records Count * [Row Height](https://ej2.syncfusion.com/react/documentation/api/grid/#rowheight) property.

The browser has some maximum pixel height limitations for the scroll bar element. The content placed above the maximum height can't be scrolled if the element height is greater than the browser's maximum height limit. The browser height limit affects the virtual scrolling of the grid. When a large number of records are bound to the Grid, it can only display the records until the maximum height limit of the browser. Once the browser's height limit is reached while scrolling, the user won't able to scroll further to view the remaining records.

For example, if the row height is set as 30px and the total record count is 1000000(1 million), then the height of the grid element will be 30,000,000 pixels. In this case, the browser's maximum height limit for a div is about 22,369,600 (The maximum pixel height limitation differs for different browsers). The records above the maximum height limit of the browser can't be scrolled.

This height limitation is not related to the Grid component. It fully depends on the default behavior of the browser. The same issue is reproduced in the normal HTML table too.

The following image illustrates the height limitation issue of a normal HTML table in different browsers (Chrome and Firefox).

![Browser height limitation in HTML table](../images/html-table.gif)

Grid component also faced the same issue as mentioned in the below image.

![Grid with browser height limitation](../images/grid.gif)

The Grid has an option to overcome this limitation of the browser in the following ways.

### Solution 1: Using external buttons

You can prevent the height limitation problem in the browser when scrolling through millions of records by loading the segment of data through different strategy.

In the following sample, Grid is rendered with a large number of records(nearly 2 million). Here, you can scroll 0.5 million records at a time in Grid. Once you reach the last page of 0.5 million records, the **Load Next Set** button will be shown at the bottom of the Grid. By clicking that button, you can view the next set of 0.5 million records in Grid. Also, the **Load Previous Set** button will be shown at the top of the Grid to load the previous set of 0.5 million records.

Let's see the step by step procedure for how we can overcome the limitation in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component.

1. Create a custom adaptor by extending UrlAdaptor and binding it to the grid DataSource property. In the processQuery method of the custom adaptor, we handled the Skip query based on the current page set to perform the data operation with whole records on the server.

    ```typescript
        export class CustomUrlAdaptor extends UrlAdaptor {
            processQuery(args) {
                if (arguments[1].queries) {
                    for (var i = 0; i < arguments[1].queries.length; i++) {
                        if (arguments[1].queries[i].fn === 'onPage') {
                            // pageSet - defines the number of segments that we are going to split the 2million records. In this example we have considered 0.5 million records for each set so the pageSet is 1, 2, 3 and 4.
                            // maxRecordsPerPageSet – In this example we define the value as 0.5 million.

                            // gridPageSize – the pageSize that we have defined in the Grid pageSettings->pageSize property

                            // customize the pageIndex based on the current pageSet (It send the skip query including the previous pageSet ) so that the other operations performed for total 2millions records instead of 0.5 million alone.
                            arguments[1].queries[i].e.pageIndex = (((pageSet - 1) * maxRecordsPerPageSet) / gridPageSize) + arguments[1].queries[i].e.pageIndex;
                        }
                    }
                }
                let original = super.processQuery.apply(this, arguments);
                return original;
            }
        }
        this.dataManager = new DataManager({
            adaptor: new CustomUrlAdaptor(),
            url: "Home/UrlDatasource"
        });
    ```

2. Render the grid by define the following features.

    ```typescript
        <GridComponent id='grid' ref={g => this.grid = g} dataSource={this.dataManager} enableVirtualization={true} pageSettings={this.pageSettings} height={360} beforeDataBound={this.beforeDataBound}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right"/>
                ......
                ......
            </ColumnsDirective>
        </GridComponent>
    ```

3. In the beforeDataBound event, we set the args.count as 0.5 million to perform scrolling with 0.5 million records and all the data operations are performed with whole records which is handled using the custom adaptor. And also particular segment records count is less than 0.5 million means it will directly assigned the original segmented count instead of 0.5 million.

    ```typescript
        beforeDataBound(args) {
            // storing the total records count which means 2 million records count
            totalRecords = args.count;

            // change the count with respect to maxRecordsPerPageSet (maxRecordsPerPageSet = 500000)
            args.count = args.count - ((pageSet - 1) * maxRecordsPerPageSet) > maxRecordsPerPageSet ?maxRecordsPerPageSet : args.count - ((pageSet - 1) * maxRecordsPerPageSet);
        }
    ```

4. Render “Load Next Set” button and “Load Previous Set” button at bottom and top of the grid component.

    ```typescript
        <ButtonComponent cssClass='e-info prevbtn' onClick={this.prevBtnClick} style={ width: '100%' }>Load Previous Set...</ButtonComponent>

        <GridComponent id='grid' ref={g => this.grid = g} dataSource={this.dataManager} enableVirtualization={true} pageSettings={this.pageSettings} height={360} beforeDataBound={this.beforeDataBound} >
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right"/>
                ......
                ......
            </ColumnsDirective>
        </GridComponent>

        <ButtonComponent cssClass='e-info nxtbtn' onClick={this.nxtBtnClick} style={ width: '100%' }>Load Next Set...</ButtonComponent>
    ```

5. While click on the `Load Next Set` / `Load Previous Set` button corresponding page data set is loaded to view remaining records of total 2 millions records after doing some simple calculation.

    ```typescript
        // Triggered when clicking the Previous/ Next button.
        prevNxtBtnClick(args) {
            if (this.grid.element.querySelector('.e-content') && this.grid.element.querySelector('.e-content').getAttribute('aria-busy') === 'false') {
                // Increase/decrease the pageSet based on the target element.
                pageSet = args.target.classList.contains('prevbtn') ? --pageSet : ++pageSet;
                this.rerenderGrid(); // Re-render the Grid component.
            }
        }
    ```

 You can view the hosted link for this sample [here](https://ej2.syncfusion.com/aspnetcore/Load_millions_of_records).

![Prevent browser height limitation](../images/external-button.png)

> If you perform grid actions such as filtering, sorting, etc., after scrolling through the 0.5 million data, the Grid performs those data actions with the whole records, not just the current loaded 0.5 million data.

### Solution 2: Using RowHeight property

You can reduce the [row height](https://ej2.syncfusion.com/react/documentation/grid/row/row-height) using the [rowHeight](https://ej2.syncfusion.com/react/documentation/api/grid/#rowheight) property of the Grid. It will reduce the overall height to accommodate more rows. But this approach optimizes the limitation, but if the height limit is reached after reducing row height also, you have to opt for the previous solution or use paging.

In the following image, you can see how many records will be scrollable when setting rowHeight to "36px" and "30px".

![Row Height](../images/row-height.gif)

### Solution 3: Using paging instead of virtual scrolling

Similar to virtual scrolling, the [paging](https://ej2.syncfusion.com/react/documentation/grid/paging) feature also loads the data in an on-demand concept. Pagination is also compatible with all the other features(Grouping, Editing, etc.) in Grid. So, use the paging feature instead of virtual scrolling to view a large number of records in the Grid without any kind of performance degradation or browser height limitation.
