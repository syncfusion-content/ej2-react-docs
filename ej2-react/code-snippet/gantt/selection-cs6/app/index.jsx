import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Selection } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App (){
    const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
   return <GanttComponent dataSource={data} selectedRowIndex={3} allowSelection={true} taskFields={taskFields} height = '450px'>
        <Inject services={[Selection]} />
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));