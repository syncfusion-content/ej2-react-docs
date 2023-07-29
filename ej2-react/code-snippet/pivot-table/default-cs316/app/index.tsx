

import { FieldList, IDataOptions, IDataSet, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import { enableRipple } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pivotData } from './datasource';
enableRipple(false);

function App() {

  let dataSourceSettings: IDataOptions = {
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    columns: [{ name: 'Year' }, { name: 'Quarter' }],
    values: [{ name: 'Sold' }, { name: 'Amount' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    subTotalsPosition: 'Bottom'
  }
  let pivotObj: PivotViewComponent;

  function aggregateCell(args: any): void {
    if (args.fieldName === 'Sold') {
      args.value = secondsToHms(args.value);
    }
  }

  function secondsToHms(d: number) {
    d = Number(d);
    let h = Math.floor(d / 3600);
    let m = Math.floor((d % 3600) / 60);
    let s = Math.floor((d % 3600) % 60);
    return (
      ('0' + h).slice(-2) + ':' + ('0' + m).slice(-2) + ':' + ('0' + s).slice(-2)
    );
  }

  return (<PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} showFieldList={true}
    aggregateCellInfo={aggregateCell.bind(this)}>
    <Inject services={[FieldList]} />
  </PivotViewComponent>);

};

export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
