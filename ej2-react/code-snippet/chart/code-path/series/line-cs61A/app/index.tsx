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
  const primaryyAxis: AxisModel = { maximum: 12, interval: 1, title: 'Percentage',
    labelFormat: '{value}%'
  };
  const pointRender: EmitType<IPointRenderEventArgs> = (args: IPointRenderEventArgs): void => {
    if (args.point.y < 7.5) {
      args.fill = '#ff6347';
    } else {
      args.fill = '#009cb8';
    }
  };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Unemployment rate (%)'
      pointRender={pointRender}>
      <Inject services={[BarSeries]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={customData} xName='x' yName='y' type='Bar' cornerRadius={{ topRight: 10, bottomRight: 10 }} >
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
const root = ReactDOM.createRoot(document.getElementById('charts') as HTMLElement);
root.render(<App />);

{% endraw %}
