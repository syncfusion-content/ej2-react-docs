

import { GanttComponent, Inject, Filter } from '@syncfusion/ej2-react-gantt';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { data } from './datasource';
function App(){
    const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID:'ParentId',
    };
    return <GanttComponent dataSource={data} taskFields={taskFields}
         allowFiltering={true} height = '400px'>
            <Inject services={[Filter]} />
        </GanttComponent>
    };
ReactDOM.render(<App />, document.getElementById('root'));


