

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,LegendSettingsModel,
         Legend, Category, Tooltip, DataLabel, ColumnSeries}
from'@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {

  const primaryxAxis: AxisModel = { valueType: 'Category', title: 'Countries' };
  const primaryyAxis: AxisModel = { minimum: 0, maximum: 80, interval: 20, title: 'Medals' };
  const legendSettings: LegendSettingsModel = { visible: true, toggleVisibility: true };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      legendSettings={legendSettings}
      title='Olympic Medals'>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='country' yName='gold' name='Gold'
          legendShape='Circle' type='Column'>
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='country' yName='silver' type='Column'>
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='country' yName='bronze' name='Bronze'
          legendShape='Rectangle' type='Column'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


