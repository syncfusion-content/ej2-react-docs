

import { ColumnDirective, ColumnsDirective, GridComponent, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const editOptions = {
    allowEditing: true, allowAdding: true,
    allowDeleting: true
  };
  const orderIDRules = { required: true };
  const cityIDRules = { required: true };
  const shipIDRules = { required: true };
  const customerIDRules = { required: true, minLength: 5 };
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
      grid.startEdit();
    }
    else if (args.target.id === 'add') {
      grid.addRecord({
        OrderID: Math.floor(Math.random() * 100000), CustomerID: generateCustomerId(),
        ShipCity: generateShipCity(), ShipName: generateShipName()
      });
    }
    else if (args.target.id === 'delete') {

      grid.deleteRecord();
    }
    else if (args.target.id === 'updaterow') {
      grid.updateRow(0, { OrderID: 10248, CustomerID: 'RTER', ShipCity: 'America', ShipName: 'Hanari' });
    }
    else {
      grid.setCellValue((grid.currentViewData[0] as any).OrderID, 'CustomerID', 'Value Changed');
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


