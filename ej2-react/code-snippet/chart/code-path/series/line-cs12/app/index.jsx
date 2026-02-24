{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, MultiColoredLineSeries, LineSeries } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {
    return <ChartComponent id='charts'>
      <Inject services={[LineSeries, Legend, Tooltip, DataLabel, Category, MultiColoredLineSeries]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' width={2} name='India' type='MultiColoredLine' pointColorMapping='color'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}