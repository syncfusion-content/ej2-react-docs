import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, DateTime, AreaSeries, Zoom } from'@syncfusion/ej2-react-charts';
import { series1 } from './datasource';
function App() {

  const primaryxAxis = { 
    title: 'Years',
    valueType: 'DateTime',
    labelFormat: 'yMMM',
    edgeLabelPlacement: 'Shift',
    majorGridLines : { width : 0 }
  };
  const primaryyAxis = { 
    title: 'Profit ($)',
    rangePadding: 'None',
    lineStyle : { width: 0 },
    majorTickLines : {width : 0}
  };
  const legendSettings = { visible: false };
  const zoomsettings = { 
    enableSelectionZooming: true,
    toolbarItems: ['Zoom', 'Pan', 'Reset'],
    showToolbar: true,
    toolbarPosition: {
      y: -10,
      draggable: true,
      horizontalAlignment: "Far",
      verticalAlignment: "Top"
    }
  };
  const chartarea = { border: { width: 0 } };
  const border = { width: 0.5, color: '#00bdae' };
  const animation = { enable: false };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      legendSettings={legendSettings}
      zoomSettings={zoomsettings}
      chartArea={chartarea}
      title='Sales History of Product X'>
      <Inject services={[AreaSeries, Legend, Zoom, DateTime]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={series1} xName='x' yName='y' name='Product X' opacity={0.3} type='Area' border={border} animation={animation}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));