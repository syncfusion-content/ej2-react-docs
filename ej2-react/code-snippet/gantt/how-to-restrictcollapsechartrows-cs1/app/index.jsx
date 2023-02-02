import * as React from 'react';
import * as ReactDOM from 'react-dom';
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
    collapsing(args) {
        if (this.gantt.ganttChartModule.isExpandCollapseFromChart) {
            args.cancel = true;
        }
    }
    ;
    render() {
        return (<div>
        <GanttComponent dataSource={data} ref={gantt => this.ganttInstance = gantt} taskFields={this.taskFields} collapsing={this.collapsing.bind(this)} allowSelection={true} editSettings={this.editOptions} height='450px'>
            <Inject services={[Edit, Selection]}/>
        </GanttComponent></div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
