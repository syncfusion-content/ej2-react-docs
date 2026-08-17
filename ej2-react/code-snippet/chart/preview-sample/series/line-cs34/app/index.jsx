import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, BubbleSeries } from '@syncfusion/ej2-react-charts';
import { bubbleData } from './datasource';
function App() {
    return <ChartComponent id='charts'>
      <Inject services={[BubbleSeries]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={bubbleData} xName='x' yName='y' size='size' type='Bubble'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
const root = ReactDOM.createRoot(document.getElementById('charts'));
root.render(<App />);
