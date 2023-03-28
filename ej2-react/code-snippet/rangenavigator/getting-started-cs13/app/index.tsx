


import {
     StepLineSeries, Logarithmic, Inject, RangeNavigatorComponent, RangenavigatorSeriesCollectionDirective,
     RangenavigatorSeriesDirective,RangeTooltip
} from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { double } from 'default_data.ts';

class App extends React.Component<{}, {}> {

  public data: object[] = [];
  public max: number = 100;
  public chartLoad(): void {
    let i: number;
    for (i = 0; i < 100; i++) {
      this.data.push({
        x: Math.pow(10, i * 0.1),
        y: Math.floor(Math.random() * (80 - 30 + 1)) + 30
      });
    }
  }

  render() {
    this.chartLoad();
    return <RangeNavigatorComponent id='charts'
      labelPosition='Outside'
      valueType='Logarithmic'
      logBase={2}
      value={[4, 6]}>
      <Inject services={[StepLineSeries, Logarithmic, RangeTooltip]} />
      <RangenavigatorSeriesCollectionDirective>
        <RangenavigatorSeriesDirective dataSource={this.data} xName='x' yName='y'
          type='StepLine' width={2}>
        </RangenavigatorSeriesDirective>
      </RangenavigatorSeriesCollectionDirective>
    </RangeNavigatorComponent>
  }

};
ReactDOM.render(<App />, document.getElementById("charts"));



