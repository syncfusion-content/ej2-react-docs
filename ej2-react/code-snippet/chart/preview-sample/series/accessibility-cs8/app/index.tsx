

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, AxisModel, LegendSettingsModel, ColumnSeries, Category, Legend } from'@syncfusion/ej2-react-charts';
import { chartData } from './datasource';

function App() {

  const primaryxAxis: AxisModel = { valueType: 'Category', title: 'Countries' };
  const primaryyAxis: AxisModel = { minimum: 0, maximum: 80, interval: 20, title: 'Medals' };
  const legendSettings: LegendSettingsModel = {
    visible: true,
    accessibility: {
      accessibilityDescription: 'Legend displaying medal counts by country for Gold, Silver, and Bronze.',
      accessibilityRole: 'presentation'
    }
  };

  return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Olympic Medals' legendSettings={legendSettings}>
            <Inject services={[ColumnSeries, Category, Legend]} />
            <SeriesCollectionDirective>
              <SeriesDirective dataSource={chartData} xName='country' yName='gold' type='Column' name='Gold'>
              </SeriesDirective>
              <SeriesDirective dataSource={chartData} xName='country' yName='silver' type='Column' name='Silver'>
              </SeriesDirective>
              <SeriesDirective dataSource={chartData} xName='country' yName='bronze' type='Column' name='Bronze'>
              </SeriesDirective>
            </SeriesCollectionDirective>
         </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


