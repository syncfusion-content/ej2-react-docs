import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { IDataSet, PivotViewComponent, PDFExport, Inject, PdfExportProperties } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import * as React from 'react';
import { salesData } from './datasource';

function App() {

  let dataSourceSettings: DataSourceSettingsModel = {
    dataSource: salesData as IDataSet[],
    expandAll: false,
    rows: [{ name: 'Region', caption: 'Region' }],
    columns: [{ name: 'Product', caption: 'Product' }],
    values: [
      { name: 'Sales', caption: 'Q4 Sales' },
      { name: 'ProfitMargin', caption: 'Profit Margin' }
    ],
    formatSettings: [
      { name: 'Sales', format: 'C0' },
      { name: 'ProfitMargin', format: '0\'%\'' }
    ],
    filterSettings: [{ name: 'Product', items: ['Laptop'], type: 'Include' }]
  }
  let pivotObj: PivotViewComponent;
  let dataSourceSettings1: DataSourceSettingsModel = {
    dataSource: salesData as IDataSet[],
    expandAll: false,
    rows: [{ name: 'Region', caption: 'Region' }],
    columns: [{ name: 'Product', caption: 'Product' }],
    values: [
      { name: 'Units', caption: 'Units Sold' },
      { name: 'Sales', caption: 'Q4 Sales' }
    ],
    formatSettings: [
      { name: 'ProfitMargin', format: '0\'%\'' },
      { name: 'Sales', format: 'C0' }
    ],
    filterSettings: [{ name: 'Product', items: ['Smartphone'], type: 'Include' }]
  }
  let pivotObj1: PivotViewComponent;

  return (<div><div className="col-md-9"> <PivotViewComponent ref={(d: PivotViewComponent) => pivotObj = d} id='PivotTable1' height={280} dataSourceSettings={dataSourceSettings} allowPdfExport={true}><Inject services={[PDFExport]} /></PivotViewComponent></div>
    <div className="col-md-9" style={{ marginTop: '20px' }}> <PivotViewComponent ref={(d: PivotViewComponent) => pivotObj1 = d} id='PivotTable2' height={280} dataSourceSettings={dataSourceSettings1} allowPdfExport={true}><Inject services={[PDFExport]} /></PivotViewComponent></div>
    <div className='col-lg-3 property-section'><ButtonComponent cssClass='e-primary' onClick={btnClick.bind(this)}>Export</ButtonComponent></div></div>);

  function btnClick(): void {
    const pdfExportProperties: PdfExportProperties = {
      multipleExport: { type: 'AppendToPage', blankSpace: 100 },
      pivotTableIds: ['PivotTable1', 'PivotTable2']
    };
    pivotObj.pdfExport(pdfExportProperties, true);
  }
};

export default App;
