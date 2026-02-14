---
layout: post
title: React Grid - Server-Side Export | Syncfusion
description: React Grid server‑side Excel export enables backend workbook generation, endpoint setup, and scalable large‑data exports without blocking clients.
control: Server-side Export
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Server-Side Excel Export

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component provides server-side Excel export functionality using the Grid server export library. This approach enables Excel export operations to execute on the server, delivering enhanced security and flexibility. Server-side export requires configuring server dependencies and implementing the necessary server configuration.

> For client-side Excel export setup, refer to the [Excel Export Feature Guide](https://ej2.syncfusion.com/react/documentation/grid/excel-export/excel-exporting).

## Server dependencies

Server-side export functionality for the Grid component requires specific dependencies to handle the export process on the server.

| **Dependency** | **Description** |
|---|---|
| `Syncfusion.EJ2` | Core package containing main components and functionalities of Syncfusion Essential JS 2. |
| `Syncfusion.EJ2.GridExport` | Server-side export functionality package for Grid component, providing APIs and tools to handle Excel data export. |

## Server configuration

Server configuration for Grid Excel export requires the following setup using an ASP.NET Core Controller Action:

| **Step** | **Action** | **Description** |
|---|---|---|
| 1 | Set up dependencies | Import necessary server-side dependencies and libraries. |
| 2 | Define controller action | Create action to receive Grid properties from client and initiate server export. |
| 3 | Call serverExcelExport | Use [serverExcelExport](https://ej2.syncfusion.com/react/documentation/api/grid#serverexcelexport) method to pass Grid properties to server action URL. |

The following example demonstrates server configuration using ASP.NET Core Controller Action:

```ts
public ActionResult ExcelExport([FromForm] string gridModel)
{
  GridExcelExport exp = new GridExcelExport();
  Grid gridProperty = ConvertGridObject(gridModel);
  return exp.ExcelExport<OrdersDetails>(gridProperty, OrdersDetails.GetAllRecords());
}

private Grid ConvertGridObject(string gridProperty)
{
  Grid GridModel = (Grid)Newtonsoft.Json.JsonConvert.DeserializeObject(gridProperty, typeof(Grid));
  GridColumnModel cols = (GridColumnModel)Newtonsoft.Json.JsonConvert.DeserializeObject(gridProperty, typeof(GridColumnModel));
  GridModel.Columns = cols.columns;
  return GridModel;
}
public class GridColumnModel
{
  public List<GridColumn> columns { get; set; }
}
public IActionResult UrlDatasource([FromBody]DataManagerRequest dm)
{
  IEnumerable DataSource = OrdersDetails.GetAllRecords();
  DataOperations operation = new DataOperations();
  int count = DataSource.Cast<OrdersDetails>().Count();
  return dm.RequiresCounts ? Json(new { result = DataSource, count = count }) : Json(DataSource);
}
```

In the client side, call the `serverExcelExport` method with the server action URL inside the `toolbarClick` event.

```ts
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, GridComponent, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { Grid, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';

function App() {
  let grid: Grid | null;
  const dataManager: DataManager = new DataManager({
    adaptor: new UrlAdaptor(),
    url: "Home/UrlDatasource"
  });
  const toolbar: ToolbarItems[] = ['ExcelExport'];
  const toolbarClick = (args: ClickEventArgs) => {
    if (grid && args.item.id === 'Grid_excelexport') {
      grid.serverExcelExport('Home/ExcelExport');
    }
  }
  return (
    <div>
      <GridComponent id='Grid' dataSource={dataManager} height={270} toolbar={toolbar} toolbarClick={toolbarClick} ref={g => grid = g}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
        </ColumnsDirective>
        <Inject services={[Toolbar]} />
      </GridComponent>
    </div>
  );
};
export default App;
```

> Refer to the GitHub sample for quick implementation and testing from [here](https://github.com/SyncfusionExamples/React-EJ2-Grid-server-side-exporting).

## CSV export in server side

The Grid component provides powerful server-side CSV export capabilities using the [serverCsvExport](https://ej2.syncfusion.com/react/documentation/api/grid#servercsvexport) method, enabling seamless export operations with enhanced server-side processing and CSV file generation.

To initiate CSV export, invoke the `serverCsvExport` method within the [toolbarClick](https://ej2.syncfusion.com/react/documentation/api/grid#toolbarclick) event. The server deserialize Grid properties and passes them to the `CsvExport` method, which handles exporting the properties to CSV format.

The following example demonstrates server-side CSV export implementation:

```ts
public ActionResult CsvGridExport([FromForm] string gridModel)
{
  GridExcelExport exp = new GridExcelExport();
  Grid gridProperty = ConvertGridObject(gridModel);
  return exp.CsvExport<OrdersDetails>(gridProperty, OrdersDetails.GetAllRecords());
}

public IActionResult UrlDatasource([FromBody]DataManagerRequest dm)
{
  IEnumerable DataSource = OrdersDetails.GetAllRecords();
  DataOperations operation = new DataOperations();
  int count = DataSource.Cast<OrdersDetails>().Count();
  return dm.RequiresCounts ? Json(new { result = DataSource, count = count }) : Json(DataSource);
}
```

> For the `ConvertGridObject` method implementation, refer to the [Server configuration](#server-configuration) section above.

```ts
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, GridComponent, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { Grid, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';

function App() {
  let grid: Grid | null;
  const dataManager: DataManager = new DataManager({
    adaptor: new UrlAdaptor(),
    url: "Home/UrlDatasource"
  });
  const toolbar: ToolbarItems[] = ['CsvExport'];
  const toolbarClick = (args: ClickEventArgs) => {
    if (grid && args.item.id === 'grid_csvexport') {
        grid.serverCsvExport('Home/CsvGridExport');
    }
  }
      return (
      <div>
        <GridComponent id='grid' dataSource={dataManager} height={270} toolbar={toolbar} toolbarClick={toolbarClick} ref={g=> grid = g}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right'/>
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
            <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
            <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
        </ColumnsDirective>
        <Inject services={[Toolbar]}/>
      </GridComponent>
    </div>
    );
};
export default App;
```

## Export Grid as memory stream

The Grid component delivers flexible memory stream export capabilities, allowing data export as a memory stream for advanced processing instead of direct browser downloads. This powerful feature enables seamless integration with backend systems and custom file handling workflows. To obtain the memory stream of exported Grid data, set the `AsMemoryStream` parameter to `true` in the [ExcelExport](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.GridExport.GridExcelExport.html#Syncfusion_EJ2_GridExport_GridExcelExport_ExcelExport__1_Syncfusion_EJ2_Grids_Grid_System_Collections_IEnumerable_System_Boolean_Syncfusion_EJ2_GridExport_ExcelExportProperties_) and [CsvExport](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.GridExport.GridExcelExport.html#Syncfusion_EJ2_GridExport_GridExcelExport_CsvExport__1_Syncfusion_EJ2_Grids_Grid_System_Collections_IEnumerable_System_Boolean_Syncfusion_EJ2_GridExport_ExcelExportProperties_) methods.

The following example demonstrates obtaining the memory stream of exported grid data:

```ts
public object ExcelExport(string gridModel)
{
    GridExcelExport exp = new GridExcelExport();
    Grid gridProperty = ConvertGridObject(gridModel);
    // pass third parameter as true to get the Memory Stream of exported grid data
    return (MemoryStream)exp.ExcelExport<OrdersDetails>(gridProperty, OrderRepository.GetAllRecords(), true);
}

public object CsvExport(string gridModel)
{
    GridExcelExport exp = new GridExcelExport();
    Grid gridProperty = ConvertGridObject(gridModel);
    return (MemoryStream)exp.CsvExport<OrdersDetails>(gridProperty, OrderRepository.GetAllRecords(), true);
}

```

> For the `ConvertGridObject` method implementation, refer to the [Server configuration](#server-configuration) section above.

## Merge Grid memory stream

The powerful [Essential XlsIO](https://help.syncfusion.com/file-formats/xlsio/overview) library enables seamless merging of multiple memory streams into a single stream, providing efficient data consolidation capabilities for complex export scenarios. For comprehensive information about merge options and advanced worksheet manipulation, refer to the [XlsIO documentation](https://help.syncfusion.com/file-formats/xlsio/working-with-excel-worksheet#move-or-copy-a-worksheet).

The Grid's memory stream can be merged with an existing memory stream, file stream, or local file using the following flexible approaches.

### Merge with existing memory stream

Memory stream merging provides efficient data consolidation capabilities. To merge the Grid's memory stream with an existing memory stream, use the `ExcelEngine` and `AddCopy` method of Worksheets directly.

The following example demonstrates merging the Grid's memory stream with an existing memory stream.

```ts
using Syncfusion.XlsIO;

public MemoryStream ms1; // defines existing memory stream

public object ExcelExport(string gridModel)
{
    GridExcelExport exp = new GridExcelExport();
    Grid gridProperty = ConvertGridObject(gridModel);
    // get the memory stream of exported grid data
    MemoryStream ms2 = (MemoryStream)exp.ExcelExport<OrdersDetails>(gridProperty, OrderRepository.GetAllRecords(), true);
    //New instance of ExcelEngine is created equivalent to launching Microsoft Excel with no workbooks open
    ExcelEngine excelEngine = new ExcelEngine();
    //Instantiate the Excel application object
    IApplication application = excelEngine.Excel;
    //Assigns default application version
    application.DefaultVersion = ExcelVersion.Xlsx;
    //open an workbook of existing memory stream and grid's memory stream through Open method of IWorkbooks
    IWorkbook sourceWorkbook = application.Workbooks.Open(ms1);
    IWorkbook destinationWorkbook = application.Workbooks.Open(ms2);

    //Copy all the worksheet from the Source workbook to the destination workbook
    for (int i = 0; i < sourceWorkbook.Worksheets.Count; i++)
    {
        destinationWorkbook.Worksheets.AddCopy(sourceWorkbook.Worksheets[i]);
    }
    destinationWorkbook.ActiveSheetIndex = 1;
    //Saving the workbook as stream
    MemoryStream ms3 = new MemoryStream();
    destinationWorkbook.SaveAs(ms3);
    ms3.Position = 0;
    //Dispose the instance of ExcelEngine
    excelEngine.Dispose();
    //Dispose the streams.
    ms1.Dispose();
    ms2.Dispose();
    return ms3;
}

```

### Merge with existing file stream

File stream integration enables seamless merging with existing file resources. To merge the Grid's memory stream with an existing file stream, directly use the file stream in the merge operation.

The following example demonstrates merging with an existing file stream:

```ts
using Syncfusion.XlsIO;

public FileStream fs1; // defines existing file stream

public object ExcelExport(string gridModel)
{
    GridExcelExport exp = new GridExcelExport();
    Grid gridProperty = ConvertGridObject(gridModel);
    MemoryStream ms1 = (MemoryStream)exp.ExcelExport<OrdersDetails>(gridProperty, OrderRepository.GetAllRecords(), true);
    ExcelEngine excelEngine = new ExcelEngine();
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    //fs1 and ms1 represents the existing stream and grid's stream.
    IWorkbook sourceWorkbook = application.Workbooks.Open(fs1);
    IWorkbook destinationWorkbook = application.Workbooks.Open(ms1);

    for (int i = 0; i < sourceWorkbook.Worksheets.Count; i++)
    {
        destinationWorkbook.Worksheets.AddCopy(sourceWorkbook.Worksheets[i]);
    }
    destinationWorkbook.ActiveSheetIndex = 1;
    //Saving the workbook as stream
    MemoryStream ms3 = new MemoryStream();
    destinationWorkbook.SaveAs(ms3);
    ms3.Position = 0;
    return ms3;
}

```

### Merge with local file

Local file integration provides flexible merge capabilities. To merge a local file with the Grid's memory stream, first convert the local file into a file stream.

The following example demonstrates merging with a local file:

```ts
using Syncfusion.XlsIO;

// get the file stream of local file
public FileStream fs1 = new FileStream("D:/ExcelDoc.xlsx", FileMode.Open, FileAccess.Read); // ExcelDoc.xlsx is a local file which is located in local disk D.

public object ExcelExport(string gridModel)
{
    GridExcelExport exp = new GridExcelExport();
    Grid gridProperty = ConvertGridObject(gridModel);
    MemoryStream ms1 = (MemoryStream)exp.ExcelExport<OrdersDetails>(gridProperty, OrderRepository.GetAllRecords(), true);
    ExcelEngine excelEngine = new ExcelEngine();
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    //fs1 and ms1 represents the local file's stream and grid's stream.
    IWorkbook sourceWorkbook = application.Workbooks.Open(fs1);
    IWorkbook destinationWorkbook = application.Workbooks.Open(ms1);
    for (int i = 0; i < sourceWorkbook.Worksheets.Count; i++)
    {
        destinationWorkbook.Worksheets.AddCopy(sourceWorkbook.Worksheets[i]);
    }
    destinationWorkbook.ActiveSheetIndex = 1;
    MemoryStream ms3 = new MemoryStream();
    destinationWorkbook.SaveAs(ms3);
    ms3.Position = 0;
    return ms3;
}

```

### Download merged memory stream

Download capabilities enable seamless file delivery to end users. The merged memory stream can be downloaded by converting it into a `FileStreamResult`.

The following example demonstrates downloading the merged memory stream to the browser:

```ts
using Syncfusion.XlsIO;

public ActionResult ExcelExport(string gridModel)
{
    ExcelEngine excelEngine = new ExcelEngine();
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    //open an workbook of streams through Open method of IWorkbooks
    IWorkbook sourceWorkbook = application.Workbooks.Open(ms1);
    IWorkbook destinationWorkbook = application.Workbooks.Open(ms2);
    for (int i = 0; i < sourceWorkbook.Worksheets.Count; i++)
    {
        destinationWorkbook.Worksheets.AddCopy(sourceWorkbook.Worksheets[i]);
    }
    destinationWorkbook.ActiveSheetIndex = 1;
    MemoryStream ms3 = new MemoryStream();
    destinationWorkbook.SaveAs(ms3);
    ms3.Position = 0;
    // Save the MemoryStream into FileStreamResult
    FileStreamResult fileStreamResult = new FileStreamResult(ms3, "Application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");

    fileStreamResult.FileDownloadName = "Export.xlsx";
    //Dispose the instance of ExcelEngine
    excelEngine.Dispose();
    //Dispose the streams.
    ms1.Dispose();
    ms2.Dispose();
    // return the file
    return fileStreamResult;
}

```

## Rotate header text in exported Grid on server side

The Grid component delivers powerful server-side customization capabilities for column header styles in exported Excel files, including advanced text orientation, font color, and comprehensive visual styling options. This feature enhances the professional appearance of exported data and creates highly customized Grid representations in Excel documents.

To customize column headers, use the [excelHeaderQueryCellInfo](https://ej2.syncfusion.com/react/documentation/api/grid#excelheaderquerycellinfo) event of the Grid. This event triggers when creating column headers for the Excel document during server-side export, allowing collection of column header details and handling of customizations.

The following example demonstrates rotating header text of column headers in the exported Excel document using the `HeaderCellRotate` method of the `GridExcelExport` class in the `ServerExcelHeaderQueryCellInfo` event:

```ts
public ActionResult ExcelExport(string gridModel)
{
    GridExcelExport exp = new GridExcelExport();
    Grid gridProperty = ConvertGridObject(gridModel);
    gridProperty.ServerExcelHeaderQueryCellInfo = ExcelHeaderQueryCellInfo;
    IEnumerable data = Utils.DataTableToJson(dt);
    var result = exp.ExcelExport<dynamic>(gridProperty, data);
    return result;
}
private void ExcelHeaderQueryCellInfo(object excel)
{
    ServerExcelHeaderQueryCellInfoEventArgs name = (ServerExcelHeaderQueryCellInfoEventArgs)excel;
    headerValues.Add(name.Column.HeaderText);
    var longestString = headerValues.Where(s => s.Length == headerValues.Max(m => m.Length)).First();
    GridExcelExport exp = new GridExcelExport();
    var size = exp.ExcelTextSize(name.Style.Font.FontName, (float)name.Style.Font.Size, longestString);
    name.Cell.RowHeight = size.Width;
    exp.HeaderCellRotate(name, 45); // Give the rotate degree value by the user.  
    name.Style.Borders.LineStyle = Syncfusion.XlsIO.ExcelLineStyle.None;
}
```

## Limitations

* The export feature for detail and caption templates is not supported in server-side exporting.
* Multiple grids exporting feature is not supported with server side exporting.
