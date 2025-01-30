import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent, Inject, Selection} from '@syncfusion/ej2-react-gantt';
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
 const settings = {
        mode: 'Row',
        type: 'Multiple',
        enableToggle: true
  };
function clickHandler(){
    ganttInstance.selectionSettings.enableToggle = false;
}
     return (<div>
        <ButtonComponent  onClick= { clickHandler}>Disable Toggle</ButtonComponent>
        <GanttComponent dataSource={data} ref={gantt => ganttInstance = gantt}  allowSelection={true} taskFields={taskFields}
        selectionSettings={settings} height = '450px'>
        <Inject services={[Selection]} />
        </GanttComponent> </div>)
    };
ReactDOM.render(<App />, document.getElementById('root'));