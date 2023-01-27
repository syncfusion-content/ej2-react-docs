

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Toolbar, ToolbarItem, Edit, EditSettingsModel } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
class App extends React.Component<{}, {}>{
    public taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks'
  };
  public editOptions: EditSettingsModel = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true
  };
  public toolbarOptions: ToolbarItem[] = ['Add','Edit','Delete','Cancel','Update','PrevTimeSpan','NextTimeSpan','ExpandAll','CollapseAll','Search','Indent','Outdent'];
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields} enableImmutableMode={true}
        height = '450px' editSettings={this.editOptions} toolbar={this.toolbarOptions}>
            <Inject services={[Selection, Toolbar, Edit]} />
        </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


