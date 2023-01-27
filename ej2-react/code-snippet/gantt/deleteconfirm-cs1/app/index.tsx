

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, EditSettingsModel,Selection, Toolbar, ToolbarItem } from '@syncfusion/ej2-react-gantt';
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
      allowDeleting: true,
      showDeleteConfirmDialog: true
  };
  public toolbar: ToolbarItem[] = ['Delete'];
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields} allowSelection={true}
        editSettings={this.editOptions} toolbar={this.toolbar} height = '450px'>
            <Inject services={[Edit, Selection, Toolbar]} />
        </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


