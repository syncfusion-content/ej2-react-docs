

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Toolbar, ToolbarItem }from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
class App extends React.Component<{}, {}>{
    public taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  };
  
  public toolbarOptions: ToolbarItem[] = ['ZoomIn','ZoomOut','ZoomToFit'];
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields}
        toolbar={this.toolbarOptions} height = '450px'>
           <Inject services={[Toolbar]} />
        </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


