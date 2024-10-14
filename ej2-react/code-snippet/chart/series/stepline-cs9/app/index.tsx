

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, StepLineSeries, Selection}
from'@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {

  const marker = { visible: true, width: 10, height: 10, border: { width: 2, color: '#F8AB1D' } };
  const emptyPoint: object = { mode: 'Gap', color: 'red', border: {width: 2, color: 'green'} };
  return <ChartComponent id='charts'>
      <Inject services={[StepLineSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' emptyPointSettings={emptyPoint}
          type='StepLine' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


