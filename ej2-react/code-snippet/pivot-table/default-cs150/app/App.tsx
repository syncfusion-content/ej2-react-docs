import { GroupingBar, Grouping, IDataSet, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import * as React from 'react';
import { Group_Data } from './datasource';

function App() {

  let dataSourceSettings: DataSourceSettingsModel = {
    dataSource: Group_Data as IDataSet[],
    expandAll: false,
    enableSorting: true,
    formatSettings: [{ name: 'Amount', format: 'C' }, { name: 'Date', type: 'date', format: 'dd/MM/yyyy-hh:mm a' }],
    rows: [{ name: 'Date' }],
    columns: [{ name: 'Product_Categories', caption: 'Product Categories' }],
    values: [{ name: 'Sold', caption: 'Unit Sold' },
    { name: 'Amount', caption: 'Sold Amount' }],
    filters: [{ name: 'Products' }, { name: 'Product_ID', caption: 'Product ID' }],
    groupSettings: [{ name: 'Date', type: 'Date', groupInterval: ['Years', 'Months'], startingAt: new Date(2015, 6, 1), endingAt: new Date(2017, 6, 31) }]
  }
  let pivotObj: PivotViewComponent;
  
  return (<PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} dataSourceSettings={dataSourceSettings} showGroupingBar={true} allowGrouping={true}><Inject services={[GroupingBar, Grouping]}/></PivotViewComponent>);
};

export default App;



