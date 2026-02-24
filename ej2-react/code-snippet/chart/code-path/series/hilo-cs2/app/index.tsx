{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,LegendSettingsModel,
    HiloSeries, Category, Tooltip, ILoadedEventArgs, Zoom,
    Crosshair, ChartTheme }
from'@syncfusion/ej2-react-charts';
import { chartData } from './datasource';

function App() {
  const primaryxAxis: AxisModel = { valueType: 'Category', title: 'Months' };
  const primaryyAxis: AxisModel = { labelFormat: '{value}mm', edgeLabelPlacement: 'Shift', title: 'Rainfall' };
  const style: any = { textAlign: "center" };
  const legendSettings: LegendSettingsModel = { visible: false };

  return <ChartComponent id='charts' style={style}
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      legendSettings={legendSettings}
      title='Maximum and Minimum Rainfall'>
      <Inject services={[HiloSeries, Tooltip, Category, Crosshair, Zoom]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={chartData} xName='x' yName='low' name='India' type='Hilo' low='low'
          high='high' fill='blue'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
