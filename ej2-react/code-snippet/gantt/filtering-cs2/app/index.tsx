import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Filter } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App(){
    const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
    return <GanttComponent dataSource={data} taskFields={taskFields}
         allowFiltering={true} height = '450px'>
            <Inject services={[Filter]} />
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));