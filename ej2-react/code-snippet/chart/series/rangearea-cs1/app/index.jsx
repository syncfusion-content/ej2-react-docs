import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, SplineRangeAreaSeries } from '@syncfusion/ej2-react-charts';
import { data } from 'datasource.ts';
function App() {
    const border = { width: 2, color: 'brown'};
    return <ChartComponent id='charts'>
       <Inject services={[RangeAreaSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' high='low' low='high' fill='yellow' opacity='0.6' dashArray='5,5'
          type='RangeArea'
          border={border}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
