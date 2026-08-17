{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, CandleSeries } from '@syncfusion/ej2-react-charts';
import { chartData } from './datasource';

function App() {
    const primaryxAxis = { title: 'Date', valueType: 'Category', majorGridLines: { width: 0 } };
    const primaryyAxis = { title: 'Price in Dollar', minimum: 100, maximum: 200, interval: 20 };
    const style = { textAlign: "center" };
    return <ChartComponent id='charts' style={style} primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Shirpur Gold Refinery Share Price'>
      <Inject services={[CandleSeries,  Category]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={chartData} xName='x' name='SHIRPUR-G' type='Candle' low='low' high='high' open='open' close='close' enableSolidCandles={true} bearFillColor='#e56590' bullFillColor='#f8b883'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
const root = ReactDOM.createRoot(document.getElementById('charts'));
root.render(<App />);

{% endraw %}