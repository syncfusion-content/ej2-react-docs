import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { IDataSet, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import * as React from 'react';
import { pivotData, base64AlgeriaFont } from './datasource';
import { PdfExportProperties } from '@syncfusion/ej2-grids';
import { PdfTrueTypeFont } from '@syncfusion/ej2-pdf-export';

function App() {

  let dataSourceSettings: DataSourceSettingsModel = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    filters: [],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
  }
  let pivotObj: PivotViewComponent;
  
  return (<div><div className="col-md-9"> <PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={280} dataSourceSettings={dataSourceSettings} allowPdfExport={true}></PivotViewComponent></div>
    <div className='col-lg-3 property-section'><ButtonComponent cssClass='e-primary' onClick={btnClick.bind(this)}>Export</ButtonComponent></div></div>);

  function btnClick(): void {
    let pdfExportProperties: PdfExportProperties = {
               theme: { 
                header: {font:  new PdfTrueTypeFont(base64AlgeriaFont, 11) }, 
                caption: { font: new PdfTrueTypeFont(base64AlgeriaFont, 9) }, 
                record: { font: new PdfTrueTypeFont(base64AlgeriaFont, 10) } 
                } 
            };
    pivotObj.pdfExport(pdfExportProperties);
  }
};

export default App;
