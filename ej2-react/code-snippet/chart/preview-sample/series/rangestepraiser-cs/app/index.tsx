

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, RangeStepAreaSeries} from'@syncfusion/ej2-react-charts';
import { chartData } from "../datasource";

function App() {
  
  const primaryxAxis: AxisModel = {
    valueType: 'Category',
    edgeLabelPlacement: 'Shift',
    majorGridLines: { width: 0 }
  };
  const primaryyAxis: AxisModel = {
    labelFormat: '{value}˚C',
    lineStyle: { width: 0 },
    minimum: 0, maximum: 40,
    majorTickLines: { width: 0 }
  };
  const border = { color: 'yellow', width: 2};
  const border1 = { color: 'brown', width: 2};

  return<ChartComponent id='charts' primaryXAxis = {{
    valueType: 'Category',
     edgeLabelPlacement: 'Shift',
     majorGridLines: { width: 0 }
 }}  primaryYAxis = {{
  labelFormat: '{value}˚C',
  lineStyle: { width: 0 },
  minimum: 0,
  maximum: 40,
  majorTickLines: { width: 0 }
}} title = 'Monthly Temperature Range' >
      <Inject services={[RangeStepAreaSeries, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective  dataSource = {chartData}  type='RangeStepArea'  xName='x' high='high' low='low' name='India' opacity= {0.1} border= {{width:1.5}} noRisers={true}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


