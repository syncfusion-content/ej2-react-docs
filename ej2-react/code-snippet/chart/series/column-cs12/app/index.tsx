

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel,Category,ChartComponent, ColumnSeries, Inject, LineSeries,
SeriesCollectionDirective, SeriesDirective  } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {

  const primaryxAxis: AxisModel = { valueType: 'Category' };

  return <ChartComponent id='charts' primaryXAxis={primaryxAxis}>
      <Inject services={[ColumnSeries, LineSeries, ColumnSeries, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='month' type='Column' yName='sales' name='Sales' />
        <SeriesDirective dataSource={data} xName='month' type='Line' yName='sales' name='Sales' />
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



