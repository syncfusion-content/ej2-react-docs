import { GroupingBar, Grouping, IDataSet, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import * as React from 'react';
import { Group_Data } from './datasource';

function App() {

  let dataSourceSettings: DataSourceSettingsModel = {
    dataSource: Group_Data as IDataSet[],
    expandAll: false,
    enableSorting: true,
    columns: [{ name: 'Product_ID', caption: 'Product ID' }],
    rows: [{ name: 'Date', caption: 'Date' }],
    values: [
      { name: 'Sold', caption: 'Unit Sold' },
      { name: 'Amount', caption: 'Sold Amount' },
    ],
    formatSettings: [{ name: 'Amount', format: 'C' }],
    groupSettings: [
      { name: 'Product_ID', type: 'Number', rangeInterval: 3 },
      {
        name: 'Date',
        type: 'Date',
        groupInterval: ['Years', 'Months'],
        startingAt: new Date(2015, 6, 1),
        endingAt: new Date(2017, 6, 31),
      },
    ],
    filters: [],
  }
  let pivotObj: PivotViewComponent;
  
  return (<PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} dataSourceSettings={dataSourceSettings} showGroupingBar={true} allowGrouping={true}><Inject services={[GroupingBar, Grouping]}/></PivotViewComponent>);
};

export default App;



