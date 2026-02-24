


import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, AxisModel, Chart, ColumnSeries, DateTime } from '@syncfusion/ej2-react-charts';
import { ColumnDirective, ColumnsDirective, GridComponent, Page, PageSettingsModel, Selection, Grid, ActionEventArgs } from '@syncfusion/ej2-react-grids';
import { data } from './datasource';
function App() {
    const pageSettings: PageSettingsModel = { pageSize: 10 }
    var grid: Grid | null;
    var chart: Chart | null;
    const primaryxAxis: AxisModel = { valueType: 'DateTime', intervalType: 'Days' };
    function actionComplete(args: ActionEventArgs) {
        if (args.requestType === 'paging') {
            (chart as Chart).series[0].dataSource = (grid as Grid).getCurrentViewRecords();
            (chart as Chart).refresh();
        }
    };
    function dataBound(args: any): void {
        (chart as Chart).series[0].dataSource = (grid as Grid).getCurrentViewRecords();
    };

    return (<div className='row'>
        <div className="col-sm-4">
            <GridComponent ref={g => grid = g} id='grid' dataSource={data} allowPaging={true} pageSettings={pageSettings} actionComplete={actionComplete.bind(this)} dataBound={dataBound.bind(this)}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderDate' headerText='Order Date' width='130' format='yMd' textAlign="Right" />
                    <ColumnDirective field='Freight' width='120' format='C2' textAlign='Right' />
                </ColumnsDirective>
                <Inject services={[Page, Selection]} />
            </GridComponent>
        </div>
        <div className="col-sm-4">
            <ChartComponent ref={g => chart = g} id='charts' primaryXAxis={primaryxAxis}>
                <Inject services={[ColumnSeries, DateTime]} />
                <SeriesCollectionDirective>
                    <SeriesDirective name='Germany' xName='OrderDate' yName='Freight' width={2} type='Column' marker={{ visible: true, width: 10, height: 10 }}>
                    </SeriesDirective>
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    </div>)

};
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));


