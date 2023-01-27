

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Resize } from '@syncfusion/ej2-react-gantt';
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
    position : '90%'
};
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields}
        allowResizing={true} splitterSettings={this.splitterSettings} height = '450px'>
            <Inject services={[Resize]} />
        </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


