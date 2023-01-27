import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent, Inject, Toolbar, Filter } from '@syncfusion/ej2-react-gantt';
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
    toolbarOptions = ['QuickFilter', 'ClearFilter'];
    enable() {
        this.ganttInstance.toolbarModule.enableItems([this.ganttInstance.element.id + '_QuickFilter', this.ganttInstance.element.id + '_ClearFilter'], true); // enable toolbar items.
    }
    ;
    disable() {
        this.ganttInstance.toolbarModule.enableItems([this.ganttInstance.element.id + '_QuickFilter', this.ganttInstance.element.id + '_ClearFilter'], false); // disable toolbar items.
    }
    ;
    toolbarClick(args) {
        if (args.item.text === 'QuickFilter') {
            this.ganttInstance.filterByColumn('TaskName', 'startswith', 'Identify');
        }
        if (args.item.text === 'ClearFilter') {
            this.ganttInstance.clearFiltering();
        }
    }
    ;
    render() {
        return (<div>
        <ButtonComponent onClick={this.enable.bind(this)}>Enable</ButtonComponent>
        <ButtonComponent onClick={this.disable.bind(this)}>Disable</ButtonComponent>
        <GanttComponent dataSource={data} taskFields={this.taskFields} toolbar={this.toolbarOptions} toolbarClick={this.toolbarClick.bind(this)} allowFiltering={true} height='450px' ref={gantt => this.ganttInstance = gantt}>
            <Inject services={[Toolbar, Filter]}/>
        </GanttComponent></div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
