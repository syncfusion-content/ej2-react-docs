
import * as React from 'react';
import {
    PivotViewComponent, Inject, Toolbar
} from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import { pivotData } from './datasource';
function App() {
  let dataSourceSettings: DataSourceSettingsModel = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
  };
  let pivotObj: PivotViewComponent;
   let toolbarOptions: any = ['Grid','Chart'];
   let chartTypes: any = ['Column', 'Bar', 'Line', 'Area'];

  
    return (<PivotViewComponent id='PivotView' ref={ (d: PivotViewComponent) => pivotObj = d } dataSourceSettings={dataSourceSettings} width={'100%'} height={350} showToolbar={true} toolbar={toolbarOptions} displayOption={{ view: 'Both' }} chartTypes={chartTypes} ><Inject services={[ Toolbar]} /></PivotViewComponent>);
};
export default App;
