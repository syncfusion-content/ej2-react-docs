{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, DateTime, StackingColumnSeries } from '@syncfusion/ej2-react-charts';
import { columnperData } from './datasource';

function App() {

  const primaryxAxis = {
    valueType: 'DateTime',
    title: 'Years',
    interval: 1,
    labelFormat: 'y'
  };
  const primaryyAxis = {
    title: 'GDP (%) Per Annum',
    rangePadding: 'None',
    labelFormat: '{value}%'
  };
  const border = { width: 2, color: '#ff4251', dashArray: '5,5' };
  const border1 = { width: 2, color: '#66BDB7', dashArray: '5,5' };
  const border2 = { width: 2, color: '#794F1B', dashArray: '5,5' };
  const border3 = { width: 2, color: '#1a9a6f', dashArray: '5,5' };

  return <ChartComponent id='charts'
    primaryXAxis={primaryxAxis}
    primaryYAxis={primaryyAxis}
    title='Gross Domestic Product Growth'>
    <Inject services={[StackingColumnSeries, Legend, DateTime]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={columnperData} xName='x' yName='y' name='UK' type='StackingColumn100' border={border}>
      </SeriesDirective>
      <SeriesDirective dataSource={columnperData} xName='x' yName='y1' name='Germany' type='StackingColumn100' border={border1}>
      </SeriesDirective>
      <SeriesDirective dataSource={columnperData} xName='x' yName='y2' name='France' type='StackingColumn100' border={border2}>
      </SeriesDirective>
      <SeriesDirective dataSource={columnperData} xName='x' yName='y3' name='Italy' type='StackingColumn100' border={border3}>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
