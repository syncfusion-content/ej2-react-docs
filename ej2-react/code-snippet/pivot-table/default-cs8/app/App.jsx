import { FieldList, GroupingBar, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
import './App.css';

function App() {
    let dataSourceSettings = {
        dataSource: pivotData,
        expandAll: false,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        filters: [],
    };
    let pivotObj;
    function actionFailure(args) {
        if (args.actionName == 'Aggregate field') {
            // Triggers when the current UI action fails to achieve the desired result.
        }
    }
    return (<PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} actionFailure={actionFailure.bind(this)} showFieldList={true} showGroupingBar={true}><Inject services={[FieldList, GroupingBar]}/></PivotViewComponent>);
};
export default App;

