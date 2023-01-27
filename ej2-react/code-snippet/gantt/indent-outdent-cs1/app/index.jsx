import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent, Inject, Edit, Selection, Toolbar } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
class App extends React.Component {
    constructor() {
        super(...arguments);
        this.taskFields = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
        this.editOptions = {
            allowEditing: true,
            mode: 'Auto'
        };
        this.toolbarOptions = ['Indent', 'Outdent'];
    }
    indent() {
        this.ganttInstance.indent();
    }
    ;
    outdent() {
        this.ganttInstance.outdent();
    }
    ;
    toolbarClick(args) {
        if (args.item.text === 'Indent') {
            this.ganttInstance.indent();
        }
        if (args.item.text === 'Outdent') {
            this.ganttInstance.outdent();
        }
    }
    ;
    render() {
        return (<div>
        <ButtonComponent onClick={this.indent.bind(this)}>Indent</ButtonComponent>
        <ButtonComponent onClick={this.outdent.bind(this)}>Outdent</ButtonComponent>
        <GanttComponent dataSource={data} taskFields={this.taskFields} allowSelection={true} editSettings={this.editOptions} toolbar={this.toolbarOptions} toolbarClick={this.toolbarClick.bind(this)} height='450px' ref={gantt => this.ganttInstance = gantt}>
            <Inject services={[Edit, Selection, Toolbar]}/>
        </GanttComponent></div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
