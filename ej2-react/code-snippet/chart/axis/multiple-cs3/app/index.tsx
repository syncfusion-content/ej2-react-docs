

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, SeriesDirective, Inject, ColumnSeries, Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, LineSeries, Selection } from '@syncfusion/ej2-react-charts';

class App extends React.Component<{}, {}> {
  public primaryxAxis: AxisModel = {
    valueType: 'Category', title: 'Countries', titleRotation: 90, titleStyle: {
      size: '16px', color: 'blue', fontFamily: 'Segoe UI', fontWeight: 'bold'
    }
  };
  public categoryData: any[] = [{ country: "Russia", gold: 50, silver: 70, bronze: 45 }, { country: "China", gold: 40, silver: 60, bronze: 55 },
      { country: "Japan", gold: 70, silver: 60, bronze: 50 }, { country: "Australia", gold: 60, silver: 56, bronze: 40 },
      { country: "France", gold: 50, silver: 45, bronze: 35 }, { country: "Germany", gold: 40, silver: 30, bronze: 22 },
      { country: "Italy", gold: 40, silver: 35, bronze: 37 }, { country: "United States", gold: 30, silver: 25, bronze: 27 }];
  render() {
    return <ChartComponent id='charts'
      primaryXAxis={this.primaryxAxis}>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={this.categoryData} xName='country' yName='gold' type='Column'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  }
};
ReactDOM.render(<App />, document.getElementById("charts"));


