

import { ColumnDirective, ColumnsDirective, EditSettingsModel, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, Filter, Group, Inject, Reorder, Sort } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
  return <GridComponent dataSource={data} allowSorting={true} editSettings={editOptions} allowFiltering={true} allowReordering={true} allowGrouping={true} height={230}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' width='100' textAlign="Right" isPrimaryKey={true} allowGrouping={false} />
      <ColumnDirective field='CustomerID' width='100' />
      <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right" allowEditing={false} allowReordering={false} allowFiltering={false} />
      <ColumnDirective field='OrderDate' width='140' format="yMd" textAlign="Right" allowSorting={false} />
    </ColumnsDirective>
    <Inject services={[Edit, Sort, Filter, Group, Reorder]} />
  </GridComponent>
};
export default App;


