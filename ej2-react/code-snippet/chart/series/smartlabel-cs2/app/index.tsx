

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective,
 Inject, AccumulationDataLabel,AccumulationDataLabelSettingsModel}
from'@syncfusion/ej2-react-charts';
import { accData } from 'datasource.ts';

function App() {

  const datalabel: AccumulationDataLabelSettingsModel = { visible: true, position: 'Outside' };

    return <AccumulationChartComponent id='charts' enableSmartLabels='true'>
      <Inject services={[AccumulationDataLabel]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={accData} xName='x' yName='y'
          dataLabel={datalabel}></AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


