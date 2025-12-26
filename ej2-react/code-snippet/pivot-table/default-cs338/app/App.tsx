import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { IDataSet, PivotViewComponent, ExcelExport, Inject, ExcelQueryCellInfoEventArgs } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import * as React from 'react';
import { pivotData } from './datasource';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';

function App() {
  let pivotObj: PivotViewComponent;

  let dataSourceSettings: DataSourceSettingsModel = {
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
  }

  let gridSettings: GridSettings = {
    excelQueryCellInfo: function (args: ExcelQueryCellInfoEventArgs): void {
      if (args.cell && (args.cell as any).actualText === 'Sold') {
        if ((args as any).value < 700) {
          args.style = {
            backColor: '#df3800',
            fontName: 'Biome',
            fontColor: '#FFFFFF',
            borders: { color: '#8B1E00', lineStyle: 'thin' }
          };
        } else {
          args.style = {
            backColor: '#00A45A',
            fontName: 'Nirmala UI',
            fontColor: '#FFFFFF',
            borders: { color: '#00663A', lineStyle: 'thin' }
          };
        }
      }
    }
  } as GridSettings;

  function btnClick(): void {
    pivotObj.excelExport();
  }

  return (
    <div>
      <div className="col-md-9"> <PivotViewComponent ref={(d: PivotViewComponent) => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings}
        allowExcelExport={true} gridSettings={gridSettings}>
        <Inject services={[ExcelExport]} /></PivotViewComponent>
      </div>
      <div className='col-lg-3 property-section'>
        <ButtonComponent cssClass='e-primary' onClick={btnClick.bind(this)}>Export</ButtonComponent>
      </div>
    </div>);

};

export default App;
