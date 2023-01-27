

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
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
  public splitterSettings: any = {
    position : '90%'
};
    render() {
        return <GanttComponent dataSource={data} splitterSettings={this.splitterSettings} taskFields={this.taskFields} treeColumnIndex={2}
        height = '450px'>
        </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


