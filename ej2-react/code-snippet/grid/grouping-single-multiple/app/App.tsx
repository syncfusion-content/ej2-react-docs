import { ColumnDirective, ColumnsDirective, GridComponent, Group, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { useRef } from 'react';
import { data } from './datasource';
function App() {
  
  let grid: GridComponent | null;
  const [isMultipleGrouping, setIsMultipleGrouping] = React.useState(false);

  const toggleGrouping = () => {
    grid.clearGrouping();
    if (isMultipleGrouping) {
    // Single column grouping
    grid.groupSettings.columns = ['CustomerID'];
  } else {
    // Multiple column grouping
    grid.groupSettings.columns = ['CustomerID', 'ShipCity'];
  }
    setIsMultipleGrouping(!isMultipleGrouping);
  };
  return <div>
  <button onClick={toggleGrouping}>{isMultipleGrouping ? 'Switch to Single Group' : 'Switch to Multiple Group'}</button>
  <GridComponent ref={(g) => (grid = g)} dataSource={data} allowGrouping={true} height={267}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right"/>
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
      <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
      <ColumnDirective field='ShipName' headerText='Ship Name' width='150'/>
    </ColumnsDirective>
    <Inject services={[Group]}/>
  </GridComponent>
  </div>
}
export default App;