{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel,Category,ChartComponent, ColumnSeries, DataLabel,
  Inject, Legend,LineSeries, SeriesCollectionDirective, SeriesDirective,
  Tooltip} from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
  const primaryxAxis: AxisModel = { valueType: 'Category' };

  return <ChartComponent id='charts' primaryXAxis={primaryxAxis} width='80%' height='90%'>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='month' yName='sales' type='Column' name='Sales' />
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
