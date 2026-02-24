{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationTooltip, Inject } from '@syncfusion/ej2-react-charts';
import { accData } from '../datasource.ts';
function App() {
    const template = chartTemplate;
    function chartTemplate(args) {
        return (<div style={{ border: '1px solid black', backgroundColor: 'red', padding: '2px', float: 'right', lineHeight: '20px', textAlign: 'center' }}>
              <img src='sun_annotation.png'/>
              <div style={{ color: 'blue', padding: '2px', fontSize: '14px', fontStyle: 'medium', fontFamily: 'Roboto', float: 'right', lineHeight: '20px', textAlign: 'center', paddingRight: '6px' }}>
                <span>{args.y}</span>
              </div>
            </div>);
    }
    return <AccumulationChartComponent id='charts' tooltip={{ enable: true, template: template }}>
      <Inject services={[AccumulationTooltip]}/>
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={accData} xName='x' yName='y'>
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
{% endraw %}