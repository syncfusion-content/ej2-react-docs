{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, SeriesDirective, Inject, StripLine,
ColumnSeries, Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, LineSeries,  Selection, StripLinesDirective, StripLineDirective}
from'@syncfusion/ej2-react-charts';
import { chartData } from './datasource';

function App() {

  const primaryyAxis: AxisModel = { stripLines:[
            {start: 20, end: 40, isSegmented: true, segmentStart: 2, segmentEnd: 4,
            color: 'rgba(167,169,171, 0.3)'}
        ]
  };
  const marker = { visible: true };

  return <ChartComponent id='charts'
       primaryYAxis={primaryyAxis}>
      <Inject services={[ColumnSeries,LineSeries, Legend, Tooltip, DataLabel, Category, StripLine]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={chartData} xName='x' yName='y' type='Line' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
