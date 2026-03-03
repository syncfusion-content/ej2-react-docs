import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page, PageSettingsModel } from '@syncfusion/ej2-react-grids';
import React from 'react';
import { data } from './datasource';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function App() {
  const pageSettings: PageSettingsModel = { pageSize: 12 };
  let textbox: TextBoxComponent | null;
  const gridRef = React.useRef<GridComponent>(null);
  const click = () => {
    gridRef.current.pageSettings.pageSize = parseInt(textbox.value);
  }
  return (<div>
    <label style={{ padding: "30px 17px 0 0" }}>Enter page size:</label>
    <TextBoxComponent ref={t => textbox = t} width={120}></TextBoxComponent>
    <ButtonComponent id="button" onClick={click}>Click button</ButtonComponent>
    <GridComponent ref={gridRef} id="grid" dataSource={data} height={265} allowPaging={true} pageSettings={pageSettings} >
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