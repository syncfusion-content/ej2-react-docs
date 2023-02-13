


import {
     AreaSeries, DateTime, Inject, RangeNavigatorComponent, RangenavigatorSeriesCollectionDirective,
     RangenavigatorSeriesDirective,RangeTooltip,RangeTooltipSettingsModel
} from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { bitCoinData } from 'default_data.ts';

class App extends React.Component<{}, {}> {

  public data: object[] = bitCoinData;
  public tooltip: RangeTooltipSettingsModel = { enable: true };

  render() {
    return <RangeNavigatorComponent id='charts'
      valueType='DateTime' labelFormat='y/M/d' value={[new Date('2017-09-01'), new Date('2018-02-01')]}
      tooltip={this.tooltip}>
      <Inject services={[AreaSeries, DateTime, RangeTooltip]} />
      <RangenavigatorSeriesCollectionDirective>
        <RangenavigatorSeriesDirective dataSource={this.data} xName='x' yName='y' type='Area' width={2} />
      </RangenavigatorSeriesCollectionDirective>
    </RangeNavigatorComponent>
  }

};
ReactDOM.render(<App />, document.getElementById("charts"));



