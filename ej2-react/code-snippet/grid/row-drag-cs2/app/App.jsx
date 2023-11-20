import { ColumnDirective, ColumnsDirective, GridComponent, Inject, RowDD } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    const selectionSettings = {type: 'Multiple'};
  return (<div>
    <GridComponent dataSource={data} height={315} allowRowDragAndDrop={true} selectionSettings={selectionSettings}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='140' />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='140'/>
        <ColumnDirective field='OrderDate' headerText='OrderDate' width='150' format='yMd'/>
        <ColumnDirective field='Freight' headerText='Freight' width='150' format='C'/>
        <ColumnDirective field='ShipCity' headerText='ShipCity' width='150'/>
      </ColumnsDirective>
      <Inject services={[RowDD]} />
    </GridComponent>
  </div>)
};
export default App;