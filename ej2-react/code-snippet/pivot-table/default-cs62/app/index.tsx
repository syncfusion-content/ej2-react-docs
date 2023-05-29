

import { IDataOptions, CellEditSettings, IDataSet, Inject, PivotViewComponent, PivotActionBeginEventArgs } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pivotData } from './datasource';

function App() {

  let editSettings: CellEditSettings = {
    allowAdding: true, allowDeleting: true, allowEditing: true, mode: 'Dialog'
  } as CellEditSettings

  let dataSourceSettings: IDataOptions = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    filters: [],
    drilledMembers: [{ name: 'Country', items: ['France'] }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
  }
  let pivotObj: PivotViewComponent;
  
  return (<PivotViewComponent  ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} actionBegin={actionBegin.bind(this)} editSettings={editSettings} ></PivotViewComponent>);

  function actionBegin(args: PivotActionBeginEventArgs): void {
        if (args.actionName == 'Add new record' || args.actionName == 'Save edited records') {
            args.cancel = true;
        }
    }
};

export default App;
ReactDOM.render(<App />, document.getElementById('sample'));



