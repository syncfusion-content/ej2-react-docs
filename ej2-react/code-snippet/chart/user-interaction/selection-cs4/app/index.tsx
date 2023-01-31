


import * as React from "react";
import * as ReactDOM from "react-dom";
import {  AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, ColumnSeries,  Selection}
from'@syncfusion/ej2-react-charts';
import { selectionData } from  'datasource.ts';

function App() {

  const primaryxAxis: AxisModel = { valueType: 'Category' };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      title='Olympic Medals' isMultiSelect={true} selectionMode='Point'>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Selection, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={selectionData} xName='country' yName='gold' name='Gold' type='Column'>
        </SeriesDirective>
        <SeriesDirective dataSource={selectionData} xName='country' yName='silver' name='Silver' type='Column'>
        </SeriesDirective>
        <SeriesDirective dataSource={selectionData} xName='country' yName='bronze' name='Bronze' type='Column'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



