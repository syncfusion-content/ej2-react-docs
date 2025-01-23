import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, Selection } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App(){
   const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
  const editOptions = {
    allowEditing: true,
    allowTaskbarEditing: true
  };
  const timelineSettings = {
    updateTimescaleView: false
  };
        return <GanttComponent dataSource={data} taskFields={taskFields}
        timelineSettings={timelineSettings} allowSelection={true}
        editSettings={editOptions} height = '450px'>
            <Inject services={[Edit, Selection]} />
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));