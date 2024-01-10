import { ButtonComponent } from '@syncfusion/ej2-react-buttons'
import { ColumnDirective, ColumnsDirective, GridComponent, SelectionSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const selectionSettings: SelectionSettingsModel = { mode: 'Cell', type: 'Multiple' };
  const buttonClick = (rowIndex, columnIndex) => {
    (grid as GridComponent).selectCells([{ rowIndex: rowIndex, cellIndexes: [columnIndex] }]);
  }
  return (<div>
    <div style={{ padding: " 0px 0px 20px 0px" }}>
      <ButtonComponent className='btn' onClick={() => buttonClick(1, 3)}>Select [1, 3]</ButtonComponent>
      <ButtonComponent className='btn' onClick={() => buttonClick(2, 2)}>Select [2, 2]</ButtonComponent>
      <ButtonComponent className='btn' onClick={() => buttonClick(0, 0)}>Select [0, 0]</ButtonComponent>
    </div>
    <div style={{ padding: " 0px 0px 20px 0px" }}>
      <ButtonComponent className='btn' onClick={() => buttonClick(4, 2)}>Select [4, 2]</ButtonComponent>
      <ButtonComponent className='btn' onClick={() => buttonClick(5, 1)}>Select [5, 1]</ButtonComponent>
      <ButtonComponent className='btn' onClick={() => buttonClick(3, 3)}>Select [3, 3]</ButtonComponent>
    </div>
    <div style={{ padding: " 0px 0px 20px 0px" }}>
      <ButtonComponent className='btn' onClick={() => buttonClick(0, 3)}>Select [0, 3]</ButtonComponent>
      <ButtonComponent className='btn' onClick={() => buttonClick(8, 1)}>Select [8, 1]</ButtonComponent>
      <ButtonComponent className='btn' onClick={() => buttonClick(8, 2)}>Select [8, 2]</ButtonComponent>
    </div>
    <GridComponent ref={g => grid = g} dataSource={data} selectionSettings={selectionSettings}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
        <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' />
      </ColumnsDirective>
    </GridComponent></div>)
};
export default App;