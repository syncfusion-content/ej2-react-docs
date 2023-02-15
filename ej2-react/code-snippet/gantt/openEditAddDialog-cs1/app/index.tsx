

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent, Inject, Edit, EditSettingsModel, Selection } from '@syncfusion/ej2-react-gantt';
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
  public ganttInstance:any;
  public editOptions: EditSettingsModel = {
      allowEditing: true,
      allowAdding:true
  };
  public editHandler(){
    this.ganttInstance.editModule.dialogModule.openEditDialog();
}
 public addHandler(){
    this.ganttInstance.editModule.dialogModule.openAddDialog();
}
    render() {
        return (<div>
        <ButtonComponent  onClick= { this.addHandler.bind(this)}>Open Add Dialog</ButtonComponent>
        <ButtonComponent  onClick= { this.editHandler.bind(this)}>Open Edit Dialog</ButtonComponent>
        <GanttComponent dataSource={data} ref={gantt => this.ganttInstance = gantt} taskFields={this.taskFields} allowSelection={true}
        editSettings={this.editOptions} height = '450px'>
            <Inject services={[Edit, Selection]} />
        </GanttComponent></div>)
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


