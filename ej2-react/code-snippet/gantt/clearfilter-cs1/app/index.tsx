import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent, Inject, Filter, FilterSettingsModel } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App(){
    let ganttInstance : any;
    const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks'
  };
 const FilterOptions: FilterSettingsModel = {
            columns: [
                { field: 'TaskName', matchCase: false, operator: 'startswith', predicate: 'and', value: 'perfor' },
               { field: 'TaskID', matchCase: false, operator: 'equal', predicate: 'and', value: 3 }]
        };
  function clickHandler(){
    ganttInstance .clearFiltering();
}
    return(<div>
        <ButtonComponent  onClick= {clickHandler}>Clear Filter</ButtonComponent>
        <GanttComponent dataSource={data} taskFields={taskFields} filterSettings={FilterOptions}
         allowFiltering={true} height = '450px' ref={gantt => ganttInstance  = gantt}>
            <Inject services={[Filter]} />
        </GanttComponent></div>)
    };
ReactDOM.render(<App />, document.getElementById('root'));