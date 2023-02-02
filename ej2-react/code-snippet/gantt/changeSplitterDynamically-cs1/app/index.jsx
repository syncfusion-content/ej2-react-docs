import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
class App extends React.Component {
    ganttInstance;
    taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    };
    clickHandler() {
        this.ganttInstance.setSplitterPosition('50%', 'position');
    }
    changeindex() {
        this.ganttInstance.setSplitterPosition(0, 'columnIndex');
    }
    render() {
        return (<div>
        <ButtonComponent onClick={this.clickHandler.bind(this)}>ChangeByPosition</ButtonComponent>
        <ButtonComponent onClick={this.changeindex.bind(this)}>ChangeByIndex</ButtonComponent>
        <GanttComponent dataSource={data} taskFields={this.taskFields} height='450px' ref={gantt => this.ganttInstance = gantt}>
        </GanttComponent></div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
