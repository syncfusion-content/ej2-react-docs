{% raw %}


import {
  AreaSeries, DateTime, Inject, RangeNavigatorComponent, RangenavigatorSeriesCollectionDirective,
  RangenavigatorSeriesDirective, RangeTooltip, RangeNavigator, RangeTooltipSettingsModel
} from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { bitCoinData } from 'default-data.ts';

function App() {
  const data: object[] = bitCoinData;
  const tooltip: RangeTooltipSettingsModel = { enable: true };
  function clickHandler() {
    range.print();
  }
  let range: RangeNavigator;

  return (<div> <ButtonComponent value='print' onClick={clickHandler.bind(this)}>Print</ButtonComponent>
    <RangeNavigatorComponent id='charts' ref={g => range = g}
      valueType='DateTime' labelFormat='MMM-yy' value={[new Date('2017-09-01'), new Date('2018-02-01')]}
      tooltip={tooltip}>
      <Inject services={[AreaSeries, DateTime, RangeTooltip]} />
      <RangenavigatorSeriesCollectionDirective>
        <RangenavigatorSeriesDirective dataSource={data} xName='x' yName='y' type='Area' width={2} />
      </RangenavigatorSeriesCollectionDirective>
    </RangeNavigatorComponent></div>)
};
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));


{% endraw %}