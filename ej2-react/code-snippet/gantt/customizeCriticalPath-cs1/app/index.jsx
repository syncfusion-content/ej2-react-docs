import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, Toolbar, CriticalPath } from '@syncfusion/ej2-react-gantt';
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
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    };
    queryTaskbarInfo(args) {
        if ((args.data.isCritical || args.data.slack === '0 day') && !args.data.hasChildRecords) {
            args.taskbarBgColor = 'rgb(242, 210, 189)';
            args.progressBarBgColor = 'rgb(201, 169, 166)';
        }
    }
    toolbarOptions = ['CriticalPath'];
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields} height='450px' queryTaskbarInfo={this.queryTaskbarInfo.bind(this)} enableCriticalPath={true} editSettings={this.editOptions} toolbar={this.toolbarOptions}>
            <Inject services={[Edit, CriticalPath, Toolbar]}/>
        </GanttComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
