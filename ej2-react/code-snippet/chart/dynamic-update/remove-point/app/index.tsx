{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
  Legend, Category, DataLabel, SplineSeries, MarkerSettingsModel, LegendSettingsModel
} from '@syncfusion/ej2-react-charts';

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
  const data: any[] = [
    { x: "Germany", y: 72 },
    { x: "Russia", y: 103.1 },
    { x: "Brazil", y: 139.1 },
    { x: "India", y: 462.1 },
    { x: "China", y: 721.4 },
    { x: "USA", y: 286.9 },
    { x: "Great Britain", y: 115.1 },
    { x: "Nigeria", y: 97.2 }
  ];
  let chartInstance: ChartComponent;
  function clickHandler() {
    chartInstance.series[0].removePoint(0);
  }

  return (<div>
    <button value='remove' onClick={clickHandler.bind(this)}>Remove Point</button>
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


{% endraw %}