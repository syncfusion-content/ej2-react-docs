import { GroupingBar, Grouping, IDataOptions, IDataSet, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { Group_Data } from './datasource';
import './App.css';

function App() {

  let dataSourceSettings: IDataOptions = {
    dataSource: Group_Data as IDataSet[],
    expandAll: false,
    enableSorting: true,
    formatSettings: [{ name: 'Amount', format: 'C' }, { name: 'Date', type: 'date', format: 'dd/MM/yyyy-hh:mm a' }],
    rows: [{ name: 'Date' }],
    columns: [{ name: 'Product_Categories', caption: 'Product Categories' }],
    values: [{ name: 'Sold', caption: 'Unit Sold' },
    { name: 'Amount', caption: 'Sold Amount' }],
    filters: [{ name: 'Products' }, { name: 'Product_ID', caption: 'Product ID' }]
  }
  let pivotObj: PivotViewComponent;
  
  return (<PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} dataSourceSettings={dataSourceSettings} showGroupingBar={true} allowGrouping={true}><Inject services={[GroupingBar, Grouping]}/></PivotViewComponent>);
};

export default App;



