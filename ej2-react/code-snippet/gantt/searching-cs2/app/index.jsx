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
    child: 'subtasks'
  };
 const toolbarOptions = ['Search'];
  const searchSettings = {
      fields: ['TaskName'], operator: 'contains', key: 'Soil', ignoreCase: true
  };
  return <GanttComponent dataSource={data} taskFields={taskFields}
         allowFiltering={true} toolbar={toolbarOptions} searchSettings={searchSettings}
         height = '450px'>
           <Inject services={[Filter, Toolbar]} />
        </GanttComponent>
    }
ReactDOM.render(<App />, document.getElementById('root'));