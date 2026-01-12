
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, QueryCellInfoEventArgs, TaskFieldsModel } from '@syncfusion/ej2-react-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource';

function App() {
  const taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
  };

  const toolbar: string[] = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'Indent', 'Outdent'];

  const editSettings = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  };

  // Column template for TaskName
  const taskNameTemplate = (props: any): React.ReactElement => (
    <span></span>
  );

  // Event for additional customization
  const queryCellInfo = (args: QueryCellInfoEventArgs) => {
    if (args.column.field === 'TaskName') {
      const value = (args.data as any).TaskName;
      const extraButton = new Button({ content: value });
      const buttonElement = document.createElement('button');
      buttonElement.classList.add('e-btn');
      (args.cell as HTMLElement).appendChild(buttonElement);
      extraButton.appendTo(buttonElement);
    }
  };

  return (
    <GanttComponent
      id="ganttDefault"
      height="430px"
      dataSource={GanttData}
      taskFields={taskFields}
      treeColumnIndex={1}
      editSettings={editSettings}
      toolbar={toolbar}
      queryCellInfo={queryCellInfo}
    >
      <ColumnsDirective>
        <ColumnDirective field="TaskID" headerText="Task ID" width="80" />
        <ColumnDirective field="TaskName" headerText="Task Name" width="250" template={taskNameTemplate} />
        <ColumnDirective field="StartDate" headerText="Start Date" textAlign="Right" width="150" format="yMd" type="date" />
      </ColumnsDirective>
      <Inject />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));