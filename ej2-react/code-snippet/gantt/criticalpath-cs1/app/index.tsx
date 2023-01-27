

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, EditSettingsModel, Toolbar, ToolbarItem, CriticalPath } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
class App extends React.Component<{}, {}>{
    public taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks'
  };
  public editOptions: EditSettingsModel = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
  };
  public toolbarOptions: ToolbarItem[] = ['CriticalPath'];
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields} enableCriticalPath={true}
        editSettings={this.editOptions} toolbar={this.toolbarOptions} height = '450px'>
            <Inject services={[Edit, CriticalPath, Toolbar]} />
        </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


