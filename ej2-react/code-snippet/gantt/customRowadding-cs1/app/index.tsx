

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent, Inject, Edit, EditSettingsModel, Selection, ColumnsDirective, ColumnDirective} from '@syncfusion/ej2-react-gantt';
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
  public editOptions: EditSettingsModel = {
      allowAdding: true,
      allowEditing: true
  };
  private ganttInstance:any;
  public clickHandler(){
    let data: any= {
        TaskID: 10,
        TaskName: 'New Added Task',
        StartDate: new Date('04/02/2019'),
        Duration: 4,
        Progress: 50
    };
    this.ganttInstance.editModule.addRecord(data, 'Below', 2);
}
    render() {
        return(<div>
        <ButtonComponent onClick= { this.clickHandler.bind(this)}>Add Row</ButtonComponent>
        <GanttComponent dataSource={data}  ref={gantt => this.ganttInstance = gantt}  taskFields={this.taskFields} allowSelection={true}
        editSettings={this.editOptions} height = '450px'>
            <Inject services={[Edit, Selection]} />
        </GanttComponent></div>)
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


