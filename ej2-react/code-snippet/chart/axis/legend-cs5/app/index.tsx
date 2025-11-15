

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,LegendSettingsModel,
         Legend, Category, Tooltip, DataLabel, ColumnSeries}
from'@syncfusion/ej2-react-charts';
import { data } from './datasource';

class App extends React.Component<{}, {}> {

  public primaryxAxis: AxisModel = {
    valueType: 'Category', title: 'Countries'
  };
  public primaryyAxis: AxisModel = {
    minimum: 0, maximum: 80, interval: 20, title: 'Medals'
  };
  public legendSettings: LegendSettingsModel = {
    visible: true, textStyle: { color: "red" }
  };
  render() {
    return <ChartComponent id='charts' primaryXAxis={this.primaryxAxis} primaryYAxis={this.primaryyAxis} legendSettings={this.legendSettings}  title='Olympic Medals'>
    <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]}/>
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={data} xName='country' yName='gold' name='Gold' type='Column'>
      </SeriesDirective>
      <SeriesDirective dataSource={data} xName='country' yName='silver' name='Silver' type='Column'>
      </SeriesDirective>
      <SeriesDirective dataSource={data} xName='country' yName='bronze' name='Bronze' type='Column'>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>
  }
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


