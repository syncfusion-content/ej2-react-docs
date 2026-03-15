{% raw %}


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AxisModel, StockChartComponent, StockChartSeriesCollectionDirective, StockChartSeriesDirective, Inject, DateTime, Tooltip, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, StockChartTrendlinesDirective, StockChartTrendlineDirective } from '@syncfusion/ej2-react-charts';
import { EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export } from '@syncfusion/ej2-react-charts';
import { chartData } from './datasource';

function App() {
  const primaryXAxis: AxisModel= { title: 'Months' };
  const primaryYAxis: AxisModel = { title: 'Rupees against Dollars', interval: 5 };
  const trendGradient = {
    x1: 0, y1: 0, x2: 0, y2: 1,
    gradientColorStop: [
      { color: '#6A0DAD', offset: 0, opacity: 1, lighten: 0, brighten: 0 },
      { color: '#FFFF00', offset: 100, opacity: 1, lighten: 0, brighten: 0 }
    ]
  };
  return (
    <StockChartComponent id="stockchart" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} tooltip={{ enable: true }} chartArea={{ border: { width: 0 } }} height='350' title="Historical Indian Rupee Rate (INR USD)" >
      <Inject services={[
        DateTime, Tooltip, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries,
        HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines,
        EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator,
        SmaIndicator, AtrIndicator, Export, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator
      ]} />
      <StockChartSeriesCollectionDirective>
        <StockChartSeriesDirective name="Apple Inc" dataSource={chartData} type="Candle">
          <StockChartTrendlinesDirective>
            <StockChartTrendlineDirective type="MovingAverage" enableTooltip={false} width={2} linearGradient={trendGradient} />
          </StockChartTrendlinesDirective>
        </StockChartSeriesDirective>
      </StockChartSeriesCollectionDirective>
    </StockChartComponent>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));


{% endraw %}