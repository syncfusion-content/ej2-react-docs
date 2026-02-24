{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { Browser } from '@syncfusion/ej2-base';
import {
    ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, RowDirective, RowsDirective,
    SeriesDirective, Inject, ILoadedEventArgs, StripLinesDirective, StripLineDirective,
    LineSeries, RsiIndicator, IndicatorsDirective, ChartTheme,
    IndicatorDirective, Category, StripLine, CandleSeries, Tooltip, DateTime, Zoom, Logarithmic, Crosshair,
    AxisModel,ChartAreaModel,CrosshairSettingsModel, TooltipSettingsModel
} from '@syncfusion/ej2-react-charts';
import { chartData } from './datasource';

function App() {

  const primaryxAxis: AxisModel = { valueType: 'DateTime', intervalType: 'Months', majorGridLines: { width: 0 }, crosshairTooltip: { enable: true } };
  const primaryyAxis: AxisModel = { title: 'Price', labelFormat: '${value}', minimum: 30, maximum: 180, interval: 30, lineStyle: { width: 0 } };
  const animation = { enable: true };
  const chartarea: ChartAreaModel = { border: { width: 0 } };
  const crosshair: CrosshairSettingsModel = { enable: true, lineType: 'Vertical' };
  const tooltip: TooltipSettingsModel = { enable: true, shared: true };
  const lines = { width: 0 };
  const upperline = { color: '#e74c3d' };
  const lowerline = { color: '#2ecd71' };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      tooltip={tooltip}
      crosshair={crosshair}
      chartArea={chartarea}
      width={Browser.isDevice ? '100%' : '80%'}
      title='AAPL 2012-2017'>
      <Inject services={[CandleSeries, Category, Tooltip, StripLine, DateTime, Logarithmic, Crosshair, LineSeries, RsiIndicator, StripLine]} />
      <AxesDirective>
        <AxisDirective rowIndex={0} name='secondary' opposedPosition={true} majorGridLines={lines}
          majorTickLines={lines} minimum={0} maximum={120} interval={60} title='RSI' lineStyle={lines}>
        </AxisDirective>
      </AxesDirective>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={chartData} xName='x' yName='silver' name='Apple Inc' bearFillColor='#2ecd71' bullFillColor='#e74c3d' low='low' open='open' close='close' high='high' volume='volume' type='Candle'>
        </SeriesDirective>
      </SeriesCollectionDirective>
      <IndicatorsDirective>
        <IndicatorDirective field='Close' yAxisName='secondary' type='Rsi' fill='#6063ff' seriesName='Apple Inc' period={3}
          showZones={true} overBought={70} overSold={30} upperLine={upperline} lowerLine={lowerline}
          animation={animation}>
        </IndicatorDirective>
      </IndicatorsDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}

