


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, ColumnSeries,  Selection }
from'@syncfusion/ej2-react-charts';
import { selectionData } from  'datasource.ts';

function App() {

  const selectedData: any[] = [{ series: 0, point: 1 }, { series: 2, point: 3 }];
  const primaryxAxis: AxisModel = { valueType: 'Category' };
  const animation = { enable: false };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      title='Olympic Medals' selectedDataIndexes={selectedData}
      isMultiSelect={true} selectionMode='Point'>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Selection, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={selectionData} xName='country' yName='gold' name='Gold' type='Column' selectionStyle='chartSelection1' animation={animation} ></SeriesDirective>
        <SeriesDirective dataSource={selectionData} xName='country' yName='silver' name='Silver' type='Column' selectionStyle='chartSelection2' animation={animation}></SeriesDirective>
        <SeriesDirective dataSource={selectionData} xName='country' yName='bronze' name='Bronze' type='Column' selectionStyle='chartSelection3' animation={animation}></SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



