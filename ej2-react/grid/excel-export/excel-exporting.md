---
layout: post
title: React Grid - Excel Exporting | Syncfusion
description: React Grid enables Excel export of grid data, creating workbooks and downloadable spreadsheets with customizable export settings.
control: Excel exporting 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Excel Export in React Grid Component

The Excel export feature in the React Grid component enables exporting Grid data to Excel or CSV documents. This capability is helpful when sharing or analyzing data in spreadsheet format is required.

## Enable Excel export

Excel export configuration in the Grid component requires the following setup:

**Module injection**: Inject the `ExcelExport` module into the grid. This module provides the necessary services for exporting data to Excel or CSV formats.

**Enable export**: Set the [allowExcelExport](https://ej2.syncfusion.com/react/documentation/api/grid#allowexcelexport) property to `true`. This property activates the Excel and CSV export options in the Grid.

**Trigger export**: Use the [excelExport](https://ej2.syncfusion.com/react/documentation/api/grid#excelexport) method to export Grid data to an Excel document. For CSV export, use the [csvExport](https://ej2.syncfusion.com/react/documentation/api/grid#csvexport) method instead.

The following example demonstrates performing the Excel export action in the grid by adding the `ExcelExport` item to the grid [toolbar](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#toolbar) and invoking the `excelExport` method inside the [toolbarClick](https://ej2.syncfusion.com/react/documentation/api/grid#toolbarclick) event.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/excel-export-cs10/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/excel-export-cs10/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/excel-export-cs10/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/excel-export-cs10/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/excel-export-cs10" %}

## Show spinner while exporting 

Showing a spinner during the export operation enhances usability by giving a clear visual indicator of progress, helping to understand that the export is actively processing.

To show or hide a spinner while exporting the grid, utilize the [showSpinner](https://ej2.syncfusion.com/react/documentation/api/grid#showspinner) and [hideSpinner](https://ej2.syncfusion.com/react/documentation/api/grid#hidespinner) methods within the `toolbarClick` event.

The `toolbarClick` event is triggered when a toolbar item in the Grid is clicked. Within the event handler, the code checks whether the clicked item corresponds to Excel export by examining its ID, which typically combines the Grid's ID with either "_excelexport". If a match is found, the `showSpinner` method is invoked to display the spinner before invoking the `excelExport` method.

To hide the spinner after the exporting is completed, bind the [excelExportComplete](https://ej2.syncfusion.com/react/documentation/api/grid#excelexportcomplete) event and use the `hideSpinner` method on the grid instance to hide the spinner.

The following example demonstrates displaying the spinner during Excel export in the grid:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/pdf-export-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/pdf-export-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/pdf-export-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/pdf-export-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/pdf-export-cs1" %}

## Bind custom data source while exporting

The Grid component provides a convenient way to export data to Excel or CSV format. With the Excel or CSV export feature, a custom data source can be defined while exporting. This allows exporting data that is not necessarily bound to the grid, which can be generated or retrieved based on application logic.

To export data, define the [dataSource](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties#datasource) property within the [excelExportProperties](https://ej2.syncfusion.com/react/documentation/api/grid#excelExportProperties) object. This property represents the data source that will be used for the Excel or CSV export.

The following example demonstrates rendering custom dataSource during Excel export. By calling the [excelExport](https://ej2.syncfusion.com/react/documentation/api/grid#excelexport) method and passing the `excelExportProperties` object through the grid instance, the grid data will be exported to Excel using the dynamically defined data source:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/excel-export-cs11/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/excel-export-cs11/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/excel-export-cs11/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/excel-export-cs11/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/excel-export-cs11" %}

## Export with custom aggregate

Exporting grid data with custom aggregates allows including additional calculated values in the exported file based on specific requirements. This feature is helpful for providing a comprehensive view of the data in the exported file, incorporating specific aggregated information for analysis or reporting purposes.

In order to utilize custom aggregation, specify the [type](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn#type) property as `Custom` and provide the custom aggregate function in the [customAggregate](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn#customaggregate) property.

Within the `customAggregate` function, the argument contains the data that has a result property. The function calculates the count of objects in this data where the "Ship Country" field value is equal to "Brazil" and returns the count with a descriptive label.

The following example shows exporting the grid with a custom aggregate that shows the calculation of the Brazil count of the "Ship Country" column:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/pdf-export-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/pdf-export-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/pdf-export-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/pdf-export-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/pdf-export-cs2" %}

## Export with cell and row spanning 

Exporting data from the Grid with cell and row spanning enables maintaining cell and row layout in the exported data. This feature is useful when merged cells or rows exist in the Grid and maintaining the same structure in the exported file is desired.

To achieve this, utilize the [rowSpan](https://ej2.syncfusion.com/react/documentation/api/grid/queryCellInfoEventArgs#rowspan) and [colSpan](https://ej2.syncfusion.com/react/documentation/api/grid/queryCellInfoEventArgs#colspan) properties in the `queryCellInfo` event of the Grid. This event allows defining the span values for specific cells. Additionally, the appearance of the grid cells during the export can be customized using the [excelQueryCellInfo](https://ej2.syncfusion.com/react/documentation/api/grid#excelquerycellinfo) event of the Grid.

The following example demonstrates performing export with cell and row spanning using `queryCellInfo` and `excelQueryCellInfo` events of the Grid:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/excel-export-cs15/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/excel-export-cs15/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/excel-export-cs15/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/excel-export-cs15/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/excel-export-cs15" %}

## Export with custom date format

The exporting functionality in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid allows exporting grid data, including custom date format. This feature is useful when exporting grid data with customized date values is needed.

To apply a custom date format to grid columns during the export, utilize the [format](https://ej2.syncfusion.com/react/documentation/api/grid/column#format) property. This property allows defining a custom format using format options.

The following example demonstrates exporting the grid with custom date format. In the example, the "formatOptions" object is set to the `format` property for the "Order Date" column. This custom date `format` displays the date in the format of day-of-the-week, month abbreviation, day, and 2-digit year (e.g., Sun, May 8, '23):

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/excel-export-cs16/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/excel-export-cs16/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/excel-export-cs16/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/excel-export-cs16/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/excel-export-cs16" %}

## Merge duplicate cells on export

Duplicate cells (based on their values) in a specific column of the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid can be merged. This can be achieved by utilizing the [dataBound](https://ej2.syncfusion.com/react/documentation/api/grid#databound) event. Additionally, duplicate cells in the specified column can be merged during export by using the [excelQueryCellInfo](https://ej2.syncfusion.com/react/documentation/api/grid#excelquerycellinfo) event for Excel and CSV formats. This functionality is useful for improving the readability of data and providing a clearer visual representation.

The following example demonstrates merging duplicate cells in the "Order ID" column in both Grid view and export:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/excel-export-merge/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/excel-export-merge/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/excel-export-merge/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/excel-export-merge/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/excel-export-merge" %}

## Export multiple grids

Exporting multiple grids in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component allows exporting different grids to compare them side by side in external applications on the same or different pages of an Excel document. Each grid is identified by its unique ID. The grids to export can be specified by listing their IDs in the [exportGrids](https://ej2.syncfusion.com/react/documentation/api/grid#exportgrids) property.

### Same sheet

Excel exporting provides support for exporting multiple grids on the same page. This feature is particularly useful when combining and organizing data from different grids for a unified view in the exported Excel file is desired.

To achieve this, define the [multipleExport.type](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties#multipleexport) property as `AppendToSheet` in the [excelExportProperties](https://ej2.syncfusion.com/react/documentation/api/grid#excelExportProperties) object. This setting ensures that the data from each grid will be appended to the same Excel sheet.

Additionally, there is an option to include blank rows between the data of each grid to visually separate them in the exported Excel sheet. The number of blank rows to be inserted can be defined using the [multipleExport.blankRows](https://ej2.syncfusion.com/react/documentation/api/grid/multipleExport#blankrows) property.

The following example demonstrates exporting multiple grids to the same page in an Excel file when a toolbar item is clicked:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/excel-export-cs12/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/excel-export-cs12/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/excel-export-cs12/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/excel-export-cs12/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/excel-export-cs12" %}

>By default, `multipleExport.blankRows` value is 5.

### New sheet

Excel export functionality enables the exporting of multiple grids into separate pages (each grid on a new page) within the Excel file.

To achieve this, follow these steps:

1. Access the [excelExportProperties](https://ej2.syncfusion.com/react/documentation/api/grid#excelExportProperties) of the Grid component.

2. Set the [multipleExport.type](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties#multipleexport) to `NewPage`.

3. Trigger the Excel export operation.

The following example demonstrates exporting multiple grids to an Excel file when a toolbar item is clicked:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/excel-export-cs13/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/excel-export-cs13/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/excel-export-cs13/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/excel-export-cs13/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/excel-export-cs13" %}

### Limitations

* Multiple grids exporting feature is not supported with server side exporting.

## Export hierarchy grid 

Exporting a hierarchy grid in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component allows generating an Excel or CSV document that includes the parent grid along with its child grids. This feature is useful when exporting hierarchical data with its related details is needed.

To achieve this, the exporting behavior can be customized by using the `ExcelExportProperties.hierarchyExportMode` property of the Grid. This property allows specifying the exporting behavior for the hierarchy grid. The following options are available:

| Mode     | Behavior    |
|----------|-------------|
| Expanded | Exports the master grid with expanded child grids.|
| All      | Exports the master grid with all child grids, expanded or not. |
| None     | Exports only the master grid without any child grids. |

The following example demonstrates exporting hierarchical grid to Excel document. Also change the `excelExportProperties.hierarchyExportMode` property by using [value](https://ej2.syncfusion.com/react/documentation/api/switch#value) property of the DropDownList component:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, DetailRow, ExcelExport, ExcelExportProperties, GridComponent, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { GridModel, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data, employeeData } from './datasource';

function App() {
    let grid;
    let dropDown;
    const toolbar = ['ExcelExport'];
    const ddlData = [
        { text: 'Expanded', value: 'Expanded' },
        { text: 'All', value: 'All' },
        { text: 'None', value: 'None' },
    ];
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
    const toolbarClick = (args) => {
        if (args.item.id === 'Grid_excelexport') {
            const exportProperties = {
                hierarchyExportMode: dropDown.value
            };
            grid.excelExport(exportProperties);
        }
    }
    return (
        <div>
            <label style={{ padding: "10px 10px 26px 0" }}> Change the hierarchy export mode: </label>
            <DropDownListComponent ref={d => dropDown = d} index={0} width={200} dataSource={ddlData}></DropDownListComponent>
            <GridComponent id='Grid' dataSource={employeeData} toolbar={toolbar} allowExcelExport={true}
                toolbarClick={toolbarClick} ref={g => grid = g} childGrid={childGridOptions}>
                <ColumnsDirective>
                    <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign="Right" />
                    <ColumnDirective field='FirstName' headerText='First Name' width='150' />
                    <ColumnDirective field='LastName' headerText='Last Name' width='150' />
                    <ColumnDirective field='City' headerText='City' width='150' />
                </ColumnsDirective>
                <Inject services={[DetailRow, Toolbar, ExcelExport]} />
            </GridComponent>
        </div>
    );
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, DetailRow, ExcelExport, ExcelExportProperties, GridComponent, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { GridModel, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data, employeeData } from './datasource';

function App() {
  let grid: GridComponent | null;
  let dropDown: DropDownListComponent | null;
  const toolbar: ToolbarItems[] = ['ExcelExport'];
  const ddlData: { [key: string]: Object; }[] = [
    { text: 'Expanded', value: 'Expanded' },
    { text: 'All', value: 'All' },
    { text: 'None', value: 'None' },
  ];
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
  const toolbarClick = (args: ClickEventArgs) => {
    if (args.item.id === 'Grid_excelexport') {
      const exportProperties: ExcelExportProperties = {
        hierarchyExportMode: ((dropDown as DropDownListComponent).value as ExcelExportProperties["hierarchyExportMode"])
      };
      (grid as GridComponent).excelExport(exportProperties);
    }
  }
  return (
    <div>
      <label style={{ padding: "10px 10px 26px 0" }}> Change the hierarchy export mode: </label>
      <DropDownListComponent ref={d => dropDown = d} index={0} width={200} dataSource={ddlData}></DropDownListComponent>
      <GridComponent id='Grid' dataSource={employeeData} toolbar={toolbar} allowExcelExport={true}
        toolbarClick={toolbarClick} ref={g => grid = g} childGrid={childGridOptions}>
        <ColumnsDirective>
          <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign="Right" />
          <ColumnDirective field='FirstName' headerText='First Name' width='150' />
          <ColumnDirective field='LastName' headerText='Last Name' width='150' />
          <ColumnDirective field='City' headerText='City' width='150' />
        </ColumnsDirective>
        <Inject services={[DetailRow, Toolbar, ExcelExport]} />
      </GridComponent>
    </div>
  );
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/excel-export-cs14/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/excel-export-cs14/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/excel-export-cs14" %}

### Format the child Grid columns before exporting

The Syncfusion React Grid allows customization of the child Grid's Excel export options, enabling precise control over data formatting before export. This functionality is achieved using the [exportDetailDataBound](https://ej2.syncfusion.com/react/documentation/api/grid#exportdetaildatabound) event, which is triggered for each child Grid during the export process. This event provides access to the child Grid instance, allowing modifications to its column formatting before generating the Excel document.

In the following example, the `exportDetailDataBound` event is used to modify the "Order Date" column of the child Grid. By setting the column's [format](https://ej2.syncfusion.com/react/documentation/api/grid/column#format) property, the date values are formatted as `dd/MM/yyyy` when exported to Excel document:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/excel-export-cs20/app/App.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/excel-export-cs20/app/App.tsx %}
{% endhighlight %}

{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/excel-export-cs20/app/datasource.jsx %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/excel-export-cs20/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/excel-export-cs20" %}

### Limitations

* Microsoft Excel permits up to seven nested levels in outlines. So that in the grid we can able to provide only up to seven nested levels and if it exceeds more than seven levels then the document will be exported without outline option. Please refer the [Microsoft Limitation](https://learn.microsoft.com/en-us/sql/reporting-services/report-builder/exporting-to-microsoft-excel-report-builder-and-ssrs?view=sql-server-2017#ExcelLimitations).

## Add formula for the cell while exporting

The Grid component provides a convenient way to add formulas to cells during the export process. This feature allows performing calculations and applying formulas to specific cells in the exported Excel document. This can be particularly useful when including calculated values or performing complex calculations is needed.

To add formulas to cells during the export process, utilize the [valueAccessor](https://ej2.syncfusion.com/react/documentation/api/grid#valueAccessor) method along with the [excelQueryCellInfo](https://ej2.syncfusion.com/react/documentation/api/grid#excelquerycellinfo) event. 

In the following example, the [toolbarClick](https://ej2.syncfusion.com/react/documentation/api/grid#toolbarclick) function handles a toolbar button click event. When the Excel Export button is clicked, it triggers the Excel export process. Inside this function, an [excelExportProperties](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties) object is defined, specifying that hidden columns should be included in the export. Inside the `excelQueryCellInfo` event, the `valueAccessor` method generates formulas for the desired cells and assigns these formulas to the cell's formula property, ensuring that the calculated values are exported to the Excel document:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/excel-export-cs18/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/excel-export-cs18/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/excel-export-cs18/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/excel-export-cs18/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/excel-export-cs18" %}

## Pass additional parameters to the server when exporting

Passing additional parameters to the server when exporting data in the Syncfusion React Grid involves providing flexibility to include extra information or customize the export process based on specific requirements.

This can be achieved by utilizing the [query](https://ej2.syncfusion.com/react/documentation/api/grid#query) property and the [toolbarClick](https://ej2.syncfusion.com/react/documentation/api/grid#toolbarclick) event. Within the `query` property, the `addParams` method can be invoked to add parameters to the request.

The following example demonstrates how to pass additional parameters to the server when Excel exporting within the `toolbarClick` event. Within the event, the additional parameters, specifically "recordcount" as 15, are passed using the `addParams` method and displayed as a message:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/additonal-parameter-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/additonal-parameter-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/additonal-parameter-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/additonal-parameter-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/additonal-parameter-cs1" %}

## Limitations

* A CSV is a plain text format that does not support features such as cell rotation, font and color customization, column and row spanning, or adding formulas. CSV files store raw data without any formatting or styling.

## See Also

* [Exporting Grid in Cordova application](../how-to/exporting-grid-in-cordova-application)
