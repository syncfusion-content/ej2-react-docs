

import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { Filter, FilterSettingsModel, GridComponent, Inject } from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { data } from './datasource';

function App() {
  const filterOptions: FilterSettingsModel = {
    columns: [
      {
        field: 'ShipCity', matchCase: false,
        operator: 'startswith', predicate: 'and', value: 'reims'
      },
      {
        field: 'ShipName', matchCase: false, operator: 'startswith',
        predicate: 'and', value: 'Vins et alcools Chevalier'
      }
    ]
  };
  return <GridComponent dataSource={data} allowFiltering={true} filterSettings={filterOptions}
    height={273}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
      <ColumnDirective field='ShipCity' headerText='Ship City' width='100' />
      <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
    </ColumnsDirective>
    <Inject services={[Filter]} />
  </GridComponent>
};
export default App;


