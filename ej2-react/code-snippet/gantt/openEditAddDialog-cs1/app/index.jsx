import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent, Inject, Edit, Selection } from '@syncfusion/ej2-react-gantt';
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
    ganttInstance;
    editOptions = {
        allowEditing: true,
        allowAdding: true
    };
    editHandler() {
        this.ganttInstance.editModule.dialogModule.openEditDialog();
    }
    addHandler() {
        this.ganttInstance.editModule.dialogModule.openAddDialog();
    }
    render() {
        return (<div>
        <ButtonComponent onClick={this.addHandler.bind(this)}>Open Add Dialog</ButtonComponent>
        <ButtonComponent onClick={this.editHandler.bind(this)}>Open Edit Dialog</ButtonComponent>
        <GanttComponent dataSource={data} ref={gantt => this.ganttInstance = gantt} taskFields={this.taskFields} allowSelection={true} editSettings={this.editOptions} height='450px'>
            <Inject services={[Edit, Selection]}/>
        </GanttComponent></div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
