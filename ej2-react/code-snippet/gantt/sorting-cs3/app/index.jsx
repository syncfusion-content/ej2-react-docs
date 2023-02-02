import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Sort } from '@syncfusion/ej2-react-gantt';
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
    sortingOptions = { columns: [{ field: 'TaskID', direction: 'Descending' }] };
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields} sortSettings={this.sortingOptions} allowSorting={true} height='450px'>
          <Inject services={[Sort]}/>
        </GanttComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
