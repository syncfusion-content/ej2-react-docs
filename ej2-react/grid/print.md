---
layout: post
title: React Grid - Print | Syncfusion
description: React Grid print covers preparing grid content for printing, applying print‑specific styles, and configuring options to produce clear, printer‑friendly output.
control: Print 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Print in React Grid Component

The printing feature in Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid generates a printable representation of the grid for offline access or documentation. Enable printing via the grid's toolbar or by calling the [print](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#print) method.

Enable printing in the grid by configuring the [toolbar](https://ej2.syncfusion.com/react/documentation/api/grid#toolbar) property and adding `Print` to the list of toolbar items. This displays a `Print` button on the grid toolbar, and clicking it triggers the grid’s printing functionality.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/print-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/print-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/print-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/print-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/print-cs1" %}

## Page setup

Some print options (layout, paper size, margins) cannot be set via JavaScript; use the browser's print or page setup dialog instead. Below are links to page setup and printing guides for the most common browsers.

* [Chrome](https://support.google.com/chrome/answer/1069693?hl=en&visit_id=1-636335333734668335-3165046395&rd=1)
* [Firefox](https://support.mozilla.org/en-US/kb/how-print-web-pages-firefox)
* [Safari](http://www.mintprintables.com/print-tips/adjust-margins-osx/)
* [IE](http://www.helpteaching.com/help/print/index.htm)

## Print by external button

The Grid's content can be printed using an external button by calling the `print` method. This method triggers printing programmatically.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/print-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/print-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/print-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/print-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/print-cs2" %}

## Print visible page

By default, the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid prints all pages. Use the [printMode](https://ej2.syncfusion.com/react/documentation/api/grid#printmode) property to control what is printed. To print only the current visible page, set `printMode` to `CurrentPage`.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, Page, Toolbar } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';

function App() {
  const pageOptions = { pageSize: 6 };
  const [printMode, setPrintMode] = useState();
  const dropdownlist = ['AllPages', 'CurrentPage'];
  const onChange = (args) => {
    setPrintMode(args.value);
  }
  return ((<div>
    <label style={{ padding: "10px 10px 26px 0" }}><b>Select Print Mode </b></label>
    <DropDownListComponent index={0} width={200} dataSource={dropdownlist} change={onChange}></DropDownListComponent>
    <GridComponent dataSource={data} printMode={printMode} toolbar={['Print']} allowPaging={true} pageSettings={pageOptions}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
      </ColumnsDirective>
      <Inject services={[Toolbar, Page]} />
    </GridComponent ></div>))
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, GridComponent, PageSettingsModel, PrintMode } from '@syncfusion/ej2-react-grids';
import { Inject, Page, Toolbar } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';

function App() {
  const pageOptions: PageSettingsModel = { pageSize: 6 };
  const [printMode, setPrintMode] = useState<PrintMode>();
  const dropdownlist: string[] = ['AllPages', 'CurrentPage'];
  const onChange = (args: ChangeEventArgs) => {
    setPrintMode(args.value);
  }
  return ((<div>
    <label style={{ padding: "10px 10px 26px 0" }}><b>Select Print Mode </b></label>
    <DropDownListComponent index={0} width={200} dataSource={dropdownlist} change={onChange}></DropDownListComponent>
    <GridComponent dataSource={data} printMode={printMode} toolbar={['Print']} allowPaging={true} pageSettings={pageOptions}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
      </ColumnsDirective>
      <Inject services={[Toolbar, Page]} />
    </GridComponent ></div>))
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/print-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/print-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/print-cs3" %}

## Print only selected records

By default, the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid prints all data bound to its [dataSource](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#datasource). In scenarios where only selected records should be printed, bind to the [beforePrint](https://ej2.syncfusion.com/react/documentation/api/grid#beforeprint) event and replace the rows of the printing grid with the selected rows.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/print-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/print-cs6/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/print-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/print-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/print-cs6" %}

## Print the hierarchy grid

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid supports printing hierarchy grids (a parent grid and its child grids). By default, printing includes the parent grid and expanded child grids only. The print behavior can be customized using the [hierarchyPrintMode](https://ej2.syncfusion.com/react/documentation/api/grid#hierarchyprintmode) property.

The `hierarchyPrintMode` property in the React Grid controls printing behavior for hierarchy grids. Options:

| Mode     | Behavior                                                                         |
| -------- | -------------------------------------------------------------------------------  |
| Expanded | Prints the parent grid with expanded child grids.                                |
| All      | Prints the parent grid with all the child grids, whether expanded or collapsed.  |
| None     | Prints the parent grid alone.                                                    |

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, GridComponent, HierarchyGridPrintMode } from '@syncfusion/ej2-react-grids';
import { DetailRow, GridModel, Inject, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data, employeeData } from './datasource';

function App() {
  const dropdownData = ['All', 'Expanded', 'None'];
  const [hierarchyPrintMode, setHierarchyPrintMode] = useState('All');
  const onModeChange = (args) => {
    setHierarchyPrintMode(args.value);
  }
  const childGridOptions = {
    columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
      { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
      { field: 'ShipCity', headerText: 'Ship City', width: 150 },
      { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    dataSource: data,
    queryString: 'EmployeeID'
  };
  const toolbaroptions = ['Print'];
  return (<div>
    <label style={{ padding: "10px 10px 26px 0" }}><b>Select Mode </b></label>
    <DropDownListComponent index={0} width={200} dataSource={dropdownData} change={onModeChange}></DropDownListComponent>
    <GridComponent toolbar={toolbaroptions} hierarchyPrintMode={hierarchyPrintMode} dataSource={employeeData}
      childGrid={childGridOptions}>
      <ColumnsDirective>
        <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign="Right" />
        <ColumnDirective field='FirstName' headerText='First Name' width='150' />
        <ColumnDirective field='City' headerText='City' width='150' />
        <ColumnDirective field='Country' headerText='Country' width='150' />
      </ColumnsDirective>
      <Inject services={[DetailRow, Toolbar]} />
    </GridComponent ></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, GridComponent, HierarchyGridPrintMode } from '@syncfusion/ej2-react-grids';
import { DetailRow, GridModel, Inject, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data, employeeData } from './datasource';

function App() {
  const dropdownData: string[] = ['All', 'Expanded', 'None'];
  const [hierarchyPrintMode, setHierarchyPrintMode] = useState<HierarchyGridPrintMode>('All');
  const onModeChange = (args: ChangeEventArgs) => {
    setHierarchyPrintMode(args.value);
  }
  const childGridOptions: GridModel = {
    columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
      { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
      { field: 'ShipCity', headerText: 'Ship City', width: 150 },
      { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    dataSource: data,
    queryString: 'EmployeeID'
  };
  const toolbaroptions: ToolbarItems[] = ['Print'];
  return (<div>
    <label style={{ padding: "10px 10px 26px 0" }}><b>Select Mode </b></label>
    <DropDownListComponent index={0} width={200} dataSource={dropdownData} change={onModeChange}></DropDownListComponent>
    <GridComponent toolbar={toolbaroptions} hierarchyPrintMode={hierarchyPrintMode} dataSource={employeeData}
      childGrid={childGridOptions}>
      <ColumnsDirective>
        <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign="Right" />
        <ColumnDirective field='FirstName' headerText='First Name' width='150' />
        <ColumnDirective field='City' headerText='City' width='150' />
        <ColumnDirective field='Country' headerText='Country' width='150' />
      </ColumnsDirective>
      <Inject services={[DetailRow, Toolbar]} />
    </GridComponent ></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/print-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/print-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/print-cs4" %}

## Print the master detail grid

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid provides the option to visualize details of a record in another grid in a master-detail manner. By default, printing a master-detail grid includes only the master grid. The print output can be modified to include both master and detail grids using the [beforePrint](https://ej2.syncfusion.com/react/documentation/api/grid#beforeprint) event.

The `beforePrint` event fires before printing. Handling this event and adding the detail grid to the `element` argument ensures both master and detail grids appear in the print output.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/print-cs7/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/print-cs7/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/print-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/print-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/print-cs7" %}

## Print large number of columns

When printing a grid with a large number of columns, the browser's default page size (usually A4) might not be sufficient to display all the columns properly. As a result, the browser's print preview may automatically hide the overflowed content, leading to a cut-off appearance.

For wide grids, adjust the **print scale** in the browser's print dialog to fits content within the printable area.

![Scale Option Setting](./images/print-preview.png)

## Show or hide columns while printing

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid provides control over column visibility during printing. Columns can be shown or hidden dynamically using the [toolbarClick](https://ej2.syncfusion.com/react/documentation/api/grid#toolbarclick) and [printComplete](https://ej2.syncfusion.com/react/documentation/api/grid#printcomplete) events. This allows tailoring of the printed grid output.

In the `toolbarClick` event, columns can be shown or hidden by setting the [visible](https://ej2.syncfusion.com/react/documentation/api/grid/column#visible) property to `true` or `false` respectively.

The `printComplete` event resets column visibility to the original configuration.

Here's a code example that demonstrates how to show a hidden column (Customer ID) and hide a visible column (Ship City) during printing and then reset their visibility after printing:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/print-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/print-cs5/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/print-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/print-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/print-cs5" %}

## Print the expanded state from other pages

By default, printing includes only the expanded child grids visible on the current page. Printing can be enhanced to include expanded child grids from other pages using the [load](https://ej2.syncfusion.com/react/documentation/api/grid#load) and [actionBegin](https://ej2.syncfusion.com/react/documentation/api/grid#actionbegin) events to manage expanded row state across pages.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/print-expanded-state/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/print-expanded-state/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/print-expanded-state/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/print-expanded-state/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/print-expanded-state" %}

## Add a title when using Grid print function

Add a title to the printed header by utilizing the [beforePrint](https://ej2.syncfusion.com/react/documentation/api/grid#beforeprint) event. This event allows customization of the print layout, including adding a title element to make the printed document informative and visually appealing.

Example: adding a title to the grid print output:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/print-function/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/print-function/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/print-function/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/print-function/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/print-function" %}

## Optimized Approaches for Printing Full Data Sets

Printing very large datasets can cause browser performance issues because rendering many DOM elements may slow or hang the browser. The Grid supports virtualization for interactive viewing, but virtualization (rows and columns) is not supported for printing. If all data must be printed, export to [Excel](https://ej2.syncfusion.com/react/documentation/grid/excel-export/excel-exporting), [CSV](https://ej2.syncfusion.com/react/documentation/grid/excel-export/excel-exporting), or [PDF](https://ej2.syncfusion.com/react/documentation/grid/pdf-export/pdf-export) and print the exported file with a desktop application.

## Retain grid styles while printing

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid provides a [beforePrint](https://ej2.syncfusion.com/react/documentation/api/grid#beforeprint) event that enables customization of the grid's appearance and styles before printing. Handling this event ensures the grid retains its styles and appearance in the printed output.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/print-cs8/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/print-cs8/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/print-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/print-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/print-cs8" %}

## Print grid along with other components

To print the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid together with other components (for example, a `Chart`), use the [beforePrint](https://ej2.syncfusion.com/react/documentation/api/grid#beforeprint) event to append cloned content from those components to the print document.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, Inject as ChartInject, LineSeries, Legend, DateTime, Tooltip } from '@syncfusion/ej2-react-charts';
import { ActionEventArgs, ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, Page, PageSettingsModel, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid;
    let chart;
    let chartContainer;
    const pageOptions = { pageSize: 6 };
    const dataBound = () => {
        if (chart) {

            chart.series[0].marker = { visible: true };
            chart.series[0].xName = 'OrderDate';
            chart.series[0].yName = 'Freight';
            chart.series[0].dataSource = grid.getCurrentViewRecords();
            chart.refresh();
        }
    }
    const printClick = () => {
        grid.print();
    }
    const beforePrint = (args) => {
        if (chartContainer) {
            const clonedChartContainer = chartContainer.cloneNode(true);
            args.element.appendChild(clonedChartContainer);
        }
    }
    const actionComplete = (args) => {
        if (chart) {
            if (args.requestType === 'paging') {
                chart.series[0].dataSource = grid.getCurrentViewRecords();
                chart.refresh();
            }
        }
    }
    return (<div>
        <ButtonComponent className='printbtn' cssClass='e-danger' onClick={printClick}>Print</ButtonComponent>
        <GridComponent ref={g => grid = g} dataSource={data.slice(0, 20)}
            allowPaging={true} pageSettings={pageOptions} dataBound={dataBound} beforePrint={beforePrint} actionComplete={actionComplete} >
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
                <ColumnDirective field='OrderDate' headerText='Order Date' format='yMd' width='150' textAlign="Right"/>
                <ColumnDirective field='Freight' headerText='Freight' format='C' width='150' />
                <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
                <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
            </ColumnsDirective>
            <Inject services={[Toolbar, Page]} />
        </GridComponent >
        <h4>Chart</h4>
        <div ref={cc => chartContainer = cc}>
            <ChartComponent ref={c => chart = c} width='60%' title='Chart Title' primaryXAxis={{ valueType: 'DateTime', labelFormat: 'MMM d' }}>
                <SeriesCollectionDirective>
                    <SeriesDirective type="Line" width={1} columnWidth={0.4}></SeriesDirective>
                </SeriesCollectionDirective>
                <ChartInject services={[LineSeries, Tooltip, Legend, DateTime]} />
            </ChartComponent>
        </div>
    </div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, Inject as ChartInject, LineSeries, Legend, DateTime, Tooltip, PrintEventArgs } from '@syncfusion/ej2-react-charts';
import { ActionEventArgs, ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, Page, PageSettingsModel, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid: GridComponent | null;
    let chart: ChartComponent | null;
    let chartContainer;
    const pageOptions: PageSettingsModel = { pageSize: 6 };
    const dataBound = () => {
        if (chart) {

            (chart as ChartComponent).series[0].marker = { visible: true };
            (chart as ChartComponent).series[0].xName = 'OrderDate';
            (chart as ChartComponent).series[0].yName = 'Freight';
            (chart as ChartComponent).series[0].dataSource = (grid as GridComponent).getCurrentViewRecords();
            (chart as ChartComponent).refresh();
        }
    }
    const printClick = () => {
        (grid as GridComponent).print();
    }
    const beforePrint = (args: PrintEventArgs) => {
        if (chartContainer) {
            const clonedChartContainer = chartContainer.cloneNode(true);
            args.element.appendChild(clonedChartContainer);
        }
    }
    const actionComplete = (args: ActionEventArgs) => {
        if (chart) {
            if (args.requestType === 'paging') {
                (chart as ChartComponent).series[0].dataSource = (grid as GridComponent).getCurrentViewRecords();
                (chart as ChartComponent).refresh();
            }
        }
    }
    return (<div>
        <ButtonComponent className='printbtn' cssClass='e-danger' onClick={printClick}>Print</ButtonComponent>
        <GridComponent ref={g => grid = g} dataSource={data.slice(0, 20)}
            allowPaging={true} pageSettings={pageOptions} dataBound={dataBound} beforePrint={beforePrint} actionComplete={actionComplete} >
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
                <ColumnDirective field='OrderDate' headerText='Order Date' format='yMd' width='150' textAlign="Right"/>
                <ColumnDirective field='Freight' headerText='Freight' format='C' width='150' />
                <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
                <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
            </ColumnsDirective>
            <Inject services={[Toolbar, Page]} />
        </GridComponent >
        <h4>Chart</h4>
        <div ref={cc => chartContainer = cc}>
            <ChartComponent ref={c => chart = c} width='60%' title='Chart Title' primaryXAxis={{ valueType: 'DateTime', labelFormat: 'MMM d' }}>
                <SeriesCollectionDirective>
                    <SeriesDirective type="Line" width={1} columnWidth={0.4}></SeriesDirective>
                </SeriesCollectionDirective>
                <ChartInject services={[LineSeries, Tooltip, Legend, DateTime]} />
            </ChartComponent>
        </div>
    </div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/print-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/print-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/print-cs9" %}