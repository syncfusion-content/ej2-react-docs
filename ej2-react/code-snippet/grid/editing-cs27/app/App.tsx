import { ColumnDirective, ColumnsDirective, GridComponent, RecordDoubleClickEventArgs, EditEventArgs } from '@syncfusion/ej2-react-grids';
import { Edit, Page, EditSettingsModel, Inject, IEditCell } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

const format: object = {
  type: 'dateTime',
  format: 'M/d/y hh:mm a'
};

function App() {
  let fieldName: string;
  let grid: GridComponent | null;
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
  const orderIDRules: object = { required: true, number: true };
  const customerIDRules: object = { required: true, minLength: 3 };
  const freightIDRules: object = { required: true, min: 1, max: 1000 };
  const params: IEditCell = {
    params: {
      popupHeight: "300px"
    }
  };
  const actionComplete = (e: EditEventArgs) => {
    if (e.requestType === "beginEdit") {
      // focus the column
      e.form.elements[(grid as GridComponent).element.getAttribute("id") + fieldName].focus();
    }
  }
  const recordDoubleClick = (e: RecordDoubleClickEventArgs) => {
    fieldName = (grid as GridComponent).getColumnByIndex(e.cell.cellIndex).field;
  }
  return <GridComponent dataSource={data} editSettings={editOptions} height={220} allowPaging={true} actionComplete={actionComplete} recordDoubleClick={recordDoubleClick} ref={g => grid = g}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='120' type="number" textAlign="Right" isPrimaryKey={true} validationRules={orderIDRules} />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' type="string" validationRules={customerIDRules} />
      <ColumnDirective field='Freight' headerText='Freight' width='120' editType="numericedit" format="C2" textAlign="Right" validationRules={freightIDRules} />
      <ColumnDirective field='OrderDate' headerText='Order Date' width='140' editType="datetimepickeredit" format={format} />
      <ColumnDirective field='ShipCountry' editType='dropdownedit' headerText='Ship Country' width='150' edit={params} />
    </ColumnsDirective>
    <Inject services={[Edit, Page]} />
  </GridComponent>
};
export default App;