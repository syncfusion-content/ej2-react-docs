import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { inventoryData } from './datasource';
function App() {
    return (<div>
    <GridComponent dataSource={inventoryData} allowPaging={true}>
      <ColumnsDirective>
        <ColumnDirective field='Inventor' headerText='Name of the Inventor' clipMode='Clip' width="80"/>
        <ColumnDirective field='NumberofPatentFamilies' headerText='Number of Patent Families' clipMode='Ellipsis' width="100"/>
        <ColumnDirective field='Country' headerText='Country' width="80"/>
        <ColumnDirective field='Active' headerText='Active' width="100"/>
        <ColumnDirective field='Mainfieldsofinvention' headerText='Main Fields of Invention' clipMode='EllipsisWithTooltip' width="100"/>
      </ColumnsDirective>
      <Inject services={[Page]}/>
    </GridComponent>
  </div>);
}
;
export default App;
