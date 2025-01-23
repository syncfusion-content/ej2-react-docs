const projectResources = [
    { ResourceId: 1, ResourceName: 'Project Manager' },
    { ResourceId: 2, ResourceName: 'Software Analyst' },
    { ResourceId: 3, ResourceName: 'Developer' },
    { ResourceId: 4, ResourceName: 'Testing Engineer' }
];
const data = [
    {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
    },
    { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50, Resources: [2, 3] },
    { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50, Resources: [2] },
    { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Predecessor: '3FS', Progress: 50, Resources: [1] },
    {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
    },
    { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
    { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50, Resources: [1, 3, 5] },
    { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Predecessor: '7SS', Progress: 50 }
];

import { GanttComponent, Inject, Edit, Filter, Sort } from '@syncfusion/ej2-react-gantt';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        dependency: 'Predecessor',
        resourceInfo: 'Resources'
    };
    const labelSettings = {
        rightLabel: 'Resources'
    };
    const editSettings = {
        allowEditing: true,
        editMode: 'Auto',
        allowTaskbarEditing: true
    };
    const resourceFields = {
        id: 'ResourceId',
        name: 'ResourceName',
    };
        return <GanttComponent dataSource={data} allowFiltering={true} allowSorting={true} taskFields={taskFields} editSettings={editSettings} labelSettings={labelSettings}
            resourceFields={resourceFields} resources={projectResources} height='400px'>
            <Inject services={[Edit, Filter, Sort]} />
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));