{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, BarSeries } from '@syncfusion/ej2-react-charts';
import { customData } from './datasource';
function App() {
    const primaryxAxis = { minimum: 2005, maximum: 2012, interval: 1, title: 'Year' };
    const primaryyAxis = {
        minimum: 3, maximum: 12, interval: 1, title: 'Percentage',
        labelFormat: '{value}%'
    };
    const pointRender = (args) => {
      if (args.point.y < 7.5) {
        args.fill = '#ff6347';
      } else {
        args.fill = '#009cb8';
      }
    };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Unemployment rate (%)'  pointRender={pointRender}>
      <Inject services={[BarSeries]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={customData} xName='x' yName='y' type='Bar'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
const root = ReactDOM.createRoot(document.getElementById('charts'));
root.render(<App />);

{% endraw %}