import { PivotViewComponent, GroupingBar, Inject } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
import './App.css';

function App() {
    let dataSourceSettings = {
        dataSource: pivotData,
        expandAll: false,
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        formatSettings: [{ name: 'Amount', format: 'C2' }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
    };
    function aggregateCell(args) {
        args.skipFormatting = true;
    }
    return (
        <PivotViewComponent id='PivotView' height={350} aggregateCellInfo={aggregateCell.bind(this)} dataSourceSettings={dataSourceSettings} showGroupingBar='true'>
            <Inject services={[GroupingBar]} />
        </PivotViewComponent>
    );
};

export default App;
