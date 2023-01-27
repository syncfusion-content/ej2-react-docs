

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Selection, SelectionSettingsModel } from '@syncfusion/ej2-react-gantt';
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
  public settings: SelectionSettingsModel = {
        mode: 'Row'
  };
  public rowSelecting(args: any) {
        if (args.data.TaskID == 4) {
            args.cancel = true;
        }
    }
    render() {
        return <GanttComponent dataSource={data} allowSelection={true} taskFields={this.taskFields}
        selectionSettings={this.settings} rowSelecting={this.rowSelecting.bind(this)} height = '450px'>
        <Inject services={[Selection]} />
        </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


