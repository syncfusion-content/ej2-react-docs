import { FieldList, IDataOptions, IDataSet, Inject, PivotViewComponent, PivotActionFailureEventArgs } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';

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

  function actionFailure(args: PivotActionFailureEventArgs): void {
      if (args.actionName == 'Drill down' || args.actionName == 'Drill up') {
           // Triggers when the current UI action fails to achieve the desired result.
      }
  }
    return (<PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} dataSourceSettings={dataSourceSettings} actionFailure={actionFailure.bind(this)} showFieldList={true} ><Inject services={[FieldList]} /></PivotViewComponent>);
};

export default App;
