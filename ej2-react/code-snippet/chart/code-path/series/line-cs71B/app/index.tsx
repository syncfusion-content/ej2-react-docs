{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, ColumnSeries,  Selection, IPointRenderEventArgs}
from'@syncfusion/ej2-react-charts';
import { EmitType } from '@syncfusion/ej2-base';
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
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={columnData} xName='country' yName='gold' type='Column'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
