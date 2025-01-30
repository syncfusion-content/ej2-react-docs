let DropData: any[] =  [
  { text: 'Parent', value: 'Parent' },
  { text: 'Child', value: 'Child' },
  { text: 'Both', value: 'Both' },
  { text: 'None', value: 'None' },
];
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DropDownListComponent, ChangeEventArgs } from "@syncfusion/ej2-react-dropdowns";
import { GanttComponent, Inject, Filter } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App(){
    let ganttInstance: any;
    const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
  function onChange(sel: ChangeEventArgs): void {
        let mode:any = sel.value.toString();
        ganttInstance.filterSettings.hierarchyMode = mode;
        ganttInstance.clearFiltering();
    }
    return(<div>
        <DropDownListComponent dataSource={DropData}
        change={onChange} width= {150} value="Parent"></DropDownListComponent>
        <GanttComponent dataSource={data} taskFields={taskFields}
         allowFiltering={true} height = '450px' ref={gantt => ganttInstance = gantt}>
          <Inject services={[Filter]} />
        </GanttComponent></div>)
    };
ReactDOM.render(<App />, document.getElementById('root'));