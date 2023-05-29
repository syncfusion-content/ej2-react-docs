import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Filter, Toolbar} from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App (){
   const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks'
  };
  const toolbarOptions= ['Search'];
  let searchSettings = {fields: ['TaskName','Duration']};
   return <GanttComponent dataSource={data} taskFields={taskFields}
         allowFiltering={true} searchSettings={searchSettings} toolbar={toolbarOptions}
         height = '450px'>
           <Inject services={[Filter, Toolbar]} />
        </GanttComponent>
   };
ReactDOM.render(<App />, document.getElementById('root'));