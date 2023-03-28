

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IDataOptions, IDataSet, Inject, PivotViewComponent, FieldList } from '@syncfusion/ej2-react-pivotview';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';
import { Chart, Category, Legend, Tooltip, ColumnSeries, LineSeries, SeriesModel } from '@syncfusion/ej2-charts';
import { pivotData } from './datasource';
function App() {
  let dataSourceSettings: IDataOptions = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    filters: [],
    drilledMembers: [{ name: 'Country', items: ['France'] }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
  };
  let gridSettings: GridSettings = {
            columnWidth: 120,
            allowSelection: true,
            selectionSettings: {
            mode: 'Cell',
            type: 'Multiple',
            cellSelectionMode: 'Box',
            }
        };
    let onInit: boolean = true;
    let measureList: { [key: string]: string } = {};
    let chart: Chart;
    let selectedCells: CellSelectedObject[];
    let chartSeries: SeriesModel[];
    let pivotObj: PivotViewComponent;

    function frameChartSeries(): SeriesModel[] {
        let columnGroupObject: { [key: string]: { x: string, y: number }[] } = {};
        for (let cell of selectedCells) {
        if (cell.measure !== '') {
            let columnSeries = (pivotObj.dataSourceSettings.values.length > 1 && measureList[cell.measure]) ?
            (cell.columnHeaders.toString() + ' ~ ' + measureList[cell.measure]) : cell.columnHeaders.toString();
            if (columnGroupObject[columnSeries]) {
            columnGroupObject[columnSeries].push({ x: cell.rowHeaders == '' ? 'Grand Total' : cell.rowHeaders.toString(), y: Number(cell.value) });
            } else {
            columnGroupObject[columnSeries] = [{ x: cell.rowHeaders == '' ? 'Grand Total' : cell.rowHeaders.toString(), y: Number(cell.value) }];
            }
        }
        }
        let columnKeys: string[] = Object.keys(columnGroupObject);
        let chartSeries: SeriesModel[] = [];
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

    function chartUpdate(): void {
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
                    title: pivotObj.dataSourceSettings.values.map(function (args) { return args.caption || args.name }).join(' ~ '),
                },
                primaryXAxis: {
                    valueType: 'Category',
                    title: pivotObj.dataSourceSettings.rows.map(function (args) { return args.caption || args.name }).join(' ~ '),
                    labelIntersectAction: 'Rotate45'
                },
                series: chartSeries,
            }, '#Chart');
        } else {
            chart.series = chartSeries;
            chart.primaryXAxis.title = pivotObj.dataSourceSettings.rows.map(function (args) { return args.caption || args.name }).join(' ~ ');
            chart.primaryYAxis.title = pivotObj.dataSourceSettings.values.map(function (args) { return args.caption || args.name }).join(' ~ ');
            chart.refresh();
        }
    }
    function dataBound(): void {
        if(onInit) {
            for (let value of pivotObj.dataSourceSettings.values) {
                measureList[value.name] = value.caption || value.name;
            }
            pivotObj.grid.selectionModule.selectCellsByRange(
            { cellIndex: 1, rowIndex: 1 },
            { cellIndex: 3, rowIndex: 3 }
            );
        }
    }
    function cellSelected(args: PivotCellSelectedEventArgs): void {
        selectedCells = args.selectedCellsInfo;
        if (selectedCells && selectedCells.length > 0) {
            chartSeries = frameChartSeries();
            chartUpdate();
        }
    }
  
    return (<div className="control-section"><PivotViewComponent  ref={d => pivotObj = d} id='PivotView' height={300} dataSourceSettings={dataSourceSettings} showFieldList={true} gridSettings={gridSettings}><Inject services={[FieldList]}/></PivotViewComponent><br/><div id="Chart"></div></div>);
};
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));



