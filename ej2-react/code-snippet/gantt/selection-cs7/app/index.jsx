import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent, Inject, Selection } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App(){
    const taskFields= {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
  };
  let ganttInstance;
  const settings = {
    mode: 'Row',
    type: 'Multiple'
};
  function rowClickHandler(){
     ganttInstance.selectionModule.selectRow(2); // passing the record index to select the row
}
  function rowsClickHandler(){
  ganttInstance.selectionModule.selectRows([1, 2, 3]); // passing the record index as array collection
}
    return (<div>
        <ButtonComponent onClick= { rowClickHandler}>Select Row</ButtonComponent>
        <ButtonComponent  onClick= { rowsClickHandler}>Select Multiple Rows</ButtonComponent>
        <GanttComponent dataSource={data} allowSelection={true}  ref={gantt => ganttInstance = gantt} selectionSettings={settings} taskFields={taskFields} height = '450px'>
        <Inject services={[Selection]} />
        </GanttComponent></div>)
  };
ReactDOM.render(<App />, document.getElementById('root'));