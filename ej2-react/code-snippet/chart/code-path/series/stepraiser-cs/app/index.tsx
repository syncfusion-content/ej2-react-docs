{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, StepLineSeries}
from'@syncfusion/ej2-react-charts';
import { stepData } from "../datasource";

function App() {

  return <ChartComponent id='charts'
      title = 'CO2 - Intensity Analysis'
      primaryXAxis={{
        minimum: 2004, 
        maximum: 2013, 
        interval: 1,
        title: 'Year'
    }}
    primaryYAxis= {{
        minimum: 330, 
        maximum: 450, 
        interval: 30,
        title: 'Intensity (g/kWh)'
    }}
      >
      <Inject services={[StepLineSeries, Legend]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={stepData} type='StepLine' xName='x' noRisers={true} yName='y' width={4}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}