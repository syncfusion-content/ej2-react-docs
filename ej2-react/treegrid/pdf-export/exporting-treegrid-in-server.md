---
layout: post
title: Exporting TreeGrid in server in React TreeGrid | Syncfusion
description: Learn here all about Exporting TreeGrid in server in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Exporting TreeGrid in server 
documentation: ug
domainurl: ##DomainURL##
---

# Exporting TreeGrid in server in React TreeGrid

The TreeGrid supports exporting data to PDF on the server side using the TreeGrid server export library.

## Server dependencies

The server side export functionality is provided in the Syncfusion.EJ2.TreeGridExport package, available in Essential Studio and at [nuget.org](https://www.nuget.org/). The following dependencies are required for server-side PDF export:

* Syncfusion.EJ2
* Syncfusion.EJ2.TreeGridExport

## Server configuration

The following code snippet shows an ASP.NET Core Controller Action for server configuration.

To export the TreeGrid on the server side, call the [serverPdfExport](https://ej2.syncfusion.com/react/documentation/api/treegrid/#serverpdfexport) method to pass TreeGrid properties to the server export action.

```ts

public IActionResult ServerSideExporting()
{
    var order = TreeData.GetDefaultData();
    ViewBag.dataSource = order;
    return View();
}
public IActionResult PdfExport(string treeGridModel)
{
    if (treeGridModel == null)
    {
        return View();
    }
    TreeGridPdfExport exp = new TreeGridpdfExport();
    Syncfusion.EJ2.TreeGrid.TreeGrid gridProperty = ConvertTreeGridObject(treeGridModel);
    return exp.ExportToPdf<TreeData>(gridProperty, TreeData.GetDefaultData());
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
    const toolbarOptions = ['PdfExport'];
    const pageSettings = { pageSize: 7 };
    let treegrid;
    const toolbarClick = (args) => {
       if (grid && args.item.id === 'Treegrid_pdfexport') {
            grid.serverExcelExport('Home/PdfExport');
        }
    };
    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' allowPaging={true} pageSettings={pageSettings} allowExcelExport={true} height='220' toolbarClick={toolbarClick} ref={g => treegrid = g} toolbar={toolbarOptions}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date'/>
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, PdfExport]}/>
    </TreeGridComponent>;
}
;
export default App;

```
## Rotate a header text to a certain degree in the exported TreeGrid on the server side

The TreeGrid supports customizing column header styles in the exported PDF file, such as text orientation and font color. To implement this, define the `BeginCellLayout` event of `PdfExportProperties` with an event handler to perform the required action.

The `PdfHeaderCellRendering` event is triggered while creating a column header for the PDF document. Capture the header details in this event and apply the customization in the `BeginCellLayout` event handler.

In the following demo, the `DrawString` method from `Graphics` rotates the header text of the column header inside the `BeginCellLayout` event handler.

> PDF export does not support rotating the column header on the client side.
```ts
public IActionResult PdfExport(string treeGridModel)
{
    if (treeGridModel == null)
    {
        return View();
    }
    TreeGridPdfExport exp = new TreeGridPdfExport();
    TreeGrid gridProperty = ConvertTreeGridObject(treeGridModel);
    gridProperty.PdfHeaderCellRendering = PdfHeaderQueryCellInfo;
    PdfGrid grid = new PdfGrid();
    Syncfusion.EJ2.TreeGridExport.PdfExportProperties pdfExportProperties = new Syncfusion.EJ2.TreeGridExport.PdfExportProperties();
    pdfExportProperties.IsRepeatHeader = true;
    exp.BeginCellLayout = new PdfGridBeginCellLayoutEventHandler(BeginCellEvent);
    System.Collections.IEnumerable data = Syncfusion.EJ2.Base.Dat.DataTableToJson(ViewBag.dataSource);
    var result = exp.PdfExport<dynamic>(gridProperty, data, pdfExportProperties);
    return View();
}

public void BeginCellEvent(object sender, PdfGridBeginCellLayoutEventArgs args)
{
    PdfGrid grid = (PdfGrid)sender;
    var brush = new PdfSolidBrush(new PdfColor(Color.DimGray));
    args.Graphics.Save();
    args.Graphics.TranslateTransform(args.Bounds.X + 50, args.Bounds.Height + 40); // Give the value for bounds x and Y. 
    args.Graphics.RotateTransform(-60);   // Give the rotate degree value. 
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
    Syncfusion.EJ2.TreeGridExport.PdfHeaderCellEventArgs name = (Syncfusion.EJ2.TreeGridExport.PdfHeaderCellEventArgs)pdf;
    PdfGrid grid = new PdfGrid();
    headerValues.Add(name.Column.HeaderText);
    var longestString = headerValues.Where(s => s.Length == headerValues.Max(m => m.Length)).First();
    PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 6);
    SizeF size = font.MeasureString(longestString);
    name.Headers[0].Height = size.Width * 2;
}

```

## Passing additional parameters to the server while exporting

Additional parameters can be passed to the server to customize the export process based on specific requirements.

This can be achieved using the [query](https://ej2.syncfusion.com/react/documentation/api/treegrid/#query) property and the [toolbarClick](https://ej2.syncfusion.com/react/documentation/api/treegrid/#toolbarclick) event. Within the `query` property, invoke the [addParams](https://ej2.syncfusion.com/documentation/api/data/query/#addparams) method to add parameters to the request.

The following example demonstrates passing additional parameters during PDF export within the `toolbarClick` event. In this example, the parameter **recordcount** with value **12** is passed using `addParams` and shown as a message.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/refresh-cs13/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/refresh-cs13/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/refresh-cs13/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/refresh-cs13/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/refresh-cs13" %}