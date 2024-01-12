import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page, PageSettingsModel } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function App() {
  const [pageSettings, setPageSettings] = useState<PageSettingsModel>();
  let textbox: TextBoxComponent | null;
  const click = () => {
    const pageSize: PageSettingsModel = { pageSize: (textbox as TextBoxComponent).value };
    setPageSettings(pageSize);
  }
  return (<div>
    <label style={{ padding: "30px 17px 0 0" }}>Enter page size:</label>
    <TextBoxComponent ref={t => textbox = t} width={120}></TextBoxComponent>
    <ButtonComponent onClick={click}>Click button</ButtonComponent>
    <GridComponent dataSource={data} height={265} allowPaging={true} pageSettings={pageSettings}>
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