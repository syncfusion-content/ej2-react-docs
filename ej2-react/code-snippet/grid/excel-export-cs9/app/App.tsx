import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ColumnDirective, ColumnsDirective, GridComponent, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { ExcelExport, ExcelExportProperties, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  let textBox: TextBoxComponent | null;
  const toolbar: ToolbarItems[] = ['ExcelExport'];
  const toolbarClick = (args: ClickEventArgs) => {
    if (grid && args.item.id === 'Grid_excelexport') {
      const excelExportProperties: ExcelExportProperties = {
        fileName: (textBox as TextBoxComponent).value !== "" ? (textBox as TextBoxComponent).value + '.xlsx' : 'new.xlsx'
      };
      grid.excelExport(excelExportProperties);
    }
  }
  return (
    <div>
      <label style={{ padding: "30px 17px 0 0" }}>Enter file name: </label>
      <TextBoxComponent ref={t => textBox = t} placeholder="Enter file name" width="120"></TextBoxComponent>
      <GridComponent id='Grid' dataSource={data} height={250} toolbar={toolbar}
        allowExcelExport={true} toolbarClick={toolbarClick} ref={g => grid = g}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
        </ColumnsDirective>
        <Inject services={[Toolbar, ExcelExport]} />
      </GridComponent>
    </div>
  );
}
export default App;