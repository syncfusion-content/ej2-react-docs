let data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2019'),
    EndDate: new Date('04/21/2019'),
  },
  { TaskID: 2, TaskName: 'Identify Site location', BaselineStartDate: new Date('04/02/2019'), BaselineEndDate: new Date('04/06/2019'), StartDate: new Date('04/02/2019'), Duration: 0, ParentID: 1, Progress: 50 },
  { TaskID: 3, TaskName: 'Perform Soil test', BaselineStartDate: new Date('04/04/2019'), BaselineEndDate: new Date('04/09/2019'), StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
  { TaskID: 4, TaskName: 'Soil test approval', BaselineStartDate: new Date('04/08/2019'), BaselineEndDate: new Date('04/12/2019'), StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2019'),
    EndDate: new Date('04/21/2019'),
  },
  { TaskID: 6, TaskName: 'Develop floor plan for estimation', BaselineStartDate: new Date('04/04/2019'), BaselineEndDate: new Date('04/08/2019'), StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
  { TaskID: 7, TaskName: 'List materials', BaselineStartDate: new Date('04/02/2019'), BaselineEndDate: new Date('04/04/2019'), StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
  { TaskID: 8, TaskName: 'Estimation approval', BaselineStartDate: new Date('04/02/2019'), BaselineEndDate: new Date('04/02/2019'), StartDate: new Date('04/04/2019'), Duration: 0, ParentID: 5, Progress: 50 }
];
  
  import * as React from 'react';
  import * as ReactDOM from 'react-dom';
  import { GanttComponent } from '@syncfusion/ej2-react-gantt';
  
  function App(){
      let ganttInstance;
      const  taskFields = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      baselineStartDate: 'BaselineStartDate',
      baselineEndDate: 'BaselineEndDate',
      parentID: 'ParentID'
    };
    function tooltipTemplate(props) {
      return (<div>Baseline StartDate : {ganttInstance.getFormatedDate(props.BaselineStartDate)}</div>)
    };
    const template = tooltipTemplate;
    const tooltipSettings = {
      baseline: template
    };
          return <GanttComponent dataSource={data} taskFields={taskFields}
             tooltipSettings={tooltipSettings} renderBaseline={true} baselineColor="red" height = '450px' ref={gantt => ganttInstance = gantt}>
            </GanttComponent>
  };
  ReactDOM.render(<App />, document.getElementById('root'));