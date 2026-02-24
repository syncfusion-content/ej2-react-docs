{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, AreaSeries } from '@syncfusion/ej2-react-charts';
import { areaData } from './datasource';

function App() {
  const primaryxAxis = { title: 'Year', minimum: 1900, maximum: 2000, interval: 10, edgeLabelPlacement: 'Shift' };
  const primaryyAxis = { minimum: 2, maximum: 5, interval: 0.5, title: 'Sales Amount in Millions' };
  const border = { width: 2, color: '#962D18', dashArray: '5,5' };

  return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Average Sales Comparison'>
    <Inject services={[AreaSeries]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={areaData} xName='x' yName='y' fill='#69D2E7' type='Area' border={border}>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}