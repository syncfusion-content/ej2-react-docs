let ProjectResources  = [
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
  
  let data  = [
    {
        TaskID: 1,
        TaskName: 'Project initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('04/02/2019'), Duration: 4,Progress: 50, resources: [1]},
            {TaskID: 3, TaskName: 'Perform soil test', StartDate: new Date('04/02/2019'), Duration: 4,Progress: 50, resources: [2]},
            {TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 ,resources: [3]},
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Project estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'),Duration: 3, Progress: 50, resources: [4]},
            {TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'),Duration: 3, resources: [3],Progress: 50},
            {TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'),Duration: 3,Progress: 50
            }
        ]
    }];
  
    import * as React from 'react';
    import * as ReactDOM from 'react-dom';
    import { GanttComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
    
    function App (){
       const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks',
        resourceInfo: 'resources'
      };
     const splitterSettings = {
          columnIndex: 7
      };
      const resourceFields = {
          id: 'resourceId',
          name: 'resourceName',
      };
     function ganttTemplate(props) {
        var src = props.TaskID + '.png';
            return (<div className='image' >
                <img src={src} style={{height:'42px'}}/>
            </div>);
      };
        const template = ganttTemplate;
        return <GanttComponent dataSource={data} rowHeight={60} taskFields={taskFields}
            splitterSettings={splitterSettings} resourceFields={resourceFields} resources={ProjectResources} height = '450px'>
                <ColumnsDirective>
                    <ColumnDirective field='TaskID'></ColumnDirective>
                    <ColumnDirective field='resources' headerText='Resources' width='250' template={template} textAlign='Center'></ColumnDirective>
                    <ColumnDirective field='TaskName'></ColumnDirective>
                    <ColumnDirective field='StartDate'></ColumnDirective>
                    <ColumnDirective field='Duration'></ColumnDirective>
                    <ColumnDirective field='Progress'></ColumnDirective>
                </ColumnsDirective>
            </GanttComponent>
    };
    ReactDOM.render(<App />, document.getElementById('root'));