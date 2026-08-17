{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import type { AxisModel, IPointRenderEventArgs } from "@syncfusion/ej2-react-charts";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Category, ColumnSeries }
from '@syncfusion/ej2-react-charts';
import type { EmitType } from '@syncfusion/ej2-base';
import { columnData } from './datasource';

function App() {

  const primaryxAxis: AxisModel = { valueType: 'Category', title: 'Countries' };
  const primaryyAxis: AxisModel = { minimum: 0, maximum: 80, interval: 20, title: 'Medals' };
  const pointRender: EmitType<IPointRenderEventArgs> = (args: IPointRenderEventArgs): void => {
    if (args.point.index === 1) {
      args.cornerRadius = { topLeft: 10, bottomLeft: 0, topRight: 10, bottomRight: 0 };
  }
  if (args.point.index === 4) {
      args.cornerRadius = { topLeft: 10, bottomLeft: 0, topRight: 10, bottomRight: 0 };
  }
  };
  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Olympic Medals'
      pointRender={pointRender}>
      <Inject services={[ColumnSeries, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={columnData} xName='country' yName='gold' type='Column'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
const root = ReactDOM.createRoot(document.getElementById('charts') as HTMLElement);
root.render(<App />);

{% endraw %}
