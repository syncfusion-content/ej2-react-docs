import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { data } from './datasource';
function App() {
  let grid;
    const FilterOptions = {
        type: 'Menu'
    };
    function btnClick(args) {
      if(args.currentTarget.id === 'performFilter'){
        grid.filterByColumn('CustomerID', 'startswith', 'v');
      }
      else{
        grid.clearFiltering()
      }
    }
    return (
      <div>
        <div style={{marginBottom: "20px"}}>
          <ButtonComponent id='performFilter' onClick={btnClick}>Filter Customer ID Column</ButtonComponent>
          <ButtonComponent  style={{marginLeft: "10px" }} id='clearFilter' onClick={btnClick}>Clear Filter</ButtonComponent>
        </div>
        <GridComponent ref={g => grid = g} dataSource={data} filterSettings={FilterOptions} allowFiltering={true} height={273}>
          <ColumnsDirective>
            <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
            <ColumnDirective field='CustomerID' width='100'/>
            <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
            <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
            <ColumnDirective field='ShipCountry' width='100'/>
          </ColumnsDirective>
          <Inject services={[Filter]}/> 
        </GridComponent>;
      </div>)
}
;
export default App;
