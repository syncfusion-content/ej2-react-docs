{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationTooltip, TooltipSettingsModel } from '@syncfusion/ej2-react-charts';
import { data } from '../datasource.ts';

function App() {

  const tooltip: TooltipSettingsModel = {
    enable: true, 
    enableHighlight: true
  };

  return (
    <AccumulationChartComponent id="container" tooltip={tooltip}>
      <Inject services={[AccumulationTooltip]} />
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