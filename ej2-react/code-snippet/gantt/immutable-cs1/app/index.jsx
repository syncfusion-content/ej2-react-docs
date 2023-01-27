import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Toolbar, Edit } from '@syncfusion/ej2-react-gantt';
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
    editOptions = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true
    };
    toolbarOptions = ['Add', 'Edit', 'Delete', 'Cancel', 'Update', 'PrevTimeSpan', 'NextTimeSpan', 'ExpandAll', 'CollapseAll', 'Search', 'Indent', 'Outdent'];
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields} enableImmutableMode={true} height='450px' editSettings={this.editOptions} toolbar={this.toolbarOptions}>
            <Inject services={[Selection, Toolbar, Edit]}/>
        </GanttComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
