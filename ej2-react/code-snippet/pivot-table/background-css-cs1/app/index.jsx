import { CalculatedField, FieldList, Inject, PivotViewComponent, GroupingBar } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pivotData } from './datasource';
const SAMPLE_CSS = `
  //Value Cells
    .e-pivotview .e-summary:not(.e-gtot) {
         background-color: pink !important;
    }

    //Columns Headers
    /*.e-pivotview .e-headercell {
      background-color: thistle !important;
    }

    //Rows Headers
    .e-pivotview .e-rowsheader {
      background-color: skyblue !important;
    }*/

    //Summary Cells
    /* .e-pivotview .e-gtot  {
    background-color: greenYellow !important;
  }*/`;
function App() {
    let dataSourceSettings = {
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        dataSource: pivotData,
        filters: [],
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
    };
    let pivotObj;
    return (<div>
            <style>{SAMPLE_CSS}</style>
            <PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} allowCalculatedField={true} showFieldList={true} showGroupingBar={true}><Inject services={[CalculatedField, FieldList, GroupingBar]}/> </PivotViewComponent>
        </div>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
