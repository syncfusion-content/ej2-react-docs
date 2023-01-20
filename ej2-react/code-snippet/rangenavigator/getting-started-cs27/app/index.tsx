


import {
     AreaSeries, DateTime, Inject, RangeNavigatorComponent, RangenavigatorSeriesCollectionDirective,
     RangenavigatorSeriesDirective,RangeTooltip, PeriodSelector,RangeTooltipSettingsModel, PeriodSelectorSettingsModel
} from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { bitCoinData } from 'default_data.ts';

function App() {

  const data: object[] = bitCoinData;
  const tooltip: RangeTooltipSettingsModel = { enable: true };
  const periodselector: PeriodSelectorSettingsModel = {
    position: 'Top',
    periods: [
      { text: '1M', interval: 1, intervalType: 'Months' },
      { text: '3M', interval: 3, intervalType: 'Months' },
      { text: '6M', interval: 6, intervalType: 'Months' }, { text: 'YTD' },
      { text: '1Y', interval: 1, intervalType: 'Years' },
      { text: '2Y', interval: 2, intervalType: 'Years', selected: true }, { text: 'All' }
    ]
  };

  return <RangeNavigatorComponent id='charts'
      valueType='DateTime' labelFormat='MMM-yy' value={[new Date('2017-09-01'), new Date('2018-02-01')]}
      dataSource={data} xName='x' yName='y'
      disableRangeSelector={true}
      tooltip={tooltip}
      periodSelectorSettings={periodselector}>
      <Inject services={[AreaSeries, DateTime, RangeTooltip, PeriodSelector]} />
    </RangeNavigatorComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



