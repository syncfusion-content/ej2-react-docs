import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, LineSeries, ErrorBar } from '@syncfusion/ej2-react-charts';
function App() {
    const data = [
        { x: 2006, y: 7.8 }, { x: 2007, y: 7.2 },
        { x: 2008, y: 6.8 }, { x: 2009, y: 10.7 },
        { x: 2010, y: 10.8 }, { x: 2011, y: 9.8 }
    ];
    const primaryxAxis = { minimum: 2005, maximum: 2012, interval: 1, title: 'Year' };
    const primaryyAxis = { minimum: 3, maximum: 12, interval: 1, title: 'Percentage', labelFormat: '{value}%' };
    const marker;
    const errorbar = { visible: true };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Unemployment rate (%)'>
      <Inject services={[LineSeries, Legend, Category, ErrorBar]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' width={2} name='India' type='Line' marker={marker} errorBar={errorbar}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
