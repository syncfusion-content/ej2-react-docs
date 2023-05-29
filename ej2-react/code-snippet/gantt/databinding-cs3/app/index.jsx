import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
function App (){
    const taskFields = {
    id: 'TaskId',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    dependency: 'Predecessor',
    child: 'SubTasks'
  };
 const dataSource = new DataManager({
    url: 'https://ej2services.syncfusion.com/production/web-services/api/GanttData',
    adaptor: new WebApiAdaptor,
    crossDomain: true
  });
   return <GanttComponent dataSource={dataSource} taskFields={taskFields} height = '450px'>
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));