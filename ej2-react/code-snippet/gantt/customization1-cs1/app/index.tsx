import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
  const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  const leftLabelTemplate = (props: any) => {
    const { Priority, TaskName } = props;

    return (
      <div className="custom-left-label">
        {Priority === 'High' && <span className="priority-high">🔴</span>}
        {Priority === 'Medium' && <span className="priority-medium">🟡</span>}
        {Priority === 'Low' && <span className="priority-low">🟢</span>}
        <span>{TaskName}</span>
      </div>
    );
  };

  const rightLabelTemplate = (props: any) => {
    const progress = props.Progress || 0;
    const duration = props.Duration || 0;

    return (
      <div className="custom-right-label">
        <div className="progress-container">
          <span className="progress-text">{progress}%</span>
          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="duration-text">{duration} days</span>
      </div>
    );
  };


  const labelSettings: any = {

    leftLabel: leftLabelTemplate,
    rightLabel: rightLabelTemplate,

    // taskLabel: '${Progress}%'
  };
  const projectStartDate = new Date('03/20/2019');
  const projectEndDate = new Date('04/18/2019');
  return <GanttComponent dataSource={data} taskFields={taskFields}
    labelSettings={labelSettings} height='450px' projectStartDate={projectStartDate} projectEndDate={projectEndDate}>
  </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));