{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, SplineAreaSeries,
         Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, SplineSeries, Selection}
from'@syncfusion/ej2-react-charts';
import { splineData } from 'datasource.ts';

function App() {

  const primaryxAxis: AxisModel = { title: 'Month', valueType: 'Category' };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}>
      <Inject services={[SplineAreaSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={splineData} xName='x' yName='y' width={2} name='London' type='SplineArea' fill='yellow' opacity='0.8' border={{width: 2, color:'brown'}} marker={{ visible: false, width: 10, height: 10 }} dashArray='5.5'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}