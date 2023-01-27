import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Toolbar } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
class App extends React.Component {
    taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        child: 'subtasks'
    };
    toolbarOptions = ['ZoomIn', 'ZoomOut', 'ZoomToFit'];
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields} toolbar={this.toolbarOptions} height='450px'>
           <Inject services={[Toolbar]}/>
        </GanttComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
