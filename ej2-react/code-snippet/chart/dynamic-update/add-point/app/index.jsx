{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
  Legend, Category, DataLabel, SplineSeries
} from '@syncfusion/ej2-react-charts';

function App() {
  const primaryXAxis = { valueType: 'Category', enableTrim: false, majorTickLines: { width: 0 }, majorGridLines: { width: 0 } };
  const primaryYAxis = { minimum: 0, maximum: 800, labelFormat: '{value}M', edgeLabelPlacement: 'Shift' };
  const marker = {
    visible: true,
    dataLabel: {
      visible: true,
      position: 'Top',
      font: {
        fontWeight: '600'
      }
    }
  };
  const legendSettings = { visible: false };
  const data = [
    { x: "Germany", y: 72 },
    { x: "Russia", y: 103.1 },
    { x: "Brazil", y: 139.1 },
    { x: "India", y: 462.1 },
    { x: "China", y: 721.4 },
    { x: "USA", y: 286.9 },
    { x: "Great Britain", y: 115.1 },
    { x: "Nigeria", y: 97.2 }
  ];
  let chartInstance;
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
    </ChartComponent></div>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}