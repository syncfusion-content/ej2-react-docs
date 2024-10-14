{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, SplineSeries,  Selection}
from'@syncfusion/ej2-react-charts';
import { splineData } from './datasource';

function App() {

    const primaryxAxis: AxisModel= { title: 'Month',valueType: 'Category'}  ;
    const primaryyAxis: AxisModel= {  minimum: -5, maximum: 35, interval: 5,title: 'Temperature in Celsius',labelFormat: '{value}C'}  ;
    const marker = { visible: true };
    const emptyPoint: object = { mode: 'Zero' };

        return <ChartComponent id='charts'
                primaryXAxis={ primaryxAxis }
                primaryYAxis={ primaryyAxis }
                title='CO2 - Intensity Analysis' isTransposed={ true }>
                    <Inject services={[SplineSeries, Legend, Tooltip, DataLabel,  Category]}/>
                    <SeriesCollectionDirective>
                        <SeriesDirective dataSource={splineData} xName='x' yName='y' name='London' type='Spline' emptyPointSettings={emptyPoint} marker={marker}>
                        </SeriesDirective>
                    </SeriesCollectionDirective>
                </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
