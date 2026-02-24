

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
  Legend, Category, DataLabel, SplineSeries, MarkerSettingsModel, LegendSettingsModel
} from '@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {
  const primaryXAxis: AxisModel = { valueType: 'Category', enableTrim: false, majorTickLines: { width: 0 }, majorGridLines: { width: 0 } };
  const primaryYAxis: AxisModel = { minimum: 0, maximum: 800, labelFormat: '{value}M', edgeLabelPlacement: 'Shift' };
  const marker: MarkerSettingsModel = {
    visible: true,
    dataLabel: {
      visible: true,
      position: 'Top',
      font: {
        fontWeight: '600'
      }
    }
  };
  const legendSettings: LegendSettingsModel = { visible: false };
  let chartInstance: ChartComponent;
  function clickHandler() {
    chartInstance.series[0].addPoint({ x: 'Japan', y: 118.2 });
  }

  return (<div>
    <button value='add' onClick={clickHandler.bind(this)}>Add Point</button>
    <ChartComponent id='charts' ref={chart => chartInstance = chart} primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} legendSettings={legendSettings} title='Internet Users - 2016' chartArea={{ border: { width: 1 } }}>
      <Inject services={[SplineSeries, Legend, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' width={2} name='Users' type='Spline' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent></div>)
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


