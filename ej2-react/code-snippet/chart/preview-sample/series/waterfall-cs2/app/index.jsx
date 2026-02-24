
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, WaterfallSeries } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
    const primaryxAxis = { crossesAt: 15 };
    const primaryyAxis = { crossesAt: 5 };
    const marker = { dataLabel: { visible: true, font: { color: '#ffffff' } } };
    const connector = { color: '#5F6A6A', width: 2 };
    const tooltip = { enable: true, shared: false };
    const legendSettings = { visible: false };
    return <ChartComponent id='charts' primaryXAxis={{ valueType: 'Category', majorGridLines: { width: 0 }, plotOffset: 20 }} primaryYAxis={{ minimum: 0, maximum: 5000, interval: 1000, majorGridLines: { width: 0 }, title: 'Expenditure' }} tooltip={tooltip} legendSettings={legendSettings} title='Company Revenue and Profit'>
      <Inject services={[WaterfallSeries, Category, Tooltip, Zoom, Crosshair, Legend, DataLabel]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' name='USA' type='Waterfall' intermediateSumIndexes={[4]} sumIndexes={[7]} marker={marker} connector={connector} columnWidth={0.9} summaryFillColor='#e56590' negativeFillColor='#f8b883'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
