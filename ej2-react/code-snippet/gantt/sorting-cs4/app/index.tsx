import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Sort  } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App(){
    const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  };
function actionHandler (args: any) {
        alert(args.requestType + ' ' + args.type);
    }
   return <GanttComponent dataSource={data} taskFields={taskFields} allowSorting={true}
        actionBegin={actionHandler} actionComplete={actionHandler} height='450px'>
          <Inject services={[Sort]} />
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));