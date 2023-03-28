

import { ColumnDirective, ColumnsDirective, GridComponent, SelectionSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const settings: SelectionSettingsModel = { checkboxMode: 'ResetOnRowClick'};
    return (<GridComponent dataSource={data} height={315} selectionSettings={settings}>
            <ColumnsDirective>
              <ColumnDirective field='OrderID' width='120' textAlign="Right"/>
              <ColumnDirective field='CustomerID' width='150'/>
              <ColumnDirective field='ShipCity' width='100'/>
              <ColumnDirective field='ShipName' width='150'/>
            </ColumnsDirective>
            </GridComponent>)
};
export default App;


