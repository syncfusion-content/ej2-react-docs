

import { createElement } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Sort, Filter, ColumnMenu } from '@syncfusion/ej2-react-gantt';
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
  public splitterSettings: any = {
    columnIndex : 5
};
    public columnMenuOpen(){
        alert('columnMenuOpen event is Triggered');
    }
    public columnMenuClick(){
        alert('columnMenuClick event is Triggered');
    }
    render() {
        return (<div>
        <GanttComponent dataSource={data} taskFields={this.taskFields} showColumnMenu={true}
        columnMenuOpen= { this.columnMenuOpen } columnMenuClick= { this.columnMenuClick }
        allowFiltering={true} allowSorting={true}
        splitterSettings={this.splitterSettings} height = '450px' ref={gantt => this.ganttInstance = gantt}>
        <Inject services={[Sort, Filter, ColumnMenu]} />
        </GanttComponent></div>)
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


