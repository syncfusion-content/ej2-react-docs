{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, StepAreaSeries } from '@syncfusion/ej2-react-charts';
import { stepAreaData } from './datasource';
function App() {
    const primaryxAxis = { valueType: 'Double', title: 'Overs' };
    const primaryyAxis = { title: 'Runs' };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Annual Temperature Comparison'>
      <Inject services={[StepAreaSeries, Legend]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={stepAreaData} xName='x' yName='y' name='England' type='StepArea' fill= 'yellow'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}