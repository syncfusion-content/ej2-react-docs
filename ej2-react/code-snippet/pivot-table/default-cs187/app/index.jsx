import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { CalculatedField, Inject, PivotViewComponent, NumberFormatting } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pivotData } from './datasource';
function App() {
    let dataSourceSettings = {
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        dataSource: pivotData,
        expandAll: false,
        filters: [],
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }, { name: 'Total', caption: 'Total Units', type: 'CalculatedField' }],
        calculatedFieldSettings: [{ name: 'Total', formula: '"Sum(Amount)"+"Sum(Sold)"' }]
    };
    let pivotObj;
    return (<div><div className="col-md-9"> <PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} allowCalculatedField={true} allowNumberFormatting={true}><Inject services={[CalculatedField, NumberFormatting]}/> </PivotViewComponent></div>
    <div className='col-lg-3 property-section'><ButtonComponent cssClass='e-primary' onClick={btnClick.bind(this)}>Number Formatting</ButtonComponent></div></div>);
    function btnClick() {
        pivotObj.numberFormattingModule.showNumberFormattingDialog();
    }
}
;
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
