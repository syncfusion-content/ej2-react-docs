
import * as React from 'react';
import { PivotViewComponent, Inject, Toolbar } from '@syncfusion/ej2-react-pivotview';
import { pivotData } from './datasource';
function App() {
    let dataSourceSettings = {
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        dataSource: pivotData,
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
    };
    let pivotObj;
    let toolbarOptions = ['Grid', 'Chart'];
    let chartTypes = ['Column', 'Bar', 'Line', 'Area'];
    return (<PivotViewComponent id='PivotView' dataSourceSettings={dataSourceSettings} width={'100%'} height={350} showToolbar={true} toolbar={toolbarOptions} displayOption={{ view: 'Both' }} chartTypes={chartTypes}><Inject services={[Toolbar]}/></PivotViewComponent>);
};
export default App;

