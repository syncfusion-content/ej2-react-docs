{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, StackingStepAreaSeries}
from'@syncfusion/ej2-react-charts';
import { percentData } from "../datasource";

function App() {

  return <ChartComponent  id="charts"    primaryXAxis={{
    title: 'Years',
    edgeLabelPlacement: 'Shift',
    majorTickLines: { width: 0 }
}}  
primaryYAxis={
{
    title: 'Spend in Billions',
    minimum: 0,
    maximum: 4,
    interval: 1,
    labelFormat: '{value}B',
    majorTickLines: { width: 0 }
}}
 title = 'Annual Temperature Comparison' >
      <Inject services={[StackingStepAreaSeries, Legend]} />
      <SeriesCollectionDirective>
        <SeriesDirective  dataSource = {percentData}   type='StackingStepArea' xName='x' yName='y' name='Organic' opacity= {0.1} border= {{width:1.5}} noRisers={true}>
        </SeriesDirective>
        <SeriesDirective  dataSource = {percentData}   type='StackingStepArea' xName='x' yName='y2' name='Others' opacity= {0.1} border= {{width:1.5}} noRisers={true}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}