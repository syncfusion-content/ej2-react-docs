import { FieldList, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
import './App.css';

function App() {
    let dataSourceSettings = {
        dataSource: pivotData,
    };
    let pivotObj;
    return (<PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} dataBound={dataBound.bind(this)} showFieldList={true}><Inject services={[FieldList]}/></PivotViewComponent>);
    function dataBound() {
        if (pivotObj && pivotObj.dataSourceSettings.values.length === 0) {
            pivotObj.pivotFieldListModule.dialogRenderer.onShowFieldList();
        }
    }
};
export default App;

