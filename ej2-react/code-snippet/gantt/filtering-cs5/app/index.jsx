import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Filter } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
  let ganttInstance;
  const taskSettings = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
  const filterSettings = {
    type: 'Menu'
  };
  const splitterSettings = {
    columnIndex: 2
  };
  function filterAction(e) {
    const id = e.target.id;
    if (id === 'performFilter') {
      ganttInstance.filterByColumn('TaskName', 'startswith', 'Project');
    } else {
      ganttInstance.clearFiltering();
    }
  }
  return (
    <div>
      <div style={{ marginBottom: '10px', display: 'flex', gap: '20px' }}>
        <button id="performFilter" onClick={filterAction}>Filter Task Name Column</button>
        <button id="clearFilter" onClick={filterAction}>Clear Filter</button>
      </div>
      <GanttComponent
        height="370px"
        allowFiltering={true}
        dataSource={data}
        taskFields={taskSettings}
        splitterSettings={splitterSettings}
        filterSettings={filterSettings}
        ref={(g) => (ganttInstance = g)}
      >
        <ColumnsDirective>
          <ColumnDirective field="TaskID" headerText="Task ID" width="120" />
          <ColumnDirective field="TaskName" headerText="Task Name" width="250" />
          <ColumnDirective field="StartDate" headerText="Start Date" width="150" />
          <ColumnDirective field="Progress" headerText="Progress" width="150" />
        </ColumnsDirective>
        <Inject services={[Filter]} />
      </GanttComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));