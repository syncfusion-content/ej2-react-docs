{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, BarSeries,  Selection, ISeriesRenderEventArgs}
from'@syncfusion/ej2-react-charts';
import { customData } from './datasource';
import { EmitType } from '@syncfusion/ej2-base';

function App() {

  const primaryxAxis: AxisModel = { minimum: 2005, maximum: 2012, interval: 1, title: 'Year' };
  const primaryyAxis: AxisModel = {
    minimum: 3, maximum: 12, interval: 1, title: 'Percentage',
    labelFormat: '{value}%'
  };
  const seriesRender: EmitType<ISeriesRenderEventArgs> = (args: ISeriesRenderEventArgs): void => {
      args.fill = '#ff6347';
  };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Unemployment rate (%)' seriesRender={seriesRender}>
      <Inject services={[BarSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={customData} xName='x' yName='y' type='Bar'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
