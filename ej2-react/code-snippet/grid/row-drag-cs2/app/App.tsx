import { ColumnDirective, ColumnsDirective, GridComponent, Inject, SelectionSettingsModel, RowDD } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    const selectionSettings: SelectionSettingsModel = {type: 'Multiple'};
  return (<div>
    <GridComponent dataSource={data} height={315} allowRowDragAndDrop={true} selectionSettings={selectionSettings}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='140' textAlign='Right' />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='140'/>
        <ColumnDirective field='OrderDate' headerText='OrderDate' width='150' format='yMd' textAlign='Right' />
        <ColumnDirective field='Freight' headerText='Freight' width='150' format='C' textAlign='Right' />
        <ColumnDirective field='ShipCity' headerText='ShipCity' width='150'/>
      </ColumnsDirective>
      <Inject services={[RowDD]} />
    </GridComponent>
  </div>)
};
export default App;