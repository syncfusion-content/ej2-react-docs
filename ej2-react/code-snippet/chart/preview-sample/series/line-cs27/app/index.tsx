

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import type { AxisModel } from "@syncfusion/ej2-react-charts";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, BarSeries }
from'@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {

  const primaryxAxis: AxisModel = { minimum: 2005, maximum: 2012, interval: 1, title: 'Year' };
  const primaryyAxis: AxisModel = {
    title: 'Percentage',
    labelFormat: '{value}%'
  };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Unemployment rate (%)'>
      <Inject services={[BarSeries]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' name='India' type='Bar'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
const root = ReactDOM.createRoot(document.getElementById('charts') as HTMLElement);
root.render(<App />);


