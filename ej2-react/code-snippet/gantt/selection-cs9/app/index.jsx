import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent, Inject, Selection } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App (){
    const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks'
  };
  let ganttInstance;
  const settings = {
        mode: 'Row',
        type: 'Multiple'
  };
  function clickHandler(){
    ganttInstance.selectionModule.selectRows([1, 2, 3]); // passing the record index as array collection
}
     return (<div>
        <ButtonComponent  onClick= { clickHandler}>Select Multiple Rows</ButtonComponent>
        <GanttComponent dataSource={data} ref={gantt => ganttInstance = gantt}  allowSelection={true} taskFields={taskFields}
        selectionSettings={settings} height = '450px'>
        <Inject services={[Selection]} />
        </GanttComponent></div>)
    };
ReactDOM.render(<App />, document.getElementById('root'));