
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';

function App() {
  let grid;
  const isQueryEnabled = React.useState(true);
  const toggleQueryString = (args) => {
    grid.pageSettings.enableQueryString = args.checked;
  }
  return (<div>
    <label style={{ padding: "30px 17px 0 0" }}>Enable/Disable Query String</label>
    <SwitchComponent checked={isQueryEnabled} change={toggleQueryString}></SwitchComponent>
    <GridComponent dataSource={data} height={265} ref={g => grid = g} allowPaging={true} pageSettings={{ enableQueryString: true }}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C" textAlign="Right" />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
        <ColumnDirective field='Verified' headerText='Verified' width='150' displayAsCheckBox={true} />
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent></div>)
};
export default App;
