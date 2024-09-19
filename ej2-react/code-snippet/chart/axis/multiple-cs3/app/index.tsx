

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, SeriesDirective, Inject, ColumnSeries, Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, LineSeries, Selection } from '@syncfusion/ej2-react-charts';
import { categoryData } from './datasource';
class App extends React.Component<{}, {}> {
  public primaryxAxis: AxisModel = {
    valueType: 'Category', title: 'Countries', titleRotation: 90, titleStyle: {
      size: '16px', color: 'blue', fontFamily: 'Segoe UI', fontWeight: 'bold'
    }
  };
  render() {
    return <ChartComponent id='charts'
      primaryXAxis={this.primaryxAxis}>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={categoryData} xName='country' yName='gold' type='Column'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  }
};
ReactDOM.render(<App />, document.getElementById("charts"));


