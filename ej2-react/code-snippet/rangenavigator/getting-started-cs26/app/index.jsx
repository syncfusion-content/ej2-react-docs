{% raw %}


import { AreaSeries, DateTime, Inject, RangeNavigatorComponent, RangenavigatorSeriesCollectionDirective, RangenavigatorSeriesDirective, RangeTooltip, PeriodSelector } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { bitCoinData } from 'default-data.ts';
function App() {
  const data = bitCoinData;
  const tooltip = { enable: true };
  const periodselector = {
    position: 'Top',
    height: 65,
    periods: [
      { text: '1M', interval: 1, intervalType: 'Months' },
      { text: '3M', interval: 3, intervalType: 'Months' },
      { text: '6M', interval: 6, intervalType: 'Months' }, { text: 'YTD' },
      { text: '1Y', interval: 1, intervalType: 'Years' },
      { text: '2Y', interval: 2, intervalType: 'Years', selected: true }, { text: 'All' }
    ]
  };
  return <RangeNavigatorComponent id='charts' valueType='DateTime' labelFormat='MMM-yy' value={[new Date('2017-09-01'), new Date('2018-02-01')]} tooltip={tooltip} periodSelectorSettings={periodselector}>
    <Inject services={[AreaSeries, DateTime, RangeTooltip, PeriodSelector]} />
    <RangenavigatorSeriesCollectionDirective>
      <RangenavigatorSeriesDirective dataSource={data} xName='x' yName='y' type='Area' width={2} />
    </RangenavigatorSeriesCollectionDirective>
  </RangeNavigatorComponent>;
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



{% endraw %}