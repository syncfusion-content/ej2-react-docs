import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent, Inject, RowDD, Edit, Selection } from '@syncfusion/ej2-react-gantt';
import { projectNewData } from './datasource';
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
    clickHandler() {
        this.gantt.reorderRows([1, 2, 3], 4, 'child');
    }
    render() {
        return (<div>
        <ButtonComponent onClick={this.clickHandler.bind(this)}>Perform Drag And Drop</ButtonComponent>
        <GanttComponent dataSource={projectNewData} taskFields={this.taskFields} allowRowDragAndDrop={true} allowFiltering={true} height='450px' ref={gantt => this.gantt = gantt}>
        <Inject services={[RowDD, Edit, Selection]}/>
        </GanttComponent></div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
