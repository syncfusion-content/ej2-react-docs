

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, LineSeries}
from'@syncfusion/ej2-react-charts';

function App() {

  const data: any[] = [
    { x: "Jan", y: 60 }, { x: "Feb", y: 50 },
    { x: "Mar", y: 64 }, { x: "Apr", y: 63 },
    { x: "May", y: 81 }, { x: "Jun", y: 64 },
    { x: "Jul", y: 82 }, { x: "Aug", y: 96 },
    { x: "Sep", y: 78 }, { x: "Oct", y: 60 },
    { x: "Nov", y: 58 }, { x: "Dec", y: 56 }
  ];
  const primaryxAxis: AxisModel = { title: 'Month', valueType: 'Category' };
  const primaryyAxis: AxisModel = {
    title: 'Temperature (°C)', rangePadding: 'None', labelFormat: '{value}°C',
    minimum: 0, maximum: 100
  };
  const marker = {
    visible: true, width: 10, height: 10, shape: 'Image',
    imageUrl: './sun_annotation.png'
  };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Temperature flow over months'>
      <Inject services={[LineSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' width={2} name='India'
          type='Line' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


