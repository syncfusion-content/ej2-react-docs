import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { GanttData } from './datasource';

function App() {
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks',
        segments: 'Segments'
    };
    return <GanttComponent dataSource={GanttData} taskFields={taskFields} height='450px'>
    </GanttComponent>;
};
ReactDOM.render(<App />, document.getElementById('root'));