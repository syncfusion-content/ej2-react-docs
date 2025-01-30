import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent, Inject, Edit, Selection } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App(){
    const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
  let ganttInstance;
  const editOptions = {
      allowDeleting: true
  };
  function clickHandler(){
     ganttInstance.editModule.deleteRow();
}
        return (<div>
        <ButtonComponent onClick= { clickHandler}>Task Delete</ButtonComponent>
        <GanttComponent dataSource={data}  ref={gantt => ganttInstance = gantt}  taskFields={taskFields} allowSelection={true}
        editSettings={editOptions} height = '450px'>
            <Inject services={[Edit, Selection]} />
        </GanttComponent></div>)
};
ReactDOM.render(<App />, document.getElementById('root'));