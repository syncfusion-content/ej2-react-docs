{% raw %}
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
        columnIndex: 7
    };
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields} splitterSettings={this.splitterSettings} height='450px'>
            <ColumnsDirective>
                <ColumnDirective field='TaskName' headerText='Job Name' headerTemplate={() => {
                return (<div><img src="taskname.png" width="20" height="20" className="e-image"/>
                    <b className='e-header'>Task Name</b></div>);
            }}></ColumnDirective>
                <ColumnDirective field='StartDate' headerTemplate={() => {
                return (<div><img src="startdate.png" width="20" height="20" className="e-image"/>
                    <b className='e-header'>Start Date</b></div>);
            }}></ColumnDirective>
                <ColumnDirective field='Duration' headerTemplate={() => {
                return (<div><img src="duration.png" width="20" height="20" className="e-image"/>
                    <b className='e-header'>Duration</b></div>);
            }}></ColumnDirective>
                <ColumnDirective field='Progress' headerTemplate={() => {
                return (<div><img src="progress.png" width="20" height="20" className="e-image"/>
                    <b className='e-header'>Progress</b></div>);
            }}></ColumnDirective>
            </ColumnsDirective>
        </GanttComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
{% endraw %}