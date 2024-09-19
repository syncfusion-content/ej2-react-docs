

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, StepLineSeries}
from'@syncfusion/ej2-react-charts';
import { stepData } from "../datasource";

function App() {

  return <ChartComponent id='charts'
      title = 'CO2 - Intensity Analysis'>
      <Inject services={[StepLineSeries, Legend]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={stepData} type='StepLine' xName='x' noRisers={true} yName='y'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
