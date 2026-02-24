

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, ScatterSeries, Marker}
from'@syncfusion/ej2-react-charts';
import { scatterData } from './datasource';

function App() {
  const primaryxAxis: AxisModel = {
    title: 'Height (cm)', minimum: 130, maximum: 180,
    edgeLabelPlacement: 'Shift', labelFormat: '{value}cm'
  };
  const primaryyAxis: AxisModel = {
    title: 'Weight (kg)', minimum: 30, maximum: 100,
    labelFormat: '{value}kg', rangePadding: 'None'
  };
  const marker = { width: 15, height: 15 };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Height Vs Weight'>
      <Inject services={[ScatterSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={scatterData} xName='height' yName='male' name='Male' type='Scatter'
          marker={marker}>
        </SeriesDirective>
        <SeriesDirective dataSource={scatterData} xName='height' yName='female' name='Female' type='Scatter'
          marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


