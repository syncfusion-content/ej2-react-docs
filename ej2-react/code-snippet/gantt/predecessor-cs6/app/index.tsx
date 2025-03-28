let data: Object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2019'),
    EndDate: new Date('04/21/2019'),
  },
  { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 0, ParentID: 1, Progress: 50, },
  { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50, },
  { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/04/2019'), Duration: 4, ParentID: 1, Predecessor: '2FS+2days', Progress: 50, },
  { TaskID: 5, TaskName: 'Clear the building site', StartDate: new Date('04/04/2019'), Duration: 2, ParentID: 1, Progress: 30, Predecessor: '4FF+960m', },
  {
    TaskID: 6,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2019'),
    EndDate: new Date('04/21/2019'),
  },
  { TaskID: 7, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 6, Progress: 50, },
  { TaskID: 8, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 6, Progress: 50, },
  { TaskID: 9, TaskName: 'Estimation approval', StartDate: new Date('04/06/2019'), Duration: 0, ParentID: 6, Predecessor: '7SS+16h', Progress: 50, },
];
  
  import * as React from 'react';
  import * as ReactDOM from 'react-dom';
  import { GanttComponent, Inject, Edit, Toolbar } from '@syncfusion/ej2-react-gantt';
  import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
  
  function App() {
    let switchRef: any;
    function change() {
		let ganttDependencyViewContainer = document.querySelector('.e-gantt-dependency-view-container') as HTMLElement;
		if (switchRef.checked) {
			ganttDependencyViewContainer.style.visibility = 'hidden';
		} else {
			ganttDependencyViewContainer.style.visibility  = 'visible';
		}
	}
    const taskFields: any = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      parentID: 'ParentID'
    };
    const editSettings: any = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true,
    };
    const toolbar: any = [ 'Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'Indent', 'Outdent',];
    return (
      <div>
        <div style={{ display: 'flex', padding: '10px' }}>
          <label htmlFor="switch" style={{ fontSize: '15px', margin: '0px 5px 0px 0px' }}>Show/Hide Dependency Line</label>
          <SwitchComponent id="switch" ref={(scope) => {switchRef = scope;}} checked={false} change={change}/>
        </div>
        <GanttComponent dataSource={data} taskFields={taskFields} height="450px" toolbar={toolbar} editSettings={editSettings}>
          <Inject services={[Edit, Toolbar]} />
        </GanttComponent>
      </div>
    );
  }
  ReactDOM.render(<App />, document.getElementById('root'));