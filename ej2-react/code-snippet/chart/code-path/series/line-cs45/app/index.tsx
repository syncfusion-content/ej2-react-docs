{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import type { AxisModel } from "@syncfusion/ej2-react-charts";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, AreaSeries }
from'@syncfusion/ej2-react-charts';
import { areaData } from './datasource';

function App() {

  const primaryxAxis: AxisModel = {
    title: 'Year', minimum: 1900, maximum: 2000, interval: 10,
    edgeLabelPlacement: 'Shift'
  };
  const primaryyAxis: AxisModel = { minimum: 2, maximum: 5, interval: 0.5, title: 'Sales Amount in Millions' };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Average Sales Comparison'>
      <Inject services={[AreaSeries]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={areaData} xName='x' yName='y' name='Product A'
          opacity={0.5} type='Area'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
const root = ReactDOM.createRoot(document.getElementById('charts') as HTMLElement);
root.render(<App />);

{% endraw %}
