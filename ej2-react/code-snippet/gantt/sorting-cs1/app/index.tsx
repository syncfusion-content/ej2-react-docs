

import { GanttComponent, Inject, Sort } from '@syncfusion/ej2-react-gantt';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { data } from './datasource';
function App () {
    const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks'
    };
   return <GanttComponent dataSource={data} taskFields={taskFields}
          allowSorting={true} height='400px'>
        <Inject services={[Sort]} />
        </GanttComponent>
    };
ReactDOM.render(<App />, document.getElementById('root'));


