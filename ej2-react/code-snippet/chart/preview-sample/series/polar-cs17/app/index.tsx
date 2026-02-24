


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         PolarSeries, Category, ColumnSeries, ISeriesRenderEventArgs}
from'@syncfusion/ej2-react-charts';
import { columnData } from './datasource';

function App() {

  const primaryxAxis: AxisModel = { title: 'Country', valueType: 'Category' };
  const primaryyAxis: AxisModel = { minimum: 0, maximum: 80, interval: 20, title: 'Medals' };
  const pointRender = (args: ISeriesRenderEventArgs) => {
    if (args.point.index % 2 !== 0) {
      args.fill = '#ff6347';
  }
  else {
      args.fill = '#009cb8';
  }
  }
  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Olympic Gold medals' pointRender={pointRender}>
      <Inject services={[PolarSeries, ColumnSeries, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={columnData} xName='country' yName='gold' type='Polar' name='Gold' drawType='Column'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


