import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Filter, Sort, Page, Edit, ToolbarItems, EditSettingsModel, Toolbar} from '@syncfusion/ej2-react-grids';
import { data } from './datasource';
import * as React from 'react';

function App() {
    const isRowPinned=(data: object)=>
    {
      if (data && data.Status === 'Open' && data.Priority === 'Critical') {
        return true;
      }
      return false;
    }
    const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const editSettings: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
    return (<div className='control-pane'>
      <div className='control-section'>
        <GridComponent dataSource={data} editSettings={editSettings} toolbar={toolbarOptions} height='315' isRowPinned={isRowPinned}>
          <ColumnsDirective>
            <ColumnDirective type= "checkbox" width="70" textAlign="Right" />
            <ColumnDirective field='TaskID' headerText='Task ID' width={100} textAlign='Right' isPrimaryKey={true} />
            <ColumnDirective field='Title' headerText='Title' width={100} />
            <ColumnDirective field='Status' headerText='Status' width={100} />
            <ColumnDirective field='Assignee' headerText='Assignee' width={100} />
            <ColumnDirective field='Priority' headerText='Priority' width={100} />
          </ColumnsDirective>
          <Inject services={[Filter, Sort, Page, Edit, Toolbar]}/>
        </GridComponent>
      </div>
    </div>);
}
export default App;