let GanttData = [
    { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
    { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50, /*CustomColumn: 'BCustomColumn'*/ CustomColumn: '2' },
    { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50, /*CustomColumn: 'BCustomColumn'*/ CustomColumn: '3' },
    { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50, /*CustomColumn: 'BCustomColumn'*/ CustomColumn: '4' },
    { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
    { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50, /*CustomColumn: 'BCustomColumn'*/ CustomColumn: '6' },
    { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50, /*CustomColumn: 'BCustomColumn'*/ CustomColumn: '1' },
    { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50, /*CustomColumn: 'BCustomColumn'*/ CustomColumn: '5' }
];

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent, Inject, Sort, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
function App(){
let ganttInstance: any;
const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
};

function clickHandler() {
    ganttInstance.sortModule.sortColumn('CustomColumn', 'Ascending', false);
}
return (<div>
        <ButtonComponent onClick={clickHandler}>Sort Custom Column</ButtonComponent>
        <GanttComponent dataSource={GanttData} ref={gantt => ganttInstance = gantt} taskFields={taskFields}
            allowSorting={true} height='450px'>
        <ColumnsDirective>
          <ColumnDirective field='TaskID'></ColumnDirective>
          <ColumnDirective field='TaskName' width='250'></ColumnDirective>
          <ColumnDirective field='StartDate'></ColumnDirective>
          <ColumnDirective field='EndDate'></ColumnDirective>
          <ColumnDirective field='Duration'></ColumnDirective>
          <ColumnDirective field='Progress'></ColumnDirective>
          <ColumnDirective field='CustomColumn'></ColumnDirective>
        </ColumnsDirective>
           <Inject services={[Sort]} />
        </GanttComponent></div>)
};
ReactDOM.render(<App />, document.getElementById('root'));
