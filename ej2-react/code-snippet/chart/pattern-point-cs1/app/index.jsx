import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, ColumnSeries } from '@syncfusion/ej2-react-charts';
function App() {
    const data = [
        { x: 'BGD', y: 106, text: 'Bangaladesh', color: 'url(#chess)' },
        { x: 'BTN', y: 103, text: 'Bhutn', color: 'url(#cross)' },
        { x: 'NPL', y: 198, text: 'Nepal', color: 'url(#circle)' },
        { x: 'THA', y: 189, text: 'Thiland', color: 'url(#rectangle)' },
        { x: 'MYS', y: 250, text: 'Malaysia', color: 'url(#line)' }
    ];
    const primaryxAxis = { valueType: 'Category' };
    const primaryyAxis = { minimum: 0, maximum: 300, interval: 50 };
    const cornerradius = { bottomLeft: 10, bottomRight: 10, topLeft: 10, topRight: 10 };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Tiger Population - 2016'>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' width={2} name='Tiger' pointColorMapping='color' type='Column' cornerRadius={cornerradius}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
