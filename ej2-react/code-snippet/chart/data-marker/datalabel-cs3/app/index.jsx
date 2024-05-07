import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, ColumnSeries } from '@syncfusion/ej2-react-charts';
import { mapData } from 'datasource.ts';
class App extends React.Component {
    primaryxAxis = { valueType: 'Category' };
    marker = { dataLabel: { visible: true, format: 'n2' } };
    render() {
        return <ChartComponent id='charts' primaryXAxis={this.primaryxAxis}>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={mapData} xName='x' yName='y' type='Column' marker={this.marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
    }
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
