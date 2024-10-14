{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, HiloSeries, Category, Tooltip, Zoom, Crosshair } from '@syncfusion/ej2-react-charts';
import { chartData } from './datasource';

function App() {
    const primaryxAxis = { valueType: 'Category', title: 'Months' };
    const primaryyAxis = { labelFormat: '{value}mm', edgeLabelPlacement: 'Shift', title: 'Rainfall' };
    const style = { textAlign: "center" };
    const legendSettings = { visible: false };
    const pointRender = (args) => {
      if (args.point.index % 2 !== 0) {
        args.fill = '#ff6347';
    }
    else {
        args.fill = '#009cb8';
    }
    };
    return <ChartComponent id='charts' style={style} primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} legendSettings={legendSettings} title='Maximum and Minimum Rainfall' pointRender={pointRender}>
      <Inject services={[HiloSeries, Tooltip, Category, Crosshair, Zoom]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={chartData} xName='x' yName='low' name='India' type='Hilo' low='low' high='high'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}