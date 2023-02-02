

let data: Object[]  = [
            {
              TaskID: 1,
              TaskName: 'Project Initiation',
              StartDate: new Date('04/02/2019'),
              EndDate: new Date('04/21/2019'),
              subtasks: [
                    { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
                    { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50  },
                    { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
               ]
            },
            {
             TaskID: 5,
             TaskName: 'Project Estimation',
             StartDate: new Date('04/02/2019'),
             EndDate: new Date('04/21/2019'),
             subtasks: [
                   { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                  { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                   { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 }
                ]
            },
        ];

import { ColumnDirective, ColumnsDirective, GanttComponent } from '@syncfusion/ej2-react-gantt';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Gantt} from '@syncfusion/ej2-react-gantt';
import * as ReactDOM from 'react-dom';
import * as React from 'react';

export default class App extends React.Component<{}, {}>{
  private gantt: Gantt | null;
  public clickHandler(){
    let savedProperties = JSON.parse(this.gantt.getPersistData());
    let gridColumnsState = Object.assign([], this.gantt.ganttColumns);
    savedProperties.columns.forEach((col: {
        field: any;
        headerText: any;
        template: any;
        headerTemplate: any;
    }) => {
        let headerText = gridColumnsState.find((colColumnsState) => colColumnsState.field === col.field)['headerText'];
        let colTemplate = gridColumnsState.find((colColumnsState) => colColumnsState.field === col.field)['template'];
        let headerTemplate = gridColumnsState.find((colColumnsState) => colColumnsState.field === col.field)['headerTemplate'];
        col.headerText = 'Text Changed';
        col.template = colTemplate;
        col.headerTemplate = headerTemplate; //likewise you can restore required column properties as per your wants.
    }
  );
    console.log(savedProperties);
    this.gantt.treeGrid.setProperties(savedProperties);
  }
  public headerTemplate: any = this.customerTemplate;
  public customerTemplate(props: any): any {
     return (<div>
          <span className="e-icons e-header" ></span>Task Name
       </div>);
  }
  public taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks'
  };
  public render() {
      this.clickHandler = this.clickHandler.bind(this);
      return( <div> <ButtonComponent onClick= { this.clickHandler }>Restore</ButtonComponent> <GanttComponent id="Gantt" dataSource={data}
      taskFields={this.taskFields} enablePersistence={true} height={230}
      ref={g => this.gantt = g}>
          <ColumnsDirective>
              <ColumnDirective field='TaskID' width='100' textAlign="Right"/>
              <ColumnDirective field='TaskName' width='100' headerTemplate={this.headerTemplate}/>
              <ColumnDirective field='StartDate' width='100'/>
              <ColumnDirective field='Duration' width='100'/>
          </ColumnsDirective>
      </GanttComponent></div>)
  }
};
ReactDOM.render(<App />, document.getElementById('root'));


