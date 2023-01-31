

import { IDataOptions, IDataSet, PivotViewComponent, VirtualScroll, GroupingBar, Inject } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
let date1: number;
let date2: number;
function data(count: number) {
    let result: Object[] = [];
    let dt: number = 0;
    for (let i: number = 1; i < (count + 1); i++) {
        dt++;
        let round: string;
        let toString: string = i.toString();
        if (toString.length === 1) {
            round = '0000' + (i);
        }
        else if (toString.length === 2) {
            round = '000' + i;
        }
        else if (toString.length === 3) {
            round = '00' + i;
        } else if (toString.length === 4) {
            round = '0' + i;
        } else {
            round = toString;
        }
        result.push({
            ProductID: 'PRO-' + round,
            Year: "FY " + (dt + 2013),
            Sold: Math.round(Math.random() * 80) + 10,
        });
        if (dt / 4 == 1) {
            dt = 0;
        }
    }
    return result;
};
function App() {
      let dataSource: IDataOptions = {
        data: data(1000),
        enableSorting: false,
        rows: [{ name: 'ProductID' }],
        columns: [{ name: 'Year' }],
        values: [{ name: 'Sold', caption: 'Unit Sold' }]
  }
  let pivotGridObj: PivotViewComponent;
  
    return (<PivotViewComponent  ref={d => pivotObj = d} id='PivotView' height={280} width={735} enableVirtualization={true} showGroupingBar={true} maxNodeLimitInEditor={100} dataSource={dataSource}><Inject services={[VirtualScroll,GroupingBar]}/></PivotViewComponent>);
};

export default App;
ReactDOM.render(<App />, document.getElementById('sample'));



