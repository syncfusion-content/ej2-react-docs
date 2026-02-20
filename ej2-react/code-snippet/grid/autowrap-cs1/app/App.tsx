import { ColumnDirective, ColumnsDirective, GridComponent, TextWrapSettingsModel } from '@syncfusion/ej2-react-grids';
import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import React, { useState } from 'react';
import { inventoryData } from './datasource';

function App() {
  const [wrapSettings, setWrapSettings] = useState<TextWrapSettingsModel>({ wrapMode: 'Content' });
  const dropDownData: { [key: string]: Object; }[] = [
    { text: 'Content', value: 'Content' },
    { text: 'Both', value: 'Both' },
  ];
  const valueChange = ((args: ChangeEventArgs) => {
    const newWrapValue: TextWrapSettingsModel = { wrapMode: args.value };
    setWrapSettings(newWrapValue);
  })
  return (
    <div>
      <label style={{ padding: '30px 17px 0 0' }}>Change the wrapmode of auto wrap feature:</label>
      <DropDownListComponent dataSource={dropDownData} index={0} width="100" change={valueChange}></DropDownListComponent>
      <GridComponent dataSource={inventoryData} height={280} allowPaging={true} allowTextWrap={true} textWrapSettings={wrapSettings}>
        <ColumnsDirective>
          <ColumnDirective field='Inventor' headerText='Inventor' width='100' />
          <ColumnDirective field='NumberofPatentFamilies' headerText='Number of Patent Families' textAlign='Right' width='100' />
          <ColumnDirective field='Country' headerText='Country' width='100' />
          <ColumnDirective field='Mainfieldsofinvention' headerText='Main fields of invention' width='140' />
        </ColumnsDirective>
      </GridComponent></div>)
}
export default App;
