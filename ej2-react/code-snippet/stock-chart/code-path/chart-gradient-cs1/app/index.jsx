{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { StockChartComponent, StockChartSeriesCollectionDirective, StockChartSeriesDirective, Inject, DateTime, Tooltip, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines } from '@syncfusion/ej2-react-charts';
import { EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export } from '@syncfusion/ej2-react-charts';
import { StockDetails } from './datasource';

function App() {
  const linearGradient = {
    x1: 0, y1: 0,
    x2: 1, y2: 1,
    gradientColorStop: [
      { color: '#FF7E5F', offset: 0, opacity: 1, lighten: 0, brighten: 0 },
      { color: '#FEB47B', offset: 100, opacity: 1, lighten: 0, brighten: 0.5 }
    ]
  };
  return (
    <StockChartComponent id='stockchart' primaryXAxis={{ valueType: 'DateTime' }} primaryYAxis={{ interval: 10 }} height='350' title="AAPL Stock Price">
      <Inject services={[DateTime, Tooltip, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, Export, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator]}/>
      <StockChartSeriesCollectionDirective>
        <StockChartSeriesDirective name="AAPL" dataSource={StockDetails} type="Candle" xName="Date" high="High" low="Low" open="Open" close="Close" volume="Volume" linearGradient={linearGradient} />
      </StockChartSeriesCollectionDirective>
    </StockChartComponent>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));
{% endraw %}