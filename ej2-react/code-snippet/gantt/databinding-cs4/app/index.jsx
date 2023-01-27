import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { DataManager } from '@syncfusion/ej2-data';
class App extends React.Component {
    taskFields = {
        id: 'TaskId',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        dependency: 'Predecessor',
        parentID: 'parentID',
    };
    dataSource = new DataManager({
        url: 'http://some.com/invalidUrl'
    });
    actionFailure(args) {
        let span = document.createElement('span');
        this.ganttInstance.element.parentNode.insertBefore(span, this.ganttInstance.element);
        span.style.color = '#FF0000';
        span.innerHTML = 'Server exception: 404 Not found';
    }
    render() {
        return <GanttComponent dataSource={this.dataSource} taskFields={this.taskFields} actionFailure={this.actionFailure.bind(this)} height='450px' ref={gantt => this.ganttInstance = gantt}>
        </GanttComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
