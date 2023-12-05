
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import React, { useState } from 'react';
import { inventoryData } from './datasource';

function App() {
  const [wrapSettings, setWrapSettings] = useState({ wrapMode: 'Content' });
  const dropDownData = [
    { text: 'Content', value: 'Content' },
    { text: 'Both', value: 'Both' },
  ];
  const valueChange = ((args) => {
    const newWrapValue = { wrapMode: args.value };
    setWrapSettings(newWrapValue);
  })
  return (
    <div>
      <label style={{ padding: '30px 17px 0 0' }}>Change the wrapmode of auto wrap feature:</label>
      <DropDownListComponent dataSource={dropDownData} index={0} width="100" change={valueChange}></DropDownListComponent>
      <GridComponent dataSource={inventoryData} height={315} allowPaging={true} allowTextWrap={true} textWrapSettings={wrapSettings}>
        <ColumnsDirective>
          <ColumnDirective field='Inventor' headerText='Inventor' width='100' />
          <ColumnDirective field='NumberofPatentFamilies' headerText='Number of Patent Families' width='100' />
          <ColumnDirective field='Country' headerText='Country' width='100' />
          <ColumnDirective field='Mainfieldsofinvention' headerText='Main fields of invention' width='140' />
        </ColumnsDirective>
      </GridComponent></div>)
}
export default App;
