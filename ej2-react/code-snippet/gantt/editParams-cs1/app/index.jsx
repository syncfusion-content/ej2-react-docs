import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, ColumnsDirective, ColumnDirective, Edit } from '@syncfusion/ej2-react-gantt';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { data } from './datasource';
class App extends React.Component {
    elem;
    dropdownlistObj;
    dropdownlist = {
        create: () => {
            this.elem = document.createElement('input');
            return this.elem;
        },
        read: () => {
            return this.dropdownlistObj.value;
        },
        destroy: () => {
            this.dropdownlistObj.destroy();
        },
        write: (args) => {
            this.dropdownlistObj = new DropDownListComponent({
                dataSource: this.ganttInstance.treeGrid.grid.dataSource,
                fields: { value: 'TaskName' },
                value: args.rowData[args.column.field],
                floatLabelType: 'Auto',
            });
            this.dropdownlistObj.appendTo(this.elem);
        }
    };
    constructor() {
        super(...arguments);
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
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields} editSettings={this.editOptions} height='450px' ref={gantt => this.ganttInstance = gantt}>
         <ColumnsDirective>
                <ColumnDirective field='TaskID'></ColumnDirective>
                <ColumnDirective field='TaskName' edit={this.dropdownlist}></ColumnDirective>
                <ColumnDirective field='StartDate'></ColumnDirective>
                <ColumnDirective field='Duration'></ColumnDirective>
                <ColumnDirective field='Progress'></ColumnDirective>
          </ColumnsDirective>
          <Inject services={[Edit]}/>
      </GanttComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
