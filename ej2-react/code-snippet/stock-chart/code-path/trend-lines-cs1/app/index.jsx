{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { StockChartComponent, StockChartSeriesCollectionDirective, StockChartSeriesDirective, Inject, DateTime, Tooltip, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines } from '@syncfusion/ej2-react-charts';
import { chartData } from 'datasource.ts';
function App() {
    return (<StockChartComponent id='stockchart' primaryXAxis={{
            title: 'Months'
        }} primaryYAxis={{
            title: 'Rupees against Dollars',
            interval: 5
        }} tooltip={{ enable: true }} height='350' title='Historical Indian Rupee Rate (INR USD)' indicatorType={[]} exportType={[]} seriesType={[]}>
                <Inject services={[DateTime, Tooltip, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines]}/>
                <StockChartSeriesCollectionDirective>
                    <StockChartSeriesDirective dataSource={chartData} type='Candle'>
                    </StockChartSeriesDirective>
                </StockChartSeriesCollectionDirective>
            </StockChartComponent>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
{% endraw %}