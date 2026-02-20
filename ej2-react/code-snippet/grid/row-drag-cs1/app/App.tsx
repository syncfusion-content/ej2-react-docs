

import { ColumnDirective, ColumnsDirective, GridComponent, Inject, SelectionSettingsModel, RowDD, RowDropSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
      const destData: Object = [];
      const rowDropOptions: RowDropSettingsModel = { targetID: 'DestGrid' };
      const destRowDropOptions: RowDropSettingsModel = { targetID: 'Grid' };
      const selectionOptions: SelectionSettingsModel = { type: 'Multiple' };
      return (<div>
            <GridComponent id="Grid" dataSource={data} height={150} allowRowDragAndDrop={true} selectionSettings={selectionOptions} rowDropSettings={rowDropOptions}>
                  <ColumnsDirective>
                        <ColumnDirective field='OrderID' headerText='Order ID' width='140' textAlign='Right' />
                        <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
                        <ColumnDirective field='OrderDate' headerText='OrderDate' width='150' format='yMd' textAlign='Right' />
                        <ColumnDirective field='Freight' headerText='Freight' width='150' format='C' textAlign='Right' />
                        <ColumnDirective field='ShipCity' headerText='ShipCity' width='150' />
                  </ColumnsDirective>
                  <Inject services={[RowDD]} />
            </GridComponent>
            <GridComponent id="DestGrid" dataSource={destData} height={150} allowRowDragAndDrop={true} selectionSettings={selectionOptions} rowDropSettings={destRowDropOptions}>
                  <ColumnsDirective>
                        <ColumnDirective field='OrderID' headerText='Order ID' width='140' textAlign='Right' />
                        <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
                        <ColumnDirective field='OrderDate' headerText='OrderDate' width='150' format='yMd' textAlign='Right' />
                        <ColumnDirective field='Freight' headerText='Freight' width='150' format='C' textAlign='Right' />
                        <ColumnDirective field='ShipCity' headerText='ShipCity' width='150' />
                  </ColumnsDirective>
                  <Inject services={[RowDD]} />
            </GridComponent>
      </div>)
};
export default App;


