import { IDataSet, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { pivotData } from './datasource';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';

function App() {
  let gridSettings: GridSettings = {
    columnWidth: 140,
    excelHeaderQueryCellInfo: excelHeaderQueryCellInfo.bind(this)
  } as GridSettings;

  let dataSourceSettings: DataSourceSettingsModel = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    filters: [],
    drilledMembers: [{ name: 'Country', items: ['France'] }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
  }
  let pivotObj: PivotViewComponent;
  function excelHeaderQueryCellInfo(args: ExcelHeaderQueryCellInfoEventArgs): void {
    //triggers every time for header cell while rendering
  }
  
  return (<div><div className="col-md-9"> <PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} gridSettings={gridSettings} dataSourceSettings={dataSourceSettings} allowExcelExport={true}></PivotViewComponent></div>
    <div className='col-lg-3 property-section'><ButtonComponent cssClass='e-primary' onClick={btnClick.bind(this)}>Export</ButtonComponent></div></div>);
  
  function btnClick(): void {
    pivotObj.excelExport();
  }
};

export default App;



