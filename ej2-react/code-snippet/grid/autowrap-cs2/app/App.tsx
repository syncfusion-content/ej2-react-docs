import { ColumnDirective, ColumnsDirective, GridComponent, GridLine } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent, ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';
import React, { useState } from 'react';
import { inventoryData } from './datasource';

function App() {
  const [gridLine, setGridLine] = useState<GridLine>('Default');
  const dropDownData: any = [
    { text: 'Default', value: 'Default' },
    { text: 'Both', value: 'Both' },
    { text: 'Horizontal', value: 'Horizontal' },
    { text: 'Vertical', value: 'Vertical' },
    { text: 'None', value: 'None' }
  ];
  const valueChange = ((args: ChangeEventArgs) => {
    setGridLine(args.value);
  })
  return (
    <div>
      <label style={{ padding: '30px 17px 0 0' }}>Change the grid lines:</label>
      <DropDownListComponent dataSource={dropDownData} index={0} width="100" change={valueChange}></DropDownListComponent>
      <GridComponent dataSource={inventoryData} height={315} gridLines={gridLine}>
        <ColumnsDirective>
          <ColumnDirective field='Inventor' headerText='Inventor' width='100' />
          <ColumnDirective field='NumberofPatentFamilies' headerText='Number of Patent Families' textAlign='Right' width='100' />
          <ColumnDirective field='Country' headerText='Country' width='100' />
          <ColumnDirective field='Mainfieldsofinvention' headerText='Main fields of invention' width='140' />
        </ColumnsDirective>
      </GridComponent></div>)
}
export default App;
