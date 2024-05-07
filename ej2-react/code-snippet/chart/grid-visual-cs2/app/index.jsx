{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, DateTime } from '@syncfusion/ej2-react-charts';
import { ColumnDirective, ColumnsDirective, GridComponent, Page, Selection } from '@syncfusion/ej2-react-grids';
function App() {
    const pageSettings = { pageSize: 10 };
    var grid;
    var chart;
    const primaryxAxis = { valueType: 'DateTime', intervalType: 'Days' };
    function actionComplete(args) {
        if (args.requestType === 'paging') {
            chart.series[0].dataSource = grid.getCurrentViewRecords();
            chart.refresh();
        }
    };
    function dataBound(args) {
        chart.series[0].dataSource = grid.getCurrentViewRecords();
    };
    const data = [
        {
            'OrderDate': '1996-07-06',
            'ShippedDate': '1996-07-16',
            'Freight': 32.38
        },
        {
            'OrderDate': '1996-07-07',
            'ShippedDate': '1996-07-10',
            'Freight': 11.61
        },
        {
            'OrderDate': '1996-07-08',
            'ShippedDate': '1996-07-12',
            'Freight': 65.83
        },
        {
            'OrderDate': '1996-07-09',
            'ShippedDate': '1996-07-15',
            'Freight': 41.34
        },
        {
            'OrderDate': '1996-07-10',
            'ShippedDate': '1996-07-11',
            'Freight': 51.3
        },
        {
            'OrderDate': '1996-07-11',
            'ShippedDate': '1996-07-16',
            'Freight': 58.17
        },
        {
            'OrderDate': '1996-07-12',
            'ShippedDate': '1996-07-23',
            'Freight': 22.98
        },
        {
            'OrderDate': '1996-07-13',
            'ShippedDate': '1996-07-15',
            'Freight': 148.33
        },
        {
            'OrderDate': '1996-07-14',
            'ShippedDate': '1996-07-17',
            'Freight': 13.97
        },
        {
            'OrderDate': '1996-07-15',
            'ShippedDate': '1996-07-22',
            'Freight': 81.91
        },
        {
            'OrderDate': '1996-07-16',
            'ShippedDate': '1996-07-23',
            'Freight': 140.51
        },
        {
            'OrderDate': '1996-07-17',
            'ShippedDate': '1996-07-25',
            'Freight': 3.25
        },
        {
            'OrderDate': '1996-07-18',
            'ShippedDate': '1996-07-29',
            'Freight': 55.09
        },
        {
            'OrderDate': '1996-07-19',
            'ShippedDate': '1996-07-30',
            'Freight': 3.05
        },
        {
            'OrderDate': '1996-07-20',
            'ShippedDate': '1996-07-25',
            'Freight': 48.29
        },
        {
            'OrderDate': '1996-07-21',
            'ShippedDate': '1996-07-31',
            'Freight': 146.06
        },
        {
            'OrderDate': '1996-07-22',
            'ShippedDate': '1996-08-23',
            'Freight': 3.67
        },
        {
            'OrderDate': '1996-07-23',
            'ShippedDate': '1996-08-12',
            'Freight': 55.28
        },
        {
            'OrderDate': '1996-07-24',
            'ShippedDate': '1996-07-31',
            'Freight': 25.73
        },
        {
            'OrderDate': '1996-07-25',
            'ShippedDate': '1996-08-06',
            'Freight': 208.58
        },
        {
            'OrderDate': '1996-07-26',
            'ShippedDate': '1996-08-02',
            'Freight': 66.29
        },
        {
            'OrderDate': '1996-07-27',
            'ShippedDate': '1996-08-09',
            'Freight': 4.56
        },
        {
            'OrderDate': '1996-07-29',
            'ShippedDate': '1996-08-02',
            'Freight': 136.54
        },
        {
            'OrderDate': '1996-07-30',
            'ShippedDate': '1996-08-30',
            'Freight': 4.54
        },
        {
            'OrderDate': '1996-07-31',
            'ShippedDate': '1996-08-06',
            'Freight': 98.03
        },
        {
            'OrderDate': '1996-08-01',
            'ShippedDate': '1996-08-12',
            'Freight': 76.07
        },
        {
            'OrderDate': '1996-08-02',
            'ShippedDate': '1996-08-16',
            'Freight': 6.01
        },
        {
            'OrderDate': '1996-08-03',
            'ShippedDate': '1996-08-09',
            'Freight': 26.93
        },
        {
            'OrderDate': '1996-08-04',
            'ShippedDate': '1996-08-14',
            'Freight': 13.84
        },
        {
            'OrderDate': '1996-08-05',
            'ShippedDate': '1996-08-13',
            'Freight': 125.77
        },
        {
            'OrderDate': '1996-08-06',
            'ShippedDate': '1996-08-16',
            'Freight': 92.69
        },
        {
            'OrderDate': '1996-08-07',
            'ShippedDate': '1996-08-16',
            'Freight': 25.83
        },
        {
            'OrderDate': '1996-08-08',
            'ShippedDate': '1996-09-12',
            'Freight': 8.98
        },
        {
            'OrderDate': '1996-08-09',
            'ShippedDate': '1996-08-21',
            'Freight': 2.94
        },
        {
            'OrderDate': '1996-08-10',
            'ShippedDate': '1996-08-21',
            'Freight': 12.69
        },
        {
            'OrderDate': '1996-08-11',
            'ShippedDate': '1996-08-28',
            'Freight': 12.76
        },
        {
            'OrderDate': '1996-08-12',
            'ShippedDate': '1996-09-03',
            'Freight': 7.45
        },
        {
            'OrderDate': '1996-08-13',
            'ShippedDate': '1996-08-28',
            'Freight': 22.77
        },
        {
            'OrderDate': '1996-08-14',
            'ShippedDate': '1996-09-03',
            'Freight': 79.7
        },
        {
            'OrderDate': '1996-08-15',
            'ShippedDate': '1996-09-04',
            'Freight': 6.4
        }
    ];
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
    </div>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));
{% endraw %}