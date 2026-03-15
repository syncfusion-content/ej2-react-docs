import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, CandleSeries, LineSeries, EmaIndicator, IndicatorsDirective, IndicatorDirective, DateTime, Tooltip, Legend } from '@syncfusion/ej2-react-charts';
import { PriceSeries } from './datasource';

function App() {
  const primaryXAxis = { title: 'Months', valueType: 'DateTime', intervalType: 'Months', labelFormat: 'MMM yyyy', edgeLabelPlacement: 'Shift', majorGridLines: { width: 0 } };
  const primaryYAxis = { title: 'Price (USD)', labelFormat: '${value}', minimum: 90, maximum: 130, interval: 10, lineStyle: { width: 0 }, majorTickLines: { width: 0 } };
  const radialGradient = {
    cx: 0.5, cy: 0.5,
    fx: 0.5, fy: 0.5, r: 0.5,
    gradientColorStop: [
      { color: '#FFFF00', offset: 0, opacity: 1, lighten: 0, brighten: 0 },
      { color: '#7C3AED', offset: 100, opacity: 0.95, lighten: 0, brighten: 0.9 }
    ]
  };
  return (
    <ChartComponent id="charts" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} title="Equity Price - Jan-Nov 2025" tooltip={{ enable: true }} legendSettings={{ visible: false }} >
      <Inject services={[CandleSeries, LineSeries, EmaIndicator, DateTime, Tooltip, Legend]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={PriceSeries} width={2} xName="Date" yName="y" low="Low" high="High" close="Close" volume="Volume" open="Open" name="Equity Price" type="Candle" />
      </SeriesCollectionDirective>
      <IndicatorsDirective>
        <IndicatorDirective type="Ema" field="Close" seriesName="Equity Price" xName="Date" width={2} period={3} radialGradient={radialGradient} />
      </IndicatorsDirective>
    </ChartComponent>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));