import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Filter} from '@syncfusion/ej2-react-gantt';
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
  const FilterOptions = {
    columns: [
        { field: 'TaskName', matchCase: false, operator: 'startswith', predicate: 'and', value: 'Identify' },
       { field: 'TaskID', matchCase: false, operator: 'equal', predicate: 'and', value: 2 }]
};
     return <GanttComponent dataSource={data} taskFields={taskFields}
         allowFiltering={true} filterSettings={FilterOptions} height = '450px'>
         <Inject services={[Filter]} />
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));