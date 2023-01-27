


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, DayMarkers } from '@syncfusion/ej2-react-gantt';
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
        this.workWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
    }
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields} highlightWeekends={true} workWeek={this.workWeek} height='450px'>
         <Inject services={[DayMarkers]}/>
        </GanttComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));



