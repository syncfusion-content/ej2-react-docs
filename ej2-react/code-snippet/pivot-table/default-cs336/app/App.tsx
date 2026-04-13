import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { IDataSet, PivotViewComponent, ExcelExport, Inject, ExcelExportProperties } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import * as React from 'react';
import { pivotData } from './datasource';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';

function App() {
  let pivotObj: PivotViewComponent;

  let dataSourceSettings: DataSourceSettingsModel = {
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    enableSorting: true,
    columns: [{ name: 'Year' }, { name: 'Quarter' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
    rows: [{ name: 'Country' }, { name: 'Products' }]
  }

  let gridSettings: GridSettings = {
    columnRender: function (args: any) {
      // Specific column(s) can be hidden by checking their level name and setting its visible property accordingly.
      for (let i = 1; i < args.columns.length; i++) {
        if (args.stackedColumns[i].customAttributes &&
          args.stackedColumns[i].customAttributes.cell.valueSort.levelName === 'FY 2016.Units Sold') {
          args.stackedColumns[i].visible = false;
        }
      }
    }
  } as GridSettings;

  function btnClick(): void {
    let excelExportProperties: ExcelExportProperties = {
      includeHiddenColumn: false
    };
    pivotObj.excelExport(excelExportProperties);
  }

  return (
    <div>
      <div className="col-md-9"> <PivotViewComponent ref={(d: PivotViewComponent) => pivotObj = d} id='PivotView' height={350}
        dataSourceSettings={dataSourceSettings} allowExcelExport={true} gridSettings={gridSettings}>
        <Inject services={[ExcelExport]} /></PivotViewComponent>
      </div>
      <div className='col-lg-3 property-section'>
        <ButtonComponent cssClass='e-primary' onClick={btnClick.bind(this)}>Export</ButtonComponent>
      </div>
    </div>);
};

export default App;
