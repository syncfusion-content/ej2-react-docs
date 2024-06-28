import { GroupingBar, FieldList, IDataOptions, IDataSet, Inject, PivotViewComponent, PivotActionBeginEventArgs } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
import './App.css';

function App() {

  let dataSourceSettings: IDataOptions = {
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
    filters: [],
  }
  let pivotObj: PivotViewComponent;

  return (<PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} dataSourceSettings={dataSourceSettings} actionBegin={actionBegin.bind(this)} showFieldList={true} showGroupingBar={true}><Inject services={[FieldList, GroupingBar]} /></PivotViewComponent>);
  function actionBegin(args: PivotActionBeginEventArgs): void {
    if (args.actionName == 'Sort field' || args.actionName == 'Sort value') {
      args.cancel = true;
    }
  }
};

export default App;
