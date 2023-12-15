{% raw %}


import {
  AreaSeries, DateTime, Inject, RangeNavigatorComponent, RangenavigatorSeriesCollectionDirective,
  RangenavigatorSeriesDirective, RangeTooltip, RangeTooltipSettingsModel, StyleSettingsModel
} from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { bitCoinData } from 'default-data.ts';

function App() {
  const data: object[] = bitCoinData;
  const tooltip: RangeTooltipSettingsModel = { enable: true };
  const navigatorstylesettings: StyleSettingsModel = {
    thumb: {
      type: 'Rectangle',
      border: { width: 2, color: 'red' },
      fill: 'pink'
    }
  };
  return <RangeNavigatorComponent id='charts'
    valueType='DateTime' labelFormat='MMM-yy' value={[new Date('2017-09-01'), new Date('2018-02-01')]}
    navigatorStyleSettings={navigatorstylesettings}
    tooltip={tooltip}>
    <Inject services={[AreaSeries, DateTime, RangeTooltip]} />
    <RangenavigatorSeriesCollectionDirective>
      <RangenavigatorSeriesDirective dataSource={data} xName='x' yName='y' type='Area' width={2} />
    </RangenavigatorSeriesCollectionDirective>
  </RangeNavigatorComponent>
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



{% endraw %}