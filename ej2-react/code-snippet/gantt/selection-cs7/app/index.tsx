import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent, Inject, Selection } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App(){
    const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks',
  };
  let ganttInstance:any;
 function clickHandler(){
     ganttInstance.selectionModule.selectRow(2); // passing the record index to select the row
}
    return (<div>
        <ButtonComponent onClick= { clickHandler}>Select Row</ButtonComponent>
        <GanttComponent dataSource={data} allowSelection={true}  ref={gantt => ganttInstance = gantt}  taskFields={taskFields} height = '450px'>
        <Inject services={[Selection]} />
        </GanttComponent></div>)
  };
ReactDOM.render(<App />, document.getElementById('root'));