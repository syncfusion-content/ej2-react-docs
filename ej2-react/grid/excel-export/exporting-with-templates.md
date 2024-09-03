---
layout: post
title: Exporting templates in React Grid component | Syncfusion
description: Learn here all about Exporting grids with templates in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Exporting grid with templates
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Exporting grid with templates in React Grid control

The grid offers the option to export the column, detail, and caption templates to an Excel document. The template contains images, hyperlinks, and customized text.

## Exporting with column template

The Excel export functionality allows you to export Grid columns that include images, hyperlinks, and custom text to an Excel document.

In the following sample, the hyperlinks and images are exported to Excel using [hyperlink](https://ej2.syncfusion.com/react/documentation/api/grid/excelQueryCellInfoEventArgs/#hyperlink) and [image](https://ej2.syncfusion.com/react/documentation/api/grid/excelQueryCellInfoEventArgs/#image) properties in the [excelQueryCellInfo](https://ej2.syncfusion.com/react/documentation/api/grid/#excelquerycellinfo) event.

> Excel Export supports base64 string to export the images.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-template-export-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-template-export-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-template-export-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-template-export-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-template-export-cs2" %}

![ColumnTemplateExport](../images/colTemp_excel_expt.gif)

## Exporting with detail template

By default, the grid will export the parent grid with expanded detail rows alone. Change the exporting option by using the `ExcelExportProperties.hierarchyExportMode` property. The available options are:

| Mode     | Behavior    |
|----------|-------------|
| Expanded | Exports the parent grid with expanded detail rows. |
| All      | Exports the parent grid with all the detail rows. |
| None     | Exports the parent grid alone. |

The detail rows in the exported Excel can be customized or formatted using the [exportDetailTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/#exportdetailtemplate) event. In this event, the detail rows of the Excel document are formatted in accordance with their parent row details.

In the following sample, the detail row content is formatted by specifying the [columnHeader](https://ej2.syncfusion.com/react/documentation/api/grid/detailTemplateProperties/#columnheader) and [rows](https://ej2.syncfusion.com/react/documentation/api/grid/detailTemplateProperties/#rows) properties using its [parentRow](https://ej2.syncfusion.com/react/documentation/api/grid/exportDetailTemplateEventArgs/#parentrow) details. This allows for the creation of detail rows in the Excel document. Additionally, custom styles can be applied to specific cells using the [style](https://ej2.syncfusion.com/react/documentation/api/grid/detailTemplateCell/#style) property.

> When using [rowSpan](https://ej2.syncfusion.com/react/documentation/api/grid/detailTemplateCell/#rowspan), it is essential to provide the cell's [index](https://ej2.syncfusion.com/react/documentation/api/grid/detailTemplateCell/#index) for proper functionality.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent, DetailRow, Inject,
  ExcelExport, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { employeeData } from './datasource';

function App() {
  let grid;
  const toolbar = ['ExcelExport'];
  const gridTemplate = (props) => {
    return (
      <table className="detailtable" width="100%">
        <colgroup>
          <col style={{ width: '40%' }} />
          <col style={{ width: '60%' }} />
        </colgroup>
        <thead>
          <tr>
            <th
              colSpan={2}
              style={{
                fontWeight: 500,
                textAlign: 'center',
                backgroundColor: '#ADD8E6',
              }}
            >
              Product Details
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={4} className="photo" style={{ textAlign: 'center' }}>
              <img
                src={'data:image/jpeg;base64,' + props.ProductImg}
                alt={props.EmployeeID}
              />
            </td>
            <td>
              <span style={{ fontWeight: 500, color: '#0A76FF' }}>
                Offers: {props.Offers}
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Available: {props.Available} </span>
            </td>
          </tr>
          <tr>
            <td>
              <span className="link">
                Contact: <a href={'mailto:' + props.Contact}>{props.Contact}</a>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ fontWeight: 500, color: '#0A76FF' }}>
                Ratings: {props.Ratings}
              </span>
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>
              <span> {props.productDesc}</span>
            </td>
            <td>
              <span>{props.ReturnPolicy}</span>
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>
              <span style={{ fontWeight: 500 }}> {props.Cost}</span>
            </td>
            <td>
              <span>{props.Cancellation}</span>
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>
              <span className={props.Status} style={{ fontWeight: 500 }}>
                {' '}
                {props.Status}
              </span>
            </td>
            <td>
              <span style={{ fontWeight: 500, color: '#0A76FF' }}>
                {props.Delivery}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  const toolbarClick = (args) => {
    if (grid && args['item'].id === 'DetailTemplateGrid_excelexport') {
      grid.excelExport({
        hierarchyExportMode: 'Expanded',
      });
    }
  };
  const exportDetailTemplate = (args) => {
    args.value = {
      columnHeader: [
        {
          cells: [
            {
              index: 0,
              colSpan: 2,
              value: 'Product Details',
              style: {
                backColor: '#ADD8E6',
                excelHAlign: 'Center',
                bold: true,
              },
            },
          ],
        },
      ],
      rows: [
        {
          cells: [
            {
              index: 0,
              rowSpan: 4,
              image: {
                base64: args.parentRow.data['ProductImg'],
                height: 80,
                width: 100,
              },
            },
            {
              index: 1,
              value: 'Offers: ' + args.parentRow.data['Offers'],
              style: { bold: true, fontColor: '#0a76ff' },
            },
          ],
        },
        {
          cells: [
            {
              index: 1,
              value: 'Available: ' + args.parentRow.data['Available'],
            },
          ],
        },
        {
          cells: [
            {
              index: 1,
              value: 'Contact: ',
              hyperLink: {
                target: 'mailto:' + args.parentRow.data['Contact'],
                displayText: args.parentRow.data['Contact'],
              },
            },
          ],
        },
        {
          cells: [
            {
              index: 1,
              value: 'Ratings: ' + args.parentRow.data['Ratings'],
              style: { bold: true, fontColor: '#0a76ff' },
            },
          ],
        },
        {
          cells: [
            {
              index: 0,
              value: args.parentRow.data['productDesc'],
              style: { excelHAlign: 'Center' },
            },
            { index: 1, value: args.parentRow.data['ReturnPolicy'] },
          ],
        },
        {
          cells: [
            {
              index: 0,
              value: args.parentRow.data['Cost'],
              style: { excelHAlign: 'Center', bold: true },
            },
            { index: 1, value: args.parentRow.data['Cancellation'] },
          ],
        },
        {
          cells: [
            {
              index: 0,
              value: args.parentRow.data['Status'],
              style: {
                bold: true,
                fontColor: args.parentRow.data['Status'] === 'Available' ? '#00FF00' : '#FF0000',
                excelHAlign: 'Center',
              },
            },
            {
              index: 1,
              value: args.parentRow.data['Delivery'],
              style: { bold: true, fontColor: '#0a76ff' },
            },
          ],
        },
      ],
    };
  };
  
  return (
    <div>
      <GridComponent id="DetailTemplateGrid" ref={(g) => (grid = g)} dataSource={employeeData}
        detailTemplate={gridTemplate} toolbar={toolbar} allowExcelExport={true}
        toolbarClick={toolbarClick} exportDetailTemplate={exportDetailTemplate} height="315">
        <ColumnsDirective>
          <ColumnDirective field="Category" headerText="Category" width="140" />
          <ColumnDirective field="ProductID" headerText="Product ID" width="120" />
          <ColumnDirective headerText="Status" field="Status" width="200" />
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
import { ColumnDirective, ColumnsDirective, GridComponent, DetailRow, Inject,
  ExcelExport, Toolbar, Grid, ToolbarItems, ExportDetailTemplateEventArgs } from '@syncfusion/ej2-react-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import * as React from 'react';
import { employeeData } from './datasource';

function App() {
  let grid: Grid | null;
  const toolbar: ToolbarItems[] = ['ExcelExport'];
  const gridTemplate = (props: any) => {
    return (
      <table className="detailtable" width="100%">
        <colgroup>
          <col style={{ width: '40%' }} />
          <col style={{ width: '60%' }} />
        </colgroup>
        <thead>
          <tr>
            <th
              colSpan={2}
              style={{
                fontWeight: 500,
                textAlign: 'center',
                backgroundColor: '#ADD8E6',
              }}
            >
              Product Details
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={4} className="photo" style={{ textAlign: 'center' }}>
              <img
                src={'data:image/jpeg;base64,' + props.ProductImg}
                alt={props.EmployeeID}
              />
            </td>
            <td>
              <span style={{ fontWeight: 500, color: '#0A76FF' }}>
                Offers: {props.Offers}
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Available: {props.Available} </span>
            </td>
          </tr>
          <tr>
            <td>
              <span className="link">
                Contact: <a href={'mailto:' + props.Contact}>{props.Contact}</a>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ fontWeight: 500, color: '#0A76FF' }}>
                Ratings: {props.Ratings}
              </span>
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>
              <span> {props.productDesc}</span>
            </td>
            <td>
              <span>{props.ReturnPolicy}</span>
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>
              <span style={{ fontWeight: 500 }}> {props.Cost}</span>
            </td>
            <td>
              <span>{props.Cancellation}</span>
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>
              <span className={props.Status} style={{ fontWeight: 500 }}>
                {' '}
                {props.Status}
              </span>
            </td>
            <td>
              <span style={{ fontWeight: 500, color: '#0A76FF' }}>
                {props.Delivery}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  const toolbarClick = (args: ClickEventArgs) => {
    if (grid && args['item'].id === 'DetailTemplateGrid_excelexport') {
      grid.excelExport({
        hierarchyExportMode: 'Expanded',
      });
    }
  };
  const exportDetailTemplate = (args: ExportDetailTemplateEventArgs) => {
    args.value = {
      columnHeader: [
        {
          cells: [
            {
              index: 0,
              colSpan: 2,
              value: 'Product Details',
              style: {
                backColor: '#ADD8E6',
                excelHAlign: 'Center',
                bold: true,
              },
            },
          ],
        },
      ],
      rows: [
        {
          cells: [
            {
              index: 0,
              rowSpan: 4,
              image: {
                base64: args.parentRow.data['ProductImg'],
                height: 80,
                width: 100,
              },
            },
            {
              index: 1,
              value: 'Offers: ' + args.parentRow.data['Offers'],
              style: { bold: true, fontColor: '#0a76ff' },
            },
          ],
        },
        {
          cells: [
            {
              index: 1,
              value: 'Available: ' + args.parentRow.data['Available'],
            },
          ],
        },
        {
          cells: [
            {
              index: 1,
              value: 'Contact: ',
              hyperLink: {
                target: 'mailto:' + args.parentRow.data['Contact'],
                displayText: args.parentRow.data['Contact'],
              },
            },
          ],
        },
        {
          cells: [
            {
              index: 1,
              value: 'Ratings: ' + args.parentRow.data['Ratings'],
              style: { bold: true, fontColor: '#0a76ff' },
            },
          ],
        },
        {
          cells: [
            {
              index: 0,
              value: args.parentRow.data['productDesc'],
              style: { excelHAlign: 'Center' },
            },
            { index: 1, value: args.parentRow.data['ReturnPolicy'] },
          ],
        },
        {
          cells: [
            {
              index: 0,
              value: args.parentRow.data['Cost'],
              style: { excelHAlign: 'Center', bold: true },
            },
            { index: 1, value: args.parentRow.data['Cancellation'] },
          ],
        },
        {
          cells: [
            {
              index: 0,
              value: args.parentRow.data['Status'],
              style: {
                bold: true,
                fontColor: args.parentRow.data['Status'] === 'Available' ? '#00FF00' : '#FF0000',
                excelHAlign: 'Center',
              },
            },
            {
              index: 1,
              value: args.parentRow.data['Delivery'],
              style: { bold: true, fontColor: '#0a76ff' },
            },
          ],
        },
      ],
    };
  };
  
  return (
    <div>
      <GridComponent id="DetailTemplateGrid" ref={(g) => (grid = g)} dataSource={employeeData}
        detailTemplate={gridTemplate} toolbar={toolbar} allowExcelExport={true}
        toolbarClick={toolbarClick} exportDetailTemplate={exportDetailTemplate} height="315">
        <ColumnsDirective>
          <ColumnDirective field="Category" headerText="Category" width="140" />
          <ColumnDirective field="ProductID" headerText="Product ID" width="120"/>
          <ColumnDirective headerText="Status" field="Status" width="200" />
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
{% include code-snippet/grid/detail-template-export-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/detail-template-export-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/detail-template-export-cs2" %}

![DetailTemplateExport](../images/detailTemp_excel_expt.gif)

## Exporting with caption template

The Excel export feature enables exporting of Grid with a caption template to an Excel document.

In the following sample, the customized caption text is exported to Excel using [captionText](https://ej2.syncfusion.com/react/documentation/api/grid/exportGroupCaptionEventArgs/#captiontext) property in the [exportGroupCaption](https://ej2.syncfusion.com/react/documentation/api/grid/#exportgroupcaption) event.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/caption-template-export-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/caption-template-export-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/caption-template-export-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/caption-template-export-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/caption-template-export-cs2" %}

![CaptionTemplateExport](../images/captionTemp_excel_expt.gif)