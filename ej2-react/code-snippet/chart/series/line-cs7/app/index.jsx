import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, StepLineSeries } from '@syncfusion/ej2-react-charts';
import { steplineData } from 'datasource.ts';
function App() {
    const marker = { visible: true, width: 10, height: 10, border: { width: 2, color: '#F8AB1D' } };
    return <ChartComponent id='charts'>
      <Inject services={[StepLineSeries, Legend, Tooltip, DataLabel, Category]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={steplineData} xName='x' yName='y' width={2} name='India' type='StepLine' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
