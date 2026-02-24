


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,LegendSettingsModel,ZoomSettingsModel,
         Legend, DateTime, Tooltip, DataLabel, AreaSeries,  Zoom}
from'@syncfusion/ej2-react-charts';
import { series1 } from "./datasource";

function App() {

  const primaryxAxis: AxisModel = {    valueType: 'DateTime',
  labelFormat: 'yMMM',
  zoomFactor: 0.2, zoomPosition: 0.6,
 };
  const legendSettings: LegendSettingsModel = { visible: false };
  const zoomSettings: ZoomSettingsModel = {    enableSelectionZooming: true, enableAnimation: true ,
    enablePan: true };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      legendSettings={legendSettings}
      zoomSettings={zoomSettings}
      title='Sales History of Product X'>
      <Inject services={[AreaSeries, Legend, Tooltip, DataLabel, Zoom, DateTime]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={series1}  type='Area' xName='x' yName='y' name='Product X' opacity={0.3} >
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



