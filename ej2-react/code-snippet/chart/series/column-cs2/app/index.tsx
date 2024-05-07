

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, BorderModel, Legend, Category, Tooltip, DataLabel, ColumnSeries} from'@syncfusion/ej2-react-charts';

function App() {

  const data: any[] = [
    { country: "USA", gold: 50 },
    { country: "China", gold: 40 },
    { country: "Japan", gold: 70 },
    { country: "Australia", gold: 60 },
    { country: "France", gold: 50 },
    { country: "Germany", gold: 40 },
    { country: "Italy", gold: 40 },
    { country: "Sweden", gold: 30 }
  ];
  const primaryxAxis: AxisModel = { valueType: 'Category', title: 'Countries' };
  const primaryyAxis: AxisModel = { minimum: 0, maximum: 80, interval: 20, title: 'Medals' };
  const border: BorderModel = { width: 2, color: '#FF0000' };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      background='skyblue' border={border}
      title='Olympic Medals'>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='country' yName='gold' name='Gold' type='Column'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


