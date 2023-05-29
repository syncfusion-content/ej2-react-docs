

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Toolbar, ToolbarItem }from '@syncfusion/ej2-react-gantt';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { data, changeData } from './datasource';
function  App(){
    let ganttInstance: any;
    const  taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  };
  const  toolbarOptions: ToolbarItem[] = ['ZoomToFit'];
 function  clickHandler() {
    ganttInstance.dataSource = changeData;
  };
 function dataBound(args) {
    ganttInstance.fitToProject();
  };
        return (<div>
        <ButtonComponent onClick= { clickHandler}>Change Data</ButtonComponent>
        <GanttComponent dataSource={data} taskFields={taskFields} dataBound={dataBound}
        toolbar={toolbarOptions} height = '450px' ref={gantt => ganttInstance = gantt}>
           <Inject services={[Toolbar]} />
        </GanttComponent></div>)
};
ReactDOM.render(<App />, document.getElementById('root'));


