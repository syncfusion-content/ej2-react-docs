{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
  Legend, DateTime, Tooltip, DataLabel, LineSeries
}
  from '@syncfusion/ej2-react-charts';

function App() {

  const primaryxAxis: AxisModel = { valueType: 'DateTime' };
  const marker = { visible: true };
  const data: any[] = [
    { x: new Date(2016, 0, 1), y: -7.1, y1: -3.5 }, { x: new Date(2016, 1, 1), y: -3.7, y1: 0 },
    { x: new Date(2016, 2, 1), y: 0.8, y1: 5 }, { x: new Date(2016, 3, 1), y: 6.3, y1: 10.3 },
    { x: new Date(2016, 4, 1), y: 13.3, y1: 18.3 }, { x: new Date(2016, 5, 1), y: 18.0, y1: 21 },
    { x: new Date(2016, 6, 1), y: 19.8, y1: 23.5 }, { x: new Date(2016, 7, 1), y: 18.1, y1: 21.3 },
    { x: new Date(2016, 8, 1), y: 13.1, y1: 16.3 }, { x: new Date(2016, 9, 1), y: 4.1, y1: 9 },
    { x: new Date(2016, 10, 1), y: -3.8, y1: -1.8 }, { x: new Date(2016, 11, 1), y: -6.8, y1: -3.8 }
  ];

  return <ChartComponent id='charts'
    primaryXAxis={primaryxAxis}>
    <Inject services={[LineSeries, Legend, Tooltip, DataLabel, DateTime]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={data} xName='x' yName='y'
        type='Line' marker={marker}>
      </SeriesDirective>
      <SeriesDirective dataSource={data} xName='x' yName='y1'
        type='Line' marker={marker}>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}