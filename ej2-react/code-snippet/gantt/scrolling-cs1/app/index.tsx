

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
        return <GanttComponent dataSource={data} taskFields={this.taskFields} enableCriticalPath={true}
        editSettings={this.editOptions} toolbar={this.toolbarOptions} width = '600px' height = '350px'>
            <Inject services={[Edit]} />
        </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


