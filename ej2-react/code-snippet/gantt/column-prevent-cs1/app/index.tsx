

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

import { GanttComponent,ColumnsDirective,ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { Gantt} from '@syncfusion/ej2-react-gantt';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';

export default class App extends React.Component<{}, {}>{
  private gantt: Gantt | null;
  public dataBound(){
    let cloned =  this.gantt.addOnPersist;
    this.gantt.addOnPersist = function (key: any) {
        key = key.filter((item: string)  => item !== "columns");
        return cloned.call(this, key);
    };
  }
  public addColumn(){
    let obj = { field: "Progress", headerText: 'Progress', width: 100 };
    this.gantt.columns.push(obj as any); //you can add the columns by using the Gantt columns method
    this.gantt.treeGrid.refreshColumns();
  }
  public removeColumn(){
    this.gantt.columns.pop();
    this.gantt.treeGrid.refreshColumns();
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
      this.dataBound = this.dataBound.bind(this);
      this.addColumn = this.addColumn.bind(this);
      this.removeColumn = this.removeColumn.bind(this);
      return( <div> <ButtonComponent onClick= { this.addColumn }>Add Columns</ButtonComponent>
      <ButtonComponent onClick= { this.removeColumn }>Remove Columns</ButtonComponent><GanttComponent id="Gantt" dataSource={data} enablePersistence={true} dataBound={this.dataBound} height={430} taskFields={this.taskFields}
      ref={g => this.gantt = g}>
          <ColumnsDirective>
              <ColumnDirective field='TaskID' width='100'/>
              <ColumnDirective field='TaskName' width='100'/>
              <ColumnDirective field='StartDate' width='100'/>
              <ColumnDirective field='Duration' width='100'/>
          </ColumnsDirective>
      </GanttComponent></div>)
  }
};
ReactDOM.render(<App />, document.getElementById('root'));


