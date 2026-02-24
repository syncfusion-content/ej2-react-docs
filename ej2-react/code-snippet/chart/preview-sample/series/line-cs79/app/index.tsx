

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, LineSeries, IPointRenderEventArgs, Selection}
from'@syncfusion/ej2-react-charts';
import { EmitType } from '@syncfusion/ej2-base';
import { data } from './datasource';

function App() {
  const pointRender: EmitType<IPointRenderEventArgs> = (args: IPointRenderEventArgs): void => {
    if (args.point.index % 2 !== 0) {
      args.fill = '#ff6347';
  }
  else {
      args.fill = '#009cb8';
  }
  }
  const marker = {
    visible: true,
    width: 10,
    height: 10,
    border: { width: 2, color: '#F8AB1D' },
  };
  return <ChartComponent id='charts' pointRender={pointRender}>
      <Inject services={[LineSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' type='Line' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


