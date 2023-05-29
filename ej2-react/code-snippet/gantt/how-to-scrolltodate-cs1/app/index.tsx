import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App(){
    let ganttInstance: any;
    const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  };
  function clickHandler(){
    ganttInstance.scrollToDate('05/10/2019');
};
        return (<div>
        <ButtonComponent onClick= {clickHandler}>ScrollToDate</ButtonComponent>
        <GanttComponent dataSource={data} taskFields={taskFields}
        height = '450px' ref={gantt => ganttInstance = gantt}>
        </GanttComponent></div>)
};
ReactDOM.render(<App />, document.getElementById('root'));