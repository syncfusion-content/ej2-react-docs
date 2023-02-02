

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { GanttComponent, Inject, Toolbar } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
class App extends React.Component<{}, {}>{
    public taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks',
    dependency: 'Predecessor',
  };
  public toolbarOptions: any[] = ['ExpandAll', 'CollapseAll', { text: 'Test', tooltipText: 'Test',id: 'Test' }];
  public toolbarClick(args: ClickEventArgs): void {
       if (args.item.text === 'Test') {
        alert("Custom toolbar Click...");
      }
    };
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields}  
        toolbar={this.toolbarOptions} toolbarClick={this.toolbarClick.bind(this)} height = '450px'>
            <Inject services={[Toolbar]} />
        </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


