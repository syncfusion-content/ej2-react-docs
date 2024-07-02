import { PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
function App() {
    let gridSettings = {
        columnRender: columnRender.bind(this)
    };
    let dataSourceSettings = {
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        dataSource: pivotData,
        expandAll: true,
        filters: [],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
    };
    let pivotObj;
    function columnRender(args) {
        for (let i = 0; i < args.columns.length; i++) {
            if (args.stackedColumns[0]) {
                // Content for the row headers is right-aligned here.
                args.stackedColumns[0].textAlign = "Right";
            }
            if (args.stackedColumns[1]) {
                // Content for the column header "FY 2015" is center-aligned here.
                args.stackedColumns[1].textAlign = 'Center';
            }
            if (args.stackedColumns[1] && args.stackedColumns[1].columns[0]) {
                // Content for the column header "Q1" is right-aligned here.
                args.stackedColumns[1].columns[0].textAlign = 'Right';
            }
            if (args.stackedColumns[1] && args.stackedColumns[1].columns[0] && args.stackedColumns[1].columns[0].columns[0]) {
                // Content for the value header "Units Sold" is right-aligned here.
                args.stackedColumns[1].columns[0].columns[0].headerTextAlign = 'Right';
            }
            if (args.stackedColumns[1] && args.stackedColumns[1].columns[0] && args.stackedColumns[1].columns[0].columns[0]) {
                // Content for the values are left-aligned here.
                args.stackedColumns[1].columns[0].columns[0].textAlign = 'Left';
            }
        }
    }
    return (<PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} gridSettings={gridSettings}></PivotViewComponent>);
};
export default App;

