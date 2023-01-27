

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, EditSettingsModel } from '@syncfusion/ej2-react-gantt';
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
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields}
        editSettings={this.editOptions} width = '100%' height = '100%'>
            <Inject services={[Edit]} />
        </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


