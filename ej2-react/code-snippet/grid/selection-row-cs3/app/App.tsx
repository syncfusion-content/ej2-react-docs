import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import { ColumnDirective, ColumnsDirective, GridComponent, Page, PageSettingsModel, Inject, PageEventArgs } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const pageSettings: PageSettingsModel = { pageSize: 10 }
  let mod;
  let value;
  const ddlData: { [key: string]: Object; }[] = [
    { text: 'Select row index' },
    { text: '1', value: '1' },
    { text: '2', value: '2' },
    { text: '30', value: '30' },
    { text: '80', value: '80' },
    { text: '110', value: '110' },
    { text: '120', value: '120' },
    { text: '210', value: '210' },
    { text: '310', value: '310' },
    { text: '410', value: '410' },
    { text: '230', value: '230' }
  ]
  const actionComplete = (args: PageEventArgs) => {
    if (args.requestType === "paging") {
      (grid as GridComponent).selectRow(mod);
    }
  }
  const valueChange = (args: ChangeEventArgs) => {
    value = +args.value;
    mod = (value - 1) % 10;
    const page = Math.ceil(value / 10);

    if (page === 1) {
      if ((grid as GridComponent).pagerModule.pagerObj.currentPage !== 1) {
        (grid as GridComponent).pagerModule.goToPage(1);
      }
      (grid as GridComponent).selectRow(mod);
    }
    else {
      (grid as GridComponent).pagerModule.goToPage(page);
      if ((grid as GridComponent).pagerModule.pagerObj.currentPage === page) {
        (grid as GridComponent).selectRow(mod);
      }
    }
  }

  return (<div>
    <label style={{ padding: "30px 20px 0 0" }} > Select Row :</label>
    <DropDownListComponent index={0} width={150} dataSource={ddlData} change={valueChange}></DropDownListComponent>
    <GridComponent ref={g => grid = g} dataSource={data} actionComplete={actionComplete} allowPaging={true} pageSettings={pageSettings}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent></div>)
};
export default App;