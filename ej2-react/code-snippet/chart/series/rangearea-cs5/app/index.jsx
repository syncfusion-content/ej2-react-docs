import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, RangeAreaSeries } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
  const border = { width: 2, color: 'brown' };
    return <ChartComponent id='charts'>
       <Inject services={[RangeAreaSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' high='low' low='high' border={border} dashArray='2,5'
          type='RangeArea'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
