let GanttData = [
    {
           TaskID: 1,
           TaskName: 'Project Initiation',
           StartDate: new Date('04/02/2019'),
           EndDate: new Date('04/21/2019'),
           subtasks: [
               { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50,
               Segments: [
                   { StartDate: new Date("04/02/2019"), Duration: 2 },
                   { StartDate: new Date("04/04/2019"), Duration: 2 }
                 ] },
               { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50  },
               { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4 , Progress: 50 },
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
               { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 }
           ]
       }
];

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, Selection, Toolbar, ContextMenu } from '@syncfusion/ej2-react-gantt';
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
        const editOptions = {
           allowEditing: true,
           allowAdding: true,
           allowDeleting: true,
           allowTaskbarEditing: true
       };
      const toolbarOptions = ['Add', 'Edit', 'Delete', 'Cancel', 'Update', 'ExpandAll', 'CollapseAll'];
       return <GanttComponent dataSource={GanttData} taskFields={taskFields} allowSelection={true} editSettings={editOptions} toolbar={toolbarOptions} enableContextMenu={true} height='450px'>
           <Inject services={[Edit, Selection, Toolbar, ContextMenu]}/>
       </GanttComponent>;
}
;
ReactDOM.render(<App />, document.getElementById('root'));