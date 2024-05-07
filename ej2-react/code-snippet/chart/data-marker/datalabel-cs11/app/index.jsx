import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, DateTime, Tooltip, DataLabel, LineSeries } from '@syncfusion/ej2-react-charts';
import { data } from 'datasource.ts';
class App extends React.Component {
    primaryxAxis = { valueType: 'DateTime' };
    marker = { visible: true, height: 10, width: 10, isFilled: true };
    render() {
        return <ChartComponent id='charts' pointRender={this.pointRender} primaryXAxis={this.primaryxAxis}>
      <Inject services={[LineSeries, Legend, Tooltip, DataLabel, DateTime]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' width={2} name='Warmest' type='Line' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
    }
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
