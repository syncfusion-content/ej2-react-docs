


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, ContextMenu, Selection, Sort, Resize, Toolbar } from '@syncfusion/ej2-react-gantt';
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
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true
        };
        this.toolbarOptions = ['Add'];
    }
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields} allowSelection={true} editSettings={this.editOptions} enableContextMenu={true} toolbar={this.toolbarOptions} height='450px'>
           <Inject services={[Edit, ContextMenu, Selection, Sort, Resize, Toolbar]}/>
        </GanttComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));



