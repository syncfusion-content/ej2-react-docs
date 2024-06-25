

import { CalculatedField, FieldList, IDataOptions, IDataSet, Inject, PivotViewComponent, PivotActionFailureEventArgs } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pivotData } from './datasource';

function App() {

  let dataSourceSettings: IDataOptions = {
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
    filters: [],
    calculatedFieldSettings: [{ name: 'Total', formula: '"Sum(Amount)"+"Sum(Sold)"' }]
  }
  let pivotObj: PivotViewComponent;
  function actionFailure(args: PivotActionFailureEventArgs): void {
    if (args.actionName == 'Open calculated field dialog') {
        // Triggers when the current UI action fails to achieve the desired result.
    }
  }

  return (<PivotViewComponent  ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} actionFailure={actionFailure.bind(this)}  allowCalculatedField={true} showFieldList={true} ><Inject services={[CalculatedField, FieldList]} /></PivotViewComponent>);
};

export default App;
ReactDOM.render(<App />, document.getElementById('root'));



