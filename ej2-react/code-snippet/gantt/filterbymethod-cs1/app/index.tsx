import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent, Inject, Filter } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App(){
     const taskFields = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
   let ganttInstance;
   function clickHandler() {
        ganttInstance.filterByColumn('TaskName', 'startswith', 'Perf');
    }
  return (<div>
    <ButtonComponent onClick={clickHandler}>Filter Column</ButtonComponent>
    <GanttComponent dataSource={data} taskFields={taskFields} allowFiltering={true} height='450px' ref={gantt => ganttInstance = gantt}>
        <Inject services={[Filter]}/>
    </GanttComponent></div>);
    };
ReactDOM.render(<App />, document.getElementById('root'));