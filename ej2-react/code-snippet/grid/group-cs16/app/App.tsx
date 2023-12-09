import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Group, GroupSettingsModel } from '@syncfusion/ej2-react-grids';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import { useState } from 'react';
import { data } from './datasource';
function App() {
  let grid: GridComponent | null;
  let textbox: TextBoxComponent | null;
  const [message, setMessage] = useState('');
  const groupOptions: GroupSettingsModel = {
    columns: ['CustomerID'],
    showDropArea: false
  };
  const onExpandCollapseButtonClick = () => {
    const groupedRows = Array.from((grid as GridComponent).getContentTable().querySelectorAll('.e-recordplusexpand, .e-recordpluscollapse'));
    const groupedRowIndex: number = parseInt((textbox as TextBoxComponent).value);
    if (groupedRows.length >= 0 && groupedRowIndex < groupedRows.length) {
      setMessage('');
      const groupCaptionElement = groupedRows[groupedRowIndex];
      (grid as GridComponent).groupModule.expandCollapseRows(groupCaptionElement);
    } else {
      setMessage('The entered index exceeds the total number of grouped rows. Please enter a valid grouped index.');
    }
  }
  return (<div>
      <TextBoxComponent ref={t => textbox = t} type='number' placeholder="Enter Grouped Row Index" width={200}></TextBoxComponent>
      <ButtonComponent onClick={onExpandCollapseButtonClick}>Collapse or Expand Row</ButtonComponent>
      <p style={{ color: "red" }}>{message}</p>
      <GridComponent ref={g => grid = g} dataSource={data} allowGrouping={true} groupSettings={groupOptions} height={315}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
        </ColumnsDirective>
        <Inject services={[Group]} />
      </GridComponent ></div>)
};
export default App;
