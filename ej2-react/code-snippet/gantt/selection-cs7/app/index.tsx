

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent, Inject, Selection } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
class App extends React.Component<{}, {}>{
    public taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks',
  };
  private ganttInstance:any;
  public clickHandler(){
     this.ganttInstance.selectionModule.selectRow(2); // passing the record index to select the row
}
    render() {
        return (<div>
        <ButtonComponent onClick= { this.clickHandler.bind(this)}>Select Row</ButtonComponent>
        <GanttComponent dataSource={data} allowSelection={true}  ref={gantt => this.ganttInstance = gantt}  taskFields={this.taskFields} height = '450px'>
        <Inject services={[Selection]} />
        </GanttComponent></div>)
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


