

import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const toolbarOptions: ToolbarItems[] = ['Search', 'Print'];
    return (<GridComponent dataSource={data} toolbar={toolbarOptions} height={270}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right"/>
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='100'/>
            <ColumnDirective field='ShipCity' headerText='Ship City' width='100'/>
            <ColumnDirective field='ShipName' headerText='Ship Name' width='100'/>
        </ColumnsDirective>
        <Inject services={[ Toolbar ]} />
    </GridComponent>)
}
export default App;


