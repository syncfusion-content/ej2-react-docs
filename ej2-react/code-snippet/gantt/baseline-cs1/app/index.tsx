

let GanttData: Object[] = [
    {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            { TaskID: 2, TaskName: 'Identify Site location', BaselineStartDate: new Date('04/02/2019'), BaselineEndDate: new Date('04/06/2019'), StartDate: new Date('04/02/2019'), Duration: 0, Progress: 50 },
            { TaskID: 3, TaskName: 'Perform Soil test', BaselineStartDate: new Date('04/04/2019'), BaselineEndDate: new Date('04/09/2019'), StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
            { TaskID: 4, TaskName: 'Soil test approval', BaselineStartDate: new Date('04/08/2019'), BaselineEndDate: new Date('04/12/2019'), StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            { TaskID: 6, TaskName: 'Develop floor plan for estimation', BaselineStartDate: new Date('04/04/2019'), BaselineEndDate: new Date('04/08/2019'), StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
            { TaskID: 7, TaskName: 'List materials', BaselineStartDate: new Date('04/02/2019'), BaselineEndDate: new Date('04/04/2019'), StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
            { TaskID: 8, TaskName: 'Estimation approval', BaselineStartDate: new Date('04/02/2019'), BaselineEndDate: new Date('04/02/2019'), StartDate: new Date('04/04/2019'), Duration: 0, Progress: 50 }
        ]
    },
];


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';

class App extends React.Component<{}, {}>{
    public taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    progress:'Progress',
    duration:'Duration',
    baselineStartDate: 'BaselineStartDate',
    baselineEndDate: 'BaselineEndDate',
    child: 'subtasks'
  };
  render() {
        return <GanttComponent dataSource={GanttData} renderBaseline={true} baselineColor='red'
        taskFields={this.taskFields} height = '400px'>
            <ColumnsDirective>
              <ColumnDirective field='BaselineStartDate' headerText='Planned start time' ></ColumnDirective>
              <ColumnDirective field='BaselineEndDate' headerText='Planned end time' ></ColumnDirective>
            </ColumnsDirective>
        </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


