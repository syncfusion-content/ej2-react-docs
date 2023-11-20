

import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let gridInstance: GridComponent;
  const rowDataBound = (args) => {
    let count = 0;
    let keys = Object.keys(args.data);
    for (let i = 0; i < keys.length; i++) {
      if (
        args.data[keys[i]] == null ||
        args.data[keys[i]] == '' ||
        args.data[keys[i]] == undefined
      ) {
        count++;
      }
    }
    if (count == keys.length) {
      for (let i = 0; i < gridInstance.columns.length; i++) {
        if (gridInstance.columns[i].displayAsCheckBox) {
          args.row.children[i].innerHTML = '';
        }
      }
    }
  };

  return <GridComponent id='grid' ref={g => gridInstance = g} dataSource={data} height={315} rowDataBound={rowDataBound}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' type="number" textAlign="Right" headerTextAlign="Right" width='120' />
      <ColumnDirective field='CustomerID' type="string" textAlign="Left" headerTextAlign="Left" width='90' />
      <ColumnDirective field="Freight" headerText="Freight" width="80" textAlign="Right" />
      <ColumnDirective field="Verified" headerText="Verified" width="100" displayAsCheckBox="true" />
    </ColumnsDirective>
  </GridComponent>
}
export default App;


