import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Edit, Inject } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
class App extends React.Component {
    constructor() {
        super(...arguments);
        this.numericParams = { params: { min: 1 } };
        this.progressParams = { params: { showSpinButton: false } };
        this.taskFields = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
        this.editOptions = {
            allowEditing: true
        };
    }
    durationFormat(field, data, column) {
        return data[field];
    }
    render() {
        this.durationFormat = this.durationFormat.bind(this);
        return <GanttComponent dataSource={data} taskFields={this.taskFields} editSettings={this.editOptions} height='450px'>
         <ColumnsDirective>
                <ColumnDirective field='TaskID'></ColumnDirective>
                <ColumnDirective field='TaskName'></ColumnDirective>
                <ColumnDirective field='StartDate'></ColumnDirective>
                <ColumnDirective field='Duration' editType='numericedit' edit={this.numericParams} valueAccessor={this.durationFormat}></ColumnDirective>
                <ColumnDirective field='Progress' editType='numericedit' edit={this.progressParams}></ColumnDirective>
          </ColumnsDirective>
          <Inject services={[Edit]}/>
      </GanttComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
