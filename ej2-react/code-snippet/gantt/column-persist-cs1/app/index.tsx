let data: Object[]  = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2019'),
    EndDate: new Date('04/21/2019'),
    subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50  },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
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
  },
];

import { ColumnDirective, ColumnsDirective, GanttComponent } from '@syncfusion/ej2-react-gantt';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Gantt} from '@syncfusion/ej2-react-gantt';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
function App (){
let  ganttInstance: Gantt | null;
function clickHandler(){
let savedProperties = JSON.parse(ganttInstance.getPersistData());
let gridColumnsState = Object.assign([], ganttInstance.ganttColumns);
savedProperties.columns.forEach((col: {
field: any;
headerText: any;
template: any;
headerTemplate: any;
}) => {
let headerText = gridColumnsState.find((colColumnsState) => colColumnsState.field === col.field)['headerText'];
let colTemplate = gridColumnsState.find((colColumnsState) => colColumnsState.field === col.field)['template'];
let headerTemplate = gridColumnsState.find((colColumnsState) => colColumnsState.field === col.field)['headerTemplate'];
col.headerText = 'Text Changed';
col.template = colTemplate;
col.headerTemplate = headerTemplate; //likewise you can restore required column properties as per your wants.
}
);
console.log(savedProperties);
ganttInstance.treeGrid.setProperties(savedProperties);
}

const taskFields: any = {
id: 'TaskID',
name: 'TaskName',
startDate: 'StartDate',
duration: 'Duration',
progress: 'Progress',
child: 'subtasks'
};
const headerTemplate: any = customerTemplate;
function customerTemplate(props: any): any {
return (<div>
<span className="e-icons e-header" ></span>Task Name
</div>);
}
return( <div> <ButtonComponent onClick= { clickHandler }>Restore</ButtonComponent> <GanttComponent id="Gantt" dataSource={data}
taskFields={taskFields} enablePersistence={true} height={230}
ref={gantt => ganttInstance = gantt}>
<ColumnsDirective>
    <ColumnDirective field='TaskID' width='100' textAlign="Right"/>
    <ColumnDirective field='TaskName' width='100' headerTemplate={headerTemplate}/>
    <ColumnDirective field='StartDate' width='100'/>
    <ColumnDirective field='Duration' width='100'/>
</ColumnsDirective>
</GanttComponent></div>)
};
ReactDOM.render(<App />, document.getElementById('root'));