import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { inventoryData } from './datasource';
function App() {
    return (<div>
    <GridComponent dataSource={inventoryData} gridLines='Both' height={315}>
      <ColumnsDirective>
        <ColumnDirective field='Inventor' headerText='Inventor' width='180' textAlign='Right'/>
        <ColumnDirective field='NumberofPatentFamilies' headerText='Number of Patent Families' width='180' textAlign='Right'/>
        <ColumnDirective field='Country' headerText='Country' width="140"/>
        <ColumnDirective field='Active' headerText='Active' width='120'/>
        <ColumnDirective field='Mainfieldsofinvention' headerText='Main Fields of Invention' width='200'/>
      </ColumnsDirective>
    </GridComponent>
  </div>);
}
;
export default App;
