{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, AxesDirective, AxisDirective, Inject, AxisModel, ChartAreaModel, LegendSettingsModel, CrosshairSettingsModel, IAxisLabelRenderEventArgs, TooltipSettingsModel, AccessibilityModel,
    IndicatorsDirective, IndicatorDirective, LineSeries, DateTime, CandleSeries, AccumulationDistributionIndicator, Tooltip, Crosshair, Legend } from '@syncfusion/ej2-react-charts';
import { chartData } from './datasource';

function App() {

  const axisLableRender = (args: IAxisLabelRenderEventArgs): void => {
    if (args.axis.name === 'secondary') {
      let value: number = Number(args.text) / 1000000000;
      args.text = String(value) + 'bn';
    }
  }
  const primaryxAxis: AxisModel = { title: 'Months', valueType: 'DateTime', intervalType: 'Months', majorGridLines: { width: 0 }, crosshairTooltip: { enable: true } };
  const primaryyAxis: AxisModel = { title: 'Price (Million Dollars)', minimum: 30, maximum: 180, interval: 30 };
  const animation = { enable: true };
  const chartarea: ChartAreaModel = { border: { width: 0 } };
  const crosshair: CrosshairSettingsModel = { enable: true, lineType: 'Vertical' };
  const tooltip: TooltipSettingsModel = { enable: true, shared: true };
  const lines = { width: 0 };
  const accessibility: AccessibilityModel = {
    accessibilityDescription: 'The Accumulation Distribution indicator is used to assess the buying and selling pressure of Apple Inc. stock.',
    accessibilityRole: 'indicator'
  };
  const legendSettings: LegendSettingsModel = { visible: false };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      tooltip={tooltip}
      crosshair={crosshair}
      axisLabelRender={axisLableRender.bind(this)}
      chartArea={chartarea}
      legendSettings={legendSettings}
      title='AAPL - 2016/2017'>
      <Inject services={[LineSeries, DateTime, CandleSeries, AccumulationDistributionIndicator, Tooltip, Crosshair, Legend]} />
      <AxesDirective>
        <AxisDirective name='secondary' opposedPosition={true} majorGridLines={lines} minimum={-7000000000} maximum={5000000000} interval={6000000000}>
        </AxisDirective>
      </AxesDirective>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={chartData} width={2} xName='x' yName='y' low='low' high='high' close='close' volume='volume' open='open' name='Apple Inc' type='Candle' animation={animation}>
        </SeriesDirective>
      </SeriesCollectionDirective>
      <IndicatorsDirective>
        <IndicatorDirective type='AccumulationDistribution' field='Close' seriesName='Apple Inc' yAxisName='secondary' fill='blue' period={3} animation={animation} accessibility={accessibility}>
        </IndicatorDirective>
      </IndicatorsDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



{% endraw %}