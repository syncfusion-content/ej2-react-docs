

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, Selection, ContextMenu, Sort, Resize, EditSettingsModel } from '@syncfusion/ej2-react-gantt';
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
  public editSettings: EditSettingsModel = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true
  };
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields} editSettings={this.editSettings} allowSorting={true} allowResizing={true} enableContextMenu={true} height = '450px'>
            <Inject services={[Edit, ContextMenu, Selection, Sort, Resize]} />
        </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


