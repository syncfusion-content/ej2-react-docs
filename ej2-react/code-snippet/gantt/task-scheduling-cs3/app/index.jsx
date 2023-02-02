import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, Selection, Toolbar, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
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
            child: 'Children',
            manual: 'isManual'
        };
        this.toolbarOptions = ['Add', 'Edit', 'Delete', 'Cancel', 'Update', 'PrevTimeSpan', 'NextTimeSpan', 'ExpandAll', 'CollapseAll', 'Search'];
        this.editSettings = {
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true
        };
    }
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields} highlightWeekends={true} toolbar={this.toolbarOptions} editSettings={this.editOptions} taskMode='Custom' height='450px'>
         <ColumnsDirective>
                <ColumnDirective field='TaskID' visible={false}></ColumnDirective>
                <ColumnDirective field='TaskName'></ColumnDirective>
                <ColumnDirective field='isManual'></ColumnDirective>
            </ColumnsDirective>
         <Inject services={[Edit, Selection, Toolbar]}/>
        </GanttComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
