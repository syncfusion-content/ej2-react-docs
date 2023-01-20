


import {
     StepLineSeries, Logarithmic, Inject, RangeNavigatorComponent, RangenavigatorSeriesCollectionDirective,
     RangenavigatorSeriesDirective,RangeTooltip
} from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { double } from 'default_data.ts';

function App() {

  const data: object[] = [];
  const max: number = 100;
  function chartLoad(): void {
    let i: number;
    for (i = 0; i < 100; i++) {
      data.push({
        x: Math.pow(10, i * 0.1),
        y: Math.floor(Math.random() * (80 - 30 + 1)) + 30
      });
    }
  }

  chartLoad();
  return <RangeNavigatorComponent id='charts'
      labelPosition='Outside'
      valueType='Logarithmic'
      logBase={2}
      value={[4, 6]}>
      <Inject services={[StepLineSeries, Logarithmic, RangeTooltip]} />
      <RangenavigatorSeriesCollectionDirective>
        <RangenavigatorSeriesDirective dataSource={data} xName='x' yName='y'
          type='StepLine' width={2}>
        </RangenavigatorSeriesDirective>
      </RangenavigatorSeriesCollectionDirective>
    </RangeNavigatorComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



