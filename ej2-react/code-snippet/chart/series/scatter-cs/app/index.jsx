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
    const marker1 = { width: 10, height: 10, shape: 'Triangle' };
    const marker = { width: 12, height: 12, shape: 'Rectangle'};
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Height Vs Weight'>
      <Inject services={[ScatterSeries, Legend, Tooltip, DataLabel, Category]}/>
      <SeriesCollectionDirective>
      <SeriesDirective dataSource={scatterData} xName='height' yName='male' type='Scatter' fill='red' opacity='0.7'
          marker={marker1}>
        </SeriesDirective>
        <SeriesDirective dataSource={scatterData} xName='height' yName='female' type='Scatter' fill='yellow' opacity='0.7'
          marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
