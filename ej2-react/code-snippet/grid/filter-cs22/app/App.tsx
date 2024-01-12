import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { Filter, FilterSettingsModel, GridComponent, Inject } from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const filterOptions: FilterSettingsModel = {
    type: 'Excel',
  };
  const onSingleValueFilter = () => {
    (grid as GridComponent).clearFiltering();
    // filter OrderID column with single value
    (grid as GridComponent).filterByColumn('OrderID', 'equal', 10248);
  }
  const onMultipleValueFilter = () => {
    (grid as GridComponent).clearFiltering();
    // filter CustomerID column with multiple values
    (grid as GridComponent).filterByColumn('CustomerID', 'equal', [
      'VINET',
      'TOMSP',
      'ERNSH',
    ]);
  }
  return (<div>
    <ButtonComponent cssClass="e-outline" onClick={onSingleValueFilter}>Filter with single value</ButtonComponent>
    <ButtonComponent cssClass="e-outline" onClick={onMultipleValueFilter}>Filter with multiple values</ButtonComponent>
    <GridComponent ref={g => grid = g} dataSource={data} filterSettings={filterOptions} allowFiltering={true} height={315} >
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='100' />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
      </ColumnsDirective>
      <Inject services={[Filter]} />
    </GridComponent></div>)
};
export default App;