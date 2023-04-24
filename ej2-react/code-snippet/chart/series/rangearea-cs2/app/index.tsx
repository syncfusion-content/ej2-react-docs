

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, RangeAreaSeries, Selection}
from'@syncfusion/ej2-react-charts';
import { data } from 'datasource.ts';

function App() {

  const marker = { visible: true, width: 10, height: 10, border: { width: 2, color: '#F8AB1D' } };

  return <ChartComponent id='charts'>
      <Inject services={[RangeAreaSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' high='high' low='low' width={3}
          name='India' type='RangeArea'
          marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


