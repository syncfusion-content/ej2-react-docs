import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { IDataOptions, IDataSet, PivotViewComponent, VirtualScroll, Inject, ExportCompleteEventArgs, ExcelExport } from '@syncfusion/ej2-react-pivotview';
import { ExcelExportProperties } from '@syncfusion/ej2-grids';
import * as React from 'react';
import { pivotData } from './datasource';

function App() {

  let dataSourceSettings: IDataOptions = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    expandAll: true,
    filters: [],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    values: [{ name: 'Country' }, { name: 'Products' }],
    rows: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
  }
  let pivotObj: PivotViewComponent;
  
    return (<div><div className="col-md-9"> <PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} allowExcelExport={true} enableVirtualization={true} dataSourceSettings={dataSourceSettings} exportComplete={exportComplete.bind(this)}><Inject services={[VirtualScroll, ExcelExport]}/></PivotViewComponent></div>
    <div className='col-lg-3 property-section'><ButtonComponent cssClass='e-primary' onClick={btnClick.bind(this)}>Export</ButtonComponent></div></div>);
  function exportComplete(args: ExportCompleteEventArgs): void {
    args.promise.then((e: { blobData: Blob }) => {
      console.log(e.blobData);
    });
  }

  function btnClick(): void {
    let excelExportProperties: ExcelExportProperties = {
      fileName: 'excelexport.xlsx'
    };
    pivotObj.excelExport(excelExportProperties, false, null, true);
  }
};

export default App;



