import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Toolbar }from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App (){
   const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
  };
  
  const toolbarOptions = ['ZoomIn','ZoomOut','ZoomToFit'];
        return <GanttComponent dataSource={data} taskFields={taskFields}
        toolbar={toolbarOptions} height = '450px'>
           <Inject services={[Toolbar]} />
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));