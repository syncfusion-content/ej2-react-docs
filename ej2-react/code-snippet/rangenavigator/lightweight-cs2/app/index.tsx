


import {
     AreaSeries, DateTime, Inject, RangeNavigatorComponent, RangenavigatorSeriesCollectionDirective,
     RangenavigatorSeriesDirective,RangeTooltip
} from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { GetDateTimeData } from 'default_data.ts';

class App extends React.Component<{}, {}> {

  public data: object[] = [];
  public chartLoad(): void {
    let value: number = 0; let point: object = {};
    for (let j: number = 1; j < 1090; j++) {
      value += (Math.random() * 10 - 5);
      value = value < 0 ? Math.abs(value) : value;
      point = { x: new Date(2000, 0, j), y: value, z: value + 10 };
      this.data.push(point);
    }
  }

  render() {
    this.chartLoad();
    return <RangeNavigatorComponent id='charts'
      valueType='DateTime' intervalType='Months'
      intervalType='Quarter'
      enableGrouping={true}
      groupBy='Years'
      value={[new Date('2001-01-01'), new Date('2002-01-01')]}
      dataSource={this.data} xName='x' yName='y'>
      <Inject services={[DateTime]} />
    </RangeNavigatorComponent>
  }

};
ReactDOM.render(<App />, document.getElementById("charts"));


