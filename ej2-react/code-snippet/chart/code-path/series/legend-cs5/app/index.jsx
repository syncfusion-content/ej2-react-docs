{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend } from '@syncfusion/ej2-react-charts';
import { accData } from 'datasource.ts';
function App() {
    const legendSettings = { width: '150', height: '100', border: { width: 1, color: 'pink' } };
    return <AccumulationChartComponent id='charts' legendSettings={legendSettings}>
      <Inject services={[AccumulationLegend]}/>
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={accData} xName='x' yName='y' legendShape='Circle'></AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}