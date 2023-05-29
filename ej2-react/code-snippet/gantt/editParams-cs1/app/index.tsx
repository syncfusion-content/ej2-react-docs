
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, ColumnsDirective, ColumnDirective, Edit } from '@syncfusion/ej2-react-gantt';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { data } from './datasource';
import { IEditCell } from '@syncfusion/ej2-grids';
function App () {
    let  elem : HTMLElement;
    let ganttInstance:any;
    let dropdownlistObj: DropDownListComponent;
    let dropdownlist: IEditCell = {
       create: () => {
            elem = document.createElement('input');
            return elem;
        },
      read: () => {
           return dropdownlistObj.value;
        },
      destroy: () => {
            dropdownlistObj.destroy();
        },
        write: (args: Object) => {
            dropdownlistObj = new DropDownListComponent({
                dataSource: ganttInstance.treeGrid.grid.dataSource,
                fields: { value: 'TaskName' },
                value: args.rowData[args.column.field],
                floatLabelType: 'Auto',
            });
            dropdownlistObj.appendTo(elem);
        }
    };
   const taskFields = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
       const editOptions = {
           allowEditing: true
        };
        return <GanttComponent dataSource={data} taskFields={taskFields} editSettings={editOptions} height='450px' ref={gantt => ganttInstance = gantt}>
         <ColumnsDirective>
                <ColumnDirective field='TaskID'></ColumnDirective>
                <ColumnDirective field='TaskName' edit={dropdownlist}></ColumnDirective>
                <ColumnDirective field='StartDate'></ColumnDirective>
                <ColumnDirective field='Duration'></ColumnDirective>
                <ColumnDirective field='Progress'></ColumnDirective>
          </ColumnsDirective>
          <Inject services={[Edit]}/>
      </GanttComponent>

};
ReactDOM.render(<App />, document.getElementById('root'));