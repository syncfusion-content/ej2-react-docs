

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, AxisModel, TooltipSettingsModel, LegendSettingsModel, AccessibilityModel, LineSeries, Tooltip, Legend, Category, DataLabel } from'@syncfusion/ej2-react-charts';
import { chartData } from './datasource';

function App() {

  const primaryxAxis: AxisModel = { valueType: 'Category' };
  const primaryyAxis: AxisModel = { labelFormat: '${value}K' };
  const tooltip: TooltipSettingsModel = { enable: true };
  const legendSettings: LegendSettingsModel = { visible: true };
  const accessibility: AccessibilityModel = {
    accessibilityDescription: 'A line chart displaying the sales analysis for each month.',
    accessibilityRole: 'chart'
  };
  const marker = { visible: true, dataLabel: { visible: true } };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      tooltip={tooltip}
      legendSettings={legendSettings}
      accessibility={accessibility}
      focusBorderColor='#FF0000'
      focusBorderWidth={3}
      focusBorderMargin={5}
      title='Sales Analysis'>
      <Inject services={[LineSeries, Tooltip, Legend, Category, DataLabel]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={chartData} xName='month' yName='sales' name='Sales' type='Line' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


