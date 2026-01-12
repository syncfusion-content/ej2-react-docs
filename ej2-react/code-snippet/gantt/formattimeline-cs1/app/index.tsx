import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject } from '@syncfusion/ej2-react-gantt';
import { TaskFieldsModel, TimelineSettingsModel, SplitterSettingsModel } from '@syncfusion/ej2-gantt';
import { data } from './datasource';

function App() {
  const taskSettings: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const timelineSettings: TimelineSettingsModel = {
    topTier: {
      unit: 'Month',
      count: 3,
      formatter: (date: Date) => {
        const month = date.getMonth();
        if (month >= 0 && month <= 2) return 'Q1';
        else if (month >= 3 && month <= 5) return 'Q2';
        else if (month >= 6 && month <= 8) return 'Q3';
        else return 'Q4';
      }
    },
    bottomTier: {
      unit: 'Month',
      format: 'MMM'
    }
  };

  const splitterSettings : SplitterSettingsModel = { position: "50%"}
  const projectStartDate = new Date('01/04/2019');
  const projectEndDate = new Date('12/30/2019');

  return (
    <GanttComponent
      height="430px"
      dataSource={data}
      taskFields={taskSettings}
      timelineSettings={timelineSettings}
      splitterSettings={splitterSettings}
      projectStartDate={projectStartDate}
      projectEndDate={projectEndDate}
    >
      <ColumnsDirective>
        <ColumnDirective field="TaskID" headerText="Task ID" width="100" />
        <ColumnDirective field="TaskName" headerText="Task Name" width="150" />
        <ColumnDirective field="StartDate" headerText="Start Date" width="150" />
        <ColumnDirective field="Duration" headerText="Duration" width="150" />
        <ColumnDirective field="Progress" headerText="Progress" width="150" />
      </ColumnsDirective>
      <Inject services={[]} />
    </GanttComponent>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));