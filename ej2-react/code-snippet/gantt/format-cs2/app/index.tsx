

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
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
  public splitterSettings: any = {
      columnIndex : 4
  };
  public formatOption: Object = {type:'date', format:'dd.MM.yyyy'};
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields}
        splitterSettings={this.splitterSettings} height = '450px'>
            <ColumnsDirective>
                <ColumnDirective field='TaskID' width='100' ></ColumnDirective>
                <ColumnDirective field='TaskName' headerText='Job Name' width='250'></ColumnDirective>
                <ColumnDirective field='StartDate' format={this.formatOption}></ColumnDirective>
                <ColumnDirective field='Duration'></ColumnDirective>
                <ColumnDirective field='Progress'></ColumnDirective>
            </ColumnsDirective>
        </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


