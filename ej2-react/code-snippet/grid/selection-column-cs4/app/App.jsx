import { ButtonComponent } from '@syncfusion/ej2-react-buttons'
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const selectionSettings = { allowColumnSelection: true, type: 'Multiple' };
  const buttonClick = (columns) => {
    grid.selectionModule.clearColumnSelection();
    grid.selectionModule.selectColumns(columns);
  }
  return (<div>
    <div style={{ padding: " 0px 0px 20px 0px" }}>
      <ButtonComponent className='btn' onClick={() => buttonClick([1, 2])}>Select [1, 2]</ButtonComponent>
      <ButtonComponent className='btn' onClick={() => buttonClick([0, 2])}>Select [0, 2]</ButtonComponent>
      <ButtonComponent className='btn' onClick={() => buttonClick([1, 3])}>Select [1, 3]</ButtonComponent>
      <ButtonComponent className='btn' onClick={() => buttonClick([0, 5])}>Select [0, 5]</ButtonComponent>
      <ButtonComponent className='btn' onClick={() => buttonClick([1, 6])}>Select [1, 6]</ButtonComponent>
    </div>
    <div style={{ padding: " 0px 0px 20px 0px" }}>
      <ButtonComponent className='btn' onClick={() => buttonClick([0, 2, 5])}>Select [0, 2, 5]</ButtonComponent>
      <ButtonComponent className='btn' onClick={() => buttonClick([1, 3, 6])}>Select [1, 3, 6]</ButtonComponent>
      <ButtonComponent className='btn' onClick={() => buttonClick([2, 4, 6])}>Select [2, 4, 6]</ButtonComponent>
      <ButtonComponent className='btn' onClick={() => buttonClick([0, 3, 5])}>Select [0, 3, 5]</ButtonComponent>
    </div>
    <GridComponent ref={g => grid = g} dataSource={data} selectionSettings={selectionSettings}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
        <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' />
        <ColumnDirective field='OrderDate' headerText='Order Date' width='100' format='yMd' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='100' />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
      </ColumnsDirective>
    </GridComponent></div>)
};
export default App;