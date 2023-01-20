



import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
     Legend, Category, Tooltip, DataLabel, ColumnSeries,  Highlight}
from'@syncfusion/ej2-react-charts';
import { selectionData } from  'datasource.ts';

class App extends React.Component<{}, {}> {

  public primaryxAxis: AxisModel = { valueType: 'Category' };
  public legendSettings: LegendSettingsModel = { visible: true, toggleVisibility: false, enableHighlight: true };
  render() {
return <ChartComponent id='charts'
  primaryXAxis={this.primaryxAxis}
  title='Olympic Medals' selectionMode='Cluster'>
  <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Selection, Category, Highlight]} />
  <SeriesCollectionDirective>
    <SeriesDirective dataSource={selectionData} xName='country' yName='gold' name='Gold' type='Column'>
    </SeriesDirective>
    <SeriesDirective dataSource={selectionData} xName='country' yName='silver' name='Silver' type='Column'>
    </SeriesDirective>
    <SeriesDirective dataSource={selectionData} xName='country' yName='bronze' name='Bronze' type='Column'>
    </SeriesDirective>
  </SeriesCollectionDirective>
</ChartComponent>
  }
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



