


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, Selection, Toolbar, ContextMenu, Sort, Resize } from '@syncfusion/ej2-react-gantt';
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
            allowAdding: true,
            allowDeleting: true,
            allowTaskbarEditing: true
        };
        this.toolbarOptions = ['Add', 'Edit', 'Delete', 'Cancel', 'Update', 'PrevTimeSpan', 'NextTimeSpan', 'ExpandAll', 'CollapseAll', 'Search', 'Indent', 'Outdent'];
    }
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields} allowSelection={true} editSettings={this.editOptions} toolbar={this.toolbarOptions} enableContextMenu={true}  allowSorting={true} allowResizing={true} readOnly={true} height='450px'>
            <Inject services={[Edit, Selection, Toolbar, ContextMenu, Sort, Resize]}/>
        </GanttComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));



