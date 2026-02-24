

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, SplineRangeAreaSeries, Legend } from '@syncfusion/ej2-react-charts';
import { splineRangeData } from './datasource';

function App() {

  const primaryxAxis = {
    valueType: 'Category',
    title: 'Month',
    edgeLabelPlacement: 'Shift',
    majorGridLines: { width: 0 }
  };
  const primaryyAxis = {
    title: 'Temperature',
    labelFormat: '{value}˚C',
    lineStyle: { width: 0 },
    minimum: 0,
    maximum: 40,
    majorTickLines: { width: 0 }
  };
  const border = { width: 2, color: '#ff4251', dashArray: '5,5' };
  const border1 = { width: 2, color: '#4C4C4C', dashArray: '5,5' };
  return <ChartComponent id='charts'
    primaryXAxis={primaryxAxis}
    primaryYAxis={primaryyAxis}
    title='Monthly Temperature Range'>
    <Inject services={[SplineRangeAreaSeries, Category, Legend]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={splineRangeData} xName='x' high='high' low='low' name='England' border={border} type='SplineRangeArea'>
      </SeriesDirective>
      <SeriesDirective dataSource={splineRangeData} xName='x' high='high1' low='low1' name='India' border={border1} type='SplineRangeArea'>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


