

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Filter, Toolbar, ToolbarItem, SearchSettingsModel } from '@syncfusion/ej2-react-gantt';
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
  public toolbarOptions: ToolbarItem[] = ['Search'];
  private searchSettings: SearchSettingsModel = {fields: ['TaskName','Duration']};
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields}
         allowFiltering={true} searchSettings={this.searchSettings} toolbar={this.toolbarOptions}
         height = '450px'>
           <Inject services={[Filter, Toolbar]} />
        </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


