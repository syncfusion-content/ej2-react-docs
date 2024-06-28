import * as React from 'react';
import { Inject, PivotViewComponent, FieldList } from '@syncfusion/ej2-react-pivotview';
import { Chart, Category, Legend, Tooltip, ColumnSeries, LineSeries } from '@syncfusion/ej2-charts';
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
    let gridSettings = {
        columnWidth: 120,
        allowSelection: true,
        selectionSettings: {
            mode: 'Cell',
            type: 'Multiple',
            cellSelectionMode: 'Box',
        }
    };
    let onInit = true;
    let measureList = {};
    let chart;
    let selectedCells;
    let chartSeries;
    let pivotObj;
    function frameChartSeries() {
        let columnGroupObject = {};
        for (let cell of selectedCells) {
            if (cell.measure !== '') {
                let columnSeries = (pivotObj.dataSourceSettings.values.length > 1 && measureList[cell.measure]) ?
                    (cell.columnHeaders.toString() + ' ~ ' + measureList[cell.measure]) : cell.columnHeaders.toString();
                if (columnGroupObject[columnSeries]) {
                    columnGroupObject[columnSeries].push({ x: cell.rowHeaders == '' ? 'Grand Total' : cell.rowHeaders.toString(), y: Number(cell.value) });
                }
                else {
                    columnGroupObject[columnSeries] = [{ x: cell.rowHeaders == '' ? 'Grand Total' : cell.rowHeaders.toString(), y: Number(cell.value) }];
                }
            }
        }
        let columnKeys = Object.keys(columnGroupObject);
        let chartSeries = [];
        for (let key of columnKeys) {
            chartSeries.push({
                dataSource: columnGroupObject[key],
                xName: 'x',
                yName: 'y',
                type: 'Column',
                name: key
            });
        }
        return chartSeries;
    }
    function chartUpdate() {
        if (onInit) {
            onInit = false;
            Chart.Inject(ColumnSeries, LineSeries, Legend, Tooltip, Category);
            chart = new Chart({
                title: 'Sales Analysis',
                legendSettings: {
                    visible: true
                },
                tooltip: {
                    enable: true
                },
                primaryYAxis: {
                    title: pivotObj.dataSourceSettings.values.map(function (args) { return args.caption || args.name; }).join(' ~ '),
                },
                primaryXAxis: {
                    valueType: 'Category',
                    title: pivotObj.dataSourceSettings.rows.map(function (args) { return args.caption || args.name; }).join(' ~ '),
                    labelIntersectAction: 'Rotate45'
                },
                series: chartSeries,
            }, '#Chart');
        }
        else {
            chart.series = chartSeries;
            chart.primaryXAxis.title = pivotObj.dataSourceSettings.rows.map(function (args) { return args.caption || args.name; }).join(' ~ ');
            chart.primaryYAxis.title = pivotObj.dataSourceSettings.values.map(function (args) { return args.caption || args.name; }).join(' ~ ');
            chart.refresh();
        }
    }
    function dataBound() {
        if (onInit) {
            for (let value of pivotObj.dataSourceSettings.values) {
                measureList[value.name] = value.caption || value.name;
            }
            pivotObj.grid.selectionModule.selectCellsByRange({ cellIndex: 1, rowIndex: 1 }, { cellIndex: 3, rowIndex: 3 });
        }
    }
    function cellSelected(args) {
        selectedCells = args.selectedCellsInfo;
        if (selectedCells && selectedCells.length > 0) {
            chartSeries = frameChartSeries();
            chartUpdate();
        }
    }
    return (<div className="control-section"><PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={300} dataSourceSettings={dataSourceSettings} showFieldList={true} gridSettings={gridSettings}><Inject services={[FieldList]}/></PivotViewComponent><br /><div id="Chart"></div></div>);
};
export default App;

