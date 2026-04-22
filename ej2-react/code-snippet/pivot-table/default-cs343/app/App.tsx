import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { IDataSet, PivotViewComponent, PDFExport, Inject } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import * as React from 'react';
import { employeeData } from './datasource';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';


function App() {
  let pivotObj: PivotViewComponent;

  let gridSettings: GridSettings = {
    layout: 'Tabular',
    pdfQueryCellInfo: (args: any) => {
      if (args.data && args.data.axis === 'row') {
        if (args.data.valueSort && args.data.valueSort.axis === 'FirstName') {
          const firstName: any = args.data.actualText;
          const employee: any = employeeData.find((emp: any) => emp.FirstName === firstName);
          if (employee && employee.EmailID) {
            args.hyperLink = {
              target: 'mailto:' + employee.EmailID,
              displayText: args.value
            };
          }
        }
        if (args.data.valueSort && args.data.valueSort.axis === 'EmployeeID') {
          const employeeId: any = Number(args.data.actualText);
          const employee: any = employeeData.find((emp: any) => emp.EmployeeID === employeeId);
          if (employee && employee.EmployeeImage) {
            args.image = {
              base64: employee.EmployeeImage,
              height: 57.5,
              width: 57.5
            };
          }
        }
      }
    }
  } as GridSettings;

  let dataSourceSettings: DataSourceSettingsModel = {
    dataSource: employeeData as IDataSet[],
    rows: [{ name: 'FirstName' }, { name: 'EmployeeID', caption: 'Employee Image' }],
    columns: [{ name: 'Title' }],
    values: [{ name: 'Salary' }, { name: 'OrdersCount' }],
    filterSettings: [
      { name: 'Title', type: 'Include', items: ['Sales Representative'] }
    ],
    expandAll: true,
    showSubTotals: false,
    showRowGrandTotals: false
  }

  function btnClick(): void {
    pivotObj.pdfExport();
  }

  return (
    <div>
      <div className="col-md-9"> <PivotViewComponent ref={(d: PivotViewComponent) => pivotObj = d} id='PivotView' gridSettings={gridSettings} height={350} dataSourceSettings={dataSourceSettings} allowPdfExport={true} hyperlinkSettings={{
        showRowHeaderHyperlink: true,
        cssClass: 'e-custom-class'
      }}>
        <Inject services={[PDFExport]} /></PivotViewComponent>
      </div>
      <div className='col-lg-3 property-section'>
        <ButtonComponent cssClass='e-primary' onClick={btnClick.bind(this)}>Export</ButtonComponent>
      </div>
    </div >);

};

export default App;
