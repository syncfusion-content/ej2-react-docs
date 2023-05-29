

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
    timelineUnitSize: 60,
    topTier: {
      format: 'MMM dd, yyyy',
      unit: 'Day',
    },
    bottomTier: {
      unit: 'Hour',
      format: 'h.mm a'
    },
  };
  public dayWorkingTime: any = [{ from: 9, to: 18 }]
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields}
          dayWorkingTime={this.dayWorkingTime} timelineSettings={this.timelineSettings} height = '450px'>
      </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


