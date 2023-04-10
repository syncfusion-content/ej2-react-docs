import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, ScatterSeries } from '@syncfusion/ej2-react-charts';
import { scatterData } from 'datasource.ts';
function App() {
    const primaryxAxis = {
        title: 'Height (cm)', minimum: 130, maximum: 180,
        edgeLabelPlacement: 'Shift', labelFormat: '{value}cm'
    };
    const primaryyAxis = {
        title: 'Weight (kg)', minimum: 30, maximum: 100,
        labelFormat: '{value}kg', rangePadding: 'None'
    };
    const marker = { width: 15, height: 15 };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Height Vs Weight'>
      <Inject services={[ScatterSeries, Legend, Tooltip, DataLabel, Category]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={scatterData} xName='height' yName='male' name='Male' type='Scatter' marker={marker} fill='red' opacity='0.7'>
        </SeriesDirective>
        <SeriesDirective dataSource={scatterData} xName='height' yName='female' name='Female' type='Scatter' marker={marker} fill='yellow' opacity='0.7'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
