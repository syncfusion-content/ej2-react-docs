import { ColumnDirective, ColumnsDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
// Import the required treegrid modules from the treegrid package.
import { Filter, Inject, Page, Sort } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
// Import Treegrid data from external file.
import { data } from './data';

function App() {
    const pageSettings = { pageSize: 6 };
    const filterSettings = { type: 'CheckBox' };
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true };
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const taskIDRules = { required: true, number: true };
    const taskNameRules = { required: true };
    return <div>
        <TreeGridComponent dataSource={data} treeColumnIndex={1} childMapping='subtasks' allowPaging={true} pageSettings={pageSettings} allowSorting={true} allowFiltering={true} filterSettings={filterSettings} editSettings={editOptions} toolbar={toolbarOptions}>
            <ColumnsDirective>
                <ColumnDirective field='TaskID' headerText='Task ID' validationRules={taskIDRules} textAlign='Right' width='150'/>
                <ColumnDirective field='TaskName' headerText='Task Name' validationRules={taskNameRules} width='170'/>
                <ColumnDirective field='StartDate' headerText='Start Date' width='130' editType='datepickeredit' format='yMd' textAlign='Right' />
                <ColumnDirective field='EndDate' headerText='End Date' width='130' editType='datepickeredit' format='yMd' textAlign='Right' />
                <ColumnDirective field='Duration' headerText='Duration' width='100' editType='numericedit' textAlign='Right' />
            </ColumnsDirective>
            {/* Inject required TreeGrid features */}
            <Inject services={[Page, Sort, Filter, Edit, Toolbar]} />
        </TreeGridComponent>
    </div>
}
export default App;
