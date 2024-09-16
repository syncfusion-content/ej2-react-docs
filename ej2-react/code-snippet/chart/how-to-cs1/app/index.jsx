import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationDataLabel, AccumulationTooltip, PieSeries } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
    const datalabel = { visible: true, position: 'Inside', name: 'text' };
    const pointClick = (args) => {
        document.getElementById("lbl").innerText = "X : " + args.point.x + "\nY : " + args.point.y;
    };
    return (<div>
    <label id="lbl"></label>
     <AccumulationChartComponent id='charts' title='Mobile Browser Statistics' pointClick={pointClick}>
      <Inject services={[AccumulationTooltip, PieSeries, AccumulationDataLabel]}/>
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={data} xName='x' yName='y' radius='70%' dataLabel={datalabel}>
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent></div>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
