import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { IDataSet, PivotViewComponent, Inject, PDFExport } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import { PdfExportProperties } from '@syncfusion/ej2-grids';
import * as React from 'react';
import { pivotData } from './datasource';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';

function App() {
  let gridSettings: GridSettings = {
    columnWidth: 140,
    pdfHeaderQueryCellInfo: pdfHeaderQueryCellInfo.bind(this)
  } as GridSettings;

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

  return (<div><div className="col-md-9"> <PivotViewComponent ref={(d: PivotViewComponent) => pivotObj = d} id='PivotView' height={350} gridSettings={gridSettings} allowPdfExport={true} enableVirtualization={true}
    dataSourceSettings={dataSourceSettings}><Inject services={[PDFExport]} /></PivotViewComponent></div>
    <div className='col-lg-3 property-section'><ButtonComponent cssClass='e-primary' onClick={btnClick.bind(this)}>Export</ButtonComponent></div></div>);

  function pdfHeaderQueryCellInfo(args: any): void {
    if (args.gridCell && args.gridCell.valueSort && args.gridCell.valueSort.levelName === 'FY 2015.Units Sold'
      && args.cell && args.cell.row && args.cell.row.pdfGrid && args.cell.row.pdfGrid.gridColumns
      && args.cell.row.pdfGrid.gridColumns.columns[args.gridCell.colIndex]) {
      args.cell.row.pdfGrid.gridColumns.columns[args.gridCell.colIndex].width = 250;
    }
  }
  function btnClick(): void {
    let pdfExportProperties: PdfExportProperties = {
      fileName: 'pdfexport'
    };
    pivotObj.pdfExport(pdfExportProperties, false, null, false, true);
  }
};

export default App;



