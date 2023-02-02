import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Filter, Toolbar } from '@syncfusion/ej2-react-gantt';
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
    toolbarOptions = ['Search'];
    searchSettings = {
        fields: ['TaskName'], operator: 'contains', key: 'Soil', ignoreCase: true
    };
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields} allowFiltering={true} toolbar={this.toolbarOptions} searchSettings={this.searchSettings} height='450px'>
           <Inject services={[Filter, Toolbar]}/>
        </GanttComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
