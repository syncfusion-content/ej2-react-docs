

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
      <ColumnDirective field='OrderID' width='100' textAlign="Right" />
      <ColumnDirective field='CustomerID' width='100' />
      <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right" />
      <ColumnDirective field='ShipCity' width='100' />
      <ColumnDirective field='ShipName' width='100' />
    </ColumnsDirective>
    <Inject services={[Filter]} />
  </GridComponent>
};
export default App;


