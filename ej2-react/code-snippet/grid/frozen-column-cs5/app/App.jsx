import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Edit, Toolbar, Freeze, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { DatePicker } from '@syncfusion/ej2-react-calendars';
import { data } from './datasource';

function App() {
  let datePickerInstance;
  const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true};
  const pageSettings = { pageCount: 5 };
  const createDatePicker = () => {
    return document.createElement('input');
  };
  const destroyDatePicker = () => {
    if (datePickerInstance) {
      datePickerInstance.destroy();
    }
  };
  const readDatePicker = () => {
    return datePickerInstance.value;
  };
  const writeDatePicker = (args) => {
    datePickerInstance = new DatePicker({
      value: new Date(args.rowData[args.column.field]),
      floatLabelType: 'Never',
    });
    datePickerInstance.appendTo(args.element);
  };
  const datePickerParams = {
    create: createDatePicker,
    destroy: destroyDatePicker,
    read: readDatePicker,
    write: writeDatePicker,
  };
  return (
    <div>
      <GridComponent dataSource={data} height={260} toolbar={toolbarOptions} editSettings={editSettings} frozenColumns={2} allowPaging={true} pageSettings={pageSettings}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='150' textAlign='Right' isPrimaryKey={true}/>
          <ColumnDirective field='OrderDate' headerText='Order Date' width='140' format='yMd' edit={datePickerParams}/>
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='180' freeze='Left' />
          <ColumnDirective field='Freight' headerText='Freight' width='120' />    
        </ColumnsDirective>
        <Inject services={[Edit, Toolbar, Freeze, Page]} />
      </GridComponent>
    </div>
  )
}
export default App;