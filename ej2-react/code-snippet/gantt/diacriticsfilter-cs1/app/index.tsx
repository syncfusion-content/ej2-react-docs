

let data: Object[]  = [
  {
      TaskID: 1,
      TaskName: 'Projéct initiàtion',
      StartDate: new Date('04/02/2019'),
      EndDate: new Date('04/21/2019'),
      subtasks: [
          {TaskID: 2, TaskName: 'Identify site locàtion', StartDate: new Date('04/02/2019'), Duration: 4,Progress: 50 },
          {TaskID: 3, TaskName: 'Perförm soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
          {TaskID: 4, TaskName: 'Soil tëst appröval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
      ]
  },
  {
      TaskID: 5,
      TaskName: 'Project estimation',
      StartDate: new Date('04/02/2019'),
      EndDate: new Date('04/21/2019'),
      subtasks: [
          {TaskID: 6, TaskName: 'Develöp floor plan for estimàtion', StartDate: new Date('04/04/2019'),Duration: 3, Progress: 50, resources: [4]},
          {TaskID: 7, TaskName: 'List matërials', StartDate: new Date('04/04/2019'),Duration: 3, Progress: 50},
          {TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'),Duration: 3, Progress: 50 }
      ]
  }];


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Filter, FilterSettingsModel } from '@syncfusion/ej2-react-gantt';

class App extends React.Component<{}, {}>{
  public taskFields: any = {
  id: 'TaskID',
  name: 'TaskName',
  startDate: 'StartDate',
  duration: 'Duration',
  progress: 'Progress',
  child: 'subtasks'
};
public FilterOptions: FilterSettingsModel = {
          ignoreAccent:true
      };
  render() {
      return <GanttComponent dataSource={data} taskFields={this.taskFields}
       allowFiltering={true} filterSettings={this.FilterOptions} height = '450px'>
          <Inject services={[Filter]} />
      </GanttComponent>
  }
};
ReactDOM.render(<App />, document.getElementById('root'));


