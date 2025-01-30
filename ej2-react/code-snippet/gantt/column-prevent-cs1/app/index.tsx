import { GanttComponent,ColumnsDirective,ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { Gantt} from '@syncfusion/ej2-react-gantt';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { data } from './datasource';

function App (){
  let ganttInstance: any;

  function dataBound(){
    let cloned =  ganttInstance.addOnPersist;
    ganttInstance.addOnPersist = function (key: any) 
    {
      key = key.filter((item: string)  => item !== "columns");
      return cloned.call(this, key);
    };
  }

  function addColumn(){
    let obj = { field: "Progress", headerText: 'Progress', width: 100 };
    ganttInstance.columns.push(obj as any); //you can add the columns by using the Gantt columns method
    ganttInstance.treeGrid.refreshColumns();
  }

  function removeColumn(){
    ganttInstance.columns.pop();
    ganttInstance.treeGrid.refreshColumns();
  }

  const taskFields: any = {
    id: 'TaskId',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'parentId'
  };
  return( <div> 
    <ButtonComponent onClick= { addColumn }>Add Columns</ButtonComponent>
    <ButtonComponent onClick= { removeColumn }>Remove Columns</ButtonComponent>
    <GanttComponent 
      id="Gantt" 
      dataSource={data} 
      enablePersistence={true} 
      dataBound={dataBound} 
      height={430} 
      taskFields={taskFields}
      ref={gantt => ganttInstance = gantt}>
      <ColumnsDirective>
        <ColumnDirective field='TaskId' width='100'/>
        <ColumnDirective field='TaskName' width='100'/>
        <ColumnDirective field='StartDate' width='100'/>
        <ColumnDirective field='Duration' width='100'/>
      </ColumnsDirective>
    </GanttComponent></div>
  )
};
ReactDOM.render(<App />, document.getElementById('root'));