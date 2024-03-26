import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, Selection, Toolbar, AddDialogFieldsDirective, EditDialogFieldsDirective, EditDialogFieldDirective, AddDialogFieldDirective } from '@syncfusion/ej2-react-gantt';
import { data,resourceCollection } from './datasource';
function App(){
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        resourceInfo: 'resources',
        work: 'work',
        child: 'subtasks',
        segments: 'Segments',
        notes:"note",
  };
 const resourceFields = {
    id: 'resourceId',
    name: 'resourceName',
    unit: 'resourceUnit',
    group: 'resourceGroup'
};
  const editOptions = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  };
  const  toolbarOptions = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
        return <GanttComponent dataSource={data} taskFields={taskFields} allowSelection={true}
        editSettings={editOptions} toolbar={toolbarOptions} height = '450px' resourceFields = {resourceFields} resources ={resourceCollection}>
        <AddDialogFieldsDirective>
            <AddDialogFieldDirective type='General'></AddDialogFieldDirective>
            <AddDialogFieldDirective type='Dependency'></AddDialogFieldDirective>
            <AddDialogFieldDirective type='Resources'></AddDialogFieldDirective>
            <AddDialogFieldDirective type='Segments'></AddDialogFieldDirective>
            <AddDialogFieldDirective type='Notes' additionalParams= {{inlineMode: { enable: true,onSelection: true }}}></AddDialogFieldDirective>
        </AddDialogFieldsDirective>
           <EditDialogFieldsDirective>
              <EditDialogFieldDirective type='General' headerText='General' ></EditDialogFieldDirective>
              <EditDialogFieldDirective type='Dependency' ></EditDialogFieldDirective>
              <EditDialogFieldDirective type='Notes'  additionalParams= {{inlineMode: { enable: true,onSelection: true }}}></EditDialogFieldDirective>
              <EditDialogFieldDirective type='Resources' ></EditDialogFieldDirective>
              <EditDialogFieldDirective type='Segments'></EditDialogFieldDirective>
            </EditDialogFieldsDirective>
            <Inject services={[Edit, Selection, Toolbar]} />
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));