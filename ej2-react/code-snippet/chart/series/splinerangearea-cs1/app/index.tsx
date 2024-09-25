{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, SplineRangeAreaSeries} from'@syncfusion/ej2-react-charts';
import { splineRangeData } from './datasource';

function App() {
  
  const primaryxAxis: AxisModel = {
    valueType: 'Category',
    edgeLabelPlacement: 'Shift',
    majorGridLines: { width: 0 }
  };
  const primaryyAxis: AxisModel = {
    labelFormat: '{value}˚C',
    lineStyle: { width: 0 },
    minimum: 0, maximum: 40,
    majorTickLines: { width: 0 }
  };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Monthly Temperature Range'>
      <Inject services={[SplineRangeAreaSeries, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={splineRangeData} xName='x' high='high' low='low' name='England' fill='url(#gradient1)' type='SplineRangeArea'>
        </SeriesDirective>
        <SeriesDirective dataSource={splineRangeData} xName='x' high='high1' low='low1' name='India' fill='url(#gradient2)' type='SplineRangeArea'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
