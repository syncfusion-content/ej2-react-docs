{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, DateTime, Tooltip, DataLabel, StepLineSeries } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
    const primaryxAxis = { valueType: 'DateTime' };
    const template = chartTemplate;
    const tooltip = {
        enable: true,
        template: template
    };
    function chartTemplate(args) {
        return (<div id="templateWrap">
      <table style={{ width: '100%', margin: '5px', border: '1px solid black', backgroundColor: '#00FFFF' }}>
        <tbody><tr><th colSpan={2}>Unemployment</th></tr>
          <tr><td>{args.x}</td><td>:</td><td>{args.y}</td></tr>
        </tbody>
      </table>
    </div>);
    }
    const marker = { visible: true, width: 10, height: 10 };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} tooltip={tooltip} title='Unemployment Rates 1975-2010'>
      <Inject services={[StepLineSeries, Legend, Tooltip, DataLabel, DateTime]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' name='China' width={2} type='StepLine' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
{% endraw %}