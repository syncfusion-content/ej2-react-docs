

import { ColumnDirective, ColumnsDirective, EditSettingsModel, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, Inject } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const editOptions: EditSettingsModel = {
    allowEditing: true, allowAdding: true,
    allowDeleting: true
  };
  const orderIDRules: object = { required: true };
  const cityIDRules: object = { required: true };
  const shipIDRules: object = { required: true };
  const customerIDRules: object = { required: true, minLength: 5 };
  const generateCustomerId = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  // Generate a random ShipCity
  const generateShipCity = () => {
    const cities = ['London', 'Paris', 'New York', 'Tokyo', 'Berlin'];
    return cities[Math.floor(Math.random() * cities.length)];
  }
  // Generate a random ShipName
  const generateShipName = () => {
    const names = ['Que Delícia', 'Bueno Foods', 'Island Trading', 'Laughing Bacchus Winecellars'];
    return names[Math.floor(Math.random() * names.length)];
  }
  const clickEvents = (args) => {

    if (args.target.id === 'edit') {
      (grid as GridComponent).startEdit();
    }
    else if (args.target.id === 'add') {
      (grid as GridComponent).addRecord({
        OrderID: Math.floor(Math.random() * 100000), CustomerID: generateCustomerId(),
        ShipCity: generateShipCity(), ShipName: generateShipName()
      });
    }
    else if (args.target.id === 'delete') {

      (grid as GridComponent).deleteRecord();
    }
    else if (args.target.id === 'updaterow') {
      (grid as GridComponent).updateRow(0, { OrderID: 10248, CustomerID: 'RTER', ShipCity: 'America', ShipName: 'Hanari' });
    }
    else {
      (grid as GridComponent).setCellValue(((grid as GridComponent).currentViewData[0] as GridComponent).OrderID, 'CustomerID', 'Value Changed');
    }
  }
  return (<div> <ButtonComponent id='edit' onClick={clickEvents}>Edit</ButtonComponent>
    <ButtonComponent id='add' onClick={clickEvents}>Add</ButtonComponent>
    <ButtonComponent id='delete' onClick={clickEvents}>Delete</ButtonComponent>
    <ButtonComponent id='updaterow' onClick={clickEvents}>Update Row</ButtonComponent>
    <ButtonComponent id='updatecell' onClick={clickEvents}>Update Cell</ButtonComponent>
    <GridComponent dataSource={data} editSettings={editOptions} height={300} ref={g => grid = g}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' width='100' textAlign="Right" isPrimaryKey={true} validationRules={orderIDRules} />
        <ColumnDirective field='CustomerID' width='100' validationRules={customerIDRules} />
        <ColumnDirective field='ShipCity' width='100' textAlign="Right" validationRules={cityIDRules} />
        <ColumnDirective field='ShipName' width='100' validationRules={shipIDRules} />
      </ColumnsDirective>
      <Inject services={[Edit]} />
    </GridComponent></div>)
};
export default App;


