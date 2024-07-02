import { FieldList, IDataOptions, IDataSet, Inject, PivotViewComponent, GroupingBar } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';

function App() {

  let dataSourceSettings: IDataOptions = {
    columns: [{ name: 'Year', caption: 'Production Year' }],
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    allowLabelFilter: true,
    allowValueFilter: true,
    values: [{ name: 'Sold', caption: 'Units Sold' }],
    rows: [{ name: 'Country' }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    filters: [],
    fieldMapping: [
      { name: 'Quarter', groupName: 'Product category' },
      { name: 'Products', groupName: 'Product category' },
      { name: 'Amount', groupName: 'Product category', caption: 'Sold Amount' },
    ]
  }
  let pivotObj: PivotViewComponent;
    return (<PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} dataSourceSettings={dataSourceSettings} showFieldList={true} showGroupingBar={true}><Inject services={[FieldList, GroupingBar]} /></PivotViewComponent>);
};

export default App;
