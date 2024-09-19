{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, FontModel, Legend, DateTime, Tooltip, DataLabel, StepLineSeries } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
       const primaryxAxis: AxisModel = {
              title: 'Years', lineStyle: { width: 0 }, labelFormat: 'y',
              intervalType: 'Years', valueType: 'DateTime', edgeLabelPlacement: 'Shift'
       };
       const primaryyAxis: AxisModel = {
              title: 'Percentage (%)', labelFormat: '{value}%',
              minimum: 0, maximum: 20, interval: 2
       };
       const titlestyle: FontModel = { position: 'Custom', x: 300, y: 60 };
       const marker = { visible: true, width: 10, height: 10 };

       return <ChartComponent id='charts'
              primaryXAxis={primaryxAxis}
              primaryYAxis={primaryyAxis}
              title='Unemployment Rates 1975-2010'
              titleStyle={titlestyle}>
              <Inject services={[StepLineSeries, Legend, Tooltip, DataLabel, DateTime]} />
              <SeriesCollectionDirective>
                     <SeriesDirective dataSource={data} xName='x' yName='y' name='China' width={2} type='StepLine' marker={marker}></SeriesDirective>
                     <SeriesDirective dataSource={data} xName='x' yName='y1' name='Australia' width={2}
                            type='StepLine' marker={marker}></SeriesDirective>
                     <SeriesDirective dataSource={data} xName='x' yName='y2' name='Japan' width={2} type='StepLine' marker={marker}></SeriesDirective>
              </SeriesCollectionDirective>
       </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}