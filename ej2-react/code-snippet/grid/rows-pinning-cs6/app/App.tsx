import { GridComponent, ColumnsDirective, ColumnDirective, ContextMenu, ContextMenuItem, Inject, Page} from '@syncfusion/ej2-react-grids';
import { taskData } from './datasource';
import * as React from 'react';

function App() {
    const isRowPinned=(data: object)=>
    {
      if (data && data.Status === 'Open' && data.Priority === 'Critical') {
        return true;
      }
      return false;
    }
    const contextMenuItems: ContextMenuItem[] = ['PinRow', 'UnpinRow'];
    return (<div className='control-pane'>
      <div className='control-section'>
        <GridComponent dataSource={taskData} allowPaging={true} contextMenuItems={contextMenuItems} height='230' isRowPinned={isRowPinned}>
          <ColumnsDirective>
            <ColumnDirective field='TaskID' headerText='Task ID' width={100} textAlign='Right' isPrimaryKey={true} />
            <ColumnDirective field='Title' headerText='Title' width={100} />
            <ColumnDirective field='Status' headerText='Status' width={100} />
            <ColumnDirective field='Assignee' headerText='Assignee' width={100} />
            <ColumnDirective field='Priority' headerText='Priority' width={100} />
          </ColumnsDirective>
          <Inject services={[ContextMenu, Page]}/>
        </GridComponent>
      </div>
    </div>);
}
export default App;