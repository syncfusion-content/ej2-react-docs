import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent, Inject, Reorder } from '@syncfusion/ej2-react-gantt';
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
    splitterSettings = {
        position: '90%'
    };
    clickHandler() {
        this.ganttInstance.reorderColumns(['TaskID', 'TaskName'], 'Progress');
    }
    render() {
        return (<div>
        <ButtonComponent onClick={this.clickHandler.bind(this)}>Reorder Task ID and Task Name to Last</ButtonComponent>
        <GanttComponent dataSource={data} taskFields={this.taskFields} splitterSettings={this.splitterSettings} allowReordering={true} height='450px' ref={gantt => this.ganttInstance = gantt}>
            <Inject services={[Reorder]}/>
        </GanttComponent></div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
