import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { ExcelExport, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data, employeeData } from './datasource';
function App() {
    let firstGrid;
    let secondGrid;
    const toolbar = ['ExcelExport'];
    const toolbarClick = (args) => {
        if (firstGrid &&
            args.item.id === 'FirstGrid_excelexport') {
            const appendExcelExportProperties = {
                multipleExport: { type: 'NewSheet' }
            };
            const firstGridExport = firstGrid.excelExport(appendExcelExportProperties, true);
            firstGridExport.then((fData) => {
                if (secondGrid) {
                    secondGrid.excelExport(appendExcelExportProperties, false, fData);
                }
            });
        }
    };
    return (<div>
      <p><b>First Grid:</b></p>
      <GridComponent id='FirstGrid' dataSource={data.slice(0, 5)} toolbar={toolbar} allowExcelExport={true} toolbarClick={toolbarClick} ref={g => firstGrid = g}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right'/>
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
            <ColumnDirective field='Freight' width='100' format='C2' textAlign='Right'/>
            <ColumnDirective field='OrderDate' width='140' format='yMd' textAlign='Right'/>
            <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
            <ColumnDirective field='ShipName' headerText='Ship Name' width='150' visible={false}/>
        </ColumnsDirective>
        <Inject services={[Toolbar, ExcelExport]}/>
      </GridComponent>
      <p><b>Second Grid:</b></p>
      <GridComponent id='SecondGrid' dataSource={employeeData.slice(0, 5)} allowExcelExport={true} ref={g => secondGrid = g}>
        <ColumnsDirective>
          <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign="Right"/>
          <ColumnDirective field='FirstName' headerText='First Name' width='120'/>
          <ColumnDirective field='LastName' headerText='Last Name' width='120'/>
          <ColumnDirective field='Title' headerText='Title' width='150'/>
        </ColumnsDirective>
        <Inject services={[ExcelExport]}/>
      </GridComponent>
  </div>);
}
export default App;
