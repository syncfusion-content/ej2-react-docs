

import { GanttComponent, Inject, Edit } from '@syncfusion/ej2-react-gantt';
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
  const editSettings: any = {
    allowTaskbarEditing: true
  };
  return <GanttComponent dataSource={data} taskFields={taskFields}
        editSettings={editSettings}  height = '400px'>
            <Inject services={[Edit]} />
        </GanttComponent>
    };
ReactDOM.render(<App />, document.getElementById('root'));


