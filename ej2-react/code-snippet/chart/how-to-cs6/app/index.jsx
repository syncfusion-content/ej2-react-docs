import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, LineSeries } from '@syncfusion/ej2-react-charts';
function App() {
    const data = [
        { x: 'WW', y: 12, text: 'World Wide' },
        { x: 'EU', y: 5, text: 'Europe' },
        { x: 'APAC', y: 15, text: 'Pacific' },
        { x: 'LATAM', y: 6.4, text: 'Latin' },
        { x: 'MEA', y: 30, text: 'Africa' },
        { x: 'NA', y: 25.3, text: 'America' }
    ];
    const pointRender = (args) => {
        let shapes = ['Diamond', 'Circle', 'Rectangle', 'Line', 'Triangle', 'Rectangle'];
        args.shape = shapes[args.point.index];
    };
    const primaryxAxis = { valueType: 'Category' };
    const primaryyAxis = { minimum: 0, maximum: 60, interval: 15 };
    const marker = {
        visible: true, width: 10, height: 10,
        shape: 'Diamond'
    };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='FB Penetration of Internet Audience' pointRender={pointRender}>
      <Inject services={[LineSeries, Legend, Tooltip, DataLabel, Category]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' width={2} name='December 2007' type='Line' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
