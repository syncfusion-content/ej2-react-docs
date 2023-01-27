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
        dependency: 'Predecessor',
        child: 'subtasks'
    };
    actionHandler(args) {
        alert(args.requestType + ' ' + args.type);
    }
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields} allowSorting={true} actionBegin={this.actionHandler.bind(this)} actionComplete={this.actionHandler.bind(this)} height='450px'>
          <Inject services={[Sort]}/>
        </GanttComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
