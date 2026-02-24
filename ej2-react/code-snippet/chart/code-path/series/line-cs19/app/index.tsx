{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, MultiColoredAreaSeries, SegmentsDirective,
         Legend, StepAreaSeries, SegmentDirective }
from'@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {

  return <ChartComponent id='charts'>
      <Inject services={[StepAreaSeries, Legend, MultiColoredAreaSeries]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' name='England' type='MultiColoredArea' segmentAxis='X' >
          <SegmentsDirective>
            <SegmentDirective value={2007} color='blue'></SegmentDirective>
            <SegmentDirective value={2009} color='green'></SegmentDirective>
            <SegmentDirective color='orange'></SegmentDirective>
          </SegmentsDirective>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
