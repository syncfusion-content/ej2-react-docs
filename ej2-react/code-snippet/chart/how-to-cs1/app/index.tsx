

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective,
  IPointEventArgs, Inject, AccumulationDataLabel, AccumulationTooltip, PieSeries,
  AccumulationDataLabelSettingsModel,TooltipSettingsModel
} from '@syncfusion/ej2-react-charts';
import{ EmitType } from '@syncfusion/ej2-base';

function App() {

  const data: any[] = [
     { 'x': 'Chrome', y: 37, text: '37%' }, { 'x': 'UC Browser', y: 17, text: '17%' },
    { 'x': 'iPhone', y: 19, text: '19%' },{ 'x': 'Others', y: 4, text: '4%' },
     { 'x': 'Opera', y: 11, text: '11%' }, { 'x': 'Android', y: 12, text: '12%' }
  ];
  const datalabel: AccumulationDataLabelSettingsModel = { visible: true, position: 'Inside', name: 'text' };
  const pointClick: EmitType<IPointEventArgs> = (args: IPointEventArgs): void => {
      document.getElementById("lbl").innerText = "X : "+ args.point.x + "\nY : "+ args.point.y;
  };

    return(<div>
    <label id="lbl"></label>
     <AccumulationChartComponent id='charts'  title='Mobile Browser Statistics'
      pointClick={pointClick}>
      <Inject services={[AccumulationTooltip, PieSeries, AccumulationDataLabel]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={data} xName='x' yName='y' radius='70%' dataLabel={datalabel}>
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent></div>)

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


