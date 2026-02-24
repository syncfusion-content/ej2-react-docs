{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend,LegendSettingsModel} from'@syncfusion/ej2-react-charts';
import { accData } from 'datasource.ts';

function App() {

  const legendSettings: LegendSettingsModel = { shapeHeight: 15, shapeWidth: 15 };

    return <AccumulationChartComponent id='charts' legendSettings={legendSettings}>
      <Inject services={[AccumulationLegend]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={accData} xName='x' yName='y' legendShape='Circle'></AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
