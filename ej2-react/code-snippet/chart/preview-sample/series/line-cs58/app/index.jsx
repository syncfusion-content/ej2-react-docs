

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, BarSeries } from '@syncfusion/ej2-react-charts';
import { customData } from './datasource';
function App() {
    const primaryxAxis = { minimum: 2005, maximum: 2012, interval: 1, title: 'Year' };
    const primaryyAxis = {
        minimum: 3, maximum: 12, interval: 1, title: 'Percentage',
        labelFormat: '{value}%'
    };
    const emptyPoint = {
      mode: 'Average', fill: 'red', border: {width:1.5, color: 'black'}
    };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Unemployment rate (%)'>
      <Inject services={[BarSeries]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={customData} xName='x' yName='y' type='Bar' emptyPointSettings={emptyPoint}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
const root = ReactDOM.createRoot(document.getElementById('charts'));
root.render(<App />);

