import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { IDataSet, PivotViewComponent, PDFExport, Inject } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import * as React from 'react';
import { pivotData } from './datasource';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';


function App() {
  let pivotObj: PivotViewComponent;

  let gridSettings: GridSettings = {
    columnWidth: 140,
  } as GridSettings;

  let dataSourceSettings: DataSourceSettingsModel = {
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    drilledMembers: [{ name: 'Year', items: ['FY 2015'] }],
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    filters: []
  }

  function btnClick(): void {
    let pdfExportProperties = {
      allowHorizontalOverflow: true
    };
    pivotObj.pdfExport(pdfExportProperties);
  }

  return (
    <div>
      <div className="col-md-9"> <PivotViewComponent ref={(d: PivotViewComponent) => pivotObj = d} id='PivotView' gridSettings={gridSettings} height={350} dataSourceSettings={dataSourceSettings} allowPdfExport={true}>
        <Inject services={[PDFExport]} /></PivotViewComponent>
      </div>
      <div className='col-lg-3 property-section'>
        <ButtonComponent cssClass='e-primary' onClick={btnClick.bind(this)}>Export</ButtonComponent>
      </div>
    </div>);

};

export default App;
