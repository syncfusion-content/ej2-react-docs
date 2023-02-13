import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { DataManager } from '@syncfusion/ej2-data';
function App(){
   const taskFields: any = {
    id: 'TaskId',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    dependency: 'Predecessor',
    parentID: 'parentID',
  };
    const dataSource: DataManager = new DataManager({
    url: 'http://some.com/invalidUrl'
  });
  let ganttInstance;

  function actionFailure(args) {
       let span: HTMLElement = document.createElement('span');
       ganttInstance.element.parentNode.insertBefore(span,  ganttInstance.element);
       span.style.color = '#FF0000'
       span.innerHTML = 'Server exception: 404 Not found';
    }
    return <GanttComponent dataSource={dataSource} taskFields={taskFields} actionFailure={actionFailure} height = '450px'
     ref={gantt => ganttInstance = gantt}>
        </GanttComponent>
    };
ReactDOM.render(<App />, document.getElementById('root'));