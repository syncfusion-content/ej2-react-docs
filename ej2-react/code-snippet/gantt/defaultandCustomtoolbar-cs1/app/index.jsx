import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { GanttComponent, Inject, Toolbar } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App(){
    const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID',
    dependency: 'Predecessor',
  };
  const toolbarOptions = ['ExpandAll', 'CollapseAll', { text: 'Test', tooltipText: 'Test',id: 'Test' }];
  function toolbarClick(args) {
       if (args.item.text === 'Test') {
        alert("Custom toolbar Click...");
      }
    };
        return <GanttComponent dataSource={data} taskFields={taskFields}  
        toolbar={toolbarOptions} toolbarClick={toolbarClick} height = '450px'>
            <Inject services={[Toolbar]} />
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));