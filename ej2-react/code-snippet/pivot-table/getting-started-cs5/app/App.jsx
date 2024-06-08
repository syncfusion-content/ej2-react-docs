import * as React from 'react';
import * as ReactDOM from "react-dom";
import { CalculatedField, FieldList, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import { pivotData } from './datasource';
function App() {
    const dataSourceSettings = {
        columns: [{ name: 'Year', caption: 'Production Year' }],
        dataSource: pivotData,
        expandAll: false,
        filters: [{ name: 'Quarter' }],
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
    };
    let pivotObj;
    return (<PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} allowCalculatedField={true} showFieldList={true}><Inject services={[CalculatedField, FieldList]}/>
    </PivotViewComponent>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("sample"));
