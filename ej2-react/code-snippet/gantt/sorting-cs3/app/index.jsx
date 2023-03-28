import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Sort} from '@syncfusion/ej2-react-gantt';
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
  const sortingOptions = { columns: [{ field: 'TaskID', direction: 'Descending' }] };
   return <GanttComponent dataSource={data} taskFields={taskFields} sortSettings={sortingOptions} allowSorting={true} height='450px'>
          <Inject services={[Sort]} />
        </GanttComponent>
 };
ReactDOM.render(<App />, document.getElementById('root'));