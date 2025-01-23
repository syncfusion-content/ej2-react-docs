import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent, Inject, Selection, SelectionSettingsModel } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App(){
    const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
  let ganttInstance:any;
 const settings: SelectionSettingsModel = {
        mode: 'Row',
        type: 'Multiple'
  };
function clickHandler(){
    ganttInstance.selectionModule.selectRows([1, 3, 5]); // passing the record index as array collection
}
function clickHandler1(){
    ganttInstance.clearSelection(); // Clear the selected rows
}
        return (<div>
        <ButtonComponent  onClick= { clickHandler}>Select Multiple Rows</ButtonComponent>
        <ButtonComponent  onClick= { clickHandler1}>Clear Selection</ButtonComponent>
        <GanttComponent dataSource={data} ref={gantt => ganttInstance = gantt}  allowSelection={true} taskFields={taskFields}
        selectionSettings={settings} height = '450px'>
        <Inject services={[Selection]} />
        </GanttComponent></div>)
};
ReactDOM.render(<App />, document.getElementById('root'));