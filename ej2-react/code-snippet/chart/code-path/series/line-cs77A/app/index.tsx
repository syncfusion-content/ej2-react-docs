{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, LineSeries, Selection}
from'@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {
  const emptyPoints: object = { mode: 'Average', fill: 'red', border: {width: 1.5, color: 'green'} };
  const marker = {
    visible: true,
    width: 10,
    height: 10,
    border: { width: 2, color: '#F8AB1D' },
  };
  return <ChartComponent id='charts'>
      <Inject services={[LineSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' emptyPointSettings={emptyPoints} type='Line' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
