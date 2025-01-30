import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Selection} from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App (){
  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
 const settings = {
        mode: 'Cell',
        type: 'Multiple'
  };
    return <GanttComponent dataSource={data} allowSelection={true} taskFields={taskFields}
        selectionSettings={settings} height = '450px'>
        <Inject services={[Selection]} />
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));