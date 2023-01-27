import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Filter } from '@syncfusion/ej2-react-gantt';
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
    FilterOptions = {
        columns: [
            { field: 'TaskName', matchCase: false, operator: 'startswith', predicate: 'and', value: 'Identify' },
            { field: 'TaskID', matchCase: false, operator: 'equal', predicate: 'and', value: 2 }
        ]
    };
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields} allowFiltering={true} filterSettings={this.FilterOptions} height='450px'>
         <Inject services={[Filter]}/>
        </GanttComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
