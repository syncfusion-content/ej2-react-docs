{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, RangeAreaSeries } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
  const pointRender = (args) => {
    if (args.point.index % 2 !== 0) {
      args.fill = '#ff6347';
  }
  else {
      args.fill = '#009cb8';
  }
  }
    return <ChartComponent id='charts' pointRender={pointRender}>
       <Inject services={[RangeAreaSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' high='low' low='high' marker={{visible: true}}
          type='RangeArea'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}