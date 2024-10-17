{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, SplineAreaSeries,
         Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, SplineSeries, ISeriesRenderEventArgs}
from'@syncfusion/ej2-react-charts';
import { splineData } from './datasource';

function App() {

  const primaryxAxis: AxisModel = { title: 'Month', valueType: 'Category' };
  const seriesRender = (args: ISeriesRenderEventArgs) => {
    args.fill = '#ff6347';
  };
  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis} seriesRender={seriesRender}>
      <Inject services={[SplineAreaSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={splineData} xName='x' yName='y' name='London' type='SplineArea' marker={{ visible: true, width: 10, height: 10 }}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}