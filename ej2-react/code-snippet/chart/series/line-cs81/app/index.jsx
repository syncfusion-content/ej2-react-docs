{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, StackingBarSeries } from '@syncfusion/ej2-react-charts';
import { stackBarData } from './datasource';
function App() {
    const primaryxAxis = { valueType: 'Category', title: 'Months' };
    const primaryyAxis = {
        title: 'Percentage (%)', minimum: -20, maximum: 100,
        edgeLabelPlacement: 'Shift', labelFormat: '{value}%'
    };
    return <ChartComponent id='charts'
    primaryXAxis={primaryxAxis}
    primaryYAxis={primaryyAxis}
    title='Sales Comparison'
  stackLabels={{ visible: true }}>
    <Inject services={[StackingBarSeries, Legend, Tooltip, DataLabel, Category]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={stackBarData} xName='x' yName='y' name='Apple' type='StackingBar' marker={{ dataLabel: { visible: true } }}>
      </SeriesDirective>
      <SeriesDirective dataSource={stackBarData} xName='x' yName='y1' name='orange' type='StackingBar' marker={{ dataLabel: { visible: true } }}>
      </SeriesDirective>
      <SeriesDirective dataSource={stackBarData} xName='x' yName='y2' name='Wastage' type='StackingBar' marker={{ dataLabel: { visible: true } }}>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}