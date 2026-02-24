

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, ScatterSeries } from '@syncfusion/ej2-react-charts';
import { scatterData } from './datasource';

function App() {
    const primaryxAxis = {
        title: 'Height (cm)', minimum: 130, maximum: 180,
        edgeLabelPlacement: 'Shift', labelFormat: '{value}cm'
    };
    const primaryyAxis = {
        title: 'Weight (kg)', minimum: 30, maximum: 100,
        labelFormat: '{value}kg', rangePadding: 'None'
    };
    const marker1 = { width: 10, height: 10 };
    const emptyPoint = { mode: 'Average', fill: 'red', border: {width:1.5, color: 'green'}};
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Height Vs Weight'>
      <Inject services={[ScatterSeries, Legend, Tooltip, DataLabel, Category]}/>
      <SeriesCollectionDirective>
      <SeriesDirective dataSource={scatterData} xName='height' yName='male' type='Scatter'
          marker={marker1} emptyPointSettings={emptyPoint}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

