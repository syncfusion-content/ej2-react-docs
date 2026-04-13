import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { IDataSet, PivotViewComponent, VirtualScroll, Inject, BeforeExportEventArgs, PDFExport } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import { PdfExportProperties } from '@syncfusion/ej2-grids';
import * as React from 'react';
import { pivotData } from './datasource';

function App() {

  let dataSourceSettings: DataSourceSettingsModel = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    filters: [],
    drilledMembers: [{ name: 'Country', items: ['France'] }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
  }
  let pivotObj: PivotViewComponent;

  return (<div><div className="col-md-9"> <PivotViewComponent ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} allowPdfExport={true} enableVirtualization={true}
    dataSourceSettings={dataSourceSettings} beforeExport={beforeExport.bind(this)}><Inject services={[VirtualScroll, PDFExport]} /></PivotViewComponent></div>
    <div className='col-lg-3 property-section'><ButtonComponent cssClass='e-primary' onClick={btnClick.bind(this)}>Export</ButtonComponent></div></div>);

  function beforeExport(args: BeforeExportEventArgs): void {
      args.columnSize = 6;
  }
  function btnClick(): void {
    let pdfExportProperties: PdfExportProperties = {
      fileName: 'pdfexport'
    };
    pivotObj.pdfExport(pdfExportProperties, false, null, false, true);
  }
};

export default App;



