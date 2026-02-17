import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { data } from './datasource';
import * as React from 'react';

function App() {
    const isRowPinned=(data)=>
    {
      if (data && data.Status === 'Open' && data.Priority === 'Critical') {
        return true;
      }
      return false;
    }
    const filterSettings = {type: 'Excel'};
    return (<div className='control-pane'>
      <div className='control-section'>
        <GridComponent dataSource={data} allowFiltering={true} allowSorting={true} filterSettings={{ type: 'Menu' }} allowPaging={true} height='200' isRowPinned={isRowPinned}>
          <ColumnsDirective>
            <ColumnDirective field='TaskID' headerText='Task ID' width={100} textAlign='Right' isPrimaryKey={true} />
            <ColumnDirective field='Title' headerText='Title' width={100} />
            <ColumnDirective field='Status' headerText='Status' width={100} />
            <ColumnDirective field='Assignee' headerText='Assignee' width={100} />
            <ColumnDirective field='Priority' headerText='Priority' width={100} />
          </ColumnsDirective>
          <Inject services={[Page, Sort, Filter]}/>
        </GridComponent>
      </div>
    </div>);
}
export default App;