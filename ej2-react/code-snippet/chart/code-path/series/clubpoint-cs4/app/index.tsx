{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationDataLabel,
  IAccTextRenderEventArgs, IAccPointRenderEventArgs,AccumulationDataLabelSettingsModel
  } from'@syncfusion/ej2-react-charts';
import { accData } from 'datasource.ts';

function App() {

  const onTextRender: EmitType<IAccTextRenderEventArgs> = (args: IAccTextRenderEventArgs): void => {
    if (args.text.indexOf('Others') > -1) {
      args.color = 'red';
      args.border.width = 1;
    }
  };
  const onPointRender: EmitType<IAccPointRenderEventArgs> = (args: IAccPointRenderEventArgs): void => {
    if ((args.point.x as string).indexOf('Others') > -1) {
      args.fill = '#D3D3D3';
    }
  };
  const datalabel: AccumulationDataLabelSettingsModel = { visible: true, name: 'text', position: 'Outside' };

  return <AccumulationChartComponent id='charts' textRender={onTextRender} pointRender={onPointRender}>
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
