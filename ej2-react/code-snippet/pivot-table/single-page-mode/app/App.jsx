import { PivotViewComponent, Inject } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function data(count) {
    let result = [];
    let dt = 0;
    for (let i = 1; i < (count + 1); i++) {
        dt++;
        let round;
        let toString = i.toString();
        if (toString.length === 1) {
            round = '0000' + (i);
        }
        else if (toString.length === 2) {
            round = '000' + i;
        }
        else if (toString.length === 3) {
            round = '00' + i;
        }
        else if (toString.length === 4) {
            round = '0' + i;
        }
        else {
            round = toString;
        }
        result.push({
            ProductID: 'PRO-' + round,
            Year: "FY " + (dt + 2013),
            Price: Math.round(Math.random() * 5000) + 5000,
            Sold: Math.round(Math.random() * 80) + 10,
        });
        if (dt / 4 == 1) {
            dt = 0;
        }
    }
    return result;
};

function App() {
    var pivotObj;
    var virtualScrollSettings = {
        allowSinglePage: true
    };
    var dataSourceSettings = {
        dataSource: data(1000),
        enableSorting: false,
        expandAll: true,
        formatSettings: [{ name: 'Price', format: 'C0' }],
        rows: [{ name: 'ProductID' }],
        columns: [{ name: 'Year' }],
        values: [{ name: 'Price', caption: 'Unit Price' }, { name: 'Sold', caption: 'Unit Sold' }]
    };
    return (
        <PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings}
            virtualScrollSettings={virtualScrollSettings}><Inject services={[GroupingBar]}/>
        </PivotViewComponent>
    );
};
export default App;

ReactDOM.render(<App />, document.getElementById('root'));