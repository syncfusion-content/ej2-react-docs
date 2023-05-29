import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, EditSettingsModel } from '@syncfusion/ej2-react-gantt';
import { data} from './datasource';
function App(){
    const taskFields: any = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    };
   const editOptions: EditSettingsModel = {
        allowTaskbarEditing: true
    };
    function taskbarEditing(args: any){
        if (args.data.TaskID == 4) // We can't edit Task Id 4
            args.cancel = true;
    };
    function queryTaskbarInfo(args: any) {
        if (args.data.TaskID == 6) {
            args.taskbarElement.className += ' e-preventEdit' // Taskbar editing indicators are disabled
        }
    };
        return <GanttComponent dataSource={data} taskFields={taskFields}
        editSettings={editOptions} taskbarEditing={taskbarEditing} height = '450px' queryTaskbarInfo={queryTaskbarInfo}>
        <Inject services={[Edit]} />
        </GanttComponent>
   };
ReactDOM.render(<App />, document.getElementById('root'));