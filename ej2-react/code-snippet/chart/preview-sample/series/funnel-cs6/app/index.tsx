



import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective,
  Inject, AccumulationLegend, FunnelSeries, AccumulationTooltip, IAccLoadedEventArgs,
  AccumulationDataLabel, IAccResizeEventArgs
} from '@syncfusion/ej2-react-charts';
import { funnelData } from '';

function App() {

  function onLoad(args: IAccLoadedEventArgs): void {
    if (args.accumulation.availableSize) {
      if (args.accumulation.availableSize.width < args.accumulation.availableSize.height) {
        args.accumulation.series[0].width = '80%';
        args.accumulation.series[0].height = '70%';
      }
    }
  }
  function onChartResized(args: IAccResizeEventArgs): void {
    let bounds: ClientRect = document.getElementById('charts').getBoundingClientRect();
    if (bounds.width < bounds.height) {
      args.accumulation.series[0].width = '80%';
      args.accumulation.series[0].height = '70%';
    } else {
      args.accumulation.series[0].width = '60%';
      args.accumulation.series[0].height = '80%';
    }
  }

  return <AccumulationChartComponent id='charts' legendSettings={{ visible: false }} tooltip={{ enable: true, format: '${point.x} : <b>${point.y}</b>' }} title='Top population countries in the world 2017' resized={onChartResized.bind(this)} load={onLoad.bind(this)}>
    <Inject services={[AccumulationLegend, FunnelSeries, AccumulationTooltip, AccumulationDataLabel]} />
    <AccumulationSeriesCollectionDirective>
      <AccumulationSeriesDirective dataSource={funnelData} xName='x' yName='y' type='Funnel' name='2017 Population' dataLabel={{
        visible: true, position: 'Outside',
        connectorStyle: { length: '6%' }, name: 'text',
      }} explode={false}>
      </AccumulationSeriesDirective>
    </AccumulationSeriesCollectionDirective>
  </AccumulationChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


