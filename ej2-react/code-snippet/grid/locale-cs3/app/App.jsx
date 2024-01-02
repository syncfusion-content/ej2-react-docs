import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Group, Page, Edit, Toolbar } from '@syncfusion/ej2-react-grids';
import { L10n, } from '@syncfusion/ej2-base';
import * as React from 'react';
import frFRLocalization from './locale.json'
import { data } from './datasource';

L10n.load(frFRLocalization);

function App() {
  const pageOptions = { pageSize: 6 };
  const editSettings = { allowAdding: true, allowDeleting: true, allowEditing: true };
  const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
  return <GridComponent dataSource={data} locale='fr-FR' allowPaging={true}
    pageSettings={pageOptions} allowGrouping={true} editSettings={editSettings} toolbar={toolbar}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
      <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
      <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
    </ColumnsDirective>
    <Inject services={[Page, Group, Edit, Toolbar]} />
  </GridComponent>
};
export default App;