let tempData: any[] = [
    {
        TaskID: 1, TaskName: 'Product concept',StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'),
        ParentID: 0
    },
    {
        TaskID: 2, TaskName: 'Defining the product and its usage', StartDate: new Date('04/02/2019'),
        Duration: 3, Progress: 30, ParentID: 1
    },
    {
        TaskID: 3, TaskName: 'Defining target audience', StartDate: new Date('04/02/2019'),
        ParentID: 1, Duration: 3
    },
    {
        TaskID: 4, TaskName: 'Prepare product sketch and notes', StartDate: new Date('04/05/2019'),
        Duration: 2, ParentID: 1, Progress: 30
    },
    {
        TaskID: 5, TaskName: 'Concept approval', StartDate: new Date('04/08/2019'),
        ParentID: 0, Duration: 0
    },
    {
        TaskID: 6, TaskName: 'Market research', StartDate: new Date('04/02/2019'),
        ParentID: 0, EndDate: new Date('04/21/2019')
    },
    {
        TaskID: 7, TaskName: 'Demand analysis', StartDate: new Date('04/04/2019'),
        EndDate: new Date('04/21/2019'), ParentID: 6
    },
    {
        TaskID: 8, TaskName: 'Customer strength', StartDate: new Date('04/09/2019'),
        Duration: 4, ParentID: 7, Progress: 30
    },
    {
        TaskID: 9, TaskName: 'Market opportunity analysis', StartDate: new Date('04/09/2019'),
        Duration: 4, ParentID: 7
    },
    {
        TaskID: 10, TaskName: 'Competitor analysis', StartDate: new Date('04/15/2019'),
        Duration: 4, ParentID: 6, Progress: 30
    },
    {
        TaskID: 11, TaskName: 'Product strength analsysis', StartDate: new Date('04/15/2019'),
        Duration: 4, ParentID: 6
    },
    {
        TaskID: 12, TaskName: 'Research complete', StartDate: new Date('04/18/2019'),
        Duration: 0, ParentID: 6
    },
    {
        TaskID: 13, TaskName: 'Product design and development', StartDate: new Date('04/04/2019'),
        ParentID: 0, EndDate: new Date('04/21/2019')
    },
    {
        TaskID: 14, TaskName: 'Functionality design', StartDate: new Date('04/19/2019'),
        Duration: 3, ParentID: 13, Progress: 30
    },
    {
        TaskID: 15, TaskName: 'Quality design', StartDate: new Date('04/19/2019'),
        Duration: 3, ParentID: 13
    },
    {
        TaskID: 16, TaskName: 'Define reliability', StartDate: new Date('04/24/2019'),
        Duration: 2, Progress: 30, ParentID: 13
    },
    {
        TaskID: 17, TaskName: 'Identifying raw materials', StartDate: new Date('04/24/2019'),
        Duration: 2, ParentID: 13
    },
    {
        TaskID: 18, TaskName: 'Define cost plan', StartDate: new Date('04/04/2019'),
        ParentID: 13, EndDate: new Date('04/21/2019')
    },
    {
        TaskID: 19, TaskName: 'Manufacturing cost', StartDate: new Date('04/26/2019'),
        Duration: 2, Progress: 30, ParentID: 18
    },
    {
        TaskID: 20, TaskName: 'Selling cost', StartDate: new Date('04/26/2019'),
        Duration: 2, ParentID: 18
    },
    {
        TaskID: 21, TaskName: 'Development of the final design', StartDate: new Date('04/30/2019'),
        ParentID: 13, EndDate: new Date('04/21/2019')
    },
    {
        TaskID: 22, TaskName: 'Defining dimensions and package volume', StartDate: new Date('04/30/2019'),
        Duration: 2, ParentID: 21, Progress: 30
    },
    {
        TaskID: 23, TaskName: 'Develop design to meet industry standards', StartDate: new Date('05/02/2019'),
        Duration: 2, ParentID: 21
    },
    {
        TaskID: 24, TaskName: 'Include all the details', StartDate: new Date('05/06/2019'),
        Duration: 3, ParentID: 21
    },
    {
        TaskID: 25, TaskName: 'CAD computer-aided design', StartDate: new Date('05/09/2019'),
        Duration: 3, ParentID: 13, Progress: 30
    },
    {
        TaskID: 26, TaskName: 'CAM computer-aided manufacturing', StartDate: new Date('09/14/2019'),
        Duration: 3, ParentID: 13
    },
    {
        TaskID: 27, TaskName: 'Design complete', StartDate: new Date('05/16/2019'),
        Duration: 0, ParentID: 13
    },
    {
        TaskID: 28, TaskName: 'Prototype testing', StartDate: new Date('05/17/2019'),
        Duration: 4, Progress: 30, ParentID: 0
    },
    {
        TaskID: 29, TaskName: 'Include feedback', StartDate: new Date('05/17/2019'),
        Duration: 4, ParentID: 0
    },
    {
        TaskID: 30, TaskName: 'Manufacturing', StartDate: new Date('05/23/2019'),
        Duration: 5, Progress: 30, ParentID: 0
    },
    {
        TaskID: 31, TaskName: 'Assembling materials to finsihed goods', StartDate: new Date('05/30/2019'),
        Duration: 5, ParentID: 0
    },
    {
        TaskID: 32, TaskName: 'Feedback and testing', StartDate: new Date('04/04/2019'),
        ParentID: 0, EndDate: new Date('04/21/2019'),
    },
    {
        TaskID: 33, TaskName: 'Internal testing and feedback', StartDate: new Date('06/06/2019'),
        Duration: 3, ParentID: 32, Progress: 45
    },
    {
        TaskID: 34, TaskName: 'Customer testing and feedback', StartDate: new Date('06/11/2019'),
        Duration: 3, ParentID: 32, Progress: 50
    },
    {
        TaskID: 35, TaskName: 'Final product development', StartDate: new Date('04/04/2019'),
        ParentID: 0, EndDate: new Date('04/21/2019'),
    },
    {
        TaskID: 36, TaskName: 'Important improvements', StartDate: new Date('06/14/2019'),
        Duration: 4, Progress: 30, ParentID: 35
    },
    {
        TaskID: 37, TaskName: 'Address any unforeseen issues', StartDate: new Date('06/14/2019'),
        Duration: 4, Progress: 30, ParentID: 35
    },
    {
        TaskID: 38, TaskName: 'Final product', StartDate: new Date('04/04/2019'),
        ParentID: 0, EndDate: new Date('04/21/2019'),
    },
    {
        TaskID: 39, TaskName: 'Branding product', StartDate: new Date('06/20/2019'),
        Duration: 4, ParentID: 38
    },
    {
        TaskID: 40, TaskName: 'Marketing and presales', StartDate: new Date('06/26/2019'), Duration: 4,
        Progress: 30, ParentID: 38
    }
];

let virtualData: any[] = [];
let projId: number = 1;
for (let i: number = 0; i < 50; i++) {
    let x: number = virtualData.length + 1;
    let parent: any = {};
    /* tslint:disable:no-string-literal */
    parent['TaskID'] = x;
    parent['TaskName'] = 'Project ' + (i + 1);
    virtualData.push(parent);
    for (let j: number = 0; j < tempData.length; j++) {
        let subtasks: any = {};
        /* tslint:disable:no-string-literal */
        subtasks['TaskID'] = tempData[j].TaskID + x;
        subtasks['TaskName'] = tempData[j].TaskName;
        subtasks['StartDate'] = tempData[j].StartDate;
        subtasks['Duration'] = tempData[j].Duration;
        subtasks['Progress'] = tempData[j].Progress;
        subtasks['ParentID'] = tempData[j].ParentID + x;
        virtualData.push(subtasks);
    }
}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {GanttComponent,ColumnsDirective,ColumnDirective,Inject,Selection, VirtualScroll, Sort, Filter} from '@syncfusion/ej2-react-gantt';

function App (){
   const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
  const splitterSettings: any = {
    columnIndex: 2
  };
  const labelSettings: any = {
    taskLabel: 'Progress'
  };
    return (
          <GanttComponent dataSource={virtualData} treeColumnIndex={1} labelSettings={labelSettings}
            allowSelection={true} highlightWeekends={true} enableVirtualization={true} loadingIndicator= {{ indicatorType: 'Shimmer' }} allowSorting={true} allowFiltering={true} taskFields={taskFields} splitterSettings={splitterSettings} height='450px'>
            <ColumnsDirective>
                    <ColumnDirective field='TaskID'/>
                    <ColumnDirective field='TaskName' headerText='Task Name'/>
                    <ColumnDirective field='StartDate'/>
                    <ColumnDirective field='Duration'/>
                    <ColumnDirective field='Progress'/>
                </ColumnsDirective>
            <Inject services={[Selection, VirtualScroll, Sort, Filter]} />
          </GanttComponent>)
};
ReactDOM.render(<App />, document.getElementById('root'));