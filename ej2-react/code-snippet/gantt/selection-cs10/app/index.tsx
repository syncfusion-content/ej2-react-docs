import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Selection, SelectionSettingsModel } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App(){
    const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
  const settings: SelectionSettingsModel = {
        mode: 'Row'
  };
  function rowSelecting(args: any) {
        if (args.data.TaskID == 4) {
            args.cancel = true;
        }
    }
   return <GanttComponent dataSource={data} allowSelection={true} taskFields={taskFields}
        selectionSettings={settings} rowSelecting={rowSelecting} height = '450px'>
        <Inject services={[Selection]} />
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'))