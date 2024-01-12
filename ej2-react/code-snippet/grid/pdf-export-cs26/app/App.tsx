import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnsDirective, GridComponent, ToolbarItems, Page } from '@syncfusion/ej2-react-grids';
import { Inject, PdfExport, Toolbar } from '@syncfusion/ej2-react-grids';
import { Query } from '@syncfusion/ej2-data';
import * as React from 'react';
import { data } from './datasource';
import { useState } from 'react';

function App() {
  let grid: GridComponent | null;
  let queryClone: Query;
  const [message, setMessage] = useState('');
  const toolbar: ToolbarItems[] = ['PdfExport'];
  const toolbarClick = (args: ClickEventArgs) => {
    if (grid && args.item.id === 'Grid_pdfexport') {
      queryClone = (grid as GridComponent).query;
      (grid as GridComponent).pdfExport();
      (grid as GridComponent).query = new Query().addParams('recordcount', '15');
      setMessage('Key: ' + (grid as GridComponent).query.params[0].key + ' and Value: ' + (grid as GridComponent).query.params[0].value + ' on ' + args.item.text);
    }
  }
  return (
    <div>
      <p style={{ color: 'red' }}>{message}</p>
      <GridComponent id='Grid' dataSource={data} toolbar={toolbar} allowPdfExport={true}
        toolbarClick={toolbarClick} ref={g => grid = g} >
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='130' />
          <ColumnDirective field='ShipCountry' headerText='Ship Country' width='120' />
        </ColumnsDirective>
        <Inject services={[Toolbar, PdfExport]} />
      </GridComponent>
    </div>
  );
}
export default App;