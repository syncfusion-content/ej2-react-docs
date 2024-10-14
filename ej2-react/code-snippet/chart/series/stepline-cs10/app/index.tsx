

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, StepLineSeries, ISeriesRenderEventArgs}
from'@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {

  const marker = { visible: true, width: 10, height: 10, border: { width: 2, color: '#F8AB1D' } };
  const seriesRender = (args: ISeriesRenderEventArgs) => {
    args.fill = '#ff6347';
};
  return <ChartComponent id='charts' seriesRender={seriesRender}>
      <Inject services={[StepLineSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y'
          type='StepLine' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


