import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent, Inject, Filter } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
class App extends React.Component {
    gantt;
    taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    };
    FilterOptions = {
        columns: [
            { field: 'TaskName', matchCase: false, operator: 'startswith', predicate: 'and', value: 'perfor' },
            { field: 'TaskID', matchCase: false, operator: 'equal', predicate: 'and', value: 3 }
        ]
    };
    clickHandler() {
        this.gantt.clearFiltering();
    }
    render() {
        return (<div>
        <ButtonComponent onClick={this.clickHandler.bind(this)}>Clear Filter</ButtonComponent>
        <GanttComponent dataSource={data} taskFields={this.taskFields} filterSettings={this.FilterOptions} allowFiltering={true} height='450px' ref={gantt => this.gantt = gantt}>
            <Inject services={[Filter]}/>
        </GanttComponent></div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
