import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, Page, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
const format = {
    type: 'dateTime',
    format: 'M/d/y hh:mm a'
};
function App() {
    let fieldName;
    let grid;
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
    const params = {
        params: {
            popupHeight: "300px"
        }
    };
    const actionComplete = (e) => {
        if (e.requestType === "beginEdit") {
            // focus the column
            e.form.elements[grid.element.getAttribute("id") + fieldName].focus();
        }
    };
    const recordDoubleClick = (e) => {
        let clickedColumnIndex = e.cell.getAttribute("aria-colindex");
        fieldName = grid.columnModel[parseInt(clickedColumnIndex)].field;
    };
    return <GridComponent dataSource={data} editSettings={editOptions} height={220} allowPaging={true} actionComplete={actionComplete} recordDoubleClick={recordDoubleClick} ref={g => grid = g}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='120' type="number" textAlign="Right" isPrimaryKey={true}/>
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' type="string"/>
      <ColumnDirective field='Freight' headerText='Freight' width='120' editType="numericedit" format="C2" textAlign="Right"/>
      <ColumnDirective field='OrderDate' headerText='Order Date' width='140' editType="datetimepickeredit" format={format}/>
      <ColumnDirective field='ShipCountry' editType='dropdownedit' headerText='Ship Country' width='150' edit={params}/>
    </ColumnsDirective>
    <Inject services={[Edit, Page]}/>
  </GridComponent>;
}
;
export default App;
