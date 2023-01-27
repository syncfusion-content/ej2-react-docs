

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent, Inject, Selection, SelectionSettingsModel } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
class App extends React.Component<{}, {}>{
    public taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks'
  };
  private ganttInstance:any;
  public settings: SelectionSettingsModel = {
        mode: 'Row',
        type: 'Multiple'
  };
public clickHandler(){
    this.ganttInstance.selectionModule.selectRows([1, 3, 5]); // passing the record index as array collection
}
public clickHandler1(){
    this.ganttInstance.clearSelection(); // Clear the selected rows
}
    render() {
        return (<div>
        <ButtonComponent  onClick= { this.clickHandler.bind(this)}>Select Multiple Rows</ButtonComponent>
        <ButtonComponent  onClick= { this.clickHandler1.bind(this)}>Clear Selection</ButtonComponent>
        <GanttComponent dataSource={data} ref={gantt => this.ganttInstance = gantt}  allowSelection={true} taskFields={this.taskFields}
        selectionSettings={this.settings} height = '450px'>
        <Inject services={[Selection]} />
        </GanttComponent></div>)
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


