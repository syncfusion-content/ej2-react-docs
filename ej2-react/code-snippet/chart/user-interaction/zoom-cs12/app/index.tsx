{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LegendSettingsModel, ZoomSettingsModel,
  Legend, DateTime, Tooltip, DataLabel, AreaSeries, Zoom, ScrollBar
}
  from '@syncfusion/ej2-react-charts';
import { zoomData } from './datasource';

function App() {

  const primaryxAxis: AxisModel = { valueType: 'DateTime', zoomFactor: 0.2, zoomPosition: 0.6, 
    scrollbarSettings: {
    enable: true,
    enableZoom: false,
    height: 14,
    trackRadius: 8,
    scrollbarRadius: 8,
    gripColor: 'transparent',
    trackColor: 'yellow',
    scrollbarColor: 'red',
    position:'Bottom',
}};
  const primaryYAxis: AxisModel = {
    scrollbarSettings: {
      enable: true,
      enableZoom: false,
      height: 14,
      trackRadius: 8,
      scrollbarRadius: 8,
      gripColor: 'transparent',
      trackColor: 'yellow',
      scrollbarColor: 'red',
      position:'Right',
  }
  }
  const legendSettings: LegendSettingsModel = { visible: false };
  const zoomsettings: ZoomSettingsModel = { enableSelectionZooming: true, enableScrollbar: true };
  const border = { width: 0.5, color: '#00bdae' };
  const animation = { enable: false };

  return <ChartComponent id='charts'
    primaryXAxis={primaryxAxis}
    primaryYAxis = {primaryYAxis}
    legendSettings={legendSettings}
    zoomSettings={zoomsettings}
    title='Sales History of Product X'>
    <Inject services={[AreaSeries, Legend, Tooltip, DataLabel, Zoom, DateTime, ScrollBar]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={zoomData} xName='x' yName='y' name='Product X' opacity={0.3} type='Area'
        border={border} animation={animation}>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



{% endraw %}