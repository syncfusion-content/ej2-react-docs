


import * as React from "react";
import * as ReactDOM from "react-dom";
import { Browser } from '@syncfusion/ej2-base';
import {
    ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, RowDirective, RowsDirective, SeriesDirective, Inject,
    StripLine, DateTime, Logarithmic, Tooltip, CandleSeries, Crosshair, Zoom, ILoadedEventArgs, StripLinesDirective, StripLineDirective,
    LineSeries, StochasticIndicator, IndicatorsDirective, IndicatorDirective, Category, ChartTheme,
    AxisModel,ChartAreaModel,CrosshairSettingsModel, TooltipSettingsModel
} from '@syncfusion/ej2-react-charts';
import { chartData } from 'datasource.ts';

function App() {

  const primaryxAxis: AxisModel = { valueType: 'DateTime', intervalType: 'Months', majorGridLines: { width: 0 }, crosshairTooltip: { enable: true } };
  const primaryyAxis: AxisModel = { title: 'Price', labelFormat: '${value}', minimum: 30, maximum: 180, interval: 30, lineStyle: { width: 0 } };
  const animation = { enable: true };
  const chartarea: ChartAreaModel = { border: { width: 0 } };
  const crosshair: CrosshairSettingsModel = { enable: true, lineType: 'Vertical' };
  const tooltip: TooltipSettingsModel = { enable: true, shared: true };
  const lines = { width: 0 };
  const animation1 = { enable: false }
  const upperline = { color: '#e74c3d' };
  const lowerline = { color: '#2ecd71' };
  const periodline = { color: '#f2ec2f' };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      tooltip={tooltip}
      crosshair={crosshair}
      chartArea={chartarea}
      width={Browser.isDevice ? '100%' : '80%'}
      title='AAPL 2012-2017'>
      <Inject services={[CandleSeries, Category, Tooltip, StripLine, DateTime, Logarithmic, Crosshair, LineSeries, StochasticIndicator]} />
      <AxesDirective>
        <AxisDirective rowIndex={0} name='secondary' opposedPosition={true}
          majorGridLines={lines} majorTickLines={lines}
          minimum={0} maximum={120} interval={60} title='Stochastic' lineStyle={lines}>
        </AxisDirective>
      </AxesDirective>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={chartData} width={2}
          xName='x' yName='y' low='low' high='high' close='close' volume='volume' open='open'
          name='Apple Inc' bearFillColor='#2ecd71' bullFillColor='#e74c3d' type='Candle' animation={animation}>
        </SeriesDirective>
      </SeriesCollectionDirective>
      <IndicatorsDirective>
        <IndicatorDirective type='Stochastic' field='Close' seriesName='Apple Inc' yAxisName='secondary' fill='#6063ff' kPeriod={2} dPeriod={3} showZones={true} periodLine={periodline} period={3} animation={animation1} upperLine={upperline} lowerLine={lowerline}>
        </IndicatorDirective>
      </IndicatorsDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



