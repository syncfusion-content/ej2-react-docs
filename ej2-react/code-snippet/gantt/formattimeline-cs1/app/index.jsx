import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
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
    timelineSettings = {
        timelineUnitSize: 50,
        topTier: {
            unit: 'Month',
            count: 3,
            formatter: (date) => {
                var month = date.getMonth();
                if (month >= 0 && month <= 2) {
                    return 'Q1';
                }
                else if (month >= 3 && month <= 5) {
                    return 'Q2';
                }
                else if (month >= 6 && month <= 8) {
                    return 'Q3';
                }
                else {
                    return 'Q4';
                }
            }
        },
        bottomTier: {
            unit: 'Month',
            format: 'MMM'
        },
    };
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields} projectStartDate='01/04/2019' projectEndDate='12/30/2019' timelineSettings={this.timelineSettings} height='450px'>
      </GanttComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
