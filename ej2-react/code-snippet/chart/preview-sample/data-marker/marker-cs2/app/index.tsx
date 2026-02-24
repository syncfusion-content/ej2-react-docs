



import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
  Legend, Category, Tooltip, DataLabel, LineSeries, MarkerSettingsModel
} from '@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {
  const primaryxAxis: AxisModel = { title: 'Month', valueType: 'Category' };
  const primaryyAxis: AxisModel = {
    title: 'Temperature (°C)', rangePadding: 'None', labelFormat: '{value}°C',
    minimum: 0, maximum: 100
  };
  const marker: MarkerSettingsModel = {
    visible: true, width: 10, height: 10, shape: 'Image',
    imageUrl: './sun_annotation.png'
  };

  return <ChartComponent id='charts'
    primaryXAxis={primaryxAxis}
    primaryYAxis={primaryyAxis}
    title='Temperature flow over months'>
    <Inject services={[LineSeries, Legend, Tooltip, DataLabel, Category]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={data} xName='x' yName='y' width={2} name='India'
        type='Line' marker={marker}>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


