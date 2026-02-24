{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationTooltip, PieSeries, AccumulationLegend } from '@syncfusion/ej2-react-charts';
import { data } from '../datasource.ts';

function App() {

  const tooltip = {
    enable: true, 
    enableHighlight: true
  };
  const legendSettings = { visible: false };

  return (
    <AccumulationChartComponent id="container" tooltip={tooltip} legendSettings={legendSettings}>
      <Inject services={[AccumulationTooltip, PieSeries, AccumulationLegend]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={data} xName='x' yName='y'>
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  )
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}