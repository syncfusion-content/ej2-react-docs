import * as React from 'react';
import {
    PivotViewComponent, Toolbar, Inject
} from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import { pivotData } from './datasource';
function App() {
  let dataSourceSettings: DataSourceSettingsModel = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    filters: [],
    drilledMembers: [{ name: 'Country', items: ['France'] }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
  };
  let pivotObj: PivotViewComponent;
   let toolbarOptions: any = ['SubTotal', 'GrandTotal'];
  
  return (<PivotViewComponent id='PivotView' ref={ (d: PivotViewComponent) => pivotObj = d } dataSourceSettings={dataSourceSettings} width={'100%'} height={350} gridSettings={{ columnWidth: 140 }} showToolbar={true} displayOption={{ view: 'Both' }} toolbar={toolbarOptions}><Inject services={[Toolbar]} /></PivotViewComponent>);
};
export default App;
