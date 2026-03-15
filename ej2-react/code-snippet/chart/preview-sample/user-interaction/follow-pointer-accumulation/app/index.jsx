{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationTooltip, PieSeries, AccumulationDataLabel} from '@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {
  return (
    <AccumulationChartComponent id='pie-chart' enableAnimation={true} tooltip={{ enable: true, format: '<b>${point.x}</b><br>Percentage: <b>${point.y}%</b>', followPointer: true }}>
      <Inject services={[PieSeries, AccumulationTooltip, AccumulationDataLabel]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={data} name='Browser' xName='x' yName='y' borderRadius={3} />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
