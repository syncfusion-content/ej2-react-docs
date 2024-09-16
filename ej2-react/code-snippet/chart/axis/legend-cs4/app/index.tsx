

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,LegendSettingsModel,
         Legend, Category, Tooltip, DataLabel, LineSeries}
from'@syncfusion/ej2-react-charts';
import { data } from './datasource';

class App extends React.Component<{}, {}> {

  public primaryxAxis: AxisModel = {
    title: 'Countries', valueType: 'Category', interval: 1,
    labelIntersectAction: 'Rotate45'
  };
  public primaryyAxis: AxisModel = {
    title: 'Penetration (%)', rangePadding: 'None', labelFormat: '{value}%',
    minimum: 0, maximum: 90
  };
  public legendSettings: LegendSettingsModel = {
    width: '180', enablePages: false
  };
  public marker1 = { visible: true, width: 10, height: 10, position: "Bottom", shape: 'Diamond', itemPadding: 30 };
  public marker2 = { visible: true, width: 10, height: 10, position: "Bottom", shape: 'Pentagon', itemPadding: 30 };
  public marker3 = { visible: true, width: 10, height: 10, position: "Bottom", shape: 'Triangle', itemPadding: 30 };
  public marker4 = { visible: true, width: 10, height: 10, position: "Bottom", shape: 'Circle', itemPadding: 30 };

  render() {
    return <ChartComponent id='charts'
      primaryXAxis={this.primaryxAxis}
      primaryYAxis={this.primaryyAxis}
      legendSettings={this.legendSettings}
      title='Olympic Medals'>
      <Inject services={[LineSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' type='Line' width={2}
          name='December 2007' marker={this.marker1} >
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y1' type='Line' width={2}
          name='December 2008' marker={this.marker2} >
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y2' type='Line' width={2}
          name='December 2009' marker={this.marker3} >
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y3' type='Line' width={2}
          name='December 2010' marker={this.marker4} >
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  }
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


