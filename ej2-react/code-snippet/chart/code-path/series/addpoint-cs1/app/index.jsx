{% raw %}





import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationAnnotation, AccumulationAnnotationsDirective, AccumulationAnnotationDirective, AccumulationLegend, AccumulationSeries }
  from '@syncfusion/ej2-react-charts';
import { pieData } from '../datasource.ts';

function App() {

  let chartInstance;
  function clickHandler() {
    chartInstance.series[0].removePoint(0);
  }

  return <div><AccumulationChartComponent id='charts' ref={chart => chartInstance = chart} legendSettings={{ visible: false }} >
    <Inject services={[AccumulationAnnotation, AccumulationLegend]} />
    <AccumulationSeriesCollectionDirective>
      <AccumulationSeriesDirective dataSource={pieData} xName='x' yName='y' legendShape='Rectangle'>
      </AccumulationSeriesDirective>
    </AccumulationSeriesCollectionDirective>
  </AccumulationChartComponent>
    <button value='remove' onClick={clickHandler.bind(this)}>Remove Point</button>
  </div>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));





{% endraw %}