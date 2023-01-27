


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Filter, IFilter } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
import { ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { createElement } from '@syncfusion/ej2-base';
import { DataManager } from '@syncfusion/ej2-data';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

class App extends React.Component<{}, {}>{
    public taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks',
    parentID: 'ParentId'

  };
public Filter : IFilter = {
  ui: {
  create: (args: { target: Element, column: object }) => {
      const flValInput: HTMLElement = createElement('input', { className: 'flm-input' });
      args.target.appendChild(flValInput);
      this.dropInstance = new DropDownList({
          dataSource: new DataManager(data),
          fields: { text: 'TaskName', value: 'TaskName' },
          placeholder: 'Select a value',
          popupHeight: '200px'
      });
      this.dropInstance.appendTo(flValInput);
  },
  read: (args: { target: Element, column: any, operator: string, fltrObj: Filter }) => {
      args.fltrObj.filterByColumn(args.column.field, args.operator, this.dropInstance.value);
      },
  write: (args: {
      column: object, target: Element, parent: any,
      filteredValue: number | string }) => {
          this.dropInstance.value = args.filteredValue;
      }
  }
  };
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields}
         allowFiltering={true} height = '450px'>
    <ColumnsDirective>
              <ColumnDirective field="TaskID" ></ColumnDirective>
              <ColumnDirective
                field="TaskName"
                headerText="Job Name"
                filter={this.Filter}
              ></ColumnDirective>
              <ColumnDirective field="StartDate"></ColumnDirective>
              <ColumnDirective field="Duration"></ColumnDirective>
              <ColumnDirective field="Progress"></ColumnDirective>
              <ColumnDirective field="Predecessor"></ColumnDirective>
    </ColumnsDirective>
    <Inject services={[Filter]} />
        </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));



