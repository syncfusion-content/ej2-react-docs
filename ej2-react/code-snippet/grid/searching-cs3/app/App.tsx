import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { employeeData } from './datasource';

function App() {
  let grid: GridComponent | null;
  const inputStyle: object = { width: '200px', display: 'inline-block' };
  const clickHandler = () => {
    const searchText: string = (document.getElementsByClassName('searchtext')[0] as HTMLFormElement).value;
    if (grid) {
      (grid as GridComponent).search(searchText);
    }
  };
  return (
    <div>
      <div className="e-float-input" style={inputStyle}>
        <input type="text" className="searchtext" />
        <span className="e-float-line" />
        <label className="e-float-text">Search text</label>
      </div>
      <ButtonComponent onClick={clickHandler}>Search</ButtonComponent>
      <GridComponent dataSource={employeeData} height={260} ref={g => grid = g}>
        <ColumnsDirective>
          <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign='Right' />
          <ColumnDirective field='FirstName' headerText='First Name' width='150' />
          <ColumnDirective field='City' headerText='City' width='150' />
          <ColumnDirective field='Country' headerText='Country' width='150' />
        </ColumnsDirective>
      </GridComponent>
    </div>
  )
};
export default App;