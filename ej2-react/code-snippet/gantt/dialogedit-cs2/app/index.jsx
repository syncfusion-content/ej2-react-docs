import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
class App extends React.Component {
    taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    };
    editOptions = {
        allowEditing: true,
        mode: 'Dialog'
    };
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields} editSettings={this.editOptions} height='450px'>
            <Inject services={[Edit]}/>
        </GanttComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
