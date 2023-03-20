


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, SeriesDirective, Inject, ColumnSeries, Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, LineSeries, Selection, MultiLevelLabel } from'@syncfusion/ej2-react-charts';

function App() {

  const primaryxAxis: AxisModel = {
    valueType: 'Category',
    multiLevelLabels: [{
      categories: [{ start: -0.5, end: 3.5, text: 'Half Yearly 1' },
      { start: 3.5, end: 7.5, text: 'Half Yearly 2' }],
      textStyle: { size: '18px', color: 'Red' }
    }]
  };
  const categoryData: Object[] = [
    { country: "Russia", gold: 50, silver: 70, bronze: 45 },
    { country: "China", gold: 40, silver: 60, bronze: 55 },
    { country: "Japan", gold: 70, silver: 60, bronze: 50 },
    { country: "Australia", gold: 60, silver: 56, bronze: 40 },
    { country: "France", gold: 50, silver: 45, bronze: 35 },
    { country: "Germany", gold: 40, silver: 30, bronze: 22 },
    { country: "Italy", gold: 40, silver: 35, bronze: 37 },
    { country: "United States", gold: 30, silver: 25, bronze: 27 }
  ];

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category, MultiLevelLabel]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={categoryData} xName='country' yName='gold' type='Column'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



