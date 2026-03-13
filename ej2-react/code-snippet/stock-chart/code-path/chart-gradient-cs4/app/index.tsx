{% raw %}


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AxisModel, StockChartComponent, StockChartSeriesCollectionDirective, StockChartSeriesDirective, Inject, DateTime, Tooltip, RangeTooltip, Crosshair, CandleSeries, LineSeries, SplineSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries } from '@syncfusion/ej2-react-charts';
import { chartData } from './datasource';
function App() {
  const primaryXAxis: AxisModel = { majorGridLines: { width: 0 } };
  const primaryYAxis: AxisModel = { majorGridLines: { width: 0 }, interval: 10 };
  const radialGradient = {
    cx: 0.5, cy: 0.5, r: 0.5,
    fx: 0.5, fy: 0.5,
    gradientColorStop: [
      { color: '#FFFF00', offset: 0, opacity: 1, lighten: 0, brighten: 0 },
      { color: '#7C3AED', offset: 100, opacity: 1, lighten: 0, brighten: 0 }
    ]
  };
  return (
    <StockChartComponent id="stockchart" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} height='350' title="AAPL Stock Price">
      <Inject services={[DateTime, Tooltip, RangeTooltip, Crosshair, CandleSeries, LineSeries, SplineSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries]} />
      <StockChartSeriesCollectionDirective>
        <StockChartSeriesDirective dataSource={chartData} type="Candle" radialGradient={radialGradient} />
      </StockChartSeriesCollectionDirective>
    </StockChartComponent>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));


{% endraw %}