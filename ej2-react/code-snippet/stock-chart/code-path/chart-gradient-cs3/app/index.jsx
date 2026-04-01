{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { StockChartComponent, StockChartSeriesCollectionDirective, StockChartSeriesDirective, Inject, DateTime, EmaIndicator, Tooltip, RangeTooltip, Crosshair, CandleSeries, StockChartIndicatorsDirective, StockChartIndicatorDirective, LineSeries, SplineSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries } from '@syncfusion/ej2-react-charts';
import { chartData } from '../datasource';

function App() {
  const primaryXAxis = { majorGridLines: { color: 'transparent' }, crosshairTooltip: { enable: true } };
  const primaryYAxis = { lineStyle: { color: 'transparent' }, majorTickLines: { color: 'transparent', width: 0 } };
  const trendGradient = {
    x1: 0, y1: 0, x2: 0, y2: 1,
    gradientColorStop: [
      { color: 'red', offset: 0, opacity: 1 },
      { color: 'blue', offset: 100, opacity: 1 }
    ]
  };
  return (
    <StockChartComponent id="stockchart" chartArea={{ border: { width: 0 } }} primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} tooltip={{ enable: true }} crosshair={{ enable: true }} height="350" title="AAPL Stock Price" >
       <Inject services={[DateTime, Tooltip, RangeTooltip, Crosshair, CandleSeries, EmaIndicator,
            LineSeries, SplineSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries]}/>
      <StockChartSeriesCollectionDirective>
        <StockChartSeriesDirective dataSource={chartData} name="Apple Inc" type="Candle" />
      </StockChartSeriesCollectionDirective>
      <StockChartIndicatorsDirective>
        <StockChartIndicatorDirective type="Ema" field="Close" seriesName="Apple Inc" xName="date" high="high" low="low" open="open" close="close" period={10} linearGradient={trendGradient} />
      </StockChartIndicatorsDirective>
    </StockChartComponent>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));
{% endraw %}