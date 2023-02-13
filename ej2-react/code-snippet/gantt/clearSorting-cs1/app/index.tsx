import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent, Inject, Sort, SortSettingsModel } from '@syncfusion/ej2-react-gantt';
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
  let ganttInstance: any;
  const sortingOptions: SortSettingsModel = { columns: [{ field: 'TaskID', direction: 'Descending' }] };
 function clickHandler(){
  ganttInstance.clearSorting();
}
     return (<div>
            <ButtonComponent onClick= { clickHandler}>Clear Sorting</ButtonComponent>
            <GanttComponent dataSource={data} taskFields={taskFields}  ref={gantt => ganttInstance = gantt} allowSorting={true} sortSettings={sortingOptions} height='450px'>
          <Inject services={[Sort]} />
        </GanttComponent></div>)
};
ReactDOM.render(<App />, document.getElementById('root'));