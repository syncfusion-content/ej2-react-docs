

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, DateTime, Tooltip, DataLabel, StackingAreaSeries } from '@syncfusion/ej2-react-charts';
import { percentData } from './datasource';
function App() {
    const primaryxAxis = {
        title: 'Years', valueType: 'DateTime', intervalType: 'Years',
        edgeLabelPlacement: 'Shift', labelFormat: 'y'
    };
    const marker = { visible: true };
    const pointRender = (args) => {
        if (args.point.index % 2 !==0) {
            args.fill = '#ff6347';
        }
        else {
            args.fill = '#009cb8';
        }
  };
    const primaryyAxis = { title: 'Temperature (%)', labelFormat: '{value}%', rangePadding: 'None' };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Annual Temperature Comparison' pointRender={pointRender}>
      <Inject services={[StackingAreaSeries, Legend, Tooltip, DataLabel, DateTime]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={percentData} xName='x' yName='y' name='USA' type='StackingArea100' marker={marker}>
        </SeriesDirective>
        <SeriesDirective dataSource={percentData} xName='x' yName='y1' name='UK' type='StackingArea100' marker={marker}>
        </SeriesDirective>
        <SeriesDirective dataSource={percentData} xName='x' yName='y2' name='Canada Alternatives' type='StackingArea100' marker={marker}>
        </SeriesDirective>
        <SeriesDirective dataSource={percentData} xName='x' yName='y3' name='China' type='StackingArea100' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

