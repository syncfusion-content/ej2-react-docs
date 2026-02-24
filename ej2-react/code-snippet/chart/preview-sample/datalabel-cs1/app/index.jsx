
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, StripLine, Legend, Category, Tooltip, DataLabel, LineSeries } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
    const template = chartTemplate;
    const marker = { visible: true, dataLabel: { visible: true, name: 'color', template: template } };
    function chartTemplate(args) {
        return (<div id="templateWrap" style={{ border: '1px solid black', backgroundColor: 'red', padding: '3px 3px 3px 3px' }}>
          <div>{args.point.x}</div>
          <div>{args.point.y}</div>
        </div>);
    }
    return <ChartComponent id='charts'>
      <Inject services={[LineSeries, Legend, Tooltip, DataLabel, Category, StripLine]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' type='Line' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
