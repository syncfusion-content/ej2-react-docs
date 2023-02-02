import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
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
            child: 'Children'
        };
        this.timelineSettings = {
            timelineViewMode: 'Day'
        };
        this.dayWorkingTime = [{ from: 9, to: 18 }];
    }
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields} dayWorkingTime={this.dayWorkingTime} timelineSettings={this.timelineSettings} height='450px'>
      </GanttComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
