{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, StackingBarSeries,  Selection}
from'@syncfusion/ej2-react-charts';
import { groupData } from './datasource';

function App() {

  const primaryxAxis: AxisModel = { title: 'Year', minimum: 2006, maximum: 2015, interval: 1 };
  const primaryyAxis: AxisModel = { title: 'Sales Percentage(%)' };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Sales by year'>
      <Inject services={[StackingBarSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={groupData} xName='x' yName='y' name='John' type='StackingBar'
          stackingGroup='JohnandAndrew'>
        </SeriesDirective>
        <SeriesDirective dataSource={groupData} xName='x' yName='y1' name='Andrew' type='StackingBar'
          stackingGroup='JohnandAndrew'>
        </SeriesDirective>
        <SeriesDirective dataSource={groupData} xName='x' yName='y2' name='Thomas' type='StackingBar'
          stackingGroup='ThomasandMichael'>
        </SeriesDirective>
        <SeriesDirective dataSource={groupData} xName='x' yName='y3' name='Michael' type='StackingBar'
          stackingGroup='ThomasandMichael'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
