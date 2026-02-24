

import * as React from "react";
import * as ReactDOM from "react-dom";
import {  AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, LineSeries}
from'@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {

  const pointRender: EmitType<IPointRenderEventArgs> = (args: IPointRenderEventArgs): void => {
    if (args.point.index === 6) {
      args.fill = 'red'
    }
  };
  const primaryxAxis: AxisModel = { valueType: 'Category' };
  const marker = { dataLabel: { visible: true, position: 'Middle' } };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      pointRender={pointRender}
      title='Alaska Weather Statistics - 2016'>
      <Inject services={[LineSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y'
          type='Line' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


