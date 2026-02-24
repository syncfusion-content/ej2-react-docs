

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, SplineSeries } from '@syncfusion/ej2-react-charts';
import { splineData } from './datasource';
function App() {
    const primaryxAxis = { title: 'Month', valueType: 'Category' };
    const primaryyAxis = { minimum: -5, maximum: 35, interval: 5, title: 'Temperature in Celsius', labelFormat: '{value}C' };
    const marker={visible:true};
    const seriesRender = (args) => {
        args.fill = '#ff6347';
    };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='CO2 - Intensity Analysis' isTransposed={true} seriesRender={seriesRender}>
                    <Inject services={[SplineSeries, Legend, Tooltip, DataLabel, Category]}/>
                    <SeriesCollectionDirective>
                        <SeriesDirective dataSource={splineData} xName='x' yName='y' name='London' type='Spline' marker={marker}>
                        </SeriesDirective>
                    </SeriesCollectionDirective>
                </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

