import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Filter, Toolbar } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App(){
    let ganttInstance;
    const taskFields= {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
  const toolbarOptions = [{text: 'Quick Filter', tooltipText: 'Quick Filter', id: 'toolbarfilter', align:'Right', prefixIcon: 'e-quickfilter' }];
 function toolbarClick(){
              ganttInstance.filterByColumn('TaskName', 'startswith', 'Identify');
        };
        return <GanttComponent dataSource={data} taskFields={taskFields}
        allowFiltering={true}  toolbar={toolbarOptions} toolbarClick={toolbarClick.bind(this)} height = '450px' ref={gantt => ganttInstance = gantt}>
         <Inject services={[Filter, Toolbar]} />
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));