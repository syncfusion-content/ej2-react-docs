import { GroupingBar, Grouping, IDataSet, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import * as React from 'react';
import { Group_Data } from './datasource';

function App() {

  let dataSourceSettings: DataSourceSettingsModel = {
    dataSource: Group_Data as IDataSet[],
    expandAll: false,
    enableSorting: true,
    formatSettings: [{ name: 'Amount', format: 'C' }, { name: 'Product_ID', format: 'N0' }],
    rows: [{ name: 'Product_ID', caption: 'Product ID' }],
    columns: [{ name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Unit Sold' },
    { name: 'Amount', caption: 'Sold Amount' }],
    filters: []
  }
  let pivotObj: PivotViewComponent;
  
  return (<PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} dataSourceSettings={dataSourceSettings} showGroupingBar={true} allowGrouping={true}><Inject services={[GroupingBar, Grouping]}/></PivotViewComponent>);
};

export default App;



