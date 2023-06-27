import * as React from "react";
import * as ReactDOM from "react-dom";
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ParetoSeries, ColumnSeries, LineSeries, Legend, Category, Tooltip, DataLabel } from '@syncfusion/ej2-react-charts';
function App() {
    const chartData = [
        { x: 'Button Defect', y: 23 }, { x: 'Pocket Defect', y: 16 },
        { x: 'Collar Defect ', y: 10 }, { x: 'Cuff Defect', y: 7 },
        { x: 'Sleeve Defect', y: 6 }, { x: 'Other Defect', y: 2 }
    ];
    const primaryxAxis = { interval: 1, valueType: 'Category', majorGridLines: { width: 0 }, labelIntersectAction: 'Rotate45', minorGridLines: { width: 0 }, majorTickLines: { width: 0 }, minorTickLines: { width: 0 }, lineStyle: { width: 0 } };
    const primaryyAxis = { title: 'Frequency of Occurence', minimum: 0, maximum: 25, interval: 5, lineStyle: { width: 0 }, majorTickLines: { width: 0 }, majorGridLines: { width: 1 }, minorGridLines: { width: 1 }, minorTickLines: { width: 0 } };
    const tooltipsettings = { enable: true, shared: true, format: '${series.name} : <b>${point.y}</b>' };

    return <ChartComponent id='charts'
        primaryXAxis={primaryxAxis}
        primaryYAxis={primaryyAxis}
        tooltip={tooltipsettings}
        title='Defects in Shirts'
        legendSettings={{ visible: true, enableHighlight: true }}>
        <Inject services={[ColumnSeries, LineSeries, ParetoSeries, Legend, Tooltip, Category, DataLabel, Highlight]} />
        <SeriesCollectionDirective>
            <SeriesDirective dataSource={chartData} xName='x' yName='y' name='Defect' type='Pareto' width={2} opacity={0.75} columnWidth={0.4} cornerRadius={{ topLeft: Browser.isDevice ? 4 : 6, topRight: Browser.isDevice ? 4 : 6 }} paretoOptions={{ marker: { visible: true, isFilled: true, width: 7, height: 7 }, dashArray: '3,2', width: 2, fill: '#F7523F' }}>
            </SeriesDirective>
        </SeriesCollectionDirective>
    </ChartComponent>
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
