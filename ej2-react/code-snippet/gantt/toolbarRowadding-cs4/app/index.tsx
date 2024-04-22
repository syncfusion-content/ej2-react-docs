import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, EditSettingsModel, Selection, Toolbar, ToolbarItem, AddDialogFieldsDirective, EditDialogFieldsDirective, EditDialogFieldDirective, AddDialogFieldDirective, EditDialogFieldSettingsModel, AddDialogFieldSettingsModel } from '@syncfusion/ej2-react-gantt';
import { data, resourceCollection } from './datasource';
function App() {
  const taskFields: any = {
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
    notes: "note",
  };
  const resourceFields = {
    id: 'resourceId',
    name: 'resourceName',
    unit: 'resourceUnit',
    group: 'resourceGroup'
  };
  const editOptions: EditSettingsModel = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  };
  const addDependencyParams: AddDialogFieldSettingsModel = { allowPaging: true, allowSorting: true, toolbar: ["Search", "Print",] }
  const addResourcesParams: AddDialogFieldSettingsModel = { allowSorting: true, allowPaging: true, toolbar: ["Search", "Print"], columns: [{ field: "newData" }] }
  const addSegmentsParams: AddDialogFieldSettingsModel = { columns: [{ field: "segmenttask", width: "170px", headerText: "Segment Task" }], }
  const editDependencyParams: EditDialogFieldSettingsModel = { allowPaging: true, allowSorting: true, toolbar: ["Search", "Print",] }
  const editResourcesParams: EditDialogFieldSettingsModel = { allowSorting: true, allowPaging: true, toolbar: ["Search", "Print"], columns: [{ field: "newData" }] }
  const editSegmentsParams: EditDialogFieldSettingsModel = { columns: [{ field: "segmenttask", width: "170px", headerText: "Segment Task" }], }
  const toolbarOptions: ToolbarItem[] = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
  return <GanttComponent dataSource={data} taskFields={taskFields} allowSelection={true}
    editSettings={editOptions} toolbar={toolbarOptions} height='450px' resourceFields={resourceFields} resources={resourceCollection}>
    <AddDialogFieldsDirective>
      <AddDialogFieldDirective type='General' headerText='General' ></AddDialogFieldDirective>
      <AddDialogFieldDirective type='Dependency' additionalParams={addDependencyParams}></AddDialogFieldDirective>
      <AddDialogFieldDirective type='Resources' additionalParams={addResourcesParams}></AddDialogFieldDirective>
      <AddDialogFieldDirective type='Segments' additionalParams={addSegmentsParams}></AddDialogFieldDirective>
    </AddDialogFieldsDirective>
    <EditDialogFieldsDirective>
      <EditDialogFieldDirective type='General' headerText='General' ></EditDialogFieldDirective>
      <EditDialogFieldDirective type='Dependency' additionalParams={editDependencyParams}></EditDialogFieldDirective>
      <EditDialogFieldDirective type='Resources' additionalParams={editResourcesParams}></EditDialogFieldDirective>
      <EditDialogFieldDirective type='Segments' additionalParams={editSegmentsParams}></EditDialogFieldDirective>
    </EditDialogFieldsDirective>
    <Inject services={[Edit, Selection, Toolbar]} />
  </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));