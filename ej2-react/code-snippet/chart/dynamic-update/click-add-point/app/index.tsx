{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
  LineSeries, DataLabel, Tooltip, MarkerSettingsModel, IAxisRangeCalculatedEventArgs, Series, TooltipSettingsModel, IMouseEventArgs
} from '@syncfusion/ej2-react-charts';

function App() {
  const primaryXAxis: AxisModel = { edgeLabelPlacement: 'Shift', rangePadding: 'Additional', majorGridLines: { width: 0 } };
  const primaryYAxis: AxisModel = { title: 'Value', interval: 20, lineStyle: { width: 0 }, majorTickLines: { width: 0 } };
  const data: any[] = [
    { x: 20, y: 20 },
    { x: 80, y: 80 }
  ];
  const marker: MarkerSettingsModel = {
    visible: true,
    isFilled: true,
    border: {
      width: 2,
      color: 'White'
    },
    width: 13,
    height: 13
  };
  const tooltip: TooltipSettingsModel = { enable: true };
  let chartInstance: ChartComponent;
  const axisRangeCalculated = (args: IAxisRangeCalculatedEventArgs): void => {
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

  const chartMouseClick = (args: IMouseEventArgs): void => {
    let isRemoved: boolean = false;
    if (args.axisData) {
      for (let i: number = 0; i < (chartInstance.current.series[0] as Series).points.length; i++) {
        const markerWidth: number = (chartInstance.current.series[0] as Series).marker.width / 2;
        let roundedX: number = Math.round(args.axisData['primaryXAxis']) + markerWidth;
        let roundedY: number = Math.round(args.axisData['primaryYAxis']) + markerWidth;
        let pointX: number = Math.round((chartInstance.current.series[0] as Series).points[i].x as number) + markerWidth;
        let pointY: number = Math.round((chartInstance.current.series[0] as Series).points[i].y as number) + markerWidth;
        if ((roundedX === pointX || roundedX + 1 === pointX || roundedX - 1 === pointX) &&
          (roundedY === pointY || roundedY + 1 === pointY || roundedY - 1 === pointY)) {
          if ((chartInstance.current.series[0] as Series).points.length > 1) {
            const points = (chartInstance.current.series[0] as Series).points;
            const duration: number = i === 0 || i === points[points.length - 1].index ? 500 : 0;
            chartInstance.current.series[0].removePoint(i, duration);
          }
          isRemoved = true;
        }
      }
      if (!isRemoved) {
        chartInstance.current.series[0].addPoint({ x: Math.round(args.axisData['primaryXAxis']), y: Math.round(args.axisData['primaryYAxis']) });
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
    </ChartComponent></div>)
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}