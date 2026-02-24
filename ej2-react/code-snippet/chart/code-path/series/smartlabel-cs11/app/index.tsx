{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective,
Inject, AccumulationDataLabel,AccumulationDataLabelSettingsModel} from'@syncfusion/ej2-react-charts';
import { accData } from 'datasource.ts';

function App() {

  const template:any = chartTemplate;
  const datalabel: AccumulationDataLabelSettingsModel = { visible: true, template: template };
  function chartTemplate(args:any){
      return (<div id="templateWrap">
          <div>{args.point.percentage}%</div>
        </div>);
  }

    return <AccumulationChartComponent id='charts'>
      <Inject services={[AccumulationDataLabel]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={accData} xName='x' yName='y' dataLabel={datalabel}>
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
