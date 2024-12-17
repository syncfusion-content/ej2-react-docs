{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, AxisModel, LegendSettingsModel, Legend, Category, ColumnSeries } from'@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {

  const primaryxAxis: AxisModel = { 
    valueType: 'Category',
    title: 'Countries'
  };
  const primaryyAxis: AxisModel = { 
    minimum: 0, 
    maximum: 80,
    interval: 20, 
    title: 'Medals'
  };
  const legendSettings: LegendSettingsModel = { 
    visible: true,
    layout: "Auto",
    maximumColumns: 3,
    fixedWidth: true
  };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      legendSettings={legendSettings}
      title='Olympic Medals'>
      <Inject services={[ColumnSeries, Legend, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='country' yName='gold' name='Gold' type='Column'>
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='country' yName='silver' name='Silver' type='Column'>
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='country' yName='bronze' name='Bronze' type='Column'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



{% endraw %}