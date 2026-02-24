{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective } from '@syncfusion/ej2-react-charts';
import { centerData } from '../datasource.ts';
function App() {
    return <AccumulationChartComponent id='charts' centerLabel={{text : 'Mobile<br>Browsers<br>Statistics',
    hoverTextFormat: '${point.x} <br> Browser Share <br> ${point.y}%',
    textStyle:{ fontWeight: '900',
    size: '15px',
    color: 'grey',
    fontFamily: 'Roboto',
    fontStyle: 'Italic'}
   }}>
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={centerData} xName='x' yName='y' innerRadius='65%'>
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}