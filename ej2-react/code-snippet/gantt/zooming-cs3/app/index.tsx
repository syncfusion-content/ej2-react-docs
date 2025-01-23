import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent}from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App(){
    const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
  };
   let ganttInstance:any;
  function  zoomIn() {
        ganttInstance.zoomIn();
    }
   function  zoomOut() {
       ganttInstance.zoomOut();
    }
   function fitToProject() {
        ganttInstance.fitToProject();
    }
         return (<div>
        <ButtonComponent onClick={zoomIn}>ZoomIn</ButtonComponent>
        <ButtonComponent onClick={zoomOut}>ZoomOut</ButtonComponent>
        <ButtonComponent onClick={fitToProject}>FitToProject</ButtonComponent>
        <GanttComponent dataSource={data}
        ref={gantt => ganttInstance = gantt} taskFields={taskFields} height = '450px'>
        </GanttComponent></div>);
};
ReactDOM.render(<App />, document.getElementById('root'));