


import {
     StepLineSeries, DateTime, Inject, RangeNavigatorComponent, RangenavigatorSeriesCollectionDirective,
     RangenavigatorSeriesDirective,RangeTooltip,RangeTooltipSettingsModel
} from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { double } from 'default_data.ts';

function App() {

  const data: object[] = [
    { xData: 10, yData: 35 }, { xData: 20, yData: 28 },
    { xData: 30, yData: 34 }, { xData: 40, yData: 32 },
    { xData: 50, yData: 40 }
  ];
  const tooltip: RangeTooltipSettingsModel = { enable: true };
  const majorgridLines = { width: 4, color: 'blue', dashArray: '5,5' };

  return <RangeNavigatorComponent id='charts'
      labelPosition='Outside'
      tooltip={tooltip}
      majorGridLines={majorgridLines}
      value={[25, 40]}>
      <Inject services={[RangeTooltip, StepLineSeries]} />
      <RangenavigatorSeriesCollectionDirective>
        <RangenavigatorSeriesDirective dataSource={data} xName='xData' yName='yData'>
        </RangenavigatorSeriesDirective>
      </RangenavigatorSeriesCollectionDirective>
    </RangeNavigatorComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



