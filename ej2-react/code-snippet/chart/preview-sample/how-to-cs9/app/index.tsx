


import { ColumnDirective, ColumnsDirective, GridComponent, Grid, IDragCompleteEventArgs } from '@syncfusion/ej2-react-grids';
import { AxisModel, ChartComponent, Chart, SeriesCollectionDirective, SeriesDirective, Inject, Selection, Legend, LegendSeriesModel, Category, ScatterSeries } from '@syncfusion/ej2-react-charts';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { data } from './datasource';
function App() {
    const primaryxAxis: AxisModel = { minimum: 1970, maximum: 2016 };
    const primaryyAxis: AxisModel = { title: 'Sales', labelFormat: '{value}%', interval: 25, minimum: 0, maximum: 100 };
    const marker = { shape: 'Triangle', width: 10, height: 10 };
    const legendSettings: LegendSeriesModel = { visible: true, toggleVisibility: false };
    const selectionMode = 'DragXY';
    var grid: Grid | null;
    var chart: Chart | null;
    function dragComplete(args: IDragCompleteEventArgs): void {
        grid.dataSource = args.selectedDataValues[0];
        grid.refresh();
    }

    return (<div>
        <div>
            <div>
                <ChartComponent id='charts' ref={(g) => (chart = g)} primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title="Profit Comparision of A and B" selectionMode={selectionMode} legendSettings={legendSettings} dragComplete={dragComplete.bind(this)}>
                    <Inject services={[Selection, Legend, Category, ScatterSeries]} />
                    <SeriesCollectionDirective>
                        <SeriesDirective dataSource={data} xName='x' yName='y' name='Product A' type='Scatter' marker={marker}></SeriesDirective>
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>
        <div>
            <GridComponent id='grid' ref={(g) => (grid = g)} height='250px'>
                <ColumnsDirective>
                    <ColumnDirective field='x' headerText='x' type='string' />
                    <ColumnDirective field='y' headerText='y' type='number' />
                </ColumnsDirective>
            </GridComponent>
        </div>
    </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));


