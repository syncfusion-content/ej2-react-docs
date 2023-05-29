

import { ColumnDirective, ColumnsDirective, GridComponent, SearchSettingsModel} from '@syncfusion/ej2-react-grids';
import { Inject, Search, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App () {
  const toolbarOptions: ToolbarItems[] = ['Search'];
  const searchOptions: SearchSettingsModel = {
    fields: ['CustomerID'],
    ignoreCase: true,
    key: 'Ha',
    operator: 'contains'
  };
    return (
      <GridComponent dataSource={data} toolbar={toolbarOptions} searchSettings={searchOptions}
        height={272}>
      <ColumnsDirective>
          <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
          <ColumnDirective field='CustomerID' width='100'/>
          <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
          <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
          <ColumnDirective field='ShipCountry' width='100'/>
      </ColumnsDirective>
      <Inject services={[Search, Toolbar]} />
  </GridComponent>)
};
export default App;


