import { ColumnDirective, ColumnsDirective, EditSettingsModel, FilterSettingsModel, GridComponent, GroupSettingsModel, PageSettingsModel } from '@syncfusion/ej2-react-grids';
import { Filter, Inject, Page, Sort, Group, Edit, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import React, { useState } from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  let state: GridComponent;
  const [message, setMessage] = useState('');
  const groupOptions: GroupSettingsModel = { showGroupedColumn: false, columns: ["ShipCountry"] };
  const filterOptions: FilterSettingsModel = { type: "Menu" };
  const pageSettings: PageSettingsModel = { pageCount: 5 };
  const editSettings: EditSettingsModel = { allowEditing: true };
  const toolbar: ToolbarItems[] = ['Edit', 'Update', 'Cancel'];
  const orderidrules: Object = { required: true, number: true };
  const customeridrules: Object = { required: true };
  const freightrules: Object = { required: true };
  const editparams: Object = { params: { popupHeight: "300px" } };
  const formatoptions: Object = { type: "dateTime", format: "M/d/y hh:mm a" };
  const actionBegin = () => {
    setMessage('');
  }
  // Save grid state to local storage
  const saveBtn = () => {
    var persistData = (grid as GridComponent).getPersistData(); // Grid persistData
    window.localStorage.setItem("gridOrders", persistData);
    setMessage("Grid state saved.");
  }
  // Restore grid state from local storage
  const restoreBtn = () => {
    let value: string = window.localStorage.getItem("gridOrders") as string; //"gridOrders" is component name + component id.
    state = JSON.parse(value);
    if (state) {
      (grid as GridComponent).setProperties(state);
      setMessage("Previous grid state restored.");
    } else {
      setMessage("No saved state found.");
    }
  }
  return (<div>
    <ButtonComponent className="e-success" onClick={saveBtn}>Save</ButtonComponent>
    <ButtonComponent className="e-danger" onClick={restoreBtn}>Restore</ButtonComponent>
    <p id='message'>{message}</p>
    <GridComponent id='Orders' dataSource={data} allowFiltering={true} filterSettings={filterOptions} allowPaging={true} pageSettings={pageSettings} allowSorting={true} allowGrouping={true} groupSettings={groupOptions} editSettings={editSettings} toolbar={toolbar} enablePersistence={true} height={230}
      ref={g => grid = g} actionBegin={actionBegin}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" validationRules={orderidrules} isPrimaryKey={true} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' validationRules={customeridrules} />
        <ColumnDirective field='Freight' headerText='Freight' width='100' textAlign="Right" format='C2' editType="numericedit" validationRules={freightrules} />
        <ColumnDirective field='OrderDate' headerText='Order Date' width='100' textAlign="Right" allowGrouping={false} editType="datetimepickeredit" format={formatoptions} />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' editType="dropdownedit" edit={editparams} />
      </ColumnsDirective>
      <Inject services={[Filter, Page, Sort, Group, Edit, Toolbar]} />
    </GridComponent></div>)
};
export default App;