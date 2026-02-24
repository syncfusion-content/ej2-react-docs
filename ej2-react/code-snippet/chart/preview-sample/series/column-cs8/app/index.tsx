

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel,Category,ChartComponent, ColumnSeries, Inject, Legend, LineSeries,
SeriesCollectionDirective, SeriesDirective  } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {

  const primaryxAxis: AxisModel = { valueType: 'Category' };

  return <ChartComponent id='charts' primaryXAxis={primaryxAxis}>
      <Inject services={[ColumnSeries, Legend, LineSeries, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='month' type='Column' yName='sales' name='Sales' />
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


