{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, RangeAreaSeries } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
  const emptyPoint = { mode: 'Average', fill: 'red', border: { width: 1.5, fill: 'green' } };
  const marker = { visible: true };
    return <ChartComponent id='charts'>
       <Inject services={[RangeAreaSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' high='low' low='high' emptyPointSettings={emptyPoint} marker={marker}
          type='RangeArea'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}