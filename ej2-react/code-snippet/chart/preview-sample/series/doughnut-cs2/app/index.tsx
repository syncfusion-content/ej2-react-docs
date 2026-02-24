

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective}from'@syncfusion/ej2-react-charts';
import { centerData } from '../datasource.ts';

function App() {

    return <AccumulationChartComponent id='charts' centerLabel={{text : 'Browsers Statistics'}}>
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={centerData} xName='x' yName='y' innerRadius='65%'>
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


