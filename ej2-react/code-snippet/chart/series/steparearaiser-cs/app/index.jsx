

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, StepAreaSeries}
from'@syncfusion/ej2-react-charts';
import { stepData } from "../datasource";

function App() {

  return <ChartComponent id='charts'
      primaryXAxis={{valueType: 'Double',title: 'Overs' }}
      primaryYAxis={{title: 'Runs' }}
      title = 'England - Run Rate'>
      <Inject services={[StepAreaSeries, Legend]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={stepData} xName='x' yName='y' type='StepArea' name='England' noRisers='true'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
