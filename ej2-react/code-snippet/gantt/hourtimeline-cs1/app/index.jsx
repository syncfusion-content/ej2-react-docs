let data = [
    {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019 08:05:00 AM'), Duration: 10, Progress: 50 },
            { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019 08:05:00 AM'), Duration: 10, Progress: 50 },
            { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019 08:05:00 AM'), Duration: 10, Progress: 50 },
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/02/2019 08:15:00 AM'), Duration: 15, Progress: 50 },
            { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/02/2019 08:15:00 AM'), Duration: 15, Progress: 50 },
            { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/02/2019 08:15:00 AM'), Duration: 15, Progress: 50 }
        ]
    },
];
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
class App extends React.Component {
    taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    };
    timelineSettings = {
        timelineViewMode: 'Hour'
    };
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields} dateFormat="M/d/yyyy hh:mm:ss tt" durationUnit="Minute" timelineSettings={this.timelineSettings} height='450px'>
      </GanttComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
