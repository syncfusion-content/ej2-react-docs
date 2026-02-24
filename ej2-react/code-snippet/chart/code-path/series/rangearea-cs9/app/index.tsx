{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, RangeAreaSeries, ISeriesRenderEventArgs}
from'@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {
  const seriesRender = (args: ISeriesRenderEventArgs) => {
    args.fill = '#ff6347';
  }
  
  return <ChartComponent id='charts' seriesRender={seriesRender}>
      <Inject services={[RangeAreaSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' high='low' low='high'
          type='RangeArea'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
