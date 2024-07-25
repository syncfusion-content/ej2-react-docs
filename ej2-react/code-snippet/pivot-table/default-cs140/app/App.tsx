import { GroupingBar, IDataOptions, IDataSet, Inject, PivotViewComponent, FieldDropEventArgs } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
import './App.css';

function App() {

  let dataSourceSettings: IDataOptions = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    filters: [],
    drilledMembers: [{ name: 'Country', items: ['France'] }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
  }
  let pivotObj: PivotViewComponent;
    return (<PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} dataSourceSettings={dataSourceSettings} fieldDrop={fieldDrop.bind(this)} showGroupingBar={true}><Inject services={[GroupingBar]} /></PivotViewComponent>);

  function fieldDrop(args: FieldDropEventArgs): void  {
    if(args.dropAxis === 'values') {
      args.cancel = true;
    }
  }
};

export default App;
