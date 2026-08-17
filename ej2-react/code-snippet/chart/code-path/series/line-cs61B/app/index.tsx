{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import type { AxisModel, IPointRenderEventArgs } from "@syncfusion/ej2-react-charts";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, BarSeries }
from'@syncfusion/ej2-react-charts';
import { customData } from './datasource';
import type { EmitType } from '@syncfusion/ej2-base';

function App() {

  const primaryxAxis: AxisModel = { minimum: 2005, maximum: 2012, interval: 1, title: 'Year' };
  const primaryyAxis: AxisModel = {
    minimum: 3, maximum: 12, interval: 1, title: 'Percentage',
    labelFormat: '{value}%'
  };
  const pointRender: EmitType<IPointRenderEventArgs> = (args: IPointRenderEventArgs): void => {
    if (args.point.index === 1) {
      args.cornerRadius = { topLeft: 0, bottomLeft: 0, topRight: 10, bottomRight: 10 };
    }
    if (args.point.index === 4) {
      args.cornerRadius = { topLeft: 0, bottomLeft: 0, topRight: 10, bottomRight: 10 };
    }
  };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Unemployment rate (%)'
      pointRender={pointRender}>
      <Inject services={[BarSeries]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={customData} xName='x' yName='y' type='Bar'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
const root = ReactDOM.createRoot(document.getElementById('charts') as HTMLElement);
root.render(<App />);

{% endraw %}
