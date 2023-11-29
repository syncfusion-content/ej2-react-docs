import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, GridComponent, PageSettingsModel, PrintMode } from '@syncfusion/ej2-react-grids';
import { Inject, Page, Toolbar } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';

function App() {
  const pageOptions: PageSettingsModel = { pageSize: 6 };
  const [printMode, setPrintMode] = useState<PrintMode>();
  const dropdownlist: string[] = ['AllPages', 'CurrentPage'];
  const onChange = (args: ChangeEventArgs) => {
    setPrintMode(args.value);
  }
  return ((<div>
    <label style={{ padding: "10px 10px 26px 0" }}><b>Select Print Mode </b></label>
    <DropDownListComponent index={0} width={200} dataSource={dropdownlist} change={onChange}></DropDownListComponent>
    <GridComponent dataSource={data} printMode={printMode} toolbar={['Print']} allowPaging={true} pageSettings={pageOptions}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
      </ColumnsDirective>
      <Inject services={[Toolbar, Page]} />
    </GridComponent ></div>))
};
export default App;