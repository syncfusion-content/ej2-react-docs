{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, AxisModel, SeriesAccessibilityModel, ColumnSeries, Category } from'@syncfusion/ej2-react-charts';
import { columnData } from './datasource';

function App() {

  const primaryxAxis: AxisModel = { valueType: 'Category', title: 'Countries' };
  const primaryyAxis: AxisModel = { minimum: 0, maximum: 80, interval: 20, title: 'Medals' };
  const accessibility: SeriesAccessibilityModel = {
    accessibilityDescription: 'This series displays the number of gold medals won by each country in the Olympics.',
    accessibilityRole: 'series',
    accessibilityDescriptionFormat: 'The country ${point.x} won ${point.y} gold medals.'
  };

  return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Olympic Medals'>
            <Inject services={[ColumnSeries, Category]} />
            <SeriesCollectionDirective>
              <SeriesDirective dataSource={columnData} xName='country' yName='gold' type='Column' accessibility={accessibility}>
              </SeriesDirective>
            </SeriesCollectionDirective>
         </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}