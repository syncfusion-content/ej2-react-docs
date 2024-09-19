

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Zoom, Legend, DateTime, Tooltip, DataLabel, LineSeries,  ILoadedEventArgs,AxisModel, ZoomSettingsModel, ScrollBar} from'@syncfusion/ej2-react-charts';
import {  EmitType } from '@syncfusion/ej2-base'
import { data } from './datasource';
 function App() {
  var chart1: ChartComponent;
  const zoomsettings: ZoomSettingsModel = {
    enableMouseWheelZooming: true,
    enablePinchZooming: true,
    enableSelectionZooming: true,
    mode: 'X',
    enableScrollbar: true,
  };
  const primaryxAxis: AxisModel = {  zoomFactor: 0.3,
            valueType: 'DateTime',
            labelFormat: 'y',
            intervalType: 'Years',
            edgeLabelPlacement:'Shift'};
  const primaryyAxis: AxisModel = { minimum: 0, maximum: 100, interval: 10 };
  const marker = { visible: true, dataLabel: { visible: true } };
  const load: EmitType<ILoadedEventArgs> = (args: ILoadedEventArgs): void => {
      args.chart.zoomModule.isZoomed = true;
  };

    return <ChartComponent id='charts'
      ref={chart => chart1 = chart}
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      zoomSettings={zoomsettings}
      title='Inflation - Consumer Price'
      load={load} >
      <Inject services={[LineSeries, Legend, Tooltip, DataLabel, DateTime, ScrollBar,Zoom]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' width={2} name='Germany'
          type='Line' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


