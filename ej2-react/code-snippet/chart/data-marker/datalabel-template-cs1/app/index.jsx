{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, DateTime, Tooltip, DataLabel, LineSeries } from '@syncfusion/ej2-react-charts';
function App() {
  const primaryxAxis = { title: 'Months', valueType: 'DateTime', intervalType: 'Months' };
  const template = chartTemplate;
  const marker = { dataLabel: { visible: true, position: 'Middle', template: template } };
  function chartTemplate(args) {
    return (<div id="templateWrap" style={{ border: '1px solid black', backgroundColor: 'red', padding: '3px 3px 3px 3px' }}>
      <div>{args.point.x.getFullYear()}</div>
      <div>{args.point.y}</div>
    </div>);
  }
  ;
  const data = [
    { x: new Date(2016, 0, 1), y: -7.1 }, { x: new Date(2016, 1, 1), y: -3.7 },
    { x: new Date(2016, 2, 1), y: 0.8 }, { x: new Date(2016, 3, 1), y: 6.3 },
    { x: new Date(2016, 4, 1), y: 13.3 }, { x: new Date(2016, 5, 1), y: 18.0 },
    { x: new Date(2016, 6, 1), y: 19.8 }, { x: new Date(2016, 7, 1), y: 18.1 },
    { x: new Date(2016, 8, 1), y: 13.1 }, { x: new Date(2016, 9, 1), y: 4.1 },
    { x: new Date(2016, 10, 1), y: -3.8 }, { x: new Date(2016, 11, 1), y: -6.8 }
  ];
  return <ChartComponent id='charts' primaryXAxis={primaryxAxis}>
    <Inject services={[LineSeries, Legend, Tooltip, DataLabel, DateTime]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={data} xName='x' yName='y' width={2} name='Warmest' type='Line' marker={marker}>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
{% endraw %}