---
layout: post
title: Exporting TreeGrid in Server in React TreeGrid | Syncfusion
description: Learn here all about Exporting TreeGrid in Server in Syncfusion ##Platform_Name## TreeGrid Component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Exporting TreeGrid in Server
domainurl: ##DomainURL##
documentation: ug
---

# Exporting tree grid in Server in React TreeGrid

TreeGrid supports exporting data to Excel on the server side using the TreeGrid server export library.

## Server dependencies

The server-side export functionality is available in the Syncfusion.EJ2.TreeGridExport package, which is distributed with Essential Studio and on [nuget.org](https://www.nuget.org/). The following dependencies are required for server-side Excel export:

* Syncfusion.EJ2
* Syncfusion.EJ2.TreeGridExport

## Server configuration

The following code snippet shows server configuration using an ASP.NET Core controller action.

To export the TreeGrid on the server side, call the [serverExcelExport](https://ej2.syncfusion.com/documentation/api/treegrid/#serverexcelexport) method to pass TreeGrid properties to the server export action.

```ts

public IActionResult ExcelExport(string treeGridModel)
{
    if (treeGridModel == null)
    {
        return View();
    }
    TreeGridExcelExport exp = new TreeGridExcelExport();
    Syncfusion.EJ2.TreeGrid.TreeGrid gridProperty = ConvertTreeGridObject(treeGridModel);
    return exp.ExportToExcel<TreeData>(gridProperty, TreeData.GetDefaultData());
}
private Syncfusion.EJ2.TreeGrid.TreeGrid ConvertTreeGridObject(string gridProperty)
{
    Syncfusion.EJ2.TreeGrid.TreeGrid TreeGridModel = (Syncfusion.EJ2.TreeGrid.TreeGrid)Newtonsoft.Json.JsonConvert.DeserializeObject(gridProperty, typeof(Syncfusion.EJ2.TreeGrid.TreeGrid));
    TreeGridColumnModel cols = (TreeGridColumnModel)Newtonsoft.Json.JsonConvert.DeserializeObject(gridProperty, typeof(TreeGridColumnModel));
    TreeGridModel.Columns = cols.columns;
    return TreeGridModel;
}
public class TreeGridColumnModel
{
    public List<TreeGridColumn> columns { get; set; }
}

```
```ts
import { ColumnDirective, ColumnsDirective, Page, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { ExcelExport, Inject, Toolbar } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import { sampleData } from './datasource';
function App() {
    const toolbarOptions = ['ExcelExport'];
    const pageSettings = { pageSize: 7 };
    let treegrid;
    const toolbarClick = (args) => {
       if (grid && args.item.id === 'Treegrid_excelexport') {
            grid.serverExcelExport('Home/ExcelExport');
        }
    };
    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' allowPaging={true} pageSettings={pageSettings} allowExcelExport={true} height='220' toolbarClick={toolbarClick} ref={g => treegrid = g} toolbar={toolbarOptions}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date'/>
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, ExcelExport]}/>
    </TreeGridComponent>;
}
;
export default App;

```
## CSV Export in server side

Export to CSV on the server side using the [serverCsvExport](https://ej2.syncfusion.com/react/documentation/api/treegrid/#servercsvexport) method, which passes TreeGrid properties to the server.

In the following demo, the method is invoked inside the [toolbarClick](https://ej2.syncfusion.com/react/documentation/api/treegrid/#toolbarclick) event. On the server, TreeGrid properties are deserialized and passed to the [ExportToCsv](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGridExport.TreeGridExcelExport.html#Syncfusion_EJ2_TreeGridExport_TreeGridExcelExport_ExportToCsv__1_Syncfusion_EJ2_TreeGrid_TreeGrid_System_Collections_IEnumerable_Syncfusion_EJ2_TreeGridExport_ExcelExportProperties_) method, which generates the CSV.

```ts

public IActionResult ServerSideExporting()
{
    var order = TreeData.GetDefaultData();
    ViewBag.dataSource = order;
    return View();
}

public IActionResult CsvExport(string treeGridModel)
{
    if (treeGridModel == null)
    {
        return View();
    }
    TreeGridExcelExport exp = new TreeGridExcelExport();
    Syncfusion.EJ2.TreeGrid.TreeGrid gridProperty = ConvertTreeGridObject(treeGridModel);
    return exp.ExportToCsv<TreeData>(gridProperty, TreeData.GetDefaultData());
}

private Syncfusion.EJ2.TreeGrid.TreeGrid ConvertTreeGridObject(string gridProperty)
{
    Syncfusion.EJ2.TreeGrid.TreeGrid TreeGridModel = (Syncfusion.EJ2.TreeGrid.TreeGrid)Newtonsoft.Json.JsonConvert.DeserializeObject(gridProperty, typeof(Syncfusion.EJ2.TreeGrid.TreeGrid));
    TreeGridColumnModel cols = (TreeGridColumnModel)Newtonsoft.Json.JsonConvert.DeserializeObject(gridProperty, typeof(TreeGridColumnModel));
    TreeGridModel.Columns = cols.columns;
    return TreeGridModel;
}

public class TreeGridColumnModel
{
    public List<TreeGridColumn> columns { get; set; }
}

```
```ts
import { ColumnDirective, ColumnsDirective, Page, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { ExcelExport, Inject, Toolbar } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import { sampleData } from './datasource';
function App() {
    const toolbarOptions = ['CsvExport'];
    const pageSettings = { pageSize: 7 };
    let treegrid;
    const toolbarClick = (args) => {
       if (grid && args.item.id === 'Treegrid_csvexport') {
            grid.serverCsvExport('Home/CsvExport');
        }
    };
    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' allowPaging={true} pageSettings={pageSettings} allowExcelExport={true} height='220' toolbarClick={toolbarClick} ref={g => treegrid = g} toolbar={toolbarOptions}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date'/>
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
        </ColumnsDirective>
        <Inject services={[Page, Toolbar]}/>
    </TreeGridComponent>;
}
;
export default App;

```

## Rotate a header text to a certain degree in the exported grid on the server side

TreeGrid supports customizing column header styles in the exported Excel file, including text orientation and font color. To implement this, use the `ExcelHeaderCellRendering` event.

The `ExcelHeaderCellRendering` event triggers when creating a column header for the Excel document on the server side. Apply header customizations within this event.

In the following demo, the `HeaderCellRotate` method of the `TreeGridExcelExport` class is used in the `ExcelHeaderCellRendering` event to rotate the header text in the exported document.

```ts

public IActionResult ExcelExport(string treeGridModel)
{
    if (treeGridModel == null)
    {
        return View();
    }
    TreeGridExcelExport exp = new TreeGridExcelExport();
    Syncfusion.EJ2.TreeGrid.TreeGrid gridProperty = ConvertTreeGridObject(treeGridModel);
    gridProperty.ExcelHeaderCellRendering = ExcelHeaderQueryCellInfo;
    return (IActionResult)exp.ExcelExport<TreeGridItems>(gridProperty, TreeGridItems.GetDefaultData());
}

private void ExcelHeaderQueryCellInfo(object excel)
{
    Syncfusion.EJ2.TreeGridExport.ExcelHeaderCellEventArgs name = (Syncfusion.EJ2.TreeGridExport.ExcelHeaderCellEventArgs)excel;
    List<string> headerValues = new List<string>();
    headerValues.Add(name.Column.HeaderText);
    var longestString = headerValues.Where(s => s.Length == headerValues.Max(m => m.Length)).First();
    TreeGridExcelExport exp = new TreeGridExcelExport();
    var size = exp.ExcelTextSize(name.Style.Font.FontName, (float)name.Style.Font.Size, longestString);
    name.Cell.RowHeight = size.Width;
    exp.HeaderCellRotate(name, 45); // Give the rotate degree value by the user.  
    name.Style.Borders.LineStyle = Syncfusion.XlsIO.ExcelLineStyle.None;
}

```