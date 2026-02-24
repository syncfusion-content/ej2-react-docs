

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, StackingBarSeries } from '@syncfusion/ej2-react-charts';
import { cylindricalData } from './datasource';
function App() {
  return <ChartComponent id='charts'>
    <Inject services={[StackingBarSeries, Legend, Tooltip, DataLabel, Category]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={cylindricalData} xName='x' yName='y' type='StackingBar100' columnFacet='Cylinder'>
      </SeriesDirective>
      <SeriesDirective dataSource={cylindricalData} xName='x' yName='y1' type='StackingBar100' columnFacet='Cylinder'>
      </SeriesDirective>
      <SeriesDirective dataSource={cylindricalData} xName='x' yName='y2' type='StackingBar100' columnFacet='Cylinder'>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

