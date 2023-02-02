

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Toolbar, Edit, Selection, ToolbarItem }from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
class App extends React.Component<{}, {}>{
    private ganttInstance: any;
    public taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  };
  public editSettings: any = {
    allowEditing: true,
    allowTaskbarEditing: true
  };
  public toolbarOptions: ToolbarItem[] = ['Edit','ZoomToFit'];
  actionComplete(args) {
    if ((args.action === "CellEditing" || args.action === "DialogEditing") && args.requestType === "save") {
        this.ganttInstance.dataSource = data;
        this.ganttInstance.fitToProject();
      }
  };
  taskbarEdited(args) {
      if (args) {
        this.ganttInstance.dataSource = data;
        this.ganttInstance.fitToProject();
      }
  };
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields}
        toolbar={this.toolbarOptions} editSettings={this.editSettings} actionComplete={this.actionComplete.bind(this)} taskbarEdited={this.taskbarEdited.bind(this)} height = '450px' ref={gantt => this.ganttInstance = gantt}>
           <Inject services={[Toolbar, Edit, Selection]} />
        </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


