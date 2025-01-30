

import { GanttComponent, Inject, Edit, Selection } from '@syncfusion/ej2-react-gantt';
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
    parentID:'ParentId'
  };
  const editSettings: any = {
    allowEditing: true,
    mode: 'Dialog'
  };
return <GanttComponent dataSource={data} taskFields={taskFields} allowSelection={true}
        editSettings={editSettings} height = '400px'>
         <Inject services={[Edit, Selection]} />
        </GanttComponent>
    };
ReactDOM.render(<App />, document.getElementById('root'));


