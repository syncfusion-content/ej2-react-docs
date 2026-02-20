import { ColumnDirective, ColumnsDirective, Grid, GridComponent, TextWrapSettingsModel } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { inventoryData } from './datasource';

function App() {
  let grid: Grid | null;
  const wrapSettings: TextWrapSettingsModel = { wrapMode: 'Header' };
  const dropDownData: any = [
    { text: 'Header', value: 'Header' },
    { text: 'Both', value: 'Both' },
  ];
  const valueChange = ((args: any) => {
    (grid as any).textWrapSettings.wrapMode = args.value;
  })
  return (
    <div>
      <label style={{ padding: '30px 17px 0 0' }}>Autowrap for header column :</label>
      <DropDownListComponent dataSource={dropDownData} index={0} width="100" change={valueChange}></DropDownListComponent>
      <div style={{ padding: '40px 0 0 0' }}>
        <GridComponent dataSource={inventoryData} height={230} ref={g => grid = g} allowPaging={true} allowTextWrap={true} textWrapSettings={wrapSettings}>
          <ColumnsDirective>
            <ColumnDirective field='Inventor' headerText='Inventor' width='100' />
            <ColumnDirective field='NumberofPatentFamilies' headerText='Number of Patent Families' width='100' />
            <ColumnDirective field='Country' headerText='Country' width='100' />
            <ColumnDirective field='Mainfieldsofinvention' headerText='Main fields of invention' width='140' />
          </ColumnsDirective>
        </GridComponent></div></div>)
}
export default App;