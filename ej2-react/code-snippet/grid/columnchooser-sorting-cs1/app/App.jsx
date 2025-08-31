import * as React from 'react';
import { ColumnChooser, ColumnDirective, ColumnsDirective, GridComponent, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import { data } from './datasource';

function App() {
  const toolbarOptions = ['ColumnChooser'];

  // Sort the column chooser list based on the sort direction.
  const beforeOpenColumnChooser = (args) => {
    args.sortDirection = "Ascending";
  };

  return (
    <GridComponent dataSource={data} toolbar={toolbarOptions} showColumnChooser={true} height={235} beforeOpenColumnChooser={beforeOpenColumnChooser} >
      <ColumnsDirective>
        <ColumnDirective field="OrderID" headerText="Order ID" width="120" isPrimaryKey={true} textAlign="Right" />
        <ColumnDirective field="CustomerID" headerText="Customer Name" width="150" textAlign="Left" />
        <ColumnDirective field="OrderDate" headerText="Order Date" width="130" format="yMd" textAlign="Right" />
        <ColumnDirective field="Freight" headerText="Freight" width="120" format="C2" textAlign="Right" />
        <ColumnDirective field="ShipCity" headerText="Ship City" width="150" showInColumnChooser={false} />
        <ColumnDirective field="ShipRegion" headerText="Ship Region" width="150" visible={false} />
        <ColumnDirective field="ShipCountry" headerText="Ship Country" width="150" />
      </ColumnsDirective>
      <Inject services={[Toolbar, ColumnChooser]} />
    </GridComponent>
  );
}
export default App;
