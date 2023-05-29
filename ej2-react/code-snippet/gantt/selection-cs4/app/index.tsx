import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Selection, SelectionSettingsModel } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App (){
    const  taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks'
  };
  const settings: SelectionSettingsModel = {
        mode: 'Cell'
  };
 function cellSelecting(args: any) {
        if (args.data.TaskID == 4 && args.cellIndex.cellIndex == 1) {
            args.cancel = true;
        }
    }
 return <GanttComponent dataSource={data} allowSelection={true} taskFields={taskFields}
        selectionSettings={settings} cellSelecting={cellSelecting} height = '450px'>
        <Inject services={[Selection]} />
        </GanttComponent>
    };
ReactDOM.render(<App />, document.getElementById('root'));