{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective,
   Inject, AccumulationDataLabel,AccumulationDataLabelSettingsModel,
  IAccTextRenderEventArgs, IAccPointRenderEventArgs
  } from'@syncfusion/ej2-react-charts';
import { accData } from 'datasource.ts';

function App() {

  const datalabel: AccumulationDataLabelSettingsModel = { visible: true, name: 'text', position: 'Outside' };

  return <AccumulationChartComponent id='charts' >
      <Inject services={[AccumulationDataLabel]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={accData} xName='x' yName='y' groupTo='11'
          dataLabel={datalabel}></AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}