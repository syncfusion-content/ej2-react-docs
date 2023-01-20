

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, IPointRenderEventArgs,
         Legend, DateTime, Tooltip, DataLabel, LineSeries}
from'@syncfusion/ej2-react-charts';
import { data } from 'datasource.ts';

class App extends React.Component<{}, {}> {

  public primaryxAxis: AxisModel = { valueType: 'DateTime' };
  public marker = { visible: true, height: 10, width: 10, isFilled: true };

  render() {
    return <ChartComponent id='charts' pointRender={this.pointRender}
      primaryXAxis={this.primaryxAxis}>
      <Inject services={[LineSeries, Legend, Tooltip, DataLabel, DateTime]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' width={2} name='Warmest'
          type='Line' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  }

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


