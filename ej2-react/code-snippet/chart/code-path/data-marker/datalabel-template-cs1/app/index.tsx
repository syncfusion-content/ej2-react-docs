{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
  Legend, DateTime, Tooltip, DataLabel, LineSeries, MarkerSettingsModel
}
  from '@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {

  const primaryxAxis: AxisModel = { title: 'Months', valueType: 'DateTime', intervalType: 'Months' };
  const template: any = chartTemplate;
  const marker: MarkerSettingsModel = { dataLabel: { visible: true, position: 'Middle', template: template } };
  function chartTemplate(args: any) {
    return (<div id="templateWrap" style={{ border: '1px solid black', backgroundColor: 'red', padding: '3px 3px 3px 3px' }}>
      <div>{args.point.x.getFullYear()}</div>
      <div>{args.point.y}</div>
    </div>);
  };

  return <ChartComponent id='charts'
    primaryXAxis={primaryxAxis}>
    <Inject services={[LineSeries, Legend, Tooltip, DataLabel, DateTime]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={data} xName='x' yName='y' width={2} name='Warmest'
        type='Line' marker={marker}>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}