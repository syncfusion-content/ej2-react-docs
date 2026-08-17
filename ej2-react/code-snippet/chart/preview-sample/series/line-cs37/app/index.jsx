

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, BarSeries } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
    const primaryxAxis = { minimum: 2005, maximum: 2012, interval: 1, title: 'Year' };
    const primaryyAxis = {
        minimum: 3, maximum: 12, interval: 1, title: 'Percentage',
        labelFormat: '{value}%'
    };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Unemployment rate (%)'>
      <Inject services={[BarSeries]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' name='India' type='Bar'>
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y1' name='India' type='Bar' columnSpacing={0.5} columnWidth={0.75}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
const root = ReactDOM.createRoot(document.getElementById('charts'));
root.render(<App />);

