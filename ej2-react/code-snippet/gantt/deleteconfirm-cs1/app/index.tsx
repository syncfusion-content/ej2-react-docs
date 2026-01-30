// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import { GanttComponent, Edit, Selection, Toolbar, Inject } from '@syncfusion/ej2-react-gantt';
// import { data } from './datasource';

// function App() {
//     const taskFields: object = {
//         id: 'TaskID',
//         name: 'TaskName',
//         startDate: 'StartDate',
//         endDate: 'EndDate',
//         duration: 'Duration',
//         progress: 'Progress',
//         parentID: 'ParentID'
//     };

//     const columns: object[] = [
//         { field: 'TaskID', headerText: 'Task ID', width: 100 },
//         { field: 'TaskName', headerText: 'Task Name', width: 250 },
//         { field: 'StartDate', headerText: 'Start Date', width: 150 },
//         { field: 'Duration', headerText: 'Duration', width: 150 },
//         { field: 'Progress', headerText: 'Progress', width: 150 }],

//     const editSettings: object = {
//         allowDeleting: true,
//         showDeleteConfirmDialog: true
//     };

//     const toolbar: string[] = ['Delete'];

//     return (
//         <GanttComponent
//             id="Gantt"
//             height="430px"
//             dataSource={data}
//             taskFields={taskFields}
//             columns={columns}
//             editSettings={editSettings}
//             toolbar={toolbar}
//         >
//             <Inject services={[Edit, Selection, Toolbar]} />
//         </GanttComponent>
//     );
// }

// ReactDOM.render(<App />, document.getElementById('root'));


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Edit, Selection, Inject } from '@syncfusion/ej2-react-gantt';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function App() {

    let ganttInstance: GanttComponent | null = null;

    const taskData: object[] = [
        { TaskID: 1, TaskName: 'Product concept', StartDate: new Date('04/02/2025'), EndDate: new Date('04/08/2025') },
        { TaskID: 2, TaskName: 'Define the product usage', StartDate: new Date('04/02/2025'), Duration: 1, Progress: 30, ParentId: 1 },
        { TaskID: 3, TaskName: 'Define the target audience', StartDate: new Date('04/02/2025'), Duration: 2, Progress: 40, ParentId: 1 },
        { TaskID: 4, TaskName: 'Prepare product sketch and notes', StartDate: new Date('04/05/2025'), Duration: 2, Progress: 30, ParentId: 1, Predecessor: '2' },
        { TaskID: 5, TaskName: 'Concept approval', StartDate: new Date('04/08/2025'), Duration: 0, ParentId: 1, Predecessor: '3,4' },
        { TaskID: 6, TaskName: 'Market research', StartDate: new Date('04/09/2025'), EndDate: new Date('04/18/2025'), Progress: 30 },
        { TaskID: 7, TaskName: 'Demand analysis', Progress: 40, ParentId: 6 },
        { TaskID: 8, TaskName: 'Customer strength', StartDate: new Date('04/09/2025'), Duration: 4, Progress: 30, ParentId: 7, Predecessor: '5' },
        { TaskID: 9, TaskName: 'Market opportunity analysis', StartDate: new Date('04/09/2025'), Duration: 4, ParentId: 7, Predecessor: '5' },
        { TaskID: 10, TaskName: 'Competitor analysis', StartDate: new Date('04/15/2025'), Duration: 4, Progress: 30, ParentId: 6, Predecessor: '7,8' }
    ];

    const taskFields: object = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        dependency: 'Predecessor',
        progress: 'Progress',
        parentID: 'ParentId'
    };

    const editSettings: object = {
        allowDeleting: true,
        showDeleteConfirmDialog: true
    };

    const deleteTask = (): void => {
        if (!ganttInstance) return;

        const selectedRecords = ganttInstance.selectionModule.getSelectedRecords();
        if (selectedRecords.length) {
            ganttInstance.editModule.deleteRecord(selectedRecords[0].TaskID);
        }
    };

    return (
        <div>
            <ButtonComponent onClick={deleteTask}>
                Delete Task
            </ButtonComponent>

            <br /><br />

            <GanttComponent
                id="ganttDefault"
                height="430px"
                dataSource={taskData}
                taskFields={taskFields}
                editSettings={editSettings}
                ref={gantt => ganttInstance = gantt}
            >
                <Inject services={[Edit, Selection]} />
            </GanttComponent>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));