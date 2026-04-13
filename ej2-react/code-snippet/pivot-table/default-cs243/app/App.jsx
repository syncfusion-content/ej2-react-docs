import { PivotViewComponent, Inject, PivotChart } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
function App() {
    let displayOption = {
        view: 'Chart'
    };
    let chartSettings = {
        chartSeries: { type: 'Column' },
        multiLevelLabelRender(e) {
            e.alignment = 'Near';
            e.textStyle = { fontFamily: 'Bold', fontWeight: '400', size: '16px', color: 'red' };
            if (e.text === ' + United Kingdom') {
                e.text = 'Text Changed';
                e.textStyle = { fontFamily: 'Bold', fontWeight: '800', size: '16px', color: 'Blue' };
            }
        }
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
    let pivotObj;
    return (<PivotViewComponent height={350} ref={d => pivotObj = d} id='PivotView' chartSettings={chartSettings} displayOption={displayOption} dataSourceSettings={dataSourceSettings}><Inject services={[PivotChart]}/></PivotViewComponent>);
};
export default App;

