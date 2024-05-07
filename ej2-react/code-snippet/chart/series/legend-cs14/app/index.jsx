{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationTooltip, Inject } from '@syncfusion/ej2-react-charts';
import { accData } from 'datasource.ts';
function App() {
    return <AccumulationChartComponent id='charts' tooltip={{ enable: true, header: "Pie Chart" }}>
      <Inject services={[AccumulationTooltip]}/>
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={accData} xName='x' yName='y'>
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
{% endraw %}