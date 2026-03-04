{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { StockChartComponent, StockChartSeriesCollectionDirective, StockChartSeriesDirective, Inject, DateTime, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines } from '@syncfusion/ej2-react-charts';
import { EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export } from '@syncfusion/ej2-react-charts';
import { chartData } from '../datasource.ts';
function App() {
    const primaryxAxis = {
        majorGridLines: { color: 'transparent' },
        crosshairTooltip: { enable: true, fill: 'green' }
    };
    const primaryyAxis = {
        lineStyle: { color: 'transparent' },
        majorTickLines: { color: 'transparent', width: 0 },
        crosshairTooltip: { enable: true, fill: 'green' }
    };
    const crosshair = { enable: true, line: { width: 2, color: 'green' }, snapToData: true };

    return <StockChartComponent id='stockcharts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} crosshair={crosshair} title='AAPL Stock Price'>
        <Inject services={[DateTime, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, Export, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator]} />
        <StockChartSeriesCollectionDirective>
            <StockChartSeriesDirective dataSource={chartData} type='Candle'>
            </StockChartSeriesDirective>
        </StockChartSeriesCollectionDirective>
    </StockChartComponent>
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}