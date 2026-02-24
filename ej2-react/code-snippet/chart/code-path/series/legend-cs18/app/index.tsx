{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, IAccTooltipRenderEventArgs,
 AccumulationSeriesDirective, AccumulationTooltip, Inject} from'@syncfusion/ej2-react-charts';
import { accData } from '../datasource.ts';

function App() {

    return <AccumulationChartComponent id='charts' tooltip={{
    enable: true, format: '${series.name} ${point.x} : ${point.y}',
    //fill for tooltip
    fill: '#7bb4eb',
    //border for tooltip
    border: {
      width: 2,
      color: 'grey'
    }
  }}  highlightColor='red'>
      <Inject services={[AccumulationTooltip]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={accData} xName='x' yName='y'>
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}