
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { Tooltip } from '@syncfusion/ej2-popups';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ganttData } from './datasource';

function App() {
  let ganttInstance: GanttComponent = null;
  let message = '';

  const taskSettings = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const splitterSettings = {
    position: '50%'
  };

  const dataBound = () => {
    const ganttElement = ganttInstance.getRootElement() as HTMLElement;

    ganttElement.addEventListener('mouseover', (mouseargs: any) => {
      let target: HTMLElement | null = null;

      if (
        mouseargs.target &&
        (mouseargs.target.classList.contains('e-rowcell') ||
          mouseargs.target.classList.contains('e-chart-row-cell'))
      ) {
        target = mouseargs.target;
      }

      if (target) {
        const buttonElement = document.createElement('div');

        ReactDOM.render(<ButtonComponent>Row details</ButtonComponent>, buttonElement);

        const tooltip = new Tooltip(
          {
            content: buttonElement,
            width: '130px',
            height: '40px',
            opensOn: 'Hover'
          },
          target
        );

        buttonElement.addEventListener('click', () => {
          const rowInfo = ganttInstance.treeGrid.getRowInfo(target);
          const rowData = rowInfo.rowData;

          if (rowData) {
            message = `Button clicked for Task ID: ${rowData['TaskID']}`;
            (document.getElementById('message') as any).innerText = message;
          }
        });
      }
    });
  };

  return (
    <div>
      <div style={{ padding: '0 0 20px 0' }}></div>
      <p id="message">{message}</p>

      <GanttComponent
        id="ganttDefault"
        ref={(g) => (ganttInstance = g)}
        height="430px"
        dataSource={ganttData}
        taskFields={taskSettings}
        treeColumnIndex={1}
        splitterSettings={splitterSettings}
        dataBound={dataBound}
      >
        <ColumnsDirective>
          <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Right" width="90" />
          <ColumnDirective field="TaskName" headerText="Task Name" textAlign="Left" width="290" />
          <ColumnDirective field="Progress" headerText="Progress" textAlign="Right" width="120" />
          <ColumnDirective field="StartDate" headerText="Start Date" textAlign="Right" width="120" />
          <ColumnDirective field="Duration" headerText="Duration" textAlign="Right" width="90" />
        </ColumnsDirective>
      </GanttComponent>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
