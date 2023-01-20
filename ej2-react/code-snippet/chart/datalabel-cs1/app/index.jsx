{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, StripLine, Legend, Category, Tooltip, DataLabel, LineSeries } from '@syncfusion/ej2-react-charts';
function App() {
    const data = [
        { x: 10, y: 7000, color: 'red' },
        { x: 20, y: 1000, color: 'yellow' },
        { x: 30, y: 12000, color: 'orange' },
        { x: 40, y: 14000, color: 'skyblue' },
        { x: 50, y: 11000, color: 'blue' },
        { x: 60, y: 5000, color: 'green' },
        { x: 70, y: 7300, color: 'pink' },
        { x: 80, y: 9000, color: 'white' },
        { x: 90, y: 12000, color: 'magenta' },
        { x: 100, y: 14000, color: 'purple' },
        { x: 110, y: 11000, color: 'teal' },
        { x: 120, y: 5000, color: 'gray' },
    ];
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
{% endraw %}