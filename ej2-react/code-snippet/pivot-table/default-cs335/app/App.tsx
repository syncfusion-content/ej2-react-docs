import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { IDataSet, PivotViewComponent, ExcelExport, Inject, BeforeExportEventArgs, IAxisSet } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import * as React from 'react';
import { pivotData } from './datasource';

function App() {
  let pivotObj: PivotViewComponent;

  let dataSourceSettings: DataSourceSettingsModel = {
    dataSource: pivotData as IDataSet[],
    columns: [{ name: 'Year' }, { name: 'Quarter' }],
    values: [{ name: 'Sold' }],
    rows: [{ name: 'Country' }, { name: 'Products' }]
  }

  function beforeExport(args: BeforeExportEventArgs): void {
    for (let i: number = 0; i < args.dataCollections.length; i++) {
      const pivotValue: IAxisSet[] = args.dataCollections[i];
      for (let j: number = 0; j < pivotValue.length; j++) {
        const row: any = pivotValue[j];
        pivotValue[j] = row.filter((item: any) => {
          return item !== null && (item.axis !== 'row');
        });
      }
    }
  }

  function btnClick(): void {
    pivotObj.excelExport();
  }

  return (
    <div>
      <div className="col-md-9"> <PivotViewComponent ref={(d: PivotViewComponent) => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} allowExcelExport={true} beforeExport={beforeExport.bind(this)}>
        <Inject services={[ExcelExport]} /></PivotViewComponent>
      </div>
      <div className='col-lg-3 property-section'>
        <ButtonComponent cssClass='e-primary' onClick={btnClick.bind(this)}>Export</ButtonComponent>
      </div>
    </div>);

};

export default App;
