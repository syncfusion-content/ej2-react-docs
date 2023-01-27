

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Reorder } from '@syncfusion/ej2-react-gantt';
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
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields} splitterSettings={this.splitterSettings}
        allowReordering={true} height = '450px'>
           <Inject services={[Reorder]} />
        </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


