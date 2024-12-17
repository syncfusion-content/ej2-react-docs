{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, DateTime, Tooltip, StepLineSeries } from'@syncfusion/ej2-react-charts';
import {chartData} from './datasource';

function App() {

  const primaryxAxis = { 
    title: 'Years',
    lineStyle: { width: 0 },
    labelFormat: 'y',
    intervalType: 'Years',
    valueType: 'DateTime',
    edgeLabelPlacement: 'Shift'
  };
  const primaryyAxis = { 
    title: 'Percentage (%)',
    minimum: 0, 
    maximum: 20, 
    interval: 4,
    labelFormat: '{value}%'
  };
  const tooltip = { enable: true, enableHighlight: true };
  const legendSettings = { visible: true };
  const marker = { visible: true, width: 10, height: 10 };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      tooltip={tooltip}
      legendSettings={legendSettings}
      title='Unemployment Rates 1975-2010'>
      <Inject services={[StepLineSeries, Legend, Tooltip, DateTime]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={chartData} xName='x' yName='y' type='StepLine' name='China' width={2} marker={marker}>
        </SeriesDirective>
        <SeriesDirective dataSource={chartData} xName='x' yName='y1' type='StepLine' name='Australia' width={2} marker={marker}>
        </SeriesDirective>
        <SeriesDirective dataSource={chartData} xName='x' yName='y2' type='StepLine' name='Japan' width={2} marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}