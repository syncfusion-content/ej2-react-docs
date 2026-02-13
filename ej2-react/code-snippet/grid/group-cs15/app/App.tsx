import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Group, GroupSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const groupOptions: GroupSettingsModel = {
    columns: ['CustomerID', 'ShipCity'],
  };
  const clearGroup = () => {
    (grid as GridComponent).clearGrouping();
  }
  return (
    <div>
      <ButtonComponent style={{ marginBottom:"5px" }} onClick={clearGroup}>Clear Grouping</ButtonComponent>
      <GridComponent ref={g => grid = g} dataSource={data} allowGrouping={true} groupSettings={groupOptions} height={315}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
        </ColumnsDirective>
        <Inject services={[Group]} />
      </GridComponent >
    </div>
  )
};
export default App;