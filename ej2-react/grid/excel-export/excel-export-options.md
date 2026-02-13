---
layout: post
title: React Grid - Excel Export Options | Syncfusion
description: React Grid Excel export supports custom content, record/column selection, styles, themes, grouping, and advanced Excel output customization.
control: Excel export options 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Excel Export Options in React Grid Component

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component provides powerful Excel and CSV export customization options. This flexibility enables precise control over exported content and layout, ensuring the output meets specific business requirements and presentation standards.

The Excel or CSV export action can be tailored using the [excelExportProperties](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties) property. This property allows exporting specific columns, including or excluding hidden columns, exporting with custom data sources, enabling filters in exported files, changing file names, adding headers and footers, exporting multiple grids, customizing data based on queries, defining CSV delimiters, and setting themes.

## Export current page records

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid provides option to generate Excel or CSV documents that include only the currently displayed page records. This feature improves export performance and file size management by limiting the exported content to the visible page.

To export the current page of the grid to an Excel or CSV document, specify the [exportType](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties#exporttype) property. This property defines which records to export with two available options:

| **Export Type** | **Description** |
|----------------|----------------|
| `CurrentPage` | Exports only the records on the current grid page |
| `AllPages` | Exports all records from the grid |

The following example demonstrates exporting either the current page or all pages to an Excel document based on the selected item in the DropDownList when a toolbar item is clicked.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, ExcelExport, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, Page, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { employeeData } from './datasource';

function App() {
    let grid;
    let dropDown;
    const dropDownData = [
        { text: 'CurrentPage', value: 'CurrentPage' },
        { text: 'AllPages', value: 'AllPages' },
    ];
    const toolbar = ['ExcelExport'];
    const pageOptions = { pageSize: 6 };
    const toolbarClick = (args) => {
        if (grid && args.item.id === 'Grid_excelexport') { // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
            const exportProperties = {
                exportType: dropDown.value
            };
            grid.excelExport(exportProperties);
        }
    }
    return (
        <div>
            <label style={{ padding: "10px 10px 26px 0" }}> Change export type: </label>
            <DropDownListComponent ref={d => dropDown = d} index={0} width={170} dataSource={dropDownData}></DropDownListComponent>
            <GridComponent id='Grid' dataSource={employeeData} toolbar={toolbar} allowExcelExport={true}
                toolbarClick={toolbarClick} ref={g => grid = g} allowPaging={true} pageSettings={pageOptions}>
                <ColumnsDirective>
                    <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign='Right' />
                    <ColumnDirective field='FirstName' headerText='First Name' width='150' />
                    <ColumnDirective field='LastName' headerText='Last Name' width='150' />
                    <ColumnDirective field='City' headerText='City' width='150' />
                </ColumnsDirective>
                <Inject services={[Toolbar, ExcelExport, Page]} />
            </GridComponent>
        </div>
    );
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ClickEventArgs } from '@syncfusion/ej2-react-navigations';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, ExcelExport, ExcelExportProperties, GridComponent, PageSettingsModel, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { Inject, Page, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { employeeData } from './datasource';

function App() {
  let grid: GridComponent | null;
  let dropDown: DropDownListComponent | null;
  const dropDownData: { [key: string]: Object; }[] = [
    { text: 'CurrentPage', value: 'CurrentPage' },
    { text: 'AllPages', value: 'AllPages' },
  ];
  const toolbar: ToolbarItems[] = ['ExcelExport'];
  const pageOptions: PageSettingsModel = { pageSize: 6 };
  const toolbarClick = (args: ClickEventArgs) => {
    if (grid && args.item.id === 'Grid_excelexport') { // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
      const exportProperties: ExcelExportProperties = {
        exportType: (dropDown as DropDownListComponent).value
      };
      grid.excelExport(exportProperties);
    }
  }
  return (
    <div>
      <label style={{ padding: "10px 10px 26px 0" }}> Change export type: </label>
      <DropDownListComponent ref={d => dropDown = d} index={0} width={170} dataSource={dropDownData}></DropDownListComponent>
      <GridComponent id='Grid' dataSource={employeeData} toolbar={toolbar} allowExcelExport={true}
        toolbarClick={toolbarClick} ref={g => grid = g} allowPaging={true} pageSettings={pageOptions}>
        <ColumnsDirective>
          <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign='Right' />
          <ColumnDirective field='FirstName' headerText='First Name' width='150' />
          <ColumnDirective field='LastName' headerText='Last Name' width='150' />
          <ColumnDirective field='City' headerText='City' width='150' />
        </ColumnsDirective>
        <Inject services={[Toolbar, ExcelExport, Page]} />
      </GridComponent>
    </div>
  );
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/excel-export-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/excel-export-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/excel-export-cs4" %}

## Export selected records

Selected records export functionality enables generating Excel or CSV documents that include only specific data. This feature provides flexibility to export relevant records, enabling more focused and targeted Excel or CSV exports based on selection criteria.

To export only the selected records, utilize the `exportProperties.dataSource` property in the `toolbarClick` event.

To export the selected records from the grid to an Excel or CSV file, follow these steps:

1. Handle the [toolbarClick](https://ej2.syncfusion.com/react/documentation/api/grid#toolbarclick) event of the Grid.

2. Retrieve the selected records using the [getSelectedRecords](https://ej2.syncfusion.com/react/documentation/api/grid#getselectedrecords) method.

3. Assign the selected data to the [exportProperties.dataSource](https://ej2.syncfusion.com/react/documentation/api/grid/ExcelExportProperties#datasource) property.

4. Trigger the export operation using the [excelExport](https://ej2.syncfusion.com/react/documentation/api/grid#excelexport) or [csvExport](https://ej2.syncfusion.com/react/documentation/api/grid#csvexport) method.

The following example demonstrates exporting the selected records to an Excel document when a toolbar item is clicked.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/export-filtered-data-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/export-filtered-data-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/export-filtered-data-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/export-filtered-data-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/export-filtered-data-cs1" %}

## Exporting grouped records

Grouped records export support provides an outline option for grouped records, enabling the ability to hide detailed data for better viewing in the exported document. This feature is particularly useful when sharing data that is grouped based on specific columns while maintaining the grouping structure in the exported file.

To achieve this functionality, inject the `Group` module into the grid, enable grouping by setting the [allowGrouping](https://ej2.syncfusion.com/react/documentation/api/grid#allowgrouping) property to `true`. Additionally, define the [groupSettings.columns](https://ej2.syncfusion.com/react/documentation/api/grid/groupSettings#columns) property to specify the columns by which to group the data.

The following example demonstrates exporting grouped records to an Excel document when a toolbar item is clicked:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/excel-export-cs8/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/excel-export-cs8/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/excel-export-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/excel-export-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/excel-export-cs8" %}

## Export with hidden columns

Hidden column export functionality in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid enables including hidden columns in the exported Excel document. This feature is useful when columns are hidden in the UI but still need to be included in the exported document for comprehensive data reporting.

To export hidden columns of the grid to an Excel or CSV file, set the [includeHiddenColumn](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties#includehiddencolumn) property to `true` in the [excelExportProperties](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties) property.

The following example demonstrates how to export hidden columns to an Excel file. In this example, the "Ship City" column, which is not visible in the UI, is exported to the Excel document. The grid can also be exported by changing the `excelExportProperties.includeHiddenColumn` property based on the switch toggle using the [checked](https://ej2.syncfusion.com/react/documentation/api/switch#checked) property of the [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/react/documentation/switch/getting-started) component.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, ExcelExport, ExcelExportProperties, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Page, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let grid;
    let switchData;
    const toolbar = ['ExcelExport'];
    const toolbarClick = (args) => {
        if (grid && args.item.id === 'Grid_excelexport') {
            const exportProperties = {
                includeHiddenColumn: switchData.checked
            };
            grid.excelExport(exportProperties);
        }
    }
    return (<div>
        <label style={{ padding: "10px 10px" }}>Include or exclude hidden columns </label>
        <SwitchComponent ref={s => switchData = s}></SwitchComponent>
        <GridComponent id='Grid' dataSource={data} allowPaging={true} allowExcelExport={true} toolbar={toolbar} toolbarClick={toolbarClick} ref={g => grid = g}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
                <ColumnDirective field='ShipName' headerText='Ship Name' width='130' />
                <ColumnDirective field='ShipCity' headerText='Ship City' width='120' visible={false} />
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
            </ColumnsDirective>
            <Inject services={[Page, Toolbar, ExcelExport]} />
        </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, ExcelExport, ExcelExportProperties, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Page, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  let switchData: SwitchComponent | null;
  const toolbar: ToolbarItems[] = ['ExcelExport'];
  const toolbarClick = (args: ClickEventArgs) => {
    if (grid && args.item.id === 'Grid_excelexport') {
      const exportProperties: ExcelExportProperties = {
        includeHiddenColumn: (switchData as SwitchComponent).checked
      };
      grid.excelExport(exportProperties);
    }
  }
  return (<div>
    <label style={{ padding: "10px 10px" }}>Include or exclude hidden columns </label>
    <SwitchComponent ref={s => switchData = s}></SwitchComponent>
    <GridComponent id='Grid' dataSource={data} allowPaging={true} allowExcelExport={true} toolbar={toolbar} toolbarClick={toolbarClick} ref={g => grid = g}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='130' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='120' visible={false} />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
      </ColumnsDirective>
      <Inject services={[Page, Toolbar, ExcelExport]} />
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/excel-export-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/excel-export-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/excel-export-cs5" %}

## Show or hide columns while exporting

Dynamic column visibility control during the export process enables selectively displaying or hiding specific columns based on requirements. This feature differs from the static [Export with hidden columns](#export-with-hidden-columns) feature by allowing runtime column visibility changes specifically for the export operation.

To show or hide columns based on interaction during the export process, follow these steps:

1. Handle the [toolbarClick](https://ej2.syncfusion.com/react/documentation/api/grid#toolbarclick) event of the Grid component.

2. Update the visibility of the desired columns by setting the [visible](https://ej2.syncfusion.com/react/documentation/api/grid/column#visible) property of the column to `true` or `false`.

3. Export the grid to Excel.

4. Handle the [excelExportComplete](https://ej2.syncfusion.com/react/documentation/api/grid#excelexportcomplete) event to restore the column visibility to its original state.

In the following example, the "Customer ID" is initially a hidden column in the grid. However, during the export process, the "Customer ID" column is made visible, while the "Ship City" column is hidden.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/excel-export-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/excel-export-cs6/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/excel-export-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/excel-export-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/excel-export-cs6" %}

## Show or hide columns while exporting with stacked header

Stacked header column visibility control enables customizing the data presented in exported files while using stacked headers for enhanced organization. This feature extends the dynamic column visibility functionality to support stacked header configurations.

To implement the show or hide columns feature during Excel export in the Grid, follow these steps:

1. Handle the [toolbarClick](https://ej2.syncfusion.com/react/documentation/api/grid#toolbarclick) event of the Grid.

2. Update the visibility of the desired columns by setting the [visible](https://ej2.syncfusion.com/react/documentation/api/grid/column#visible) property of the column to `true` or `false`.

3. Export the Grid to Excel document using the [excelExport](https://ej2.syncfusion.com/react/documentation/api/grid#excelexport) or [csvExport](https://ej2.syncfusion.com/react/documentation/api/grid#csvexport) method.

4. Handle the [excelExportComplete](https://ej2.syncfusion.com/react/documentation/api/grid#excelexportcomplete) event to restore the column visibility to its original state.

In the following example, the "Ship Name" is initially a hidden column in the Grid. However, during the Excel export process, the "Ship Name" column is made visible, while the "Order Date" column is hidden:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/excel-export-show-hide/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/excel-export-show-hide/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/excel-export-show-hide/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/excel-export-show-hide/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/excel-export-show-hide" %}

## Enable filtering in the exported excel file

Excel file filtering support enables exporting data to Excel or CSV with filter options and also exporting only filtered records. This feature is especially beneficial when sharing data with others while preserving the ability for them to filter and analyze the data in Excel or CSV.

To enable this feature, set the [enableFilter](https://helpej2.syncfusion.com/react/documentation/api/grid/excelExportProperties#enablefilter) property to `true` in the [excelExportProperties](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties) object. Additionally, set [allowFiltering](https://ej2.syncfusion.com/react/documentation/api/grid#allowfiltering) to `true` in the grid configuration. This property enables filtering in the grid.

The following example demonstrates exporting data with filter options to an Excel document when a toolbar item is clicked:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/excel-export-cs7/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/excel-export-cs7/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/excel-export-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/excel-export-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/excel-export-cs7" %}

## Define file name

Custom file name configuration enables specifying a meaningful and descriptive name for the exported Excel or CSV document. This feature makes it easier to identify and manage the exported data.

To assign a custom file name for the exported document, set the [fileName](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties#filename) property of the [excelExportProperties](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties) property to the desired file name.

The following example demonstrates defining a file name using `ExcelExportProperties.fileName` property when exporting to Excel, based on the entered value as the file name.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { ExcelExport, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let grid;
    let textBox;
    const toolbar = ['ExcelExport'];
    const toolbarClick = (args) => {
        if (grid && args.item.id === 'Grid_excelexport') {
            const excelExportProperties = {
                fileName: textBox.value !== "" ? textBox.value + '.xlsx' : 'new.xlsx'
            };
            grid.excelExport(excelExportProperties);
        }
    }
    return (
        <div>
            <label style={{ padding: "30px 17px 0 0" }}>Enter file name: </label>
            <TextBoxComponent ref={t => textBox = t} placeholder="Enter file name" width="120"></TextBoxComponent>
            <GridComponent id='Grid' dataSource={data} height={270} toolbar={toolbar}
                allowExcelExport={true} toolbarClick={toolbarClick} ref={g => grid = g}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
                    <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
                    <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
                    <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
                </ColumnsDirective>
                <Inject services={[Toolbar, ExcelExport]} />
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
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ColumnDirective, ColumnsDirective, GridComponent, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { ExcelExport, ExcelExportProperties, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  let textBox: TextBoxComponent | null;
  const toolbar: ToolbarItems[] = ['ExcelExport'];
  const toolbarClick = (args: ClickEventArgs) => {
    if (grid && args.item.id === 'Grid_excelexport') {
      const excelExportProperties: ExcelExportProperties = {
        fileName: (textBox as TextBoxComponent).value !== "" ? (textBox as TextBoxComponent).value + '.xlsx' : 'new.xlsx'
      };
      grid.excelExport(excelExportProperties);
    }
  }
  return (
    <div>
      <label style={{ padding: "30px 17px 0 0" }}>Enter file name: </label>
      <TextBoxComponent ref={t => textBox = t} placeholder="Enter file name" width="120"></TextBoxComponent>
      <GridComponent id='Grid' dataSource={data} height={270} toolbar={toolbar}
        allowExcelExport={true} toolbarClick={toolbarClick} ref={g => grid = g}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
        </ColumnsDirective>
        <Inject services={[Toolbar, ExcelExport]} />
      </GridComponent>
    </div>
  );
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/excel-export-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/excel-export-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/excel-export-cs9" %}

## Export the master detail grid

Master-detail grid export functionality enables exporting not only the master grid but also the associated detail grid onto a single Excel sheet. This feature proves particularly valuable when dealing with hierarchical data represented by two grids in the exported Excel file, allowing for comprehensive analysis and management.

To export the master-detail grid on the same sheet, set the [multipleExport.type](https://ej2.syncfusion.com/react/documentation/api/grid/multipleExportType) property of the [excelExportProperties](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties) object to `AppendToSheet`. It also has an option to provide blank space between the grids. This blank space can be defined by using [multipleExport.blankRows](https://ej2.syncfusion.com/react/documentation/api/grid/multipleExport#blankrows) property.

The following example demonstrates exporting master detail grid to the same page in an Excel file when a toolbar item is clicked. The [rowSelected](https://ej2.syncfusion.com/react/documentation/api/grid#rowselected) event dynamically updates the detail grid based on the selected master record:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/export-masterDetail-grid/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/export-masterDetail-grid/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/export-masterDetail-grid/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/export-masterDetail-grid/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/export-masterDetail-grid" %}

## Customizing columns on export

Column customization on export enables tailoring specific column attributes such as field, header text, and text alignment in exported Excel or CSV documents. This feature ensures that exported Excels align perfectly with design and reporting requirements.

To customize the grid columns, follow these steps:

1. Access the [excelExportProperties.column](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties#columns) of the Grid component.

2. Set the `column` object with attributes such as `field`, `headerText`, and `textAlign` to define the desired format.

3. Trigger the Excel or CSV export operation to apply the customized column settings.

The following example demonstrates customizing the grid columns when exporting a document. In this scenario, the attributes for different columns have been customized: "Order ID" with `textAlign` set to Right, "Customer ID" with headerText as "Customer Name", and "Freight" with a center-aligned `textAlign` property, which is not rendered in the grid columns:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/excel-export-cs19/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/excel-export-cs19/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/excel-export-cs19/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/excel-export-cs19/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/excel-export-cs19" %}

## Font and color customization 

Theme customization support for Excel export enables maintaining a consistent and visually appealing style for the exported data in Excel documents. This feature allows defining custom styles for captions, headers, and record content.

To apply a theme to the exported Excel document, define the [theme](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties#theme) property within the `excelExportProperties`. This property specifies the `theme` to be used in the exported Excel file, including styles for the caption, header, and record content.

| **Property** | **Description** |
|-------------|----------------|
| [caption](https://ej2.syncfusion.com/react/documentation/api/grid/excelTheme#caption) | Defines the theme style for the caption content in the exported Excel document. The caption is the title or description that appears at the top of the exported Excel sheet. |
| [header](https://ej2.syncfusion.com/react/documentation/api/grid/excelTheme#header) | Defines the style for the header content in the exported Excel document. The header corresponds to the column headers in the Grid. |
| [record](https://ej2.syncfusion.com/react/documentation/api/grid/excelTheme#record) | Defines the theme style for the record content in the exported Excel document. The record represents the data rows in the Grid that are exported to Excel. |

In the following example, apply font styling to the caption, header, and record in the Excel file using the `theme` property:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/excel-export-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/excel-export-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/excel-export-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/excel-export-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/excel-export-cs3" %}

>By default, material theme is applied to exported excel document.

## Rotate a header text in the exported grid

Header text rotation support enables customizing the column header styles, such as changing the text orientation, font color, and more, in the exported Excel file. This feature is useful when enhancing the visual appearance of the exported data and providing a unique representation of the Grid in the Excel document.

To achieve this requirement, use the [excelHeaderQueryCellInfo](https://ej2.syncfusion.com/react/documentation/api/grid#excelheaderquerycellinfo) event of the Grid. This event is triggered when creating a column header for the Excel document to be exported. By customizing the column header within this event, the header text can be easily rotated to a certain degree in the exported Grid, making the data presentation in the Excel document more visually appealing and tailored to specific requirements.

In the following demo, using the `rotation` property of the style argument in the `excelHeaderQueryCellInfo` event, the header text of the column header can be rotated in the excel exported document.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { ExcelExport, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid;
    const toolbar = ['ExcelExport'];
    const customAttributes = { class: 'orientationcss' };
    const degree = [90, 180, 45, 135, 225, -90];
    let dropDownListObject;
    const setHeaderHeight = () => {
        /** Obtain the width of the headerText content */
        const textWidth = document.querySelector(".orientationcss > div").scrollWidth;
        const headerCell = document.querySelectorAll(".e-headercell");
        for (let i = 0; i < headerCell.length; i++) {
            /** Assign the obtained textWidth as the height of the headerCell */
            (headerCell.item(i)).style.height = textWidth + 'px';
        }
    };
    const toolbarClick = (args) => {
        if (grid && args.item.id === 'grid_excelexport') {
            grid.excelExport();
        }
    };
    const excelQueryCellInfo = (args) => {
        if (args.column.field == 'Freight') {
            if (args.value < 30) {
                args.style = { backColor: '#99ffcc' };
            }
            else if (args.value < 60) {
                args.style = { backColor: '#ffffb3' };
            }
            else {
                args.style = { backColor: '#ff704d' };
            }
        }
    };
    const excelHeaderQueryCellInfo = (args) => {
        let textWidth = document.querySelector(".orientationcss > div").scrollWidth;
        if (args.gridCell.column.field == 'Freight') {
            args.style = { backColor: '#99ffcc', vAlign: 'Bottom' };
        }
        else {
            args.style = { vAlign: 'Center', rotation: dropDownListObject.value };
        }
        args.cell.cellHeight = textWidth;
    };
    return (<div>
        <label>Select a degree:</label>
        <DropDownListComponent style={{ marginLeft: "20px" }} placeholder="Select a degree" id="ddlelement" dataSource={degree} ref={(scope) => { dropDownListObject = scope; }} width={150}></DropDownListComponent>
        <GridComponent id='grid' dataSource={data} height={260} created={setHeaderHeight} allowExcelExport={true} excelQueryCellInfo={excelQueryCellInfo} excelHeaderQueryCellInfo={excelHeaderQueryCellInfo} toolbar={toolbar} toolbarClick={toolbarClick} ref={g => grid = g}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
                <ColumnDirective field='CustomerID' headerText='Customer ID' customAttributes={customAttributes} width='100' />
                <ColumnDirective field='EmployeeID' headerText='Employee ID' width='100' textAlign="Right" />
                <ColumnDirective field='Freight' headerText='Freight' width='80' format="C2" textAlign="Right" />
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
            </ColumnsDirective>
            <Inject services={[Toolbar, ExcelExport]} />
        </GridComponent>
    </div>);
}
;
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { ExcelExport, ToolbarItems, ExcelQueryCellInfoEventArgs, Grid, Inject, Toolbar, ExcelHeaderQueryCellInfoEventArgs } from '@syncfusion/ej2-react-grids';
import { ClickEventArgs } from '@syncfusion/ej2-react-navigations';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: Grid | null;
  const toolbar: ToolbarItems[] = ['ExcelExport'];
  const customAttributes: any = { class: 'orientationcss' };
  const degree: number[] = [90, 180, 45, 135];
  let dropDownListObject: any;
  const setHeaderHeight = () => {
    /** Obtain the width of the headerText content */
    const textWidth: number = (document.querySelector(".orientationcss > div") as HTMLElement).scrollWidth;
    const headerCell: NodeList = document.querySelectorAll(".e-headercell");
    for (let i: number = 0; i < headerCell.length; i++) {
      /** Assign the obtained textWidth as the height of the headerCell */
      ((headerCell as any).item(i)).style.height = textWidth + 'px';
    }
  }
  const toolbarClick = (args: ClickEventArgs) => {
    if (grid && args.item.id === 'grid_excelexport') {
      grid.excelExport();
    }
  }
  const excelQueryCellInfo = (args: ExcelQueryCellInfoEventArgs): void => {
    if (args.column.field == 'Freight') {
      if (args.value < 30) {
        args.style = { backColor: '#99ffcc' };
      }
      else if (args.value < 60) {
        args.style = { backColor: '#ffffb3' };
      }
      else {
        args.style = { backColor: '#ff704d' };
      }
    }
  }

  const excelHeaderQueryCellInfo = (args: ExcelHeaderQueryCellInfoEventArgs): void => {
    let textWidth = (document.querySelector(".orientationcss > div") as HTMLElement).scrollWidth;
    if (args.gridCell.column.field == 'Freight') {
      args.style = { backColor: '#99ffcc', vAlign: 'Bottom' };
    }
    else {
      args.style = { vAlign: 'Center', rotation: dropDownListObject.value };
    }
    args.cell.cellHeight = textWidth;
  }
  return (<div>
    <label>Select a degree: </label>
    <DropDownListComponent style={{ marginLeft: "10px" }} placeholder="Select a degree" id="ddlelement" dataSource={degree} ref={(scope) => { dropDownListObject = scope; }} width={150}></DropDownListComponent>
    <GridComponent id='grid' dataSource={data} height={260} created={setHeaderHeight} allowExcelExport={true} excelQueryCellInfo={excelQueryCellInfo} excelHeaderQueryCellInfo={excelHeaderQueryCellInfo} toolbar={toolbar} toolbarClick={toolbarClick} ref={g => grid = g}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' customAttributes={customAttributes} width='100' />
        <ColumnDirective field='Freight' headerText='Freight' width='80' format="C2" textAlign="Right" />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
      </ColumnsDirective>
      <Inject services={[Toolbar, ExcelExport]} />
    </GridComponent>
  </div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/header-orientation-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/header-orientation-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/header-orientation-cs2" %}

## Conditional cell formatting

Conditional cell formatting support enables customizing the appearance of specific cells in the exported Excel document based on their values or other criteria.

To achieve this feature, use the [excelQueryCellInfo](https://ej2.syncfusion.com/react/documentation/api/grid/excelQueryCellInfoEventArgs) event of the Grid component. This event is triggered for each cell during the export process to Excel. Within this event, the cell object can be accessed using the `args.cell` property and its properties, such as the background color, can be modified based on desired conditions.

The following example demonstrates customizing the background color of the Freight column in the exported Excel document using the `args.cell` and `backgroundColor` properties of the `excelQueryCellInfo` event.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/excel-export-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/excel-export-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/excel-export-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/excel-export-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/excel-export-cs2" %}

## Adding header and footer in the exported Excel file

Header and footer content support in Excel or CSV export enables including additional information or branding in the exported Excel or CSV document. This feature is particularly useful for adding titles, page numbers, or company information.

To achieve this, use the [toolbarClick](https://ej2.syncfusion.com/react/documentation/api/grid#toolbarclick) event along with defining the [header](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties#header) and [footer](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties#footer) properties in the [excelExportProperties](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties) object, enabling customization of the header and footer content.

The following example demonstrates adding a header and footer to the exported grid:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/excel-export-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/excel-export-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/excel-export-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/excel-export-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/excel-export-cs1" %}

## Export grid as blob

Blob export functionality enables exporting the data as a Blob instead of downloading it as a file in the browser. To export the grid as a Blob, set the `isBlob` parameter to `true` in the [excelExport](https://ej2.syncfusion.com/react/documentation/api/grid#excelexport) method. The grid returns the promise of a blob in the [excelExportComplete](https://ej2.syncfusion.com/react/documentation/api/grid#excelexportcomplete) event.

The following example demonstrates obtaining the blob data of the exported grid by executing the promise in the `excelExportComplete` event.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/export-grid-as-blob-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/export-grid-as-blob-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/export-grid-as-blob-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/export-grid-as-blob-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/export-grid-as-blob-cs2" %}
