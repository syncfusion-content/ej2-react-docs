{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationTooltip } from '@syncfusion/ej2-react-charts';
import { labelData } from './datasource';

function App() {
  return (
    <AccumulationChartComponent id='pie-chart' tooltip={{ enable: true, format: '${point.x:MMM yyyy} : <b>${point.y:n2}%</b>' }}>
      <Inject services={[AccumulationTooltip]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={labelData} xName='x' yName='y' />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}