{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, AreaSeries, Legend, Zoom, DateTime } from'@syncfusion/ej2-react-charts';

function App() {

  let series1 = [];
  let point1;
  let value = 40;
  function chartLoad() {
    let i;
    for (i = 1; i < 500; i++) {
      if (Math.random() > .5) {
        value += Math.random();
      } else {
        value -= Math.random();
      }
      point1 = { x: new Date(1950, i + 2, i), y: value.toFixed(1) };
      series1.push(point1);
    }
  }

  const primaryxAxis = { valueType: 'DateTime' };
  const legendSettings = { visible: false };
  const zoomsettings = {
    enableMouseWheelZooming: true,
    enablePinchZooming: true,
    enableSelectionZooming: true,
    accessibility: {
      accessibilityDescription: 'This allows users to zoom in and out of the chart using mouse wheel, pinch gestures, or selection box.',
      accessibilityRole: 'zoom'
    }
  };
  const border = { width: 0.5, color: '#00bdae' };
  const animation = { enable: false };

  chartLoad();
  return <ChartComponent id='charts' primaryXAxis={primaryxAxis} legendSettings={legendSettings} zoomSettings={zoomsettings} title='Sales History of Product X'>
          <Inject services={[AreaSeries, Legend, Zoom, DateTime]} />
          <SeriesCollectionDirective>
            <SeriesDirective dataSource={series1} xName='x' yName='y' name='Product X' type='Area' border={border} animation={animation}>
            </SeriesDirective>
          </SeriesCollectionDirective>
         </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}