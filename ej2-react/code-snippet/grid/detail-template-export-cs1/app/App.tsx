import { ColumnDirective, ColumnsDirective, GridComponent, DetailRow, Inject, PdfExport,
  Toolbar, Grid, ToolbarItems, ExportDetailTemplateEventArgs } from '@syncfusion/ej2-react-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import * as React from 'react';
import { employeeData } from './datasource';

function App() {
  let grid: Grid | null;
  const toolbar: ToolbarItems[] = ['PdfExport'];
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
    if (grid && args['item'].id === 'DetailTemplateGrid_pdfexport') {
      grid.pdfExport({
        hierarchyExportMode: 'Expanded',
      });
    }
  };
  const exportDetailTemplate = (args: ExportDetailTemplateEventArgs) => {
    args.value = {
      columnCount: 2,
      columnHeader: [
        {
          cells: [
            {
              index: 0,
              colSpan: 2,
              value: 'Product Details',
              style: {
                backColor: '#ADD8E6',
                pdfTextAlignment: 'Center',
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
              image: { base64: args.parentRow.data['ProductImg'], width: 80 },
            },
            {
              index: 1,
              value: 'Offers: ' + args.parentRow.data['Offers'],
              style: { fontColor: '#0A76FF', fontSize: 15 },
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
              style: { fontColor: '#0A76FF', fontSize: 15 },
            },
          ],
        },
        {
          cells: [
            {
              index: 0,
              value: args.parentRow.data['productDesc'],
              style: { pdfTextAlignment: 'Center' },
            },
            { index: 1, value: args.parentRow.data['ReturnPolicy'] },
          ],
        },
        {
          cells: [
            {
              index: 0,
              value: args.parentRow.data['Cost'],
              style: { bold: true, pdfTextAlignment: 'Center' },
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
                fontColor: args.parentRow.data['Status'] === 'Available' ? '#00FF00' : '#FF0000',
                pdfTextAlignment: 'Center',
                fontSize: 15,
              },
            },
            {
              index: 1,
              value: args.parentRow.data['Delivery'],
              style: { fontColor: '#0A76FF', fontSize: 15 },
            },
          ],
        },
      ],
    };
  };
  
  return (
    <div>
      <GridComponent id="DetailTemplateGrid" ref={(g) => (grid = g)} dataSource={employeeData}
        detailTemplate={gridTemplate} toolbar={toolbar} allowPdfExport={true} toolbarClick={toolbarClick}
        exportDetailTemplate={exportDetailTemplate} height="315">
        <ColumnsDirective>
          <ColumnDirective field="Category" headerText="Category" width="140" />
          <ColumnDirective
            field="ProductID"
            headerText="Product ID"
            width="120"
          />
          <ColumnDirective headerText="Status" field="Status" width="120" />
        </ColumnsDirective>
        <Inject services={[DetailRow, Toolbar, PdfExport]} />
      </GridComponent>
    </div>
  );
}
export default App;


