



import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, SeriesDirective, Inject, StripLine,
ColumnSeries, Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, LineSeries,  Selection, StripLinesDirective, StripLineDirective}
from'@syncfusion/ej2-react-charts';
import { stripData } from './datasource';

function App() {

  const primaryxAxis: AxisModel = {
    title: 'Overs', stripLines: [
      {
        startFromOrigin: true, size: 4, zIndex: 'Behind', opacity: 0.5, verticalAlignment: 'Middle', horizontalAlignment: 'End', rotation: 90,
        textStyle: { size: 15 }
      }, { start: 5, end: 8, verticalAlignment: 'Start', horizontalAlignment: 'End', rotation: 45 }]
  };
  const primaryyAxis: AxisModel = { title: 'Runs' };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='India Vs Australia 1st match'>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category, StripLine]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={stripData} xName='x' yName='y' type='Column'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


