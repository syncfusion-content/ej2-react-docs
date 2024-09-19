{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, ColumnSeries, Highlight, Selection } from '@syncfusion/ej2-react-charts';
import { selectionData } from './datasource';
function App() {
  const primaryxAxis = { valueType: 'Category' };
  const legendSettings = { visible: true, toggleVisibility: false, enableHighlight: true };
  return <ChartComponent id='charts' primaryXAxis={primaryxAxis} legendSettings={legendSettings} title='Olympic Medals' selectionMode='Cluster'>
    <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Selection, Category, Highlight]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={selectionData} xName='country' yName='gold' name='Gold' type='Column'>
      </SeriesDirective>
      <SeriesDirective dataSource={selectionData} xName='country' yName='silver' name='Silver' type='Column'>
      </SeriesDirective>
      <SeriesDirective dataSource={selectionData} xName='country' yName='bronze' name='Bronze' type='Column'>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



{% endraw %}