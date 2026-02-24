

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, LineSeries } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
  const primaryxAxis = { title: 'Month', valueType: 'Category' };
  const primaryyAxis = {
    title: 'Temperature (°C)', rangePadding: 'None', labelFormat: '{value}°C',
    minimum: 0, maximum: 100
  };
  const marker = {
    visible: true, width: 10, height: 10, shape: 'Image',
    imageUrl: './sun_annotation.png'
  };
  return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Temperature flow over months'>
    <Inject services={[LineSeries, Legend, Tooltip, DataLabel, Category]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={data} xName='x' yName='y' width={2} name='India' type='Line' marker={marker}>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
