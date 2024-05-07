

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, SeriesDirective, Inject,ColumnSeries, Legend, Category} from'@syncfusion/ej2-react-charts';

function App() {

  const primaryxAxis: AxisModel = { valueType: 'Category', title: 'Countries', interval: 2, minimum: 1, maximum: 5 };
  const chartData: any[] = [
    { country: "USA", gold: 50 },
    { country: "China", gold: 40 },
    { country: "Japan", gold: 70 },
    { country: "Australia", gold: 60 },
    { country: "France", gold: 50 },
    { country: "Germany", gold: 40 },
    { country: "Italy", gold: 40 },
    { country: "Sweden", gold: 30 }
  ];
  
  return <ChartComponent id='charts' primaryXAxis={primaryxAxis}
      title='Olympic Medals'  >
      <Inject services={[ColumnSeries, Legend, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={chartData} xName='country' yName='gold' type='Column'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


