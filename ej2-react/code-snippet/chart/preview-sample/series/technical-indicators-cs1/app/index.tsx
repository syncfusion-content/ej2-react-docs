


import * as React from "react";
import * as ReactDOM from "react-dom";
import { Browser } from '@syncfusion/ej2-base';
import {AxisModel,ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, RowDirective, RowsDirective, SeriesDirective, Inject,
    CandleSeries, Category, Tooltip, ILoadedEventArgs, DateTime, Zoom, Logarithmic, StripLineDirective,ChartAreaModel,CrosshairSettingsModel,
    Crosshair, LineSeries, AccumulationDistributionIndicator, IAxisLabelRenderEventArgs,TooltipSettingsModel,
    StripLine, ChartTheme, IndicatorsDirective, IndicatorDirective, StripLinesDirective}
from'@syncfusion/ej2-react-charts';
import { chartData } from './datasource';

function App() {

  const axisLableRender = (args: IAxisLabelRenderEventArgs): void => {
    if (args.axis.name === 'secondary') {
      let value: number = Number(args.text) / 1000000000;
      args.text = String(value) + 'bn';
    }
  }
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
      axisLabelRender={axisLableRender.bind(this)}
      chartArea={chartarea}
      width={Browser.isDevice ? '100%' : '80%'}
      title='AAPL 2012-2017'>
      <Inject services={[CandleSeries, Category, Tooltip, StripLine, DateTime, Logarithmic, Crosshair, LineSeries, AccumulationDistributionIndicator]} />
      <AxesDirective>
        <AxisDirective rowIndex={0} name='secondary' opposedPosition={true}
          majorGridLines={lines} majorTickLines={lines} minimum={-7000000000} maximum={5000000000}
          interval={6000000000} title='Accumulation Distribution' lineStyle={lines}>
        </AxisDirective>
      </AxesDirective>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={chartData} width={2}
          xName='x' yName='y' low='low' high='high' close='close' volume='volume' open='open'
          name='Apple Inc' bearFillColor='#2ecd71' bullFillColor='#e74c3d' type='Candle' animation={animation}>
        </SeriesDirective>
      </SeriesCollectionDirective>
      <IndicatorsDirective>
        <IndicatorDirective type='AccumulationDistribution' field='Close' seriesName='Apple Inc' yAxisName='secondary' fill='#6063ff' period={3} animation={animation}>
        </IndicatorDirective>
      </IndicatorsDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



