{% raw %}
import { PivotViewComponent, Inject, PivotChart } from '@syncfusion/ej2-react-pivotview';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pivotData } from './datasource';
function App() {
    let displayOption = {
        view: 'Chart'
    };
    let chartSettings = {
        chartSeries: { type: 'Pie' }
    };
    let dataSourceSettings = {
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        dataSource: pivotData,
        expandAll: false,
        filters: [],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
    };
    let fields = { text: 'text', value: 'value' };
    let chartTypes = [
        { 'value': 'Pie', 'text': 'Pie' },
        { 'value': 'Doughnut', 'text': 'Doughnut' },
        { 'value': 'Funnel', 'text': 'Funnel' },
        { 'value': 'Pyramid', 'text': 'Pyramid' },
    ];
    let pivotObj;
    function ddlOnChange(args) {
        pivotObj.chartSettings.chartSeries.type = args.value;
    }
    return (<div><div className="container" style={{ height: '500px' }}><div id="dropdown-control" style={{ marginBottom: '5px' }}><table style={{ width: '350px', marginLeft: '50px' }}><tbody><tr style={{ height: '50px' }}><td><div><b>Accumulation Chart:</b></div></td><td><div><DropDownListComponent floatLabelType={'Auto'} fields={fields} change={ddlOnChange.bind(this)} id="charttypes" index={0} enabled={true} dataSource={chartTypes}/></div></td></tr></tbody></table></div><div><PivotViewComponent height={350} ref={d => pivotObj = d} id='PivotView' chartSettings={chartSettings} displayOption={displayOption} dataSourceSettings={dataSourceSettings}><Inject services={[PivotChart]}/></PivotViewComponent></div></div></div>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
{% endraw %}