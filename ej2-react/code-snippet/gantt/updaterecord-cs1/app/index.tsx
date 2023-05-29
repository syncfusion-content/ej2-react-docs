import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent, Inject, Edit, EditSettingsModel, Selection } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App(){
    const  taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks'
  };
  const  editOptions: EditSettingsModel = {
      allowEditing: true
  };
  let ganttInstance:any;
 function clickHandler(){
    let data: any = {
        TaskID: 3,
        TaskName: 'Updated by index value',
        StartDate: new Date('04/02/2019'),
        Duration: 4,
        Progress: 50
    };
    ganttInstance.updateRecordByID(data);
}
        return (<div>
        <ButtonComponent onClick= { clickHandler}>Update Record</ButtonComponent>
        <GanttComponent dataSource={data}  ref={gantt => ganttInstance = gantt} taskFields={taskFields} allowSelection={true}
        editSettings={editOptions} height = '450px'>
            <Inject services={[Edit, Selection]} />
        </GanttComponent></div>)
};
ReactDOM.render(<App />, document.getElementById('root'));