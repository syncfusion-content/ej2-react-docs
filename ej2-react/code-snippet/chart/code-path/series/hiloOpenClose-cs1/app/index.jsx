{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, Tooltip, Zoom, Crosshair, HiloOpenCloseSeries } from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';
import { chartData } from './datasource';
function App() {
    const primaryxAxis = { title: 'Date', valueType: 'Category' };
    const primaryyAxis = { title: 'Price in Dollar', minimum: 100, maximum: 200, interval: 20 };
    const style = { textAlign: "center" };
    const legendSettings = { visible: false };
    const border = { border: { width: 0 } };
    return <ChartComponent id='charts' style={style} primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} legendSettings={legendSettings} chartArea={border} width={Browser.isDevice ? '100%' : '80%'} title='Financial Analysis'>
      <Inject services={[HiloOpenCloseSeries, Tooltip, Category, Crosshair, Zoom]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={chartData} xName='x' yName='low' name='SHIRPUR-G' type='HiloOpenClose' low='low' high='high' open='open' close='close'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}