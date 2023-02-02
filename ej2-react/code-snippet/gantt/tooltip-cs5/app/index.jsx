let data = [
    {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
            { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
            { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Predecessor: '3FS+2 days', Progress: 50 },
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
            { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
            { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Predecessor: '7SS+ 2 days', Duration: 3, Progress: 50 }
        ]
    },
];
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
class App extends React.Component {
    taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        child: 'subtasks'
    };
    tooltipTemplate(props) {
        return (<div>Offset : {props.offsetString}</div>);
    }
    ;
    template = this.tooltipTemplate;
    tooltipSettings = {
        connectorLine: this.template.bind(this)
    };
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields} tooltipSettings={this.tooltipSettings} height='450px'>
            <ColumnsDirective>
                <ColumnDirective field='TaskID' width='100'></ColumnDirective>
                <ColumnDirective field='Predecessor'></ColumnDirective>
            </ColumnsDirective>
        </GanttComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
