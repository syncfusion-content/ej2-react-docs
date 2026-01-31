import * as React from 'react';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Selection, Toolbar } from '@syncfusion/ej2-react-gantt';
import type { TaskFieldsModel, ResourceFieldsModel, EditSettingsModel } from '@syncfusion/ej2-react-gantt';
import { data, resources } from './datasource';

function App() {
  const taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',        
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID',
    resourceInfo: 'resources',
    indicators: 'Indicators'
  };

  const resourceFields: ResourceFieldsModel = {
    id: 'resourceId',
    name: 'resourceName'
  };

  const editSettings: EditSettingsModel = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  };

  const toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];

  return (
    <div style={{ padding: 12 }}>
      <GanttComponent
        dataSource={data}
        taskFields={taskFields}
        resourceFields={resourceFields}
        resources={resources}
        height="430px"
        allowSelection={true}
        allowSorting={true}
        enableContextMenu={true}
        highlightWeekends={true}
        treeColumnIndex={1}
        toolbar={toolbar}
        editSettings={editSettings}
        projectStartDate={new Date(2026, 0, 25)}
        projectEndDate={new Date(2026, 1, 28)}
      >
        <ColumnsDirective>
          <ColumnDirective field="TaskID" headerText="ID" width="70" textAlign="Right" />
          <ColumnDirective field="TaskName" headerText="Task Name" width="180" />
          <ColumnDirective field="StartDate" headerText="Start" />
          <ColumnDirective field="Duration" headerText="Duration (d)" />
          <ColumnDirective field="Progress" headerText="Progress (%)" />
          <ColumnDirective field="Predecessor" headerText="Depends On" />
          <ColumnDirective field="resources" headerText="Resources" />
        </ColumnsDirective>
        <Inject services={[Selection, Toolbar]} />
      </GanttComponent>
    </div>
  );
}

export default App;
