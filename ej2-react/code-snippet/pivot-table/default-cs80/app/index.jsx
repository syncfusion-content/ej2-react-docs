{% raw %}
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { CalculatedField, PivotFieldListComponent, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pivotData } from './datasource';
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
    return (<div><div className="control-section">
    <PivotViewComponent id='PivotView' ref={d => pivotObj = d} enginePopulated={afterPivotPopulate.bind(this)} height={350} gridSettings={{ columnWidth: 140 }}></PivotViewComponent>
    <PivotFieldListComponent id='PivotFieldList' ref={d => fieldlistObj = d} enginePopulated={afterPopulate.bind(this)} dataSourceSettings={dataSourceSettings} target='#PivotFieldList' renderMode={"Popup"} allowCalculatedField={true}><Inject services={[CalculatedField]}/></PivotFieldListComponent></div>
    <div className='col-lg-3 property-section'><ButtonComponent cssClass='e-primary' onClick={btnClick.bind(this)}>Field List</ButtonComponent></div></div>);
    function btnClick() {
        fieldlistObj.dialogRenderer.fieldListDialog.show();
    }
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