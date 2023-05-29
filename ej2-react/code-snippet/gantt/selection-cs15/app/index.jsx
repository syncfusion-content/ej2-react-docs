import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Selection} from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App (){
    const  taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks'
  };
 const settings = {
        mode: 'Row',
        type: 'Multiple'
  };
  let ganttInstance ;
   function dataBound(args) {
         var rowIndexes =[];
       ganttInstance.treeGrid.grid.dataSource.forEach((data,index)=>{
            if (data.TaskID === 3 || data.TaskID === 4){
               rowIndexes.push(index);
           }
           });
    ganttInstance.selectRows(rowIndexes);
    }
        return <GanttComponent dataSource={data} allowSelection={true} taskFields={taskFields}
        selectionSettings={settings} dataBound={dataBound} height = '450px' ref={gantt =>ganttInstance = gantt}>
        <Inject services={[Selection]} />
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));