

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, RowDD, Edit, Selection } from '@syncfusion/ej2-react-gantt';
import { projectNewData } from './datasource';
class App extends React.Component<{}, {}>{
    public taskFields: any = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
  };
  public rowDragStartHelper(args: any) {
      var record = args.data[0] ? args.data[0] : args.data;
      var taskId = record.ganttProperties.taskId;
      if (taskId <= 4) {
          args.cancel = true;
    }
};
  render() {
        return <GanttComponent dataSource={projectNewData} taskFields={this.taskFields} allowRowDragAndDrop={true} rowDragStartHelper={this.rowDragStartHelper.bind(this)} height = '450px'>
        <Inject services={[RowDD, Edit, Selection]} />
        </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


