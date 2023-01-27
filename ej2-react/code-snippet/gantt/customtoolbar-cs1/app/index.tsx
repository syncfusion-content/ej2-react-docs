

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Filter, Toolbar } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
class App extends React.Component<{}, {}>{
    private ganttInstance: any;
    public taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks'
  };
  public toolbarOptions: any[] = [{text: 'Quick Filter', tooltipText: 'Quick Filter', id: 'toolbarfilter', align:'Right', prefixIcon: 'e-quickfilter' }];
  public toolbarClick(): void {
              this.ganttInstance.filterByColumn('TaskName', 'startswith', 'Identify');
        };
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields}
        allowFiltering={true}  toolbar={this.toolbarOptions} toolbarClick={this.toolbarClick.bind(this)} height = '450px' ref={gantt => this.ganttInstance = gantt}>
         <Inject services={[Filter, Toolbar]} />
        </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


