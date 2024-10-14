{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationAnnotation, AccumulationAnnotationsDirective, AccumulationAnnotationDirective, AccumulationLegend, AccumulationSeries }
  from '@syncfusion/ej2-react-charts';
import { pieData } from '../datasource.ts';

function App() {

  const chartRef = React.useRef<AccumulationChartComponent>(null);
  let click = () => {
    if (chartRef.current) {
      (chartRef.current.series[0] as AccumulationSeries).removePoint(0);
    }
  }

  return <div><AccumulationChartComponent id='charts' ref={chartRef} legendSettings={{ visible: false }} >
    <Inject services={[AccumulationAnnotation, AccumulationLegend]} />
    <AccumulationSeriesCollectionDirective>
      <AccumulationSeriesDirective dataSource={pieData} xName='x' yName='y' legendShape='Rectangle'>
      </AccumulationSeriesDirective>
    </AccumulationSeriesCollectionDirective>
  </AccumulationChartComponent>
    <button id='add' onClick={click}>click</button>
  </div>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}