

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, EditSettingsModel, Toolbar, ToolbarItem, CriticalPath } from '@syncfusion/ej2-react-gantt';
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
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
  };
  public queryTaskbarInfo(args: any): void {
      if ((args.data.isCritical || args.data.slack === '0 day') && !args.data.hasChildRecords) {
          args.taskbarBgColor = 'rgb(242, 210, 189)';
          args.progressBarBgColor = 'rgb(201, 169, 166)';
        }
    }
  public toolbarOptions: ToolbarItem[] = ['CriticalPath'];
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields} height = '450px' queryTaskbarInfo={this.queryTaskbarInfo.bind(this)} enableCriticalPath={true}
        editSettings={this.editOptions} toolbar={this.toolbarOptions}>
            <Inject services={[Edit, CriticalPath, Toolbar]} />
        </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


