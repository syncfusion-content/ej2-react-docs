import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Filter, Toolbar, ToolbarItem } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App(){
  const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks'
  };
 const toolbarOptions: ToolbarItem[] = ['Search'];
    return <GanttComponent dataSource={data} taskFields={taskFields}
         allowFiltering={true} toolbar={toolbarOptions} height = '450px'>
            <Inject services={[Filter, Toolbar]} />
        </GanttComponent>
    };
ReactDOM.render(<App />, document.getElementById('root'));