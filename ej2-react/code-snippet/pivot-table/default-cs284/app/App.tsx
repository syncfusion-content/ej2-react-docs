import { GroupingBar, FieldList, IDataOptions, IDataSet, Inject, PivotViewComponent, PivotActionCompleteEventArgs } from '@syncfusion/ej2-react-pivotview';
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

  return (<PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} dataSourceSettings={dataSourceSettings} actionComplete={actionComplete.bind(this)}  showFieldList={true} showGroupingBar={true}><Inject services={[FieldList, GroupingBar]} /></PivotViewComponent>);
  
  function actionComplete(args: PivotActionCompleteEventArgs): void {
    if (args.actionName == 'Field sorted' || args.actionName == 'Value sorted') {
      // Triggers when the sort action is completed.
    }
  }
};

export default App;
