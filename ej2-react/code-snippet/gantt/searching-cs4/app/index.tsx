import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Filter, Toolbar, ToolbarItem, SearchSettingsModel } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App (){
   const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
  const toolbarOptions: ToolbarItem[] = ['Search'];
  let searchSettings: SearchSettingsModel = {fields: ['TaskName','Duration']};
   return <GanttComponent dataSource={data} taskFields={taskFields}
         allowFiltering={true} searchSettings={searchSettings} toolbar={toolbarOptions}
         height = '450px'>
           <Inject services={[Filter, Toolbar]} />
        </GanttComponent>
   };
ReactDOM.render(<App />, document.getElementById('root'));