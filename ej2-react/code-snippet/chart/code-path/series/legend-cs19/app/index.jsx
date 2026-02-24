{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationTooltip, Inject, AccumulationLegend } from '@syncfusion/ej2-react-charts';
import { accData } from '../datasource.ts';
function App() {
    const tooltipRender = (args) => {
        if (args.point.index === 3) {
            args.text = args.point.x + '' + ':' + args.point.y + '' + ' ' + 'customtext';
            args.textStyle.color = '#f48042';
        }
    };
    return <AccumulationChartComponent id='charts' tooltip={{ enable: true }} tooltipRender={tooltipRender}>
      <Inject services={[AccumulationLegend, AccumulationTooltip]}/>
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