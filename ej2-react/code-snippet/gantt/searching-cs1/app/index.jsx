import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Filter, Toolbar} from '@syncfusion/ej2-react-gantt';
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
 const toolbarOptions = ['Search'];
    return <GanttComponent dataSource={data} taskFields={taskFields}
         allowFiltering={true} toolbar={toolbarOptions} height = '450px'>
            <Inject services={[Filter, Toolbar]} />
        </GanttComponent>
    };
ReactDOM.render(<App />, document.getElementById('root'));