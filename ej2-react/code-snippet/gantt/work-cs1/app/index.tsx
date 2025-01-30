export let ProjectResources = [
    { ResourceId: 1, ResourceName: 'Martin Tamer' },
    { ResourceId: 2, ResourceName: 'Rose Fuller' },
    { ResourceId: 3, ResourceName: 'Margaret Buchanan' },
    { ResourceId: 4, ResourceName: 'Fuller King' },
    { ResourceId: 5, ResourceName: 'Davolio Fuller' },
    { ResourceId: 6, ResourceName: 'Van Jack' },
    { ResourceId: 7, ResourceName: 'Fuller Buchanan' },
    { ResourceId: 8, ResourceName: 'Jack Davolio' },
    { ResourceId: 9, ResourceName: 'Tamer Vinet' },
    { ResourceId: 10, ResourceName: 'Vinet Fuller' },
    { ResourceId: 11, ResourceName: 'Bergs Anton' },
    { ResourceId: 12, ResourceName: 'Construction Supervisor' }
];
let data = [
    {
        TaskID: 1, TaskName: 'Project initiation', StartDate: new Date('03/29/2019'), EndDate: new Date('04/21/2019'),
    },
    {
        TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('03/29/2019'), Duration: 2,
        ParentID: 1, Progress: 30, Work: 16, Resources: [{ ResourceId: 1, Unit: 70 }, 6]
    },
    {
        TaskID: 3, TaskName: 'Perform soil test', StartDate: new Date('03/29/2019'), Duration: 4,
        ParentID: 1, Resources: [2, 3, 5], Work: 96
    },
    {
        TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('03/29/2019'), Duration: 1,
        ParentID: 1, Work: 16, Resources: [8, { ResourceId: 9, Unit: 50 }], Progress: 30
    },
    {
        TaskID: 5, TaskName: 'Project estimation', StartDate: new Date('03/29/2019'), EndDate: new Date('04/21/2019'),
    },
    {
        TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('03/29/2019'),
        Duration: 3, ParentID: 5, Progress: 30, Resources: [{ ResourceId: 4, Unit: 50 }], Work: 30
    },
    {
        TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/01/2019'), Duration: 3,
        ParentID: 5, Work: 48, Resources: [4, 8]
    },
    {
        TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/01/2019'),
        Duration: 2, ParentID: 5, Work: 60, Resources: [12, { ResourceId: 5, Unit: 70 }]
    },
    {
        TaskID: 9, TaskName: 'Sign contract', StartDate: new Date('04/01/2019'), Duration: 1,
        Progress: 30, Resources: [12], Work: 24
    }
];
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Edit, Selection, Toolbar } from '@syncfusion/ej2-react-gantt';
function App() {
        const taskFields = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            resourceInfo: 'Resources',
            work: 'Work',
            parentID: 'ParentID'
        };
        const resourceFields = {
            id: 'ResourceId',
            name: 'ResourceName',
            unit: 'Unit'
        };
        const editSettings = {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        };
        const workUnit = 'Hour';
      const toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
        return <GanttComponent id='root' dataSource = { data } treeColumnIndex = { 1} allowSelection = { true} allowResizing = { true} highlightWeekends = { true} toolbar = {toolbar } editSettings = {editSettings } resourceFields = {resourceFields } taskFields = {taskFields } height = '410px' resources = { ProjectResources } >
            <ColumnsDirective>
            <ColumnDirective field= 'TaskID' visible= {false} > </ColumnDirective>
            <ColumnDirective field= 'TaskName'  headerText= 'Task Name'  width= '180' > </ColumnDirective>
            <ColumnDirective field= 'Resources'  headerText= 'Resources'  width= '160' > </ColumnDirective>
            <ColumnDirective field= 'Work'  width= '110' > </ColumnDirective>
            <ColumnDirective field= 'Duration' width= '100' > </ColumnDirective>
            </ColumnsDirective>
            <Inject services={[ Toolbar, Edit, Selection ]}/>
            </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));