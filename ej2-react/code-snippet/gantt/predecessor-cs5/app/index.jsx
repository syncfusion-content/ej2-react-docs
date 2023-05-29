let data = [
    {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 0, Progress: 50 },
            { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50  },
            { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/04/2019'), Duration: 4,Predecessor:"2FS+2days", Progress: 50 },
            { TaskID: 5, TaskName: 'Clear the building site', StartDate: new Date('04/04/2019'), Duration: 2, Progress: 30, Predecessor: '4FF+960m'}
        ]
    },
    {
        TaskID: 6,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            { TaskID: 7, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
            { TaskID: 8, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
            { TaskID: 9, TaskName: 'Estimation approval', StartDate: new Date('04/06/2019'), Duration: 0,Predecessor:"7SS+16h", Progress: 50 }
        ]
    },
  ];
  
  import * as React from 'react';
  import * as ReactDOM from 'react-dom';
  import { GanttComponent ,Inject,Edit, Toolbar} from '@syncfusion/ej2-react-gantt';
  
  function App (){
      const taskFields = {
          id: 'TaskID',
          name: 'TaskName',
          startDate: 'StartDate',
          duration: 'Duration',
          progress: 'Progress',
          dependency: 'Predecessor',
          child: 'subtasks'
      };
      const editSettings = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
      };
      const toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'Indent', 'Outdent'];
      return <GanttComponent dataSource={data} taskFields={taskFields} updateOffsetOnTaskbarEdit={false} height = '450px' toolbar={toolbar} editSettings={editSettings}>
        <Inject services={[Edit,Toolbar]} />
          </GanttComponent>
      };
  ReactDOM.render(<App />, document.getElementById('root'));