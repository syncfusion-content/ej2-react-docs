

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DataLabel, Tooltip } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {
  const primaryXAxis = { edgeLabelPlacement: 'Shift', rangePadding: 'Additional', majorGridLines: { width: 0 } };
  const primaryYAxis = { title: 'Value', interval: 20, lineStyle: { width: 0 }, majorTickLines: { width: 0 } };
  const marker = {
    visible: true,
    isFilled: true,
    border: {
      width: 2,
      color: 'White'
    },
    width: 13,
    height: 13
  };
  const tooltip = { enable: true };
  let chartInstance;
  const axisRangeCalculated = (args) => {
    if (args.axis.name === 'primaryXAxis') {
      if (args.interval < 10) {
        args.maximum = args.maximum + 10;
        args.minimum = args.minimum - 10;
        args.interval = 10;
      }
    }
    if (args.axis.name === 'primaryYAxis') {
      if (args.maximum <= 60) {
        args.interval = 10;
      }
    }
  }

  const chartMouseClick = (args) => {
    let isRemoved = false;
    if (args.axisData) {
      for (let i = 0; i < (chartInstance.series[0]).points.length; i++) {
        const markerWidth = (chartInstance.series[0]).marker.width / 2;
        let roundedX = Math.round(args.axisData['primaryXAxis']) + markerWidth;
        let roundedY = Math.round(args.axisData['primaryYAxis']) + markerWidth;
        let pointX = Math.round((chartInstance.series[0]).points[i].x) + markerWidth;
        let pointY = Math.round((chartInstance.series[0]).points[i].y) + markerWidth;
        if ((roundedX === pointX || roundedX + 1 === pointX || roundedX - 1 === pointX) &&
          (roundedY === pointY || roundedY + 1 === pointY || roundedY - 1 === pointY)) {
          if ((chartInstance.series[0]).points.length > 1) {
            const points = (chartInstance.series[0]).points;
            const duration = i === 0 || i === points[points.length - 1].index ? 500 : 0;
            chartInstance.series[0].removePoint(i, duration);
          }
          isRemoved = true;
        }
      }
      if (!isRemoved) {
        chartInstance.series[0].addPoint({ x: Math.round(args.axisData['primaryXAxis']), y: Math.round(args.axisData['primaryYAxis']) });
      }
    }
  };
  return (<div>
    <ChartComponent id='charts' ref={chart => chartInstance = chart} primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} tooltip={tooltip} title='User supplied data' chartArea={{ border: { width: 0 } }} axisRangeCalculated={axisRangeCalculated.bind(this)} chartMouseClick={chartMouseClick.bind(this)}>
      <Inject services={[LineSeries, DataLabel, Tooltip]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' marker={marker} width={3} type='Line'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent></div>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

