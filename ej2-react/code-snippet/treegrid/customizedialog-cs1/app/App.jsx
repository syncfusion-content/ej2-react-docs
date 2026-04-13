import * as React from 'react';
import { projectData } from './datasource';
import { getValue } from '@syncfusion/ej2-base';
import { ColumnsDirective, ColumnDirective, TreeGridComponent, Inject } from '@syncfusion/ej2-react-treegrid';
import { Edit, Toolbar } from '@syncfusion/ej2-react-treegrid';
/* tslint:disable */
function App() {
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
    const toolbarOptions = ['Add', 'Edit', 'Delete'];
    const actionComplete = (args) => {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            const dialog = args.dialog;
            dialog.height = 400;
            // change the header of the dialog
            dialog.header = args.requestType === 'beginEdit' ?
                'Record of ' + getValue('TaskName', args.rowData) : 'New Customer';
        }
    };
    return (<TreeGridComponent dataSource={projectData} treeColumnIndex={1} idMapping='TaskID' parentIdMapping='parentID' actionComplete={actionComplete} editSettings={editOptions} toolbar={toolbarOptions} height={265}>
        <ColumnsDirective>
          <ColumnDirective field='TaskID' headerText='Task ID' width='70' textAlign='Right' isPrimaryKey={true}></ColumnDirective>
          <ColumnDirective field='TaskName' headerText='Task Name' width='100'></ColumnDirective>
          <ColumnDirective field='Duration' headerText='Duration' width='90' textAlign='Right'/>
          <ColumnDirective field='Priority' headerText='Priority' width='90' textAlign='Right'/>
        </ColumnsDirective>
        <Inject services={[Edit, Toolbar]}/>
      </TreeGridComponent>);
}
;
export default App;
