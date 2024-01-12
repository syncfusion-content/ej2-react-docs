import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { Aggregate, AggregateColumnDirective, AggregateColumnsDirective, AggregateDirective, AggregatesDirective, ColumnDirective, ColumnsDirective, GridComponent, Page, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { Inject, PdfExport, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const toolbar = ['PdfExport'];
  const toolbarClick = (args) => {
    if (args.item.id === 'Grid_pdfexport') {
      grid.pdfExport();
    }
  }

  const customAggregateFn = (data) => {
    const brazilCount = data.result ? data.result.filter((item) => item['ShipCountry'] === 'Brazil').length
      : data.filter((item) => item['ShipCountry'] === 'Brazil').length;
    return `Brazil count: ${brazilCount}`;
  }
  const custom = (props) => {
    return (<span>{props.Custom}</span>)
  }
  return (
    <div>
      <GridComponent id='Grid' dataSource={data} toolbar={toolbar} allowPaging={true} allowPdfExport={true}
        toolbarClick={toolbarClick} ref={g => grid = g}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
          <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
        </ColumnsDirective>
        <AggregatesDirective>
          <AggregateDirective>
            <AggregateColumnsDirective>
              <AggregateColumnDirective columnName="ShipCountry" type="Custom" customAggregate={customAggregateFn} footerTemplate={custom}></AggregateColumnDirective>
            </AggregateColumnsDirective>
          </AggregateDirective>
        </AggregatesDirective>
        <Inject services={[Toolbar, PdfExport, Page, Aggregate]} />
      </GridComponent>
    </div>
  );
}
export default App;