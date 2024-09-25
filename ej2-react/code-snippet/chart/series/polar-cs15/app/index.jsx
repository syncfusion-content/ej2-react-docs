import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, PolarSeries, Category, ColumnSeries } from '@syncfusion/ej2-react-charts';
import { columnData } from './datasource';
function App() {
  const primaryxAxis = { title: 'Country', valueType: 'Category' };
    const primaryyAxis = { minimum: 0, maximum: 80, interval: 20, title: 'Medals' };
    const emptyPoint = { mode: 'Average', fill: 'red', border: {width: 1.5, color: 'green'} };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Olympic Gold medals'>
      <Inject services={[PolarSeries, ColumnSeries, Category]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={columnData} xName='country' yName='gold' type='Polar' name='Gold' drawType='Column' emptyPointSettings={emptyPoint}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
