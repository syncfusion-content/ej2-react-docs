import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, Inject } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid;
    const clickEdit = () => {
        grid.startEdit();
    };
    const clickAdd = () => {
        grid.addRecord({ "OrderID": "10248", "CustomerID": "RTER", "EmployeeID": "6", "Freight": "90.7", "ShipCountry": "America" });
    };
    const clickDelete = () => {
        grid.deleteRecord();
    };
    const clickUpdateRow = () => {
        grid.updateRow(0, { OrderID: 10248, CustomerID: 'RTER', EmployeeID: '9', Freight: '98.4', ShipCountry: 'America' });
    };
    const clickUpdateCell = () => {
        grid.setCellValue(grid.currentViewData[0].OrderID, 'CustomerID', 'Value Changed');
    };
    const editOptions = {
        allowEditing: true, allowAdding: true,
        allowDeleting: true
    };
    return (<div> <ButtonComponent onClick={clickEdit}>Edit</ButtonComponent>
    <ButtonComponent onClick={clickAdd}>Add</ButtonComponent>
    <ButtonComponent onClick={clickDelete}>Delete</ButtonComponent>
    <ButtonComponent onClick={clickUpdateRow}>Update Row</ButtonComponent>
    <ButtonComponent onClick={clickUpdateCell}>Update Cell</ButtonComponent>
    <GridComponent id="Grid" dataSource={data} editSettings={editOptions} height={230} ref={g => grid = g}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' width='100' textAlign="Right" isPrimaryKey={true}/>
        <ColumnDirective field='CustomerID' width='100'/>
        <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
        <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
        <ColumnDirective field='ShipCountry' width='100'/>
      </ColumnsDirective>
      <Inject services={[Edit]}/>
    </GridComponent></div>);
}
;
export default App;
