

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
      position: "80%"
    };
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields}
        splitterSettings={this.splitterSettings} height = '450px'>
        </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


