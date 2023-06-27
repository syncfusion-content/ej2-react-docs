


import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LegendSettingsModel, ZoomSettingsModel,
  Legend, DateTime, Tooltip, DataLabel, AreaSeries, Zoom, ScrollBar
}
  from '@syncfusion/ej2-react-charts';

function App() {

  const primaryxAxis: AxisModel = { valueType: 'DateTime', zoomFactor: 0.2, zoomPosition: 0.6, scrollbarSettings: { enable: true, enableZoom: false, height: 14, trackRadius: 8, scrollbarRadius: 8, gripColor: 'transparent', trackColor: 'yellow', scrollbarColor: 'red' } };
  const legendSettings: LegendSettingsModel = { visible: false };
  const zoomsettings: ZoomSettingsModel = { enableSelectionZooming: true, enableScrollbar: true };
  const border = { width: 0.5, color: '#00bdae' };
  const animation = { enable: false };
  const zoomData: Object[] = [
    { x: new Date(2016, 0, 1), y: 7.1 }, { x: new Date(2016, 1, 1), y: 3.7 },
    { x: new Date(2016, 2, 1), y: 0.8 }, { x: new Date(2016, 3, 1), y: 6.3 },
    { x: new Date(2016, 4, 1), y: 13.3 }, { x: new Date(2016, 5, 1), y: 18.0 },
    { x: new Date(2016, 6, 1), y: 19.8 }, { x: new Date(2016, 7, 1), y: 18.1 },
    { x: new Date(2016, 8, 1), y: 13.1 }, { x: new Date(2016, 9, 1), y: 4.1 },
    { x: new Date(2016, 10, 1), y: -3.8 }, { x: new Date(2016, 11, 1), y: -6.8 }
  ];

  return <ChartComponent id='charts'
    primaryXAxis={primaryxAxis}
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



