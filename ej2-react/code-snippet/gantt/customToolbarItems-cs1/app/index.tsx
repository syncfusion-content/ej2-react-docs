import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { NumericTextBox} from '@syncfusion/ej2-inputs';
import { GanttComponent, Inject, Toolbar } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App (){
    const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks'
  };
  const toolbarOptions: any[] = [ { type: 'Input',template:new NumericTextBox({ format: 'c2', value:1 })} ];
        return <GanttComponent dataSource={data} taskFields={taskFields}  
        toolbar={toolbarOptions} height = '400px'>
            <Inject services={[Toolbar]} />
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));