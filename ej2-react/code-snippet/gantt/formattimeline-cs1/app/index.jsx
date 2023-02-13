import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App(){
    const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks'
  };
  const timelineSettings = {
    timelineUnitSize: 50,
    topTier: {
      unit: 'Month',
      count: 3,
      formatter: (date) => {
                var month = date.getMonth();
                if (month >= 0 && month <=2) {
                return 'Q1';
                } else if(month >= 3 && month <=5) {
                    return 'Q2';
                } else if(month >= 6 && month <=8) {
                    return 'Q3';
                } else {
                    return 'Q4';
                }
            }
    },
    bottomTier: {
      unit: 'Month',
      format: 'MMM'
    },
  };
        return <GanttComponent dataSource={data} taskFields={taskFields} projectStartDate='01/04/2019' projectEndDate='12/30/2019'
        timelineSettings={timelineSettings} height = '450px'>
      </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));