

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective} from '@syncfusion/ej2-react-gantt';
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
  public collapsing(args: any) {
      if (args.data.TaskID==1)
      args.cancel=true;
      };
  public expanding(args: any) {
      if (args.data.TaskID==5)
      args.cancel=true;
      };
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields}  
        collapsing={this.collapsing.bind(this)} expanding={this.expanding.bind(this)} height = '450px'>
        </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('gantt'));


