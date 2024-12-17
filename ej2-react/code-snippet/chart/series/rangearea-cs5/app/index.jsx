{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, RangeAreaSeries } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {
  const border = { width: 2, color: 'red', dashArray: '5,5' };
  const primaryXAxis = {
    valueType: 'Category',
    title: 'Month',
    edgeLabelPlacement: 'Shift',
    majorGridLines: { width: 0 }
  };
  const primaryYAxis = {
    title: 'Temperature',
    labelFormat: '{value}˚C',
    lineStyle: { width: 0 },
    minimum: 0,
    maximum: 30,
    majorTickLines: { width: 0 }
  };

  return <ChartComponent id='charts' primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} title='Monthly Temperature Range'>
    <Inject services={[RangeAreaSeries, Category]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={data} xName='x' high='low' low='high' type='RangeArea' border={border}>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}