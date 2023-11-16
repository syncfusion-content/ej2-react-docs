
import { ClipMode, ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent, ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { inventoryData } from './datasource';

function App() {
  let grid: GridComponent | null;
  const dropDownData: { [key: string]: Object; }[] = [
    { text: 'Ellipsis', value: 'Ellipsis' },
    { text: 'Clip', value: 'Clip' },
    { text: 'EllipsisWithTooltip', value: 'EllipsisWithTooltip' }
  ];
  const valueChange = ((args: ChangeEventArgs) => {
    (grid as GridComponent).getColumnByField('Mainfieldsofinvention').clipMode = args.value as ClipMode;
    (grid as GridComponent).refreshColumns();

  })
  return (
    <div>
      <label style={{ padding: '30px 17px 0 0' }}> Change the clip mode: </label>
      <DropDownListComponent dataSource={dropDownData} index={0} width="100" change={valueChange}></DropDownListComponent>
      <GridComponent dataSource={inventoryData} height={315} ref={g => grid = g} allowPaging={true}>
        <ColumnsDirective>
          <ColumnDirective field='Inventor' headerText='Inventor' width='100' />
          <ColumnDirective field='NumberofPatentFamilies' headerText='Number of Patent Families' width='100' />
          <ColumnDirective field='Country' headerText='Country' width='100' />
          <ColumnDirective field='Mainfieldsofinvention' headerText='Main fields of invention' width='140' />
        </ColumnsDirective>
      </GridComponent></div>)
}
export default App;
