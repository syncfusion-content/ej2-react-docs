import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent, Inject, Sort } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App (){
   let gantt: any;
    const taskFields: any = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    };

    function clickHandler() {
        gantt.sortModule.sortColumn('TaskID', "Descending", false);
    }
     return (<div>
            <ButtonComponent onClick={clickHandler}>Sort Column</ButtonComponent>
            <GanttComponent dataSource={data} ref={g => gantt = g} taskFields={taskFields}
                allowSorting={true} height='450px'>
               <Inject services={[Sort]} />
            </GanttComponent></div>)
   };
ReactDOM.render(<App />, document.getElementById('root'));