import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, StackingStepAreaSeries } from '@syncfusion/ej2-react-charts';
import { stepAreaData } from './datasource';
function App() {
    const primaryxAxis = { valueType: 'Double', title: 'Overs' };
    const primaryyAxis = { title: 'Runs' };
    const emptyPoint = { mode: 'Average', fill: 'red' };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Annual Temperature Comparison'>
      <Inject services={[StackingStepAreaSeries, Legend]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={stepAreaData} xName='x' yName='y' name='England' type='StackingStepArea' marker={{visible: true}} emptyPointSettings={emptyPoint}>
        </SeriesDirective>
        <SeriesDirective dataSource={stepAreaData} xName='x' yName='y1' name='India' type='StackingStepArea'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
