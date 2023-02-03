

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
  public timelineSettings: any = {
    timelineUnitSize:200,
    topTier: {
      unit: 'Year'
      },
    bottomTier: {
      unit: 'Month',
      count:6
      }
    };
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields}
        timelineSettings={this.timelineSettings} height = '450px'>
      </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));

