


import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, AxisModel, CrosshairSettingsModel, TooltipSettingsModel, LegendSettingsModel, Legend, DateTime, Tooltip, LineSeries, Crosshair } from'@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {

  const primaryxAxis: AxisModel = { 
    title: 'Years',
    minimum: new Date(2000, 1, 1), 
    maximum: new Date(2006, 2, 11),
    intervalType: 'Years',
    valueType: 'DateTime',
    lineStyle: { width: 0 },
    majorGridLines: { width: 0 },
    edgeLabelPlacement: 'Shift'
  };
  const primaryyAxis: AxisModel = { 
    title: 'Revenue in Millions',
    labelFormat: '{value}M',
    majorTickLines: { width: 0 },
    minimum: 10, maximum: 60,
    lineStyle: { width: 0 }
  };
  const crosshair: CrosshairSettingsModel = { 
    enable: true, 
    lineType: 'Horizontal', 
    snapToData: true
  };
  const tooltip: TooltipSettingsModel = { 
    enable: true, 
    shared: true, 
    format: '${series.name} : ${point.x} : ${point.y}' 
  };
  const marker = { visible: true };
  const legendSettings: LegendSettingsModel = { visible: false };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      crosshair={crosshair}
      tooltip={tooltip}
      legendSettings={legendSettings}
      title='Average Sales per Person'>
      <Inject services={[LineSeries, Legend, Tooltip, Crosshair, DateTime]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' name='John' type='Line' width={2} marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



