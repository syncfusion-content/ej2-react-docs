import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { ContextMenu, Inject, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid;
    const contextMenuItems = [
        { text: 'Copy with headers', target: '.e-content', id: 'copywithheader' }
    ];
    const contextMenuClick = (args) => {
        if (grid && args.item.id === 'copywithheader') {
            grid.copy(true);
        }
    };
    return (<div>
      <GridComponent dataSource={data} allowPaging={true} contextMenuItems={contextMenuItems} ref={g => grid = g} contextMenuClick={contextMenuClick}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='140' textAlign='Right'/>
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='140'/>
          <ColumnDirective field='Freight' headerText='Freight' format='C2' textAlign='Right' width='140'/>
          <ColumnDirective field='ShipName' headerText='Ship Name' width='200'/>
        </ColumnsDirective>
        <Inject services={[ContextMenu, Page]}/>
      </GridComponent>
    </div>);
}
;
export default App;
