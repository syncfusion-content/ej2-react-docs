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
    queryCellInfo: function (args: any) {
      const colIndex = Number(args.cell.getAttribute('aria-colindex'));
      const currentCell = args.data[colIndex - 1];
      if (currentCell.formattedText === '**' &&
        currentCell.actualText === 'Quantity' &&
        ['Canada.New Mexico', 'United States.British Columbia'].includes(currentCell.rowHeaders)) {
        args.rowSpan = 2;
        args.colSpan = 2;
      }
    },
    pdfQueryCellInfo: function (args: any) {
      if (args.value === '**' &&
        args.data.actualText === 'Quantity' &&
        ['Canada.New Mexico', 'United States.British Columbia'].includes(args.data.rowHeaders)) {
        args.cell.rowSpan = 2;
        args.cell.colSpan = 2;
      }
    }
  } as GridSettings;

  let dataSourceSettings: DataSourceSettingsModel = {
    dataSource: pivotData as IDataSet[],
    expandAll: true,
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    columns: [{ name: 'Date', showNoDataItems: true }],
    values: [{ name: 'Quantity' }, { name: 'Amount', caption: 'Sold Amount' }],
    rows: [{ name: 'Country', showNoDataItems: true }, { name: 'State', showNoDataItems: true }],
    filters: [],
    emptyCellsTextContent: '**'
  }

  function btnClick(): void {
    pivotObj.pdfExport();
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
