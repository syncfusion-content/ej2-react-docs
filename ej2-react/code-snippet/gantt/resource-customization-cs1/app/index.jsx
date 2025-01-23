export let ProjectResources = [
    { ResourceId: 1, ResourceName: 'Martin Tamer' },
    { ResourceId: 2, ResourceName: 'Rose Fuller' },
    { ResourceId: 3, ResourceName: 'Margaret Buchanan' },
    { ResourceId: 4, ResourceName: 'Tamer Vinet' }
];
let data = [
  {
    TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'),
  },
  {
    TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4,
    ParentID: 1, Progress: 30, Resources: [1], info: 'Measure the total property area alloted for construction'
  },
  {
    TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Predecessor: '2',
    Resources: [2], info: 'Obtain an engineered soil test of lot where construction is planned.' +
      'From an engineer or company specializing in soil testing'
  },
  { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Predecessor: '3', Progress: 30, Resources: [3], },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2019'),
    EndDate: new Date('04/21/2019'),
  },
  {
    TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'),
    Duration: 3, ParentID: 5, Predecessor: '4', Progress: 30, Resources: [4],
    info: 'Develop floor plans and obtain a materials list for estimations'
  },
  {
    TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'),
    Duration: 3, ParentID: 5, Predecessor: '6', Resources: [1], info: ''
  },
  {
    TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'),
    Duration: 4, ParentID: 5, Predecessor: '7', Resources: [2], info: ''
  }
];
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
function App(){
        const taskFields = {
            id: 'TaskID',
            name: 'TaskName',
            resourceInfo: 'Resources',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID: 'ParentID'
        };
        function queryTaskbarInfo(args) {
            if(args.data.Resources === 'Martin Tamer'){
                args.taskbarBgColor = '#DFECFF';
                args.progressBarBgColor = '#006AA6'
            }else if(args.data.Resources === 'Rose Fuller'){
                args.taskbarBgColor = '#E4E4E7';
                args.progressBarBgColor = '#766B7C'
            }
            else if(args.data.Resources === 'Margaret Buchanan'){
                args.taskbarBgColor = '#DFFFE2';
                args.progressBarBgColor = '#00A653'
            }
            else if(args.data.Resources === 'Tamer Vinet'){
                args.taskbarBgColor = '#FFEBE9';
                args.progressBarBgColor = '#FF3740'
            }
        };
        const resColumnTemplate = (props) => {
            if (props.ganttProperties.resourceNames) {
              if (props.ganttProperties.resourceNames === 'Martin Tamer') {
                return (
                  <div style={{ width:'140px', height:'24px', borderRadius:'100px', backgroundColor:'#DFECFF', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <span style={{ color: '#006AA6', fontWeight: 500 }}>{props.ganttProperties.resourceNames}</span>
                  </div>
                );
              }
        
              if (props.ganttProperties.resourceNames === 'Rose Fuller') {
                return (
                  <div style={{ width:'140px', height:'24px', borderRadius:'100px', backgroundColor:'#E4E4E7', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <span style={{ color: '#766B7C', fontWeight: 500 }}>{props.ganttProperties.resourceNames}</span>
                  </div>
                );
              }
        
              if (props.ganttProperties.resourceNames === 'Margaret Buchanan') {
                return (
                  <div style={{ width:'140px', height:'24px', borderRadius:'100px', backgroundColor:'#DFFFE2', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <span style={{ color: '#00A653', fontWeight: 500 }}>{props.ganttProperties.resourceNames}</span>
                  </div>
                );
              }
        
              if (props.ganttProperties.resourceNames === 'Tamer Vinet') {
                return (
                  <div style={{ width:'140px', height:'24px', borderRadius:'100px', backgroundColor:'#FFEBE9', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <span style={{ color: '#FF3740', fontWeight: 500 }}>{props.ganttProperties.resourceNames}</span>
                  </div>
                );
              }
        
            } else {
              return <div></div>
            }
          }
        const template = resColumnTemplate.bind(this);
        const resourceFields = {
            id: 'ResourceId',
            name: 'ResourceName'
        };
        const labelSettings = {
            rightLabel: 'Resources'
        };
        const splitterSettings = {
            columnIndex: 2
        };
        return <GanttComponent id='root' queryTaskbarInfo= {queryTaskbarInfo} dataSource= { data } taskFields = { taskFields } resourceFields={resourceFields} labelSettings = { labelSettings } resources = { ProjectResources } height = '380px' splitterSettings = {splitterSettings} >
            <ColumnsDirective>
            < ColumnDirective field= 'TaskName'  headerText= 'Task Name'  width= '270' > </ColumnDirective>
            < ColumnDirective field= 'Resources'  headerText= 'Resources'  width= '175' template= {template} > </ColumnDirective>
            < ColumnDirective field= 'StartDate' headerText='Start Date' width= '150' > </ColumnDirective>
            < ColumnDirective field= 'Duration' width= '150' > </ColumnDirective>
            < ColumnDirective field= 'Progress' width= '150' > </ColumnDirective>
            </ColumnsDirective>
        </GanttComponent>;
};
ReactDOM.render(<App />, document.getElementById('root'));