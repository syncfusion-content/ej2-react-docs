{% raw %}


import {
  StepLineSeries, Inject, RangeNavigatorComponent, RangenavigatorSeriesCollectionDirective,
  RangenavigatorSeriesDirective, RangeTooltip
} from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { double } from 'default-data.ts';

function App() {

  const data: object[] = double;

  return <RangeNavigatorComponent id='charts'
    labelPosition='Outside'
    labelFormat='{value}$'
    value={[12, 30]}>
    <Inject services={[RangeTooltip, StepLineSeries]} />
    <RangenavigatorSeriesCollectionDirective>
      <RangenavigatorSeriesDirective dataSource={data} xName='x' yName='y'>
      </RangenavigatorSeriesDirective>
    </RangenavigatorSeriesCollectionDirective>
  </RangeNavigatorComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}
