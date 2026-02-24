


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject,AccumulationAnnotation, AccumulationAnnotationsDirective, AccumulationAnnotationDirective, AccumulationLegend, AccumulationSeries}
from'@syncfusion/ej2-react-charts';
import { pieData } from '../datasource.ts';

function App() {

  let chartInstance;
  function clickHandler() {
    const newData = [
      { x: 'Jan', y: 3 },
      { x: 'Feb', y: 3.5 },
      { x: 'Mar', y: 7 },
      { x: 'Aug', y: 25 },
      { x: 'Sep', y: 21 },
      { x: 'Oct', y: 15 }
    ];
    if (chartInstance.series.length > 0) {
      chartInstance.series[0].setData(newData, 500);
    }
  }

  return <div><AccumulationChartComponent id='charts' ref={chart => chartInstance = chart} legendSettings={{visible:false}} >
      <Inject services={[AccumulationAnnotation, AccumulationLegend]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={pieData} xName='x' yName='y' legendShape='Rectangle'>
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
    <button value='update' onClick={clickHandler.bind(this)}>Update Data</button>
    </div>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


