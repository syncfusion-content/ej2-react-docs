---
layout: post
title: Exporting grid in server in React Grid component | Syncfusion
description: Learn here all about Exporting grid in server in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Exporting grid in server 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Exporting Grid in Server in React Grid Component

The Grid component provides an option to export grid data to a PDF document on the server side using the Grid server export library. This allows you to perform PDF export operations on the server, providing additional security and flexibility. To enable server-side PDF exporting, you need to configure the server dependencies and implement the necessary server configuration.

## Server dependencies

To enable server-side PDF exporting in the Syncfusion React Grid component, you need to include the following dependencies:

* Syncfusion.EJ2
* Syncfusion.EJ2.GridExport

These dependencies are available in the Essential Studio package and can also be obtained from [nuget.org](https://www.nuget.org/).

## Server configuration

To export the grid data to a PDF document on the server side, you need to perform the following server configuration using an ASP.NET Core Controller Action:

1. Set up the necessary dependencies and imports in your server-side code.

2. Define a controller action that handles the server-side PDF export. This action should receive the Grid properties from the client-side and initiate the PDF export operation on the server.

3. Use the [serverPdfExport](https://ej2.syncfusion.com/react/documentation/api/grid/#serverpdfexport) method to pass the Grid properties to the server exporting action. This method allows you to specify the server action URL and other export options.

The following code snippet shows server configuration using ASP.NET Core Controller Action.

```ts
  public ActionResult PdfExport([FromForm] string gridModel)
  {
    GridPdfExport exp = new GridPdfExport();
    Grid gridProperty = ConvertGridObject(gridModel);
    return exp.PdfExport<OrdersDetails>(gridProperty, OrdersDetails.GetAllRecords());
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
  const toolbar: ToolbarItems[] = ['PdfExport'];
  const toolbarClick = (args: ClickEventArgs) => {
    if (grid && args.item.id === 'grid_pdfexport') {
        grid.serverPdfExport('Home/PdfExport');
    }
  }
  return (
    <div>
      <GridComponent id='grid' dataSource={dataManager} height={270} toolbar={toolbar} toolbarClick={toolbarClick} ref={g=> grid = g}>
      <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right'/>
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='Freight' format="C2" width='100' textAlign='Right'/>
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
          <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
      </ColumnsDirective>
      <Inject services={[Toolbar]}/>
    </GridComponent>
  </div>
  );
}
export default App;
```
> Note: Refer to the GitHub sample for quick implementation and testing from [here](https://github.com/SyncfusionExamples/React-EJ2-Grid-server-side-exporting).

## Export grid as memory stream

The Grid offers an option to export the data as a memory stream instead of downloading it as a file in the browser. To obtain the memory stream of the exported grid, set the `AsMemoryStream` parameter to **true** in the [PdfExport](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.GridExport.GridPdfExport.html#Syncfusion_EJ2_GridExport_GridPdfExport_PdfExport__1_Syncfusion_EJ2_Grids_Grid_System_Collections_IEnumerable_System_Boolean_Syncfusion_EJ2_GridExport_PdfExportProperties_) method.

The following code demonstrates how to get the memory stream of exported grid.

```ts
public object PdfExport(string gridModel)
{
    GridPdfExport exp = new GridPdfExport();
    Grid gridProperty = ConvertGridObject(gridModel);
    // pass third parameter as true to get the Memory Stream of exported grid data
    return (MemoryStream)exp.PdfExport<OrdersDetails>(gridProperty, OrdersDetails.GetAllRecords(), true);
}

```

## Merge grid's memory stream

The [Essential PDF](https://help.syncfusion.com/file-formats/pdf/overview) library is used to merge multiple memory streams into a single stream. To learn more about the merge option, please refer to this [documentation](https://help.syncfusion.com/file-formats/pdf/merge-documents).

You can merge a memory stream, a file stream, and a local file with the Grid's memory stream in the following ways:

### Merging with an existing memory stream

If you already have a memory stream, you can directly use it to merge with the Grid's memory stream.

In the following code, the [Merge](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.PdfDocumentBase.html#Syncfusion_Pdf_PdfDocumentBase_Merge_Syncfusion_Pdf_PdfDocumentBase_Syncfusion_Pdf_Parsing_PdfLoadedDocument_) method of the [PdfDocumentBase](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.PdfDocumentBase.html) class is used to merge the grid's memory stream with an existing memory stream.

```ts
using Syncfusion.Pdf;

public MemoryStream ms1; // defines existing memory stream

public object PdfExport(string gridModel)
{
    GridPdfExport exp = new GridPdfExport();
    Grid gridProperty = ConvertGridObject(gridModel);
    // get the memory stream of exported grid data
    MemoryStream ms2 = (MemoryStream)exp.PdfExport<OrdersDetails>(gridProperty, OrdersDetails.GetAllRecords(), true);
    //Creates a PDF document.
    PdfDocument finalDoc = new PdfDocument();
    //Creates a PDF stream for merging. ms1 and ms2 represents the existing stream and grid's stream.
    Stream[] streams = { ms1, ms2 };
    //Merges PDFDocument.
    PdfDocumentBase.Merge(finalDoc, streams);
    //Save the document into stream.
    MemoryStream ms3 = new MemoryStream();
    finalDoc.Save(ms3);    
    ms3.Position = 0;
    //Close the document.
    finalDoc.Close(true);
    //Dispose the streams.
    ms1.Dispose();
    ms2.Dispose();
    return ms3;
}

```

### Merging with an existing file stream

If you already have a file stream, you can directly use it to merge with the Grid's memory stream. In the following code, the existing file stream is merged with the Grid's memory stream.

```ts
using Syncfusion.Pdf;

public FileStream fs1; // defines existing file stream

public ActionResult PdfExport(string gridModel)
{
    GridPdfExport exp = new GridPdfExport();
    Grid gridProperty = ConvertGridObject(gridModel);
    MemoryStream ms1 = (MemoryStream)exp.PdfExport<OrdersDetails>(gridProperty, OrdersDetails.GetAllRecords(), true);
    PdfDocument finalDoc = new PdfDocument();
    //fs1 and ms1 represents the existing stream and grid's stream.
    Stream[] streams = { fs1, ms1 };
    PdfDocumentBase.Merge(finalDoc, streams);
    MemoryStream ms3 = new MemoryStream();
    finalDoc.Save(ms3);    
    ms3.Position = 0;
    return ms3;
}

```

### Merging with a local file

To merge a local file with the Grid's memory stream, you need to convert it into a file stream before merging. In the following code, the existing local file is merged with the Grid's memory stream.

```ts
using Syncfusion.Pdf;

// get the file stream of local file
public FileStream fs1 = new FileStream("D:/PdfDoc.pdf", FileMode.Open, FileAccess.Read); // PdfDoc.pdf is a local file which is located in local disk D.

public ActionResult PdfExport(string gridModel)
{
    GridPdfExport exp = new GridPdfExport();
    Grid gridProperty = ConvertGridObject(gridModel);
    MemoryStream ms1 = (MemoryStream)exp.PdfExport<OrdersDetails>(gridProperty, OrdersDetails.GetAllRecords(), true);
    PdfDocument finalDoc = new PdfDocument();
    //fs1 and ms1 represents the local file's stream and grid's stream.
    Stream[] streams = { fs1, ms1 };
    PdfDocumentBase.Merge(finalDoc, streams);
    MemoryStream ms3 = new MemoryStream();
    finalDoc.Save(ms3);    
    ms3.Position = 0;
    return ms3;
}

```

### Downloading the merged memory stream

You can download the merged memory stream by converting it into a `FileStreamResult`. In the following code, the merged memory stream is downloaded to the browser.

```ts
using Syncfusion.Pdf;

public ActionResult PdfExport(string gridModel)
{
    PdfDocument finalDoc = new PdfDocument();
    //ms1 and ms2 represents the streams needs to merge.
    Stream[] streams = { ms1, ms2 };
    PdfDocumentBase.Merge(finalDoc, streams);
    MemoryStream ms3 = new MemoryStream();
    finalDoc.Save(ms3);
    ms3.Position = 0;
    // Save the MemoryStream into FileStreamResult
    FileStreamResult fileStreamResult = new FileStreamResult(ms3, "application/pdf");
    fileStreamResult.FileDownloadName = "Export.pdf";
    //Close the document.
    finalDoc.Close(true);
    //Dispose the streams.
    ms1.Dispose();
    ms2.Dispose();
    // return the file
    return fileStreamResult;
}

```

## Rotate a header text to a certain degree in the exported grid on the server side

1. The [PdfHeaderQueryCellInfo](https://ej2.syncfusion.com/react/documentation/api/grid#pdfheaderquerycellinfo) event is triggered when creating a column header for the PDF document to be exported. In this event, you can collect the column header details and handle customizations.

2. In the `BeginCellLayout` event handler, you can use the `Graphics.DrawString` method to rotate the header text to the desired degree, will be triggered when creating a column header for the PDF document to be exported. Collect the column header details in this event and handle the custom in the `BeginCellLayout` event handler.

In the following demo, the `DrawString` method from the `Graphics` is used to rotate the header text of the column header inside the `BeginCellLayout` event handler.

> A PDF exporting is not supported to rotate the column header on the client side.

```ts
const ActionResult PdfExport(string gridModel)
{
    GridPdfExport exp = new GridPdfExport();
    Grid gridProperty = ConvertGridObject(gridModel);
    gridProperty.ServerPdfHeaderQueryCellInfo = PdfHeaderQueryCellInfo;
    PdfGrid grid = new PdfGrid();
    PdfExportProperties pdfExportProperties = new PdfExportProperties();
    pdfExportProperties.IsRepeatHeader = true;
    pdfExportProperties.BeginCellLayout = new PdfGridBeginCellLayoutEventHandler(BeginCellEvent);
    gridProperty.ServerPdfQueryCellInfo = PdfQueryCellInfo;
    IEnumerable data = Utils.DataTableToJson(dt);
    var result = exp.PdfExport<dynamic>(gridProperty, data, pdfExportProperties);
    return result;
}
public void BeginCellEvent(object sender, PdfGridBeginCellLayoutEventArgs args)
{
    PdfGrid grid = (PdfGrid)sender;
    var brush = new PdfSolidBrush(new PdfColor(Color.DimGray));
    args.Graphics.Save();
    args.Graphics.TranslateTransform(args.Bounds.X + 50, args.Bounds.Height + 40); // give the value for bounds x and Y by the user
    args.Graphics.RotateTransform(-60);   // give the rotate degree value by the user
    // Draw the text at particular bounds.
    args.Graphics.DrawString(headerValues[args.CellIndex], new PdfStandardFont(PdfFontFamily.Helvetica, 10), brush, new PointF(0, 0));
    if (args.IsHeaderRow)
        {
            grid.Headers[0].Cells[args.CellIndex].Value = string.Empty;
        }
    args.Graphics.Restore();
}
private void PdfHeaderQueryCellInfo(object pdf)
{
    ServerPdfHeaderQueryCellInfoEventArgs name = (ServerPdfHeaderQueryCellInfoEventArgs)pdf;
    PdfGrid grid = new PdfGrid();
    headerValues.Add(name.Column.HeaderText);
    var longestString = headerValues.Where(s => s.Length == headerValues.Max(m => m.Length)).First();
    PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 6);
    SizeF size = font.MeasureString(longestString);
    name.Headers[0].Height = size.Width * 2;
}
```

## Passing additional parameters to the server while exporting

Passing additional parameters to the server when exporting data in the Syncfusion React Grid involves providing flexibility to include extra information or customize the export process based on specific requirements.

You can achieve this by utilizing the [query](https://ej2.syncfusion.com/react/documentation/api/grid/#query) property and the [toolbarClick](https://ej2.syncfusion.com/react/documentation/api/grid/#toolbarclick) event. Within the `query` property, you can invoke the `addParams` method to add parameters to the request.

The following example demonstrates how to pass additional parameters to the server when PDF exporting within the `toolbarClick` event. Within the event, the additional parameters, specifically **recordcount** as **15**, are passed using the addParams method and displayed as a message.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/pdf-export-cs26/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/pdf-export-cs26/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/pdf-export-cs26/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/pdf-export-cs26/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/pdf-export-cs26" %}

## Limitations

* The export feature for detail and caption templates is not supported in server-side exporting.
* Multiple grids exporting feature is not supported with server side exporting.