{% raw %}


import {
  StepLineSeries, Inject, RangeNavigatorComponent, RangenavigatorSeriesCollectionDirective,
  RangenavigatorSeriesDirective, RangeTooltip, RangeTooltipSettingsModel
} from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { double } from 'default-data.ts';

function App() {

  const data: object[] = double;
  const tooltip: RangeTooltipSettingsModel = { enable: true };

  return <RangeNavigatorComponent id='charts'
    labelPosition='Outside'
    tooltip={tooltip}
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