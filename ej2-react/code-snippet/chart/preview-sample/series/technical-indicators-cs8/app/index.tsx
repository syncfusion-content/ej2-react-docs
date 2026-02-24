


import * as React from "react";
import * as ReactDOM from "react-dom";
import { Browser } from '@syncfusion/ej2-base';
import {
    ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, RowDirective, RowsDirective, SeriesDirective, Inject,
    CandleSeries, Category, Tooltip, ILoadedEventArgs, DateTime, Zoom, Logarithmic, StripLinesDirective, StripLineDirective,
    Crosshair, LineSeries, StripLine, MacdIndicator, ColumnSeries, ChartTheme, IndicatorsDirective, IndicatorDirective,
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

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      tooltip={tooltip}
      crosshair={crosshair}
      chartArea={chartarea}
      width={Browser.isDevice ? '100%' : '80%'}
      title='AAPL 2012-2017'>
      <Inject services={[CandleSeries, Category, Tooltip, StripLine, DateTime, Logarithmic, Crosshair, LineSeries, MacdIndicator, StripLine, ColumnSeries]} />
      <AxesDirective>
        <AxisDirective opposedPosition={true} rowIndex={0} name='secondary'
          majorGridLines={lines} lineStyle={lines} minimum={-3.5} maximum={3.5} interval={3.5}
          majorTickLines={lines} title='MACD'>
        </AxisDirective>
      </AxesDirective>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={chartData} width={2}
          xName='x' yName='y' low='low' high='high' close='close' volume='volume' open='open'
          name='Apple Inc' bearFillColor='#2ecd71' bullFillColor='#e74c3d'
          type='Candle' animation={animation}>
        </SeriesDirective>
      </SeriesCollectionDirective>
      <IndicatorsDirective>
        <IndicatorDirective type='Macd' period={3} fastPeriod={8} slowPeriod={5} seriesName='Apple Inc' macdType='Both' width={2} macdPositiveColor='#2ecd71' macdNegativeColor='#e74c3d' fill='#6063ff' yAxisName='secondary'>
        </IndicatorDirective>
      </IndicatorsDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



