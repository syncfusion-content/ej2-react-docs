

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, StackingStepAreaSeries}
from'@syncfusion/ej2-react-charts';
import { percentData } from "../datasource";

function App() {

  return <ChartComponent  id="charts" primaryXAxis = {{
    valueType: 'DateTime'
 }} title = 'Annual Temperature Comparison' >
      <Inject services={[StackingStepAreaSeries, Legend]} />
      <SeriesCollectionDirective>
        <SeriesDirective  dataSource = {percentData}   type='StackingStepArea' xName='x' yName='y' name='USA' noRisers={true}>
        </SeriesDirective>
        <SeriesDirective  dataSource = {percentData}   type='StackingStepArea' xName='x' yName='y1' name='UK' noRisers={true}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
