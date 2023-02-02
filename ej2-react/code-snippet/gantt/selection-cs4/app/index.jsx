import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Selection } from '@syncfusion/ej2-react-gantt';
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
    settings = {
        mode: 'Cell'
    };
    cellSelecting(args) {
        if (args.data.TaskID == 4 && args.cellIndex.cellIndex == 1) {
            args.cancel = true;
        }
    }
    render() {
        return <GanttComponent dataSource={data} allowSelection={true} taskFields={this.taskFields} selectionSettings={this.settings} cellSelecting={this.cellSelecting.bind(this)} height='450px'>
        <Inject services={[Selection]}/>
        </GanttComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
