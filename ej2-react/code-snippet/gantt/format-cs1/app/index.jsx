import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
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
    splitterSettings = {
        columnIndex: 4
    };
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields} splitterSettings={this.splitterSettings} height='450px'>
            <ColumnsDirective>
                <ColumnDirective field='TaskID' width='100'></ColumnDirective>
                <ColumnDirective field='TaskName' headerText='Job Name' width='250'></ColumnDirective>
                <ColumnDirective field='StartDate'></ColumnDirective>
                <ColumnDirective field='Progress' format='P2'></ColumnDirective>
                <ColumnDirective field='Duration'></ColumnDirective>
                <ColumnDirective field='Predecessor'></ColumnDirective>
            </ColumnsDirective>
        </GanttComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
