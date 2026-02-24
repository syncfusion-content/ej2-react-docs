import * as React from "react";
import * as ReactDOM from "react-dom";
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Logarithmic, Tooltip, CandleSeries, Crosshair, LineSeries, SmaIndicator, IndicatorsDirective, IndicatorDirective, StripLine } from '@syncfusion/ej2-react-charts';
import { chartData } from './datasource';
function App() {
    const primaryxAxis = { valueType: 'DateTime', intervalType: 'Months', majorGridLines: { width: 0 }, crosshairTooltip: { enable: true } };
    const primaryyAxis = {
        title: 'Price', labelFormat: '${value}', minimum: 30, maximum: 180, interval: 30,
        lineStyle: { width: 0 }
    };
    const animation = { enable: true };
    const chartarea = { border: { width: 0 } };
    const crosshair = { enable: true, lineType: 'Vertical' };
    const tooltip = { enable: true, shared: true };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} tooltip={tooltip} crosshair={crosshair} chartArea={chartarea} width={Browser.isDevice ? '100%' : '80%'} title='AAPL 2012-2017'>
      <Inject services={[CandleSeries, Tooltip, StripLine, DateTime, Logarithmic, Crosshair, LineSeries, SmaIndicator]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={chartData} width={2} xName='x' yName='silver' low='low' high='high' close='close' volume='volume' open='open' name='Apple Inc' type='Candle' animation={animation}>
        </SeriesDirective>
      </SeriesCollectionDirective>
      <IndicatorsDirective>
        <IndicatorDirective type='Sma' fill='blue' seriesName='Apple Inc' period={14}>
        </IndicatorDirective>
      </IndicatorsDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
