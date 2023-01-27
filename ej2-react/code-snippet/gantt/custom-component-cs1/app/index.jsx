import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Filter } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
import { ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { createElement } from '@syncfusion/ej2-base';
import { DataManager } from '@syncfusion/ej2-data';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
class App extends React.Component {
    taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks',
        parentID: 'ParentId'
    };
    Filter = {
        ui: {
            create: (args) => {
                const flValInput = createElement('input', { className: 'flm-input' });
                args.target.appendChild(flValInput);
                this.dropInstance = new DropDownList({
                    dataSource: new DataManager(data),
                    fields: { text: 'TaskName', value: 'TaskName' },
                    placeholder: 'Select a value',
                    popupHeight: '200px'
                });
                this.dropInstance.appendTo(flValInput);
            },
            read: (args) => {
                args.fltrObj.filterByColumn(args.column.field, args.operator, this.dropInstance.value);
            },
            write: (args) => {
                this.dropInstance.value = args.filteredValue;
            }
        }
    };
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields} allowFiltering={true} height='450px'>
    <ColumnsDirective>
              <ColumnDirective field="TaskID"></ColumnDirective>
              <ColumnDirective field="TaskName" headerText="Job Name" filter={this.Filter}></ColumnDirective>
              <ColumnDirective field="StartDate"></ColumnDirective>
              <ColumnDirective field="Duration"></ColumnDirective>
              <ColumnDirective field="Progress"></ColumnDirective>
              <ColumnDirective field="Predecessor"></ColumnDirective>
    </ColumnsDirective>
    <Inject services={[Filter]}/>
        </GanttComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
