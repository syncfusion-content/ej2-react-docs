import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { IDataSet, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import * as React from 'react';
import { pivotData } from './datasource';
import { ExcelExportProperties } from '@syncfusion/ej2-grids';

function App() {

  let dataSourceSettings: DataSourceSettingsModel = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    filters: [],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
  }
  let pivotObj: PivotViewComponent;
  let dataSourceSettings1: DataSourceSettingsModel = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    expandAll: true,
    filters: [],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
  }
  let pivotObj1: PivotViewComponent;
  
  return (<div><div className="col-md-9"> <PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} dataSourceSettings={dataSourceSettings} allowExcelExport={true}></PivotViewComponent></div>
    <div className="col-md-9"> <PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj1 = d } id='PivotView1' height={350} dataSourceSettings={dataSourceSettings1} allowExcelExport={true}></PivotViewComponent></div>
    <div className='col-lg-3 property-section'><ButtonComponent cssClass='e-primary' onClick={btnClick.bind(this)}>Export</ButtonComponent></div></div>);

  function btnClick(): void {
    let excelExportProperties: ExcelExportProperties = {
        multipleExport: { type: 'AppendToSheet', blankRows: 2 }
    };
    let firstGridExport: Promise<any> = pivotObj.grid.excelExport(excelExportProperties, true);
    firstGridExport.then((fData: any) => {
      pivotObj1.excelExport(excelExportProperties, false, fData);
    });
  }
};

export default App;
