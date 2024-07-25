
import * as React from 'react';
import { PivotViewComponent, Inject, FieldList, CalculatedField, Toolbar } from '@syncfusion/ej2-react-pivotview';
import { pivotData } from './datasource';
import './App.css';

function App() {
    let dataSourceSettings = {
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        dataSource: pivotData,
        expandAll: false,
        filters: [],
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
    };
    let pivotObj;
    let toolbarOptions = ['FieldList'];
    return (<PivotViewComponent id='PivotView' ref={scope => pivotObj = scope} dataSourceSettings={dataSourceSettings} width={'100%'} height={350} showFieldList={true} gridSettings={{ columnWidth: 140 }} showToolbar={true} allowCalculatedField={true} displayOption={{ view: 'Both' }} toolbar={toolbarOptions}><Inject services={[FieldList, CalculatedField, Toolbar]}/></PivotViewComponent>);
};
export default App;

