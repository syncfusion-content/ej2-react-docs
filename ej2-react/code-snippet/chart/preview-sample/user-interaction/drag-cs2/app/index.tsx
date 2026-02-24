

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip,Selection, DataLabel, ScatterSeries}
from'@syncfusion/ej2-react-charts';
import { dragData } from './datasource';
function App() {

  const marker = { width: 12, height: 12 };

  return <ChartComponent id='charts'
      selectionMode='Lasso'
      title='Height Vs Weight'>
      <Inject services={[ScatterSeries, Legend, Tooltip, Selection]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={dragData} xName='x' yName='y' type='Scatter'
          marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



