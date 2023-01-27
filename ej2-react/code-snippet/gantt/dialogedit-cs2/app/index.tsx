

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
    allowEditing: true,
    mode: 'Dialog'
  };
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields}
        editSettings={this.editOptions} height = '450px'>
            <Inject services={[Edit]} />
        </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


