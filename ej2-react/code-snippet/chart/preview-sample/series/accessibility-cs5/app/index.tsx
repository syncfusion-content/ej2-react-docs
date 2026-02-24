


import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, TrendlineDirective, TrendlinesDirective, Inject, AxisModel, TooltipSettingsModel, ChartAreaModel, AccessibilityModel, LegendSettingsModel, Trendlines, ScatterSeries, LineSeries, Tooltip, Legend } from '@syncfusion/ej2-react-charts';

function App() {

  const series1: Object[] = [];
  const yValue: number[] = [7.66, 8.03, 8.41, 8.97, 8.77, 8.20, 8.16, 7.89, 8.68, 9.48, 10.11, 11.36, 12.34, 12.60, 12.95, 13.91, 16.21, 17.50, 22.72, 28.14, 31.26, 31.39, 32.43, 35.52, 36.36,
    41.33, 43.12, 45.00, 47.23, 48.62, 46.60, 45.28, 44.01, 45.17, 41.20, 43.41, 48.32, 45.65, 46.61, 53.34, 58.53];
  function chartLoad(): void {
    let i: number;
    let j: number = 0;
    for (i = 1973; i <= 2013; i++) {
      series1.push({ x: i, y: yValue[j] });
      j++;
    }
  }
  const primaryxAxis: AxisModel = { title: 'Months' };
  const primaryyAxis: AxisModel = { title: 'Rupees against Dollars', interval: 5 };
  const tooltip: TooltipSettingsModel = { enable: true };
  const chartarea: ChartAreaModel = { border: { width: 0 } };
  const accessibility: AccessibilityModel = {
    accessibilityDescription: 'A linear trendline representing the general trend of the historical Indian Rupee rate against the US Dollar.',
    accessibilityRole: 'line'
  };
  const legendSettings: LegendSettingsModel = { visible: false };

  chartLoad();
  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      tooltip={tooltip}
      chartArea={chartarea}
      legendSettings={legendSettings}
      title='Historical Indian Rupee Rate (INR USD)'>
      <Inject services={[Trendlines, ScatterSeries, LineSeries, Tooltip, Legend]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={series1} xName='x' yName='y' name='Apple Inc' type='Scatter' fill='#0066FF'>
          <TrendlinesDirective>
            <TrendlineDirective type='Linear' accessibility={accessibility}>
            </TrendlineDirective>
          </TrendlinesDirective>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



