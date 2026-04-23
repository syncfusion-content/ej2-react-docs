import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { IDataSet, PivotViewComponent, PDFExport, Inject } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import * as React from 'react';
import { Group_Data } from './datasource';

function App() {
  let pivotObj: PivotViewComponent;

  let dataSourceSettings: DataSourceSettingsModel = {
    dataSource: Group_Data as IDataSet[],
    expandAll: false,
    enableSorting: true,
    formatSettings: [{ name: 'Date', type: 'date', format: "EEE, MMM d, ''yy" }],
    rows: [{ name: 'Date' }],
    columns: [{ name: 'Product_Categories', caption: 'Product Categories' }],
    values: [{ name: 'Sold', caption: 'Unit Sold' },
    { name: 'Amount', caption: 'Sold Amount' }],
  }

  function btnClick(): void {
    pivotObj.pdfExport();
  }

  return (
    <div>
      <div className="col-md-9"> <PivotViewComponent ref={(d: PivotViewComponent) => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} allowPdfExport={true}>
        <Inject services={[PDFExport]} /></PivotViewComponent>
      </div>
      <div className='col-lg-3 property-section'>
        <ButtonComponent cssClass='e-primary' onClick={btnClick.bind(this)}>Export</ButtonComponent>
      </div>
    </div>);

};

export default App;
