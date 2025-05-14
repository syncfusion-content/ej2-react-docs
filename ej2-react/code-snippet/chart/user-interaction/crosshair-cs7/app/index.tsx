{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel,ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, SeriesDirective, Inject, ColumnSeries, Legend, Category, Crosshair} from'@syncfusion/ej2-react-charts';
import { chartData } from './datasource';
function App() {

  const primaryxAxis: AxisModel = { valueType: 'Category', title: 'Countries' };
  return <ChartComponent id='charts' primaryXAxis={primaryxAxis}
    crosshair={{ enable: true, line: { color: 'red' }, lineType: 'Vertical', highlightCategory: true }}
      title='Olympic Medals'>
      <Inject services={[ColumnSeries, Legend, Category, Crosshair]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={chartData} xName='country' yName='gold' type='Column'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

<<<<<<< HEAD
{% endraw %}
=======

{% endraw %}
>>>>>>> 254cf0c7df3b045080748c4bc063b2ca00d89b31
