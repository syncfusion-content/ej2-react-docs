let ProjectResources = [
    { resourceId: 1, resourceName: 'Martin Tamer' },
    { resourceId: 2, resourceName: 'Rose Fuller' },
    { resourceId: 3, resourceName: 'Margaret Buchanan' },
    { resourceId: 4, resourceName: 'Fuller King' },
    { resourceId: 5, resourceName: 'Davolio Fuller' },
    { resourceId: 6, resourceName: 'Van Jack' },
    { resourceId: 7, resourceName: 'Fuller Buchanan' },
    { resourceId: 8, resourceName: 'Jack Davolio' },
    { resourceId: 9, resourceName: 'Tamer Vinet' },
    { resourceId: 10, resourceName: 'Vinet Fuller' },
    { resourceId: 11, resourceName: 'Bergs Anton' },
    { resourceId: 12, resourceName: 'Construction Supervisor' }
  ];
  
  let data = [
    {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        isParent: true,
        subtasks: [
            { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 0, Progress: 50, isParent: false, info: 'Measure the total property area alloted for construction' },
            {
                TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, resources: [2, 3, 5], isParent: false, info: 'Obtain an engineered soil test of lot where construction is planned.' +
                    'From an engineer or company specializing in soil testing'
            },
            { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Predecessor: "2FS", Progress: 50, isParent: false },
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        isParent: true,
        subtasks: [
            {
                TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, resources: [4],
                isParent: false, info: 'Develop floor plans and obtain a materials list for estimations'
            },
            { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, resources: [4, 8], isParent: false, info: '' },
            { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 0, Predecessor: "6SS", Progress: 50, resources: [12, 5], isParent: false, info: '' }
        ]
    },
  ];
  
  import * as React from 'react';
  import * as ReactDOM from 'react-dom';
  import { GanttComponent, Inject,Toolbar, ToolbarItem, Edit,AddDialogFieldsDirective, EditSettingsModel, EditDialogFieldsDirective, EditDialogFieldDirective, AddDialogFieldDirective } from '@syncfusion/ej2-react-gantt';
  
  function App(){
      const taskFields = {
          id: 'TaskID',
          name: 'TaskName',
          startDate: 'StartDate',
          endDate: 'EndDate',
          duration: 'Duration',
          progress: 'Progress',
          dependency: 'Predecessor',
          child: 'subtasks',
          notes: 'info',
          resourceInfo: 'resources'
    };
     const resourceFields = {
          id: 'resourceId',
          name: 'resourceName',
      };
    const toolbarOptions = ['Add'];
    const editOptions = {
          allowEditing: true,
          allowAdding:true,
          mode: 'Dialog'
    };
          return <GanttComponent dataSource={data} toolbar={toolbarOptions} taskFields={taskFields} editSettings={editOptions} height='450px' resourceFields={resourceFields}
          resources={ProjectResources}>
          <AddDialogFieldsDirective>
              <AddDialogFieldDirective type='General' headerText='General'></AddDialogFieldDirective>
              <AddDialogFieldDirective type='Dependency'></AddDialogFieldDirective>
          </AddDialogFieldsDirective>
             <EditDialogFieldsDirective>
                <EditDialogFieldDirective type='General' headerText='General'></EditDialogFieldDirective>
                <EditDialogFieldDirective type='Dependency'></EditDialogFieldDirective>
                <EditDialogFieldDirective type='Resources'></EditDialogFieldDirective>
                <EditDialogFieldDirective type='Notes'></EditDialogFieldDirective>
              </EditDialogFieldsDirective>
              <Inject services={[Edit, Toolbar]} />
          </GanttComponent>
  };
  ReactDOM.render(<App />, document.getElementById('root'));