let ProjectResources: Object[] = [
    { ResourceId: 1, ResourceName: 'Martin Tamer' },
    { ResourceId: 2, ResourceName: 'Rose Fuller' },
    { ResourceId: 3, ResourceName: 'Margaret Buchanan' },
    { ResourceId: 4, ResourceName: 'Fuller King' },
    { ResourceId: 5, ResourceName: 'Davolio Fuller' },
    { ResourceId: 6, ResourceName: 'Van Jack' },
    { ResourceId: 7, ResourceName: 'Fuller Buchanan' },
    { ResourceId: 8, ResourceName: 'Jack Davolio' },
    { ResourceId: 9, ResourceName: 'Tamer Vinet' },
    { ResourceId: 10, ResourceName: 'Vinet Fuller' },
    { ResourceId: 11, ResourceName: 'Bergs Anton' },
    { ResourceId: 12, ResourceName: 'Construction Supervisor' }
];
  
  let data: Object[] = [
    { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'), IsParent: true },
    { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 0, ParentID: 1, Progress: 50, IsParent: false, Info: 'Measure the total property area alloted for construction' },
    {
        TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50, Resources: [2, 3, 5], IsParent: false,
        Info: 'Obtain an engineered soil test of lot where construction is planned.' + 'From an engineer or company specializing in soil testing'
    },
    { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Predecessor: "2FS", Progress: 50, IsParent: false },
    { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'), IsParent: true, },
    {
        TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50, Resources: [4],
        IsParent: false, Info: 'Develop floor plans and obtain a materials list for estimations'
    },
    { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50, Resources: [4, 8], IsParent: false, Info: '' },
    { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 0, ParentID: 5, Predecessor: "6SS", Progress: 50, Resources: [12, 5], IsParent: false, Info: '' }
];
  
  import * as React from 'react';
  import * as ReactDOM from 'react-dom';
  import { GanttComponent, Inject,Toolbar, ToolbarItem, Edit, ColumnsDirective, ColumnDirective, AddDialogFieldsDirective, EditSettingsModel, EditDialogFieldsDirective, EditDialogFieldDirective, AddDialogFieldDirective } from '@syncfusion/ej2-react-gantt';
  
  function App(){
      const taskFields: any = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID',
        notes: 'Info',
        resourceInfo: 'Resources'
    };
    const toolbarOptions: ToolbarItem[] = ['Add'];
      const editOptions: EditSettingsModel = {
          allowEditing: true,
          allowAdding:true,
          mode: 'Dialog'
    };
      const resourceFields: any = {
        id: 'ResourceId',
        name: 'ResourceName',
      };
          return <GanttComponent dataSource={data} toolbar={toolbarOptions} taskFields={taskFields} editSettings={editOptions} height='450px'
          resourceFields={resourceFields} resources={ProjectResources}>
           <ColumnsDirective>
                  <ColumnDirective field='TaskID' width='100' ></ColumnDirective>
                  <ColumnDirective field='TaskName' headerText='Job Name' width='250'></ColumnDirective>
                  <ColumnDirective field='Resources'></ColumnDirective>
                  <ColumnDirective field='StartDate'></ColumnDirective>
                  <ColumnDirective field='Duration'></ColumnDirective>
                  <ColumnDirective field='Progress'></ColumnDirective>
                  <ColumnDirective field='Predecessor'></ColumnDirective>
                  <ColumnDirective field='IsParent' headerText='Custom Column'></ColumnDirective>
              </ColumnsDirective>
          <AddDialogFieldsDirective>
              <AddDialogFieldDirective type='General' headerText='General' fields= {['TaskID', 'TaskName', 'IsParent']}></AddDialogFieldDirective>
              <AddDialogFieldDirective type='Dependency'></AddDialogFieldDirective>
              <AddDialogFieldDirective type='Resources'></AddDialogFieldDirective>
          </AddDialogFieldsDirective>
             <EditDialogFieldsDirective>
                <EditDialogFieldDirective type='General' headerText='General' fields= {['TaskID', 'TaskName', 'IsParent']}></EditDialogFieldDirective>
                <EditDialogFieldDirective type='Dependency'></EditDialogFieldDirective>
                <EditDialogFieldDirective type='Resources'></EditDialogFieldDirective>
            </EditDialogFieldsDirective>
              <Inject services={[Edit, Toolbar]} />
          </GanttComponent>
  };
  ReactDOM.render(<App />, document.getElementById('root'));