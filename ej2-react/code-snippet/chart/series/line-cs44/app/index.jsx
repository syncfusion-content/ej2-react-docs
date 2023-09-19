{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, StackingColumnSeries } from '@syncfusion/ej2-react-charts';
import { cylindricalData } from 'datasource.ts';
function App() {
  const primaryxAxis = { title: 'Years', interval: 1, valueType: 'DateTime', labelFormat: 'y' };
  const primaryyAxis = { title: 'GDP (%) Per Annum', rangePadding: 'None', labelFormat: '{value}%' };
  return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Gross Domestic Product Growth'>
    <Inject services={[StackingColumnSeries, Legend, Tooltip, DataLabel, Category]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={cylindricalData} xName='x' yName='y' name='UK' type='StackingColumn100' columnFacet='Cylinder'>
      </SeriesDirective>
      <SeriesDirective dataSource={cylindricalData} xName='x' yName='y1' name='Germany' type='StackingColumn100' columnFacet='Cylinder'>
      </SeriesDirective>
      <SeriesDirective dataSource={cylindricalData} xName='x' yName='y2' name='France' type='StackingColumn100' columnFacet='Cylinder'>
      </SeriesDirective>
      <SeriesDirective dataSource={cylindricalData} xName='x' yName='y3' name='Italy' type='StackingColumn100' columnFacet='Cylinder'>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}