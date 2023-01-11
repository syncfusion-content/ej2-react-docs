import { ColumnDirective, ColumnsDirective, Freeze, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    return (<div>
          <GridComponent dataSource={data} height="315" frozenRows={2} enableHover={false}>
            <ColumnsDirective>
             <ColumnDirective field='OrderID' width='120' textAlign='Right'/>
             <ColumnDirective field='Freight' width='120'/>
             <ColumnDirective field='CustomerID' width='150' freeze='Right'/>
             <ColumnDirective field='OrderDate' width='130' format='yMd' textAlign='Right'/>
             <ColumnDirective field='ShipName' width='150'/>
             <ColumnDirective field='ShipAddress' width='170'/>
             <ColumnDirective field='ShipCity' width='150'/>
             <ColumnDirective field='ShipCountry' width='150' freeze='Left'/>
            </ColumnsDirective>
            <Inject services={[Freeze]}/>
           </GridComponent></div>);
}
;
export default App;
