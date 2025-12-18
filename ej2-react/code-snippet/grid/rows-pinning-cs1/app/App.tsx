import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';
import { data } from './datasource';
import * as React from 'react';

function App() {
    const isRowPinned=(data: Object)=>
    {
      if (data && data.Status === 'Open' && data.Priority === 'Critical') {
        return true;
      }
      return false;
    }
    return (<div className='control-pane'>
      <div className='control-section'>
        <GridComponent dataSource={data} height='200' isRowPinned={isRowPinned}>
          <ColumnsDirective>
            <ColumnDirective field='TaskID' headerText='Task ID' width={100} textAlign='Right' isPrimaryKey={true} />
            <ColumnDirective field='Title' headerText='Title' width={100} />
            <ColumnDirective field='Status' headerText='Status' width={100} />
            <ColumnDirective field='Assignee' headerText='Assignee' width={100} />
            <ColumnDirective field='Priority' headerText='Priority' width={100} />
          </ColumnsDirective>
        </GridComponent>
      </div>
    </div>);
}
export default App;