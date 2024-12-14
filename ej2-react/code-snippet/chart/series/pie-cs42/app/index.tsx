{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, LegendSettingsModel } from '@syncfusion/ej2-react-charts';
import { data } from '../datasource.ts';

function App() {

  const legendSettings: LegendSettingsModel = {
    visible: true,
    layout: "Auto",
    maximumColumns: 3,
    fixedWidth: true
  };

  return (
    <AccumulationChartComponent id="container" legendSettings={legendSettings}>
      <Inject services={[AccumulationLegend]} />
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