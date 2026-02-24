{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend } from '@syncfusion/ej2-react-charts';
import { piechart } from 'datasource.ts';
function App() {
    const legendSettings = { visible: true, position: 'Right', textWrap: 'Wrap', maximumLabelWidth: 60, height: '44%', width: '64%' };
    return <AccumulationChartComponent id='charts' legendSettings={legendSettings}>
      <Inject services={[AccumulationLegend]}/>
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={piechart} xName='x' yName='y'></AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}