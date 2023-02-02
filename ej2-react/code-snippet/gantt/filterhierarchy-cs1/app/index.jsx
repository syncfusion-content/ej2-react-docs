let DropData = [
    { text: 'Parent', value: 'Parent' },
    { text: 'Child', value: 'Child' },
    { text: 'Both', value: 'Both' },
    { text: 'None', value: 'None' },
];
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { GanttComponent, Inject, Filter } from '@syncfusion/ej2-react-gantt';
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
    onChange(sel) {
        let mode = sel.value.toString();
        this.ganttInstance.filterSettings.hierarchyMode = mode;
        this.ganttInstance.clearFiltering();
    }
    render() {
        return (<div>
        <DropDownListComponent dataSource={DropData} change={this.onChange.bind(this)} width={150} value="Parent"></DropDownListComponent>
        <GanttComponent dataSource={data} taskFields={this.taskFields} allowFiltering={true} height='450px' ref={gantt => this.ganttInstance = gantt}>
          <Inject services={[Filter]}/>
        </GanttComponent></div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
