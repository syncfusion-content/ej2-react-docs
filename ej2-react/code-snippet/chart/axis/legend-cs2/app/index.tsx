

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,LegendSettingsModel,
         Legend, Category, Tooltip, DataLabel, ColumnSeries}
from'@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {

  const primaryxAxis: AxisModel = {
   valueType: 'Category'
  };
  const primaryyAxis: AxisModel = {
     minimum: 0, maximum: 80, interval: 20, title: 'Medals'
  };
  const legendSettings: LegendSettingsModel = {
    visible: true, title: 'Countries'
  };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      legendSettings={legendSettings}
      title='Olympic Medals'>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='country' yName='gold' type='Column'
          name='December 2007'>
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='country' yName='silver' type='Column'
          name='December 2008'>
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='country' yName='bronze' type='Column'
          name='December 2009'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


