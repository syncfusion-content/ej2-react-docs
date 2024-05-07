

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, SeriesDirective, Inject, StripLine,AxisModel, ColumnSeries, Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, LineSeries,  Selection, StripLinesDirective, StripLineDirective} from'@syncfusion/ej2-react-charts';

function App() {

  const data: any[] = [
    { x: 1, y: 20 }, { x: 2, y: 22 }, { x: 3, y: 0 }, { x: 4, y: 12 }, { x: 5, y: 5 },
    { x: 6, y: 15 }, { x: 7, y: 6 }, { x: 8, y: 12 }, { x: 9, y: 34 }, { x: 10, y: 7 },
  ];
  const primaryxAxis: AxisModel = { title: 'Overs' };
  const primaryyAxis: AxisModel = { title: 'Runs', stripLines: [{ start: 15, end: 15.1, color: '#ff512f', visible: true }] };
  const marker = { visible: true };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='India Vs Australia 1st match' width='650' height='350'>
      <Inject services={[LineSeries, Legend, Tooltip, DataLabel, Category, StripLine]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' type='Line' Marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



