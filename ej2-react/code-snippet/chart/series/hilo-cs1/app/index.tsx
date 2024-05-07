{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,LegendSettingsModel,
    HiloSeries, Category, Tooltip, ILoadedEventArgs, Zoom,
    Crosshair, ChartTheme }
from'@syncfusion/ej2-react-charts';

function App() {

  const chartData: any[] = [
    { x: 'Jan', low: 87, high: 200 }, { x: 'Feb', low: 45, high: 135 },
    { x: 'Mar', low: 19, high: 85 }, { x: 'Apr', low: 31, high: 108 },
    { x: 'May', low: 27, high: 80 }, { x: 'June', low: 84, high: 130 },
    { x: 'July', low: 77, high: 150 }, { x: 'Aug', low: 54, high: 125 },
    { x: 'Sep', low: 60, high: 155 }, { x: 'Oct', low: 60, high: 180 },
    { x: 'Nov', low: 88, high: 180 }, { x: 'Dec', low: 84, high: 230 }
  ];
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
          high='high'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
