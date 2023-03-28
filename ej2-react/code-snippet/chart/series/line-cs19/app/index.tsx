

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, MultiColoredAreaSeries, SegmentsDirective,
         Legend, StepAreaSeries, SegmentDirective }
from'@syncfusion/ej2-react-charts';

function App() {

  const data: any[] = [{ x: 2005, y: 28 }, { x: 2006, y: 25 }, { x: 2007, y: 26 }, { x: 2008, y: 27 },
                        { x: 2009, y: 32 }, { x: 2010, y: 35 }, { x: 2011, y: 25 }]

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


