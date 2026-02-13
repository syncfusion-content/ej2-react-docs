import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Sort, Filter, Group, getStateEventArgument } from "@syncfusion/ej2-react-grids";
import { getData } from './order-service';

function App() {
  let grid;
  const pageSettings = { pageSize: 12, currentPage: 2 };
  const sortSettings = { columns: [{ field: 'OrderID', direction: 'Descending' }] };
  const filterSettings = { columns: [{ field: 'CustomerID', matchCase: false, operator: 'startswith', predicate: 'and', value: 'A' }] };
  const groupSettings = { columns: ['ShipCity'] };
  const created = () => {
    const query = grid.getDataModule().generateQuery(); // Generate the initial query state from the Grid's data module.
    const state = getStateEventArgument(query); // Retrieve the Grid's current state based on the generated query.
    dataStateChange(state); // Send the retrieved state to the service to fetch data accordingly.
  };
  const dataStateChange = (state) => {
    getData(state).then((data) => (grid.dataSource = data));
  };
  return (<div>
    <GridComponent ref={g => grid = g} id="Grid" height={"100%"} enablePersistence={true} allowPaging={true} pageSettings={pageSettings} allowSorting={true} sortSettings={sortSettings} allowFiltering={true} filterSettings={filterSettings} allowGrouping={true} groupSettings={groupSettings} created={created} dataStateChange={dataStateChange}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true}/>
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100'/>
        <ColumnDirective field='Freight' headerText='Freight' width='100' textAlign="Right" format='C2'/>
        <ColumnDirective field='OrderDate' headerText='Order Date' width='100' textAlign="Right" allowGrouping={false}/>
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100'/>
      </ColumnsDirective>
      <Inject services={[Page, Sort, Filter, Group]} />
    </GridComponent></div>)
};
export default App;