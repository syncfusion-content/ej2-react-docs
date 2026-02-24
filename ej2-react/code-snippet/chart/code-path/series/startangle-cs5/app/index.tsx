{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective,IAccPointRenderEventArgs, AccumulationSeriesDirective, Inject, AccumulationDataLabel} from'@syncfusion/ej2-react-charts';
import { dataMapping } from 'datasource.ts';

function App() {
  
    return <AccumulationChartComponent id='charts'
    enableBorderOnMouseMove={false}>
      <Inject services={[AccumulationDataLabel]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={dataMapping} xName='x' yName='y'>
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}