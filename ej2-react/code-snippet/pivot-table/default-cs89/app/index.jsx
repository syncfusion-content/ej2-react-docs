{% raw %}
import { CalculatedField, PivotFieldListComponent, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pivotData } from './datasource';
const SAMPLE_CSS = `
.e-pivotview {
    width: 58%;
    height: 100%;
    float: left;
}
.e-pivotfieldlist {
    width: 42%;
    height: 100%;
    float: right;
}
.e-pivotfieldlist .e-static {
    width: 100% !important;
}`;
function App() {
    React.useEffect(() => {
        renderComplete();
    }, []);
    let dataSourceSettings = {
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        dataSource: pivotData,
        expandAll: false,
        filters: [],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
    };
    let pivotObj;
    let fieldlistObj;
    return (<div className="control-section">
    <style>{SAMPLE_CSS}</style>
    <PivotViewComponent id='PivotViewFieldList' ref={d => pivotObj = d} enginePopulated={afterPivotPopulate.bind(this)} width={'99%'} height={'530'} gridSettings={{ columnWidth: 140 }}></PivotViewComponent>
    <PivotFieldListComponent id='PivotFieldList' ref={d => fieldlistObj = d} enginePopulated={afterPopulate.bind(this)} dataSourceSettings={dataSourceSettings} renderMode={"Fixed"} allowCalculatedField={true}><Inject services={[CalculatedField]}/></PivotFieldListComponent></div>);
    function afterPopulate() {
        if (fieldlistObj && pivotObj) {
            fieldlistObj.updateView(pivotObj);
        }
    }
    function afterPivotPopulate() {
        if (fieldlistObj && pivotObj) {
            fieldlistObj.update(pivotObj);
        }
    }
    function renderComplete() {
        fieldlistObj.updateView(pivotObj);
    }
}
;
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
{% endraw %}