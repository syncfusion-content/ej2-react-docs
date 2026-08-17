{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import type { AxisModel } from "@syncfusion/ej2-react-charts";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, BarSeries }
from'@syncfusion/ej2-react-charts';
import { cylindricalData } from './datasource';

function App() {

  const primaryxAxis: AxisModel = { minimum: 2005, maximum: 2012, interval: 1 };
  const primaryyAxis: AxisModel = {
    minimum: 3, 
    maximum: 12,
    interval: 1,
    title: 'Percentage'
  };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Unemployment rate in percentage'>
      <Inject services={[BarSeries, Legend]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={cylindricalData} xName='x' yName='y' name='India' type='Bar' columnFacet='Cylinder'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
const root = ReactDOM.createRoot(document.getElementById('charts') as HTMLElement);
root.render(<App />);

{% endraw %}
