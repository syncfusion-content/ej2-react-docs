

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { IDataOptions, IDataSet, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pivotData } from './datasource';
import { PdfExportProperties } from '@syncfusion/ej2-grids';

function App() {

  let dataSourceSettings: IDataOptions = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    filters: [],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
  }
  let pivotObj: PivotViewComponent;
  
  return (<div><div className="col-md-9"> <PivotViewComponent  ref={d => pivotObj = d} id='PivotView' height={280} dataSourceSettings={dataSourceSettings} allowPdfExport={true}></PivotViewComponent></div>
    <div className='col-lg-3 property-section'><ButtonComponent cssClass='e-primary' onClick={btnClick.bind(this)}>Export</ButtonComponent></div></div>);

  function btnClick(): void {
    let pdfExportProperties: PdfExportProperties = {
      header: {
          fromTop: 0,
          height: 130,
          contents: [
              {
                  type: 'Text',
                  value: "Pivot Table",
                  position: { x: 0, y: 50 },
                  style: { textBrushColor: '#000000', fontSize: 13, dashStyle:'Solid',hAlign:'Center' }
              }
          ]
      },
      footer: {
          fromBottom: 160,
          height: 150,
          contents: [
              {
                  type: 'PageNumber',
                  pageNumberType: 'Arabic',
                  format: 'Page {$current} of {$total}',
                  position: { x: 0, y: 25 },
                  style: { textBrushColor: '#02007a', fontSize: 15 }
              }
          ]
      }
    };
    pivotObj.pdfExport(pdfExportProperties);
  }
};

export default App;
ReactDOM.render(<App />, document.getElementById('root'));



