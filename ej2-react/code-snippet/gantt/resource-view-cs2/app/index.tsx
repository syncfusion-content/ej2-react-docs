let resourceCollection: object[] = [
    { ResourceId: 1, ResourceName: 'Martin Tamer', ResourceGroup: 'Planning Team' },
    { ResourceId: 2, ResourceName: 'Rose Fuller', ResourceGroup: 'Testing Team' },
    { ResourceId: 3, ResourceName: 'Margaret Buchanan', ResourceGroup: 'Approval Team' }
];
let data = [
    {
        TaskID: 1, TaskName: 'Project initiation', StartDate: new Date('03/29/2019'), EndDate: new Date('04/21/2019'),
    },
    {
        TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('03/29/2019'), Duration: 3,
        ParentID: 1, Progress: 30, work: 10, Resources: [{ ResourceId: 1, resourceUnit: 50 }]
    },
    {
        TaskID: 3, TaskName: 'Perform soil test', StartDate: new Date('04/03/2019'), Duration: 4,
        ParentID: 1, Resources: [{ ResourceId: 1, resourceUnit: 70 }], Predecessor: 2, Progress: 30, work: 20
    },
    {
        TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/09/2019'), Duration: 4,
        ParentID: 1, Resources: [{ ResourceId: 1, resourceUnit: 25 }], Predecessor: 3, Progress: 30, work: 10,
    },
    {
        TaskID: 5, TaskName: 'Project estimation', StartDate: new Date('03/29/2019'), EndDate: new Date('04/21/2019'),
    },
    {
        TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/01/2019'),
        Duration: 5, ParentID: 5, Progress: 30, Resources: [{ ResourceId: 2, resourceUnit: 50 }], work: 30
    },
    {
        TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 4,
        ParentID: 5, Resources: [{ ResourceId: 2, resourceUnit: 40 }], Predecessor: '6FS-2', Progress: 30, work: 40
    },
    {
        TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/09/2019'),
        Duration: 4, ParentID: 5, Resources: [{ ResourceId: 2, resourceUnit: 75 }], Predecessor: '7FS-1', Progress: 30, work: 60,
    },
    {
        TaskID: 9, TaskName: 'Site work', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'),
    },
    {
        TaskID: 10, TaskName: 'Install temporary power service', StartDate: new Date('04/01/2019'), Duration: 14,
        ParentID: 9, Progress: 30, Resources: [{ ResourceId: 3, resourceUnit: 75 }]
    },
    {
        TaskID: 11, TaskName: 'Clear the building site', StartDate: new Date('04/08/2019'),
        Duration: 9, ParentID: 9, Progress: 30, Predecessor: '10FS-9', Resources: [3]
    },
    {
        TaskID: 12, TaskName: 'Sign contract', StartDate: new Date('04/12/2019'),
        Duration: 5, ParentID: 9, Resources: [3], Predecessor: '11FS-5'
    },
];
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Edit, Selection, Toolbar } from '@syncfusion/ej2-react-gantt';
function App() {
   const taskFields = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            resourceInfo: 'Resources',
            parentID: 'ParentID'
        };
        const resourceFields = {
            id: 'ResourceId',
            name: 'ResourceName',
            unit: 'Unit',
            group: 'ResourceGroup'
        };
        const editSettings = {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        };
         const toolbarOptions = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll',
            { text: 'Show/Hide Overallocation', tooltipText: 'Show/Hide Overallocation', id: 'showhidebar' }];
        const labelSettings = {
            rightLabel: 'Resources',
            taskLabel: 'Progress'
        };
        const projectStartDate = new Date('03/28/2019');
       const projectEndDate = new Date('05/18/2019');
    let ganttInstance:any;
   function  toolbarClick(args) {
        if (args.item.id === 'showhidebar') {
            ganttInstance.showOverAllocation = ganttInstance.showOverAllocation ? false : true;
        }}
        return <GanttComponent id='root' dataSource = { data } treeColumnIndex = { 1} viewType = 'ResourceView' allowSelection = { true}
        allowResizing = { true} highlightWeekends = { true} toolbar = {toolbarOptions } toolbarClick={toolbarClick}
        editSettings = {editSettings } projectStartDate = { projectStartDate } projectEndDate = { projectEndDate }
        resourceFields = { resourceFields } taskFields = {taskFields } labelSettings = {labelSettings }
        resources = { resourceCollection } showOverAllocation = {true} ref={gantt => ganttInstance = gantt} >
            <ColumnsDirective>
            <ColumnDirective field= 'TaskID' visible= {false} > </ColumnDirective>
            <ColumnDirective field= 'TaskName'  headerText= 'Task Name'  width= '180' > </ColumnDirective>
            <ColumnDirective field= 'Progress' > </ColumnDirective>
            <ColumnDirective field= 'ResourceGroup'  headerText= 'Group' > </ColumnDirective>
            <ColumnDirective field= 'StartDate' > </ColumnDirective>
            <ColumnDirective field= 'Duration' > </ColumnDirective>
            </ColumnsDirective>
            <Inject services={[ Toolbar, Edit, Selection ]}/>
            </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));